import Register from "@modules/account/components/register"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register",
  description: "Register to eNOOL.",
}

export default function Login() {
  return <Register />
}
