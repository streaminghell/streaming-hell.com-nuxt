<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component<Navigation>({})
export default class Navigation extends Vue {}
</script>

<template>
  <div class="container">
    <div class="title">
      <a href="/">
        <img class="logo" src="~assets/images/logo.svg" />
      </a>
      <div class="title-text">Streaming Hell</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--n0);
  color: var(--n500);
  padding: 0 20px;
  box-shadow: 0 1px 12px rgba(9, 30, 66, 0.16), 0 1px 0 rgba(9, 30, 66, 0.04);
  z-index: 101;
  box-sizing: border-box;
}

.title {
  margin-top: -4px;
  display: flex;
  align-items: center;
  color: #172b4d;
  font-size: 18px;
  font-weight: 800;
}

.title-text {
  margin-top: 2px;
  margin-left: 3px;
}

.logo {
  height: auto;
  max-height: 47px;
  max-width: 100%;
}
</style>
