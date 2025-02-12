'use client'

import { Form } from '@/components/ui/form'
import { useCreateArchive } from '@/entities/archives/hooks'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { useCreateArchiveFormContext } from '../../hooks/use-create-archive-form'
import { ContentLength } from './content-length'
import { CompanyNameField } from './fields/company-name-field'
import { ContentField } from './fields/content-field'
import { TitleField } from './fields/title-field'
import { FormAction } from './form-action'
import { Heading } from './heading'

interface CreateArchiveFormProps extends HTMLAttributes<HTMLDivElement> {}

export const CreateArchiveForm = ({
  className,
  ...props
}: CreateArchiveFormProps) => {
  const { form } = useCreateArchiveFormContext()
  const { mutate, isPending } = useCreateArchive()

  const handleSubmit = form.handleSubmit((data) => {
    if (isPending) return
    mutate(data)
  })

  return (
    <div className={cn('h-full', className)} {...props}>
      <Form {...form}>
        <form className="h-full" onSubmit={handleSubmit}>
          <Heading />
          <div className="mt-[18px] size-full rounded-md bg-white p-[28px]">
            <div className="flex size-full flex-col items-start gap-2">
              <CompanyNameField />
              <TitleField className="w-full" />
              <ContentField className="w-full" />
              <ContentLength />
              <FormAction />
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
