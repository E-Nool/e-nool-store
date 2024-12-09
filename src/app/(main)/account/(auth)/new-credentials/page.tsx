import NewCredentials from "@modules/account/components/password-reset/new-credentials"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Make Selection",
  description: "Sign in to your eNOOL account.",
}

export default function Login() {
  return <NewCredentials />
}
