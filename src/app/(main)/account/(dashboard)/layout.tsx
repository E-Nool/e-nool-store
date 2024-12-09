"use client"
import AccountLayout from "@modules/account/templates/account-layout"
import DefaultLayout from "@modules/layout/templates"
import { useMeCustomer } from "medusa-react"
export default function AccountPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { customer } = useMeCustomer()
  return ( 
  <>
    {customer ? (<DefaultLayout>{children}</DefaultLayout>) :
        (<AccountLayout>{children}</AccountLayout>)}
  </>
  )
}
