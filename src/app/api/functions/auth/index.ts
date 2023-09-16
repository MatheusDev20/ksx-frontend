import { LoginFormData } from "@/@types";
import { POST } from "../../handlers";

export const login = async  (data: LoginFormData): Promise<any> => {

  try {
    const response = await POST({path: '/auth/login', headers: {'Content-Type': 'application/json'}, body: data})
  }

  catch(err: any) {
    console.error(err)
  }
}