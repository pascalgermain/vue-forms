<template>
  <v-ons-input
    float
    type="text"
    v-model="value"
    :disabled="schema.disabled"
    :maxlength="schema.max"
    :placeholder="schema.placeholder"
    :readonly="schema.readonly"
  />
</template>

<script>
import {abstractField} from 'vue-form-generator'

export default {
  mixins: [abstractField],
  methods: {
    formatValueToModel (value) {
      return value
    }
  }
}
</script>
