import PasswordReset from "@modules/account/components/password-reset"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Sign in to your eNOOL account.",
}

export default function Login() {
  return <PasswordReset />
}
