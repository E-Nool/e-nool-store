import GetOtp from "@modules/account/components/register/get-otp"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your eNOOL account.",
}

export default function Login() {
  return <GetOtp />
}
