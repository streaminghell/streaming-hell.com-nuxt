<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export const platformDictionary = {
  SPOTIFY: {
    name: 'Spotify',
    image: 'spotify',
  },
  ITUNES: {
    name: 'iTunes',
    image: 'itunes',
  },
  APPLE_MUSIC: {
    name: 'Apple Music',
    image: 'apple-music',
  },
  YOUTUBE: {
    name: 'YouTube',
    image: 'youtube',
  },
  YOUTUBE_MUSIC: {
    name: 'YouTube Music',
    image: 'youtube-music',
  },
  GOOGLE: { name: 'Google Play Music', image: 'google-music' },
  GOOGLE_STORE: { name: 'Google Play Music Store', image: 'google-play' },
  PANDORA: { name: 'Pandora', image: 'pandora' },
  DEEZER: { name: 'Deezer', image: 'deezer' },
  TIDAL: { name: 'Tidal', image: 'tidal' },
  AMAZON_STORE: { name: 'Amazon Music Store', image: 'amazon' },
  AMAZON_MUSIC: { name: 'Amazon Music', image: 'amazon-music' },
  SOUNDCLOUD: { name: 'SoundCloud', image: 'soundcloud' },
  NAPSTER: { name: 'Napster', image: 'napster' },
  YANDEX: { name: 'Яндекс.Музыка', image: 'yandex' },
  SPINRILLA: { name: 'Spinrilla', image: 'spinrilla' },
  VK: { name: 'VK', image: 'vk' },
  BOOM: { name: 'BOOM', image: null },
}

@Component<EntityLink>({})
export default class EntityLink extends Vue {
  @Prop({ type: String, required: true })
  readonly url!: string

  @Prop({ type: String, required: true })
  readonly title!: string

  get platformName() {
    // @ts-ignore
    return platformDictionary[this.title].name
  }

  get providerLogo() {
    // @ts-ignore
    const providerImageName = platformDictionary[this.title].image

    if (providerImageName) {
      return require(`../assets/images/providers-logo/${providerImageName}.svg?raw`)
    }
    return null
  }
}
</script>

<template>
  <a class="block" :href="url" target="_blank">
    <div class="container">
      <div v-html="providerLogo" />
      <div class="title">{{ platformName }}</div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.block {
  display: block;
  width: 25%;
  margin: 10px 0;
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-weight: 600;
  color: black;
  font-size: 10px;
  margin-top: 8px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
