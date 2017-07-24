<template>
  <v-ons-page id="app">
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse :width="menu.width" :animation="menu.animation" :open.sync="menu.open">
        <page-menu />
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <page-home @toggleMenu="toggleMenu" />
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import PageMenu from './pages/PageMenu'
import PageHome from './pages/PageHome'

export default {
  components: {
    PageMenu,
    PageHome
  },
  data () {
    return {
      menu: {
        width: '300px',
        animation: this.$ons.platform.isAndroid() ? 'overlay' : 'reveal',
        open: false
      }
    }
  },
  methods: {
    toggleMenu () {
      this.menu.open = !this.menu.open
    }
  }
}
</script>

<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #bbb;
}
</style>
