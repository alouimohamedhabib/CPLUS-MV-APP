import { NextRequest, NextResponse } from 'next/server';
import { decrypt, deleteSession } from './lib/Session';

/**
 * Middleware function that checks the session cookie and redirects to the auth page if the session is invalid.
 *
 * This middleware function is executed for all requests that do not match the specified exclusion patterns (auth, static files, etc.).
 * It checks the 'passCode' cookie to verify the session. If the session is invalid (missing or with an incorrect value), the user is redirected to the '/auth' page.
 * If the session is valid, the middleware allows the request to proceed.
 *
 * @param req - The NextRequest object representing the incoming request.
 * @returns A NextResponse object that either redirects to the auth page or allows the request to proceed.
 */
export async function middleware(req: NextRequest) {
  const session = req.cookies.get('passCode');
  const sessionNameVal = (await decrypt(session?.value))?.name
  if (!session || sessionNameVal !== process.env.NEXT_PUBLIC_PASSCODE) {
    const redirectUrl = new URL('/api', req.url);
    redirectUrl.searchParams.set('deleteSession', 'true');
    return NextResponse.redirect(redirectUrl);
  }
  // no session refresh , maybe add it later
  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - auth (auth routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    {
      source:
        '/((?!auth|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },

    {
      source:
        '/((?!auth|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },

    {
      source:
        '/((?!auth|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
    },
  ]
}
