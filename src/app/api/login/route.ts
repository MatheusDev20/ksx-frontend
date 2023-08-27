import { NextRequest, NextResponse } from "next/server"

// Browser => Api Server side do Next => Nest JS => Nest seta o cookie dessa requisição => eu seto o cookie do Browser.
export async function POST(request: NextRequest) {
  const loginData = await request.json()

  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    if (res.status === 200) {
      const next = NextResponse.next()
      const authInfo = await res.json()
      const { access_token, user } = authInfo.body

      next.cookies.set('access_token', access_token)
      return NextResponse.json({ data: user }, { status: res.status })
    }

    return NextResponse.json(await res.json(), { status: res.status })

  } catch (error) {
    return NextResponse.json({ data: 'Internal Server Error' }, { status: 500 })
  }
}