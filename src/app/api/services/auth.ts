import { LoginFormData } from "@/@types";

export const authenticate = async (loginPayload: LoginFormData) => {
  try {
    const res = await fetch(`${process.env.API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginPayload),
    })
    if (res.status === 201) {
      const authInfo = await res.json()
      const { access_token, user } = authInfo.body

      return { user, jwt: access_token, status: res.status }
    }

    return null

  } catch (error) {
    return null
  }
}