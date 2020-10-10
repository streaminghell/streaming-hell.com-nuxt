<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component<Song>({})
export default class Song extends Vue {
  @Prop({ type: String, required: true })
  readonly thumbnailUrl!: string

  @Prop({ type: String, required: true })
  readonly title!: string

  @Prop({ type: String, required: true })
  readonly artistName!: string
}
</script>

<template>
  <div>
    <div class="album-artwork-container">
      <img :src="thumbnailUrl" class="album-artwork" alt="" />
    </div>
    <div class="song-info">
      <div class="title">{{ title }}</div>
      <div class="artist-name">{{ artistName }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.album-artwork-container {
  position: relative;
  padding: 0 0 100%;
}

.album-artwork {
  margin: 0 auto;
  min-height: 100%;
  border-radius: 6px 6px 0 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.song-info {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px;
}

.title {
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 4px;
}

.artist-name {
  font-weight: 500;
  font-size: 13px;
  color: black;
}
</style>
