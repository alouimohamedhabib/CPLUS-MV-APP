import { decrypt, deleteSession } from "@/lib/Session";
import { NextRequest, NextResponse } from 'next/server';
// delete session and redirect to auth page
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const sessionDeleted = url.searchParams.get('deleteSession');

  const session = req.cookies.get('passCode');
  const sessionNameVal = (await decrypt(session?.value))?.name;

  if ((!session || sessionNameVal !== process.env.NEXT_PUBLIC_PASSCODE) && sessionDeleted === 'true') {
    await deleteSession()
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return NextResponse.redirect(new URL('/', req.url));
}

