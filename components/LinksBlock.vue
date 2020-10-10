<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component<LinksBlock>({})
export default class LinksBlock extends Vue {}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 8px 16px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
