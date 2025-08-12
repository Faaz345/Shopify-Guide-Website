import type { GetServerSideProps } from 'next'
import { jwtVerify } from 'jose'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = new URL(ctx.req.url || '', `http://${ctx.req.headers.host}`)
  const token = url.searchParams.get('token') || ''

  const secret = process.env.GUIDE_JWT_SECRET
  if (!secret || !token) {
    return {
      redirect: { destination: '/unauthorized', permanent: false },
    }
  }

  try {
    const encoder = new TextEncoder()
    const payload = await jwtVerify(token, encoder.encode(secret), { algorithms: ['HS256'] })
    
    // Verify the token has required fields
    if (!payload.payload.isPaid || !payload.payload.email) {
      throw new Error('Invalid token payload')
    }

    // Set cookie and redirect to home
    const isProduction = process.env.NODE_ENV === 'production'
    const cookie = [
      `shopifyGuideAccess=${encodeURIComponent(token)}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      isProduction ? 'Secure' : '',
      `Max-Age=${60 * 60 * 24 * 30}`, // 30 days
    ].filter(Boolean).join('; ')

    ctx.res.setHeader('Set-Cookie', cookie)
    return {
      redirect: { destination: '/', permanent: false },
    }
  } catch {
    return {
      redirect: { destination: '/unauthorized', permanent: false },
    }
  }
}

export default function SetPage() {
  return null
}
