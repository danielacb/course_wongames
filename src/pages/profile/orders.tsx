import OrdersList, { OrdersListProps } from 'components/OrdersList'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'

import itemsMocks from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: itemsMocks,
      session
    }
  }
}
