'use client'

import { FormProvider, useForm } from 'react-hook-form'

import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from '@/components/ui/resizable'

import { InfosSidebar } from './infos-sidebar'
import { ResumeContent } from './resume-content'
import { StructureSidebar } from './structure-sidebar'

export const ResumePage = () => {
  const defaultValues: ResumeData = {
    content: {
      image: {
        url: '',
        visible: true,
      },
      infos: {
        fullName: '',
        headline: '',
        email: '',
        website: '',
        phone: '',
        location: '',
      },
    },
  }

  const methods = useForm<ResumeData>({
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full">
          {/* Tamanhos em porcentagem da tela/resizable-panel-group */}
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSidebar />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel>
            <ResumeContent />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  )
}
