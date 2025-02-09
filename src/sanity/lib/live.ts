// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { defineLive } from "next-sanity";
import { client } from './client'

const sanityTokenPermissions = {
  canRead: process.env.SANITY_TOKEN_PERMISSION_READ_DB,
}

if (!sanityTokenPermissions.canRead) {
  throw new Error('The environment variable SANITY_TOKEN_PERMISSION_READ_DB is missing')
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX'
  }),
  serverToken: sanityTokenPermissions.canRead,
  browserToken: sanityTokenPermissions.canRead,
});
