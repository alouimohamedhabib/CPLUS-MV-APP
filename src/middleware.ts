import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // ... can be usefull for authentication
  return NextResponse.next();
}

export const config = {
  matcher: ['/',],
};
