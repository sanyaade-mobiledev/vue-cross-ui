> 加载中

:::demo 进行全局 loading，异步自行移除。

```html
<template>
  <v-button @click="success">Display a loading indicator</v-button>
</template>
<script>
  export default {
    methods: {
      success () {
        const hide = this.$message.loading('Action in progress..', 0);
        setTimeout(hide, 2500);
      },
    }
  }
</script>
```
:::
