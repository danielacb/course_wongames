import { GetServerSidePropsContext } from 'next'

import { getSession } from 'next-auth/client'

export default async function protectedRoutes(
  context: GetServerSidePropsContext
) {
  const session = await getSession(context)

  if (!session) {
    context.res.setHeader(
      'Location',
      `/signin?callbackUrl=${context.resolvedUrl}`
    )

    context.res.statusCode = 302
  }

  return session
}
