import { NextRequest, NextResponse } from 'next/server'
// Browser => Api Server side do Next => Nest JS => Nest seta o cookie dessa requisição => eu seto o cookie do Browser.
export async function POST(request: NextRequest) {
  const loginData = await request.json()
  console.log(process.env.API_URL)
  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
    const {
      body: { user, accessToken },
    } = await res.json()

    if (res.status !== 200) {
      return NextResponse.json({ status: res.status, user: null })
    }
    const response = {
      status: 200,
      data: user,
    }

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Set-Cookie': `accessToken=${accessToken}; Max-Age=3600; Path=/;`,
      },
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 500, data: 'Internal Server Error' })
  }
}
