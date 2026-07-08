import { type ProjectEntry } from '@/types/career'
import { type AssetEntry } from '@/types/layout'

// A project's main image: the first story's asset, falling back to the first asset.
const getProjectAsset = (project: ProjectEntry): AssetEntry | undefined => {
  return project.media?.stories?.[0]?.asset ?? project.media?.assets?.[0]
}

export { getProjectAsset }
