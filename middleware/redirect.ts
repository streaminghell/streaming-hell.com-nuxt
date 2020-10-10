import { Middleware } from '@nuxt/types'
import gql from 'graphql-tag'
import consola from 'consola'

const redirectMiddleware: Middleware = async ({ app, route, redirect }) => {
  const entityUrl = route.fullPath.substring(1)

  const isMusicLink = (): boolean => {
    if (entityUrl.length > 0) {
      return true
    }
    return false
  }

  if (isMusicLink()) {
    try {
      const data = await app.apolloProvider.defaultClient.query({
        query: gql`
          query Links($url: String!) {
            linksByUrl(url: $url) {
              links {
                entity {
                  type
                }
              }
            }
          }
        `,
        variables: {
          url: entityUrl,
        },
      })
      /**
       * FIXME: make entity type avalible on top of query
       */
      const entityType = data.data.linksByUrl.links[0].entity.type
      if (entityType === 'SONG') {
        redirect(`/song/${entityUrl}`)
      }
      if (entityType === 'ALBUM') {
        redirect(`/album/${entityUrl}`)
      }
    } catch (e) {
      consola.error(e)
    }
  }
}

export default redirectMiddleware
