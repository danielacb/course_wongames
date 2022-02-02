import { Container } from 'components/Container'
import ProfileMenu from 'components/ProfileMenu'
import Heading from 'components/Heading'
import Base from 'templates/Base'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Profile
      </Heading>

      <S.Main>
        <ProfileMenu />
        <S.Content>{children}</S.Content>
      </S.Main>
    </Container>
  </Base>
)

export default Profile
