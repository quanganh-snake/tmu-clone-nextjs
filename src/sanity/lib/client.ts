import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { sanityFetch } from '@/sanity/lib/live'
import { Product } from '../../../sanity.types'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const getAllProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]`
  const products = await sanityFetch({
    query,
  })
  return products.data as Product[]
}

