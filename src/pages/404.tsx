import { Container } from 'components/Container'
import EmptyState from 'components/EmptyState'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <EmptyState
          title="Page not found"
          description="Oops... this page does not exist or is no longer available. Get back to the store and enjoy our offers"
          hasLink
        />
      </Container>
    </Base>
  )
}
