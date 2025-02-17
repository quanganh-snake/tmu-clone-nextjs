import slugify from "slugify"

const slugifyConfig = {
  replacement: '-',
  remove: undefined,
  lower: true,
  strict: true,
  trim: true,
}

export const generateProductSlug = (title: string, id: string | number): string => {
  return `${slugify(title, slugifyConfig)}-i.${id}`
}

export const getProductIdWithSlug = (slug: string): string => {
  const id = slug.split("-i.")[1]
  return id
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}