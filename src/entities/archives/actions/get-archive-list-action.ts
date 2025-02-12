'use server'
import { ArchiveListItemDTO } from '@/entities/types'
import { API_ENDPOINT } from '@/lib/backend-api/api-end-point'
import { backendApi } from '@/lib/backend-api/client'

export const getArchiveListAction = async () => {
  return backendApi<ArchiveListItemDTO[]>({
    endpoint: API_ENDPOINT.archive.getArchives(),
  })
}
