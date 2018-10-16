'use strict'
const path = require('path')
const os = require('os')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const markdownRender = require('markdown-it')();


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    context: path.resolve(__dirname, '../'),
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    less: 'vue-style-loader!css-loader!less-loader'
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        },
        /*  {
             test: /\.vue$/,
             loader: 'vue-loader',
             options: vueLoaderConfig
         },
          {
             test: /\.js$/,
             loader: 'babel-loader',
             include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
         },*/

        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader'],
                fallback: 'style-loader'
            })
        },
        {
            test: /\.less$/,
            include: [resolve('src')],
            use: ExtractTextPlugin.extract({
                use: ['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
                fallback: 'style-loader'
            }),
        },
        {
            test: /\.md$/,
            loader: 'vue-markdown-loader',
            options: {
                preventExtract: true,
                preprocess: (MarkdownIt, source) => {
                    MarkdownIt.renderer.rules.table_open = function () {
                        return '<table class="api-table">'
                    }
                    MarkdownIt.renderer.rules.blockquote_open = function () {
                        return '<blockquote class="api-blockquote">'
                    }
                    // ```code`` 给这种样式加个class code_inline
                    const code_inline = MarkdownIt.renderer.rules.code_inline
                    MarkdownIt.renderer.rules.code_inline = function (...args) {
                        args[0][args[1]].attrJoin('class', 'code_inline')
                        return code_inline(...args)
                    }
                    // 对于代码块去除v-pre,添加高亮样式
                    //MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
                    return source
                },
                /* use: [
                        [require('markdown-it-anchor'), {
                            level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
                            slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
                            permalink: true, // 开启标题锚点功能
                            permalinkBefore: true // 在标题前创建锚点
                        }],
                        // 'markdown-it-container'的作用是自定义代码块

                        [require('markdown-it-container'), 'demo', {
                            // 当我们写::: demo :::这样的语法时才会进入自定义渲染方法
                            validate: function(params) {
                                return params.trim().match(/^demo\s*(.*)$/);
                            },
                            // 自定义渲染方法,这里为核心代码
                            render: function(tokens, idx) {
                                var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                                // nesting === 1表示标签开始
                                if (tokens[idx].nesting === 1) {
                                    // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                                    var description = (m && m.length > 1) ? m[1] : '';
                                    // 获得内容
                                    var content = tokens[idx + 1].content;
                                    // 解析过滤解码生成html字符串
                                    //var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                                    var html = striptags.fetch(content, 'template');
                                    // 获取script中的内容
                                    var script = striptags.fetch(content, 'script');
                                    // 获取style中的内容
                                    var style = striptags.fetch(content, 'style');
                                    // 组合成prop参数,准备传入组件
                                    var jsfiddle = { html: html, script: script, style: style };
                                    // 是否有描述需要渲染
                                    var descriptionHTML = description ?
                                        md.render(description) :
                                        '';
                                    // 将jsfiddle对象转换为字符串,并将特殊字符转为转义序列
                                    jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                                    // 起始标签,写入demo-block模板开头,并传入参数
                                    return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                                    <div class="source" slot="source">${html}</div>
                                    ${descriptionHTML}
                                    <div class="highlight" slot="highlight">`;
                                }
                                // 否则闭合标签
                                return '</div></demo-block>\n';
                            }
                        }],
                        [require('markdown-it-container'), 'tip'],
                        [require('markdown-it-container'), 'warning']
                    ] */
                use: [
                    [require('markdown-it-container'), 'demo', {

                        validate: function (params) {
                            return params.trim().match(/^demo\s+(.*)$/);
                        },

                        render: function (tokens, idx) {
                            if (tokens[idx].nesting === 1) {
                                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : '';
                                let descriptionHTML = description ? markdownRender.render(description, { html: true }) : '';
                                // 2.获取代码块内的html和js代码
                                let content = tokens[idx + 1].content;
                                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                                return `<demo-block>
                                                    <div class="source" slot="source">${content}</div>
                                                    ${descriptionHTML}
                                                    <div class="highlight" slot="highlight">`;
                            } else {
                                return '</div></demo-block>\n';
                            }
                        }
                    }]
                ]

            }
        },
        {
            test: /\.js$/,
            loader: 'happypack/loader?id=happybabel',
            exclude: /node_modules/
        },
        {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'happypack/loader?id=happybabel'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('media/[name].[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new HappyPack({
            id: 'happybabel',
            loaders: ['babel-loader'],
            threadPool: happyThreadPool,
            verbose: true
        })
    ]
}