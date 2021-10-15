import * as S from './styles'

export type CheckboxProps = {
  label?: string
  id?: string
  labelColor?: 'black' | 'white'
}

const Checkbox = ({ label, id, labelColor }: CheckboxProps) => (
  <S.Wrapper>
    <S.Input type="checkbox" id={id} />
    {!!label && (
      <S.Label htmlFor={id} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
