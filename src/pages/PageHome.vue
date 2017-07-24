<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="$emit('toggleMenu')">
          <v-ons-icon icon="ion-navicon, material:md-menu" />
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ title }}</div>
    </v-ons-toolbar>

    <vue-form :schema="formData.schema" :model="formData.model" />
  </v-ons-page>
</template>

<script>
import formData from '@/data/form'
import VueForm from '@/components/VueForm'

export default {
  components: {
    VueForm
  },
  data () {
    return {
      title: 'Vue Forms',
      formData
    }
  }
}
</script>
