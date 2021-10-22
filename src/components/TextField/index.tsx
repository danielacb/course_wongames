import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  id?: string
  initialValue?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  id,
  initialValue,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)

    !!onInput && onInput(e.currentTarget.value)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          id={id}
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
