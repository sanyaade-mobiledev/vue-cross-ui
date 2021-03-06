> 可控的筛选和排序

:::demo 使用受控属性对筛选和排序状态进行控制。1. columns 中定义了 filteredValue 和 sortOrder 属性即视为受控模式。 2. 只支持同时对一列进行排序，请保证只有一列的 sortOrder 属性是生效的。 3. 务必指定 `column.key`。

```html
<template>
  <div>
    <div class="table-operations">
      <v-button @click="setAgeSort">Sort age</v-button>
      <v-button @click="clearFilters">Clear filters</v-button>
      <v-button @click="clearAll">Clear filters and sorters</v-button>
    </div>
    <v-table :columns="columns" :dataSource="data" @change="handleChange"></v-table>
  </div>
</template>
<script>
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];

export default {
  data() {
    return {
      data,
      filteredInfo: null,
      sortedInfo: null,
    }
  },
  computed: {
    columns() {
      let { sortedInfo, filteredInfo } = this;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      }];
      return columns;
    }
  },
  methods: {
    handleChange (pagination, filters, sorter) {
      console.log('Various parameters', pagination, filters, sorter);
      this.filteredInfo = filters;
      this.sortedInfo = sorter;
    },
    clearFilters () {
      this.filteredInfo = null;
    },
    clearAll () {
      this.filteredInfo = null;
      this.sortedInfo = null;
    },
    setAgeSort () {
      this.sortedInfo = {
        order: 'descend',
        columnKey: 'age',
      }
    }
  }
}
</script>
<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
```
:::
