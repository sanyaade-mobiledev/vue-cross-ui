> 受控的checkbox

:::demo 联动checkbox

```html
<template>
  <div>
    <p :style="{ marginBottom: '20px' }">
      <v-checkbox
        :checked="checked"
        :disabled="disabled"
        @change="onChange"
      >
        {{label}}
      </v-checkbox>
    </p>
    <p>
      <v-button
        type="primary"
        size="small"
        @click="toggleChecked"
      >
        {{!checked ? 'Check' : 'Uncheck'}}
      </v-button>
      <v-button
        :style="{ marginLeft: '10px' }"
        type="primary"
        size="small"
        @click="toggleDisable"
      >
        {{!disabled ? 'Disable' : 'Enable'}}
      </v-button>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      disabled: false,
    }
  },
  computed: {
    label () {
      const { checked, disabled } = this
      return `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`
    },
  },
  methods: {
    toggleChecked () {
      this.checked = !this.checked
    },
    toggleDisable () {
      this.disabled = !this.disabled
    },
    onChange (e) {
      this.checked = e.target.checked
    },
  },
}
</script>
```
:::
