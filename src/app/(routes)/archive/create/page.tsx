import { CreateArchiveForm } from './components/create-archive-form'
import { FormStatus } from './components/form-status'
import { ArchiveFormProvider } from './hooks/use-create-archive-form'

const Page = () => {
  return (
    <ArchiveFormProvider>
      <main className="flex items-start gap-6">
        <CreateArchiveForm className="min-h-[70vh] w-[486px]" />
        <FormStatus className="h-[70vh] w-[690px]" />
      </main>
    </ArchiveFormProvider>
  )
}

export default Page
