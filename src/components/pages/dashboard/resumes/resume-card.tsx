import type { ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

type ResumeCardButtonProps = {
  title: string
  description: string
  icon?: ReactNode
}

export const ResumeCardButton = ({
  title,
  description,
  icon,
}: ResumeCardButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'w-full h-[300px] bg-muted/50 border border-muted-foreground/20',
        'flex items-center justify-center relative outline-none overflow-hidden',
        'hover:brightness-105 dark:hover:brightness-125 transition-all'
      )}
    >
      {icon}

      <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/80 to-transparent">
        <p className="text-sm font-semibold font-title">{title}</p>
        <span className="block text-xs text-muted-foreground">
          {description}
        </span>
      </div>
    </button>
  )
}

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/1" className="block w-full">
      <ResumeCardButton
        title="Meu currículo"
        description="Última atualização há 22 minutos"
      />
    </Link>
  )
}
