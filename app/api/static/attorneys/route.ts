import { NextRequest } from "next/server"

export function GET (req: NextRequest) {
  console.log('code is: ', req.nextUrl.searchParams.get('code'))
  return new Response('Hello world')
}