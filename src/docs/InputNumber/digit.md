> 小数

:::demo 和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

```html
<template>
  <v-input-number :min="0" :max="10" :step="0.1" @change="onChange"></v-input-number>
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  }
</script>
```
:::




