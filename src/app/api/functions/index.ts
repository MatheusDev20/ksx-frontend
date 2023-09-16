export const getMe = async (token: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/employee/me`, {
      method: 'GET',
      headers: { api_token: token },
    })

    return await res.json()
  }

  catch (err: any) {
    throw new Error(err)
  }
}

export const getEmployeeList = async (token: string) => {
  try {
    console.log('token', token)
    const res = await fetch(`http://localhost:3001/api/v1/employee?name=Tech`, {
      method: 'GET',
      headers: { api_token: token },
    })

    return await res.json()
  }


  catch (err: any) {
    console.error(err)
    throw new Error(err)
  }
}

export const getHomePageData = async (token: string): Promise<{ loggedUser: any, employeeList: any }> => {
  try {
    const meResponse = await getMe(token)
    const loggedUser = meResponse.body

    const employeeListResponse = await getEmployeeList(token)
    const employeeList = employeeListResponse.body

    return { loggedUser, employeeList }
  }

  catch (err: any) {
    console.error(err)
    throw new Error(err)
  }
}