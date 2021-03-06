> 从数据直接生成

:::demo 使用 `treeData` 把 JSON 数据直接生成树结构。

```html
<template>
  <v-tree-select
    style="width: 300px"
    :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
    :treeData="treeData"
    placeholder='Please select'
    treeDefaultExpandAll
    labelInValue
    v-model="value"
  >
    <span style="color: #08c" slot="label" slot-scope="{key, value}" v-if="key='0-0-1'">
      <v-icon type="home"></v-icon>Child Node1 {{value}}
    </span>
  </v-tree-select>
</template>

<script>
const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    value: '0-0-1',
    key: '0-0-1',
    scopedSlots: { // custom label
      label: 'label',
    },
  }, {
    label: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
}]
export default {
  data () {
    return {
      value: undefined,
      treeData,
    }
  },
  watch: {
    value (value) {
      console.log(value)
    },
  },
}
</script>
```
:::