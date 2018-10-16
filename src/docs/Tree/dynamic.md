> 异步数据加载

:::demo 点击展开节点，动态加载数据。

```html
<template>
  <v-tree
    :loadData="onLoadData"
    :treeNodes="treeData"
  ></v-tree>
</template>

<script>
export default {
  data () {
    return {
      treeData: [
        { title: 'Expand to load', key: '0' },
        { title: 'Expand to load', key: '1' },
        { title: 'Tree Node', key: '2', isLeaf: true },
      ],
    }
  },
  methods: {
    onLoadData (treeNode) {
      return new Promise((resolve) => {
        if (treeNode.dataRef.children) {
          resolve()
          return
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: 'Child Node', key: `${treeNode.eventKey}-0` },
            { title: 'Child Node', key: `${treeNode.eventKey}-1` },
          ]
          this.treeData = [...this.treeData]
          resolve()
        }, 1000)
      })
    },
  },
}
</script>
```
:::