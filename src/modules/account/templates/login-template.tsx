"use client"

import Login from "../components/login"

const LoginTemplate = () => {
  return <Login />
}

export default LoginTemplate

// import { useAccount } from "@lib/context/account-context"
// import Register from "@modules/account/components/register"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"
// import Login from "../components/login"

// const LoginTemplate = () => {
//   const { loginView, customer, retrievingCustomer } = useAccount()
//   const [currentView, _] = loginView

//   const router = useRouter()

//   // useEffect(() => {
//   //   if (!retrievingCustomer && customer) {
//   //     router.push("/account")
//   //   }
//   // }, [customer, retrievingCustomer, router])

//   console.log("currentView", currentView)

//   return currentView === "sign-in" ? <Login /> : <Register />
// }

// export default LoginTemplate
