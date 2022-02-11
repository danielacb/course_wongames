import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  trigger: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ trigger, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Trigger onClick={() => setIsOpen(!isOpen)}>{trigger}</S.Trigger>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
