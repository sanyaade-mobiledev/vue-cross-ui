> 附加内容

:::demo 在 TimePicker 选择框底部显示自定义的内容。

```html
<template>
  <div>
    <v-time-picker @openChange="handleOpenChange" :open="open">
      <v-button slot="addon" size="small" type="primary" @click="handleClose">Ok</v-button>
    </v-time-picker>
    <v-time-picker :open.sync="open2">
      <v-button slot="addon" size="small" type="primary" @click="handleClose">Ok</v-button>
    </v-time-picker>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      open: false,
      open2: false,
    }
  },
  methods: {
    handleOpenChange(open){
      console.log('open', open);
      this.open = open
    },
    handleClose(){
      this.open = false
      this.open2 = false
    }
  },
}
</script>
```
:::