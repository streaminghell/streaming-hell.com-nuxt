<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component<IndexPage>({
  middleware: 'redirect',
})
export default class IndexPage extends Vue {}
</script>

<template>
  <div class="container">
    <div class="hero">
      <h1 class="hero-text">Share and find music between streaming services</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 60px);
  margin-bottom: 60px;
  width: 100%;
}

.hero {
  display: flex;
  align-items: center;
  max-width: 600px;
  height: 130px;
  max-height: 100%;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 25px;
}

.hero-text {
  color: #172b4d;
  font-size: 40px;
  font-weight: 400;
  line-height: 60px;

  @media (max-width: 428px) {
    font-size: 30px;
    line-height: 50px;
  }
}
</style>
