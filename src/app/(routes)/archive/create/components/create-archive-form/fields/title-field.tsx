import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import { useCreateArchiveFormContext } from '../../../hooks/use-create-archive-form'
interface TitleFieldProps extends HTMLAttributes<HTMLDivElement> {}

export const TitleField = ({ className, ...props }: TitleFieldProps) => {
  const { form } = useCreateArchiveFormContext()
  return (
    <div className={cn(className)} {...props}>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input placeholder="자소서 제목을 입력해주세요" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
