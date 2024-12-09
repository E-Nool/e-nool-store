//@ts-nocheck
"use client"

import Overview from "@modules/account/components/overview"
import { useCustomerOrders, useMeCustomer } from "medusa-react"

const OverviewTemplate = () => {
  const { orders } = useCustomerOrders({
    limit : 4
  })
  const { customer } = useMeCustomer()

  return <Overview orders={orders} customer={customer} />
}

export default OverviewTemplate
