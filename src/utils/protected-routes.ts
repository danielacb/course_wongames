import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

export default async function protectedRoutes(
  context: GetServerSidePropsContext
) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: `/signin?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return session
}
