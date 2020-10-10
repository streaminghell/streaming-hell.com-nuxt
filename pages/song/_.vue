<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import gql from 'graphql-tag'
import { sortBy } from 'lodash'
import LinksBlock from '~/components/LinksBlock.vue'
import EntityLink from '~/components/EntityLink.vue'

export const BUY_PLATFORMS = ['ITUNES', 'GOOGLE_STORE', 'AMAZON_STORE']

@Component<SongPage>({
  components: { EntityLink, LinksBlock },
  async asyncData({ app }) {
    const data = await app.apolloProvider.defaultClient.query({
      query: gql`
        query Links($url: String!) {
          linksByUrl(url: $url) {
            links {
              url
              platform
              entity {
                id
                title
                artistName
                thumbnailUrl
                type
              }
            }
          }
        }
      `,
      variables: {
        url:
          'https://music.apple.com/us/album/the-bad-guy/1081132117?i=1081132861',
      },
    })
    const linksSorted = sortBy(data.data.linksByUrl.links, [
      (link: any) => link.platform,
    ])

    const listenLinks = linksSorted.filter((link: any) => {
      return !BUY_PLATFORMS.includes(link.platform)
    })

    const buyLinks = linksSorted.filter((link: any) => {
      return BUY_PLATFORMS.includes(link.platform)
    })

    return {
      ...data.data.linksByUrl,
      listenLinks,
      buyLinks,
    }
  },
})
export default class SongPage extends Vue {}
</script>

<template>
  <div class="song-page">
    <card>
      <song
        :title="links[0].entity.title"
        :artist-name="links[0].entity.artistName"
        :thumbnail-url="links[0].entity.thumbnailUrl"
      ></song>
    </card>
    <card title="Listen">
      <links-block>
        <entity-link
          v-for="link in listenLinks"
          :key="`${link.platform}_${link.entity.id}`"
          :title="link.platform"
          :url="link.url"
        ></entity-link>
      </links-block>
    </card>
    <card title="Buy">
      <links-block>
        <entity-link
          v-for="link in buyLinks"
          :key="`${link.platform}_${link.entity.id}`"
          :title="link.platform"
          :url="link.url"
        ></entity-link>
      </links-block>
    </card>
  </div>
</template>

<style lang="scss" scoped>
.song-page {
  text-align: center;
  max-width: 320px;

  @media (min-width: 360px) {
    max-width: 360px;
  }

  width: 100%;
  height: 100%;
  flex: 1 0 0%;
  margin: auto;
  padding: 16px;
}
</style>
