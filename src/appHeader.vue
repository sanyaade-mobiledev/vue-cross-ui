<template>
    <header id='header'>
        <v-row>
            <v-col :span="4">
                <router-link to="/" id='logo'>
                    <img alt='logo' height='32' src='./assets/logo.png' />
                    <span> Vue Cross Ui</span>
                </router-link>
            </v-col>
            <v-col :span="18">
                <div id='header-search-box' style='display: block'>
                    <v-select ref="headerMenu" placeholder='搜索组件...' style='width: 200px' :showArrow="false" showSearch @select="onSelect">
                        <v-select-option :key="index" :value="child.name" v-for="(child,index) in routersed">
                            {{child.title}}
                        </v-select-option>
                    </v-select>
                </div>
            </v-col>
            <v-col :span="2">
                <v-button-group size="small" class="margin-top-20">
                    <v-button icon="home" @click="goHome"></v-button>
                    <v-button icon="github-fill" @click="goGithub"></v-button>
                </v-button-group>
            </v-col>
        </v-row>
    </header>
</template>
<script>
import { menuRouter } from './router/router';
export default {
    data() {
        return {
            github: ''
        }
    },
    computed: {
        routersed() {
            let _reouter = []
            menuRouter.forEach((item) => {
                item.children.forEach((child) => {
                    _reouter.push(child)
                })
            })
            return _reouter;
        }
    },
    methods: {
        onSelect(val) {
            this.$router.push({
                name: val
            });
        },
        goGithub() {
            window.location.href = this.github
        },
        goHome() {
            window.location.href = 'http://www.getvcu.com'
        }
    }
}
</script>
<style lang="less">
@import "./style/appHeader.less";
</style>