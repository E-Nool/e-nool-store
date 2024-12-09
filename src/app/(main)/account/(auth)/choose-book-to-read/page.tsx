import ChooseBookToRead from "@modules/account/components/register/choose-book-to-read"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your eNOOL account.",
}

export default function Login() {
  return <ChooseBookToRead />
}
