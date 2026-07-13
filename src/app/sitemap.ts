import { type MetadataRoute } from 'next'
import { projectEntries } from '@/constants/projects'
import { appdata } from '@/constants/system'
import { getFeaturedProjectIds } from '@/utils/career'

const routes = ['/', '/works', '/experience', '/about']

const sitemap = (): MetadataRoute.Sitemap => {
  const staticEntries = routes.map((route) => ({
    url: `${appdata.url}${route}`
  }))
  const workEntries = getFeaturedProjectIds(projectEntries).map((workId) => ({
    url: `${appdata.url}/works/${workId}`
  }))
  return [...staticEntries, ...workEntries]
}

export default sitemap
