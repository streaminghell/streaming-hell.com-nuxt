<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component<Card>({})
export default class Card extends Vue {
  @Prop({ type: String, required: false })
  readonly title?: string
}
</script>

<template>
  <div class="card">
    <div v-if="title" class="card__header">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 6px 16px;
  background: white;
  border-radius: 6px;

  &__header {
    font-weight: 700;
    color: black;
    font-size: 12px;
    text-align: left;
    padding: 16px 16px 0;
  }
}
</style>
