import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  name?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  name,
  initialValue,
  icon,
  iconPosition,
  disabled,
  error,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)

    !!onInput && onInput(e.currentTarget.value)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      <S.Error>{error ? error : ' '}</S.Error>
    </S.Wrapper>
  )
}

export default TextField
