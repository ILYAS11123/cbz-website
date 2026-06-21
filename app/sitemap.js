export default async function sitemap() {
  const baseUrl = 'https://cbz-website.vercel.app'

  // كاع الروابط لي عندك فـ السيت ديال النادي
  const routes = [
    '',
    '/about',
    '/jerseys',
    '/facilities',
    '/opponents',
    '/tryouts',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}