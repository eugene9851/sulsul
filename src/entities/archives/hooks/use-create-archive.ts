import { CreateArchiveFormData } from '@/config/validations/create-archive'
import { createArchiveAction } from '@/entities/archives/actions'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ArchiveListQueryOptions } from './use-archives'

export const useCreateArchive = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation({
    mutationFn: async (params: CreateArchiveFormData) => {
      return createArchiveAction(params)
    },
    onSuccess: (id) => {
      queryClient.invalidateQueries({
        queryKey: ArchiveListQueryOptions.queryKey,
      })
      router.push(`/archive/${id}`)
    },
    onError: () => {
      toast.error('요청 중 오류가 발생했습니다. 다시 시도해주세요.')
    },
  })
}
