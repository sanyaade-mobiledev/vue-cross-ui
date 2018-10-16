# Grid 栅格
24 栅格系统。
          
## 概述
布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：
- 通过\`row\`在水平方向建立一组\`column\`（简写col）
- 你的内容应当放置于\`col\`内，并且，只有\`col\`可以作为\`row\`的直接元素
- 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用\`.col-8\`来创建
- 如果一个\`row\`中的\`col\`总和超过 24，那么多余的\`col\`会作为一个整体另起一行排列
## Flex 布局
我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。
Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。