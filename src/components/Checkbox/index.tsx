import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  id?: string
  labelColor?: 'black' | 'white'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  id,
  labelColor,
  isChecked = false,
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    setChecked(!checked)
    onCheck && onCheck(!checked)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={id} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
