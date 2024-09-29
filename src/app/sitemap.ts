import { client } from '@/sanity/lib/client'
import type { MetadataRoute } from 'next'

const staticPages = [
  {
    url: 'https://avyuktlabs.in',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: 'https://avyuktlabs.in/about',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: 'https://avyuktlabs.in/services',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  },
  {
    url: 'https://avyuktlabs.in/portfolio',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/blogs',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/static-website',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/dynamic-website',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/ecommerce-website',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/enterprise-website',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/mobile-app-development',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: 'https://avyuktlabs.in/web-hosting',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await client.fetch(`
    *[_type == "post"][] {
          slug,
          publishedAt
    }`)

  const blogPages = blogs.map((blog: any) => ({
    url: `https://avyuktlabs.in/blogs/${blog.slug.current}`,
    lastModified: blog.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.8
  }))

  return [
    ...staticPages as never,
    ...blogPages
  ]
}