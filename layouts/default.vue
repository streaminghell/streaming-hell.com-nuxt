<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

@Component<DefaultLayout>({
  components: {
    Navigation,
    Footer,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<template>
  <div>
    <main>
      <Navigation />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  padding: 0;
  margin: 0;
  height: 100%;
  min-height: 100%;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  min-height: calc(100vh - 70px);
}
</style>
