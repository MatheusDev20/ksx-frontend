import { BasicRequest } from "@/@types/http"

export const POST = async (request: BasicRequest) => {
  const {headers, path, body} = request 

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const data = await response.json()

    if(response.status !== 200) {
      return new Response(JSON.stringify({status: response.status, data}))
    }
  }

  catch(err: any) {
    throw new Error(err)
  }
}