import { NextRequest, NextResponse } from "next/server"

// Browser => Api Server side do Next => Nest JS => Nest seta o cookie dessa requisição => eu seto o cookie do Browser.
export async function GET(request: NextRequest) {
  const token = request.cookies.get('access_token')
  const value = token?.value
  const res = await fetch('http://localhost:3001/api/v1/employee/details/72c75169-7f45-43a8-a2be-4c0e6073d438', {
    method: 'GET',
    headers: { 'api_token': value ?? '' },
  })

  const employeeInfo = await res.json()
  console.log(employeeInfo)

}