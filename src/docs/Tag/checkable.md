> 可选择

:::demo 可通过 `CheckableTag` 实现类似 Checkbox 的效果，点击切换选中效果。该组件为完全受控组件，不支持非受控用法。

```html
<template>
  <div>
    <v-checkable-tag v-model="checked1" @change="handleChange">Tag1</v-checkable-tag>
    <v-checkable-tag v-model="checked2" @change="handleChange">Tag2</v-checkable-tag>
    <v-checkable-tag v-model="checked3" @change="handleChange">Tag3</v-checkable-tag>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
    }
  },
  methods: {
    handleChange (checked) {
      console.log(checked)
    },
  },
}
</script>
```
:::
