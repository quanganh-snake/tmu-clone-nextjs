import { defineField, defineType } from "sanity";

export const promotionCampaign = defineType({
  name: 'promotionCampaign',
  title: 'Promotion Campaign',
  type: 'document', // 1 document type tương ứng với 1 collection/object trong database
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'reference',
      to: [{ type: 'promotionCode' }],
    }),
  ]
})