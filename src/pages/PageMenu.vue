<template>
  <v-ons-page>
    <v-ons-toolbar modifier="transparent" />
    <div class="header">
      <img src="../assets/onsenui-logo.png">
    </div>

    <v-ons-list-title>Onsen UI Essential Links</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-item modifier="chevron" v-for="item in essentialLinks" :key="item.link" @click="goTo(item.link)">
        <div class="left">
          <v-ons-icon fixed-width :icon="item.icon" />
        </div>
        <div class="center">{{ item.label }}</div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  data () {
    return {
      essentialLinks: [
        {
          label: 'Docs',
          link: 'https://onsen.io/v2/docs/guide/vue/',
          icon: 'fa-book'
        },
        {
          label: 'Gitter Chat',
          link: 'https://gitter.im/OnsenUI/OnsenUI',
          icon: 'fa-commenting'
        },
        {
          label: 'Forum',
          link: 'https://community.onsen.io',
          icon: 'ion-chatboxes'
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/Onsen_UI',
          icon: 'fa-twitter'
        },
        {
          label: 'Playground',
          link: 'https://tutorial.onsen.io/',
          icon: 'fa-graduation-cap'
        }
      ]
    }
  },
  methods: {
    goTo (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 20px;
}

img {
  max-width: 150px;
}

ons-list-item {
  cursor: pointer;
}
</style>
