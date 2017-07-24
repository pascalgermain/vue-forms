<template>
  <vue-form-generator v-bind="{schema, model, options}" />
</template>

<script>
import 'vue-form-generator/dist/vfg-core.css'

import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator/dist/vfg-core.js'

import FieldAwesome from './FieldAwesome'
Vue.component('FieldAwesome', FieldAwesome)

export default {
  components: {
    VueFormGenerator: VueFormGenerator.component,
    FieldAwesome
  },
  props: {
    schema: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      options: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  }
}
</script>

<style scoped>
.vue-form-generator {
  margin: 30px 25px 0;
}
</style>
