import PasswordUpdated from "@modules/account/components/password-reset/password-updated"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Password Updated",
  description: "Sign in to your eNOOL account.",
}

export default function Login() {
  return <PasswordUpdated />
}
