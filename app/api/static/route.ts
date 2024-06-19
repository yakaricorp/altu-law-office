export function GET (req) {
  console.log('code is: ', req.nextUrl.searchParams.get('code'))
  return new Response('Hello world')
}