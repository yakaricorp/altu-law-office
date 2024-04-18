export async function GET(request: Request) {
  console.log('api called')
  const res = new Response(JSON.stringify({
    message: 'hi'
  }), {
    status: 200,
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  return res
}