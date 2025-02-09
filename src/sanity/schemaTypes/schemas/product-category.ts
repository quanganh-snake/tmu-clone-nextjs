import { defineField, defineType } from "sanity";

export const productCategory = defineType({
  name: 'productCategory',
  title: 'Product Category',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
  ]
})