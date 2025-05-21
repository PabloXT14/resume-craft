import type { ComponentProps } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Input } from '.'
import { FieldWrapper } from '../field-wrapper'

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string
  name: string
  containerClassName?: string
}

export const InputField = ({
  label,
  name,
  required,
  containerClassName,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      rules={{ required: required && 'Campo obrigatório' }}
      name={name}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Input {...props} {...field} />
          {fieldState.error && (
            <span className="text-sm text-red-500">
              {fieldState.error.message}
            </span>
          )}
        </FieldWrapper>
      )}
    />
  )
}
