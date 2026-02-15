import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Le titre de l\'article',
      required: true,
    },
    date: {
      type: 'date',
      description: 'La date de publication',
      required: true,
    },
    author: {
      type: 'string',
      description: 'L\'auteur de l\'article',
      required: true,
    },
    image: {
      type: 'string',
      description: 'L\'image de couverture',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Les tags de l\'article',
      required: true,
    },
    category: {
      type: 'string',
      description: 'La catégorie principale',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Description courte de l\'article',
      required: true,
    },
    keywords: {
      type: 'string',
      description: 'Mots-clés SEO',
      required: true,
    },
    relatedTools: {
      type: 'list',
      of: { type: 'string' },
      description: 'Outils Veldra reliés à cet article',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    readingTime: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
    readingMinutes: {
      type: 'number',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content/blog',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
