import { defineField, defineType } from "sanity";

export const promotionCode = defineType({
  name: 'promotionCode',
  title: 'Promotion Code',
  type: 'document', // 1 document type tương ứng với 1 collection/object trong database
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
    }),
    defineField({
      name: 'discountPercentage',
      title: 'Discount Percentage (%)',
      type: 'number',
    }),
    defineField({
      name: 'exprirationDate',
      title: 'Expiration Date',
      type: 'date',
    }),
  ]
})