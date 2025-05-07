'use client'

import { type BaseDialogProps, Dialog } from '@/components/ui/dialog'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input/field'

const newResumeFormSchema = z.object({
  title: z
    .string({ required_error: 'Título obrigatório' })
    .min(3, 'Mínimo 3 caracteres'),
})

type NewResumeFormData = z.infer<typeof newResumeFormSchema>

export const NewResumeDialog = (props: BaseDialogProps) => {
  const methods = useForm<NewResumeFormData>({
    resolver: zodResolver(newResumeFormSchema),
  })

  const { handleSubmit } = methods

  function handleSubmitNewResume(data: NewResumeFormData) {
    console.log(data)
  }

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar escolha um título para seu currículo."
      content={
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(handleSubmitNewResume)}
            className="flex flex-col gap-4"
          >
            <InputField label="Título" name="title" required />

            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar
            </Button>
          </form>
        </FormProvider>
      }
    />
  )
}
