import { Popover, Transition } from "@headlessui/react"
import { useCartDropdown } from "@lib/context/cart-dropdown-context"
import { useStore } from "@lib/context/store-context"
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import { getProductImage } from "@lib/util/prices"
import Button from "@modules/common/components/button"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import Trash from "@modules/common/icons/trash"
import CloseBtn from "@modules/epub/components/sideMenu/CloseBtn"
import Thumbnail from "@modules/products/components/thumbnail"
import { formatAmount, useCart } from "medusa-react"
import Link from "next/link"
import { Fragment, useEffect, useState } from "react"
import { useAccount } from "@lib/context/account-context"

const CartDropdown = () => {
  const { cart, totalItems } = useCart()
  const items = useEnrichedLineItems()
  const { deleteItem } = useStore()
  const { state, open, close } = useCartDropdown()
  const { customer } = useAccount()
    /**
   * Change Epub location
   * @param loc epubCFI or href
   */
  const onClose = () => {
    close()
  }  
  
  return (
    <div className="h-full z-50" >
      <Popover className="relative h-full">
        <Popover.Button className="h-full" onClick={open}>
        <div className="flex justify-center items-center pl-4 pr-4">
            <div className="relative  pb-2">
              <div className="t-0 absolute left-4">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-[#015464] p-[6px] text-[8px] text-white mt-5">{totalItems}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              </div>
            </div>
        </Popover.Button>
        <Transition
          show={state}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="h-full fixed right-0 min-h-[100vh] top-[0px] bg-white border-x border-b border-gray-200 w-full md:w-[400px] text-gray-900"
          >
            <div className="p-4 inline-flex items-center justify-center">
              <h3 className="text-large-semi">Your Cart ({totalItems})</h3>
              <div className=" absolute right-0">
                <CloseBtn onClick={onClose} />
              </div>
            </div>
            {cart && items?.length ? (
              <>
                <div className="overflow-y-auto max-h-[70%] px-4 grid grid-cols-1 gap-y-8">
                  {items
                    .sort((a, b) => {
                      return a.created_at > b.created_at ? -1 : 1
                    })
                    .map((item) => (
                      <div
                        className="grid grid-cols-[80px_1fr] gap-x-4"
                        key={item.id}
                      >
                        <div className="w-[75px]">
                          <Thumbnail thumbnail={getProductImage(item?.thumbnail)} size="full" />
                        </div>
                        <div className="flex flex-col justify-between flex-1">
                          <div className="flex flex-col flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-base-regular text-color-primary overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[180px]">
                                  <Link
                                    href={`/products/${item.variant.product.handle}`}
                                    legacyBehavior
                                  >
                                    {item.title}
                                  </Link>
                                </h3>
                                <div className=" font-graphik text-[14px]">
                                <LineItemOptions variant={item.variant} /></div>
                                <span className="text-base-regular  font-graphik text-[14px]">Quantity: {item.quantity}</span>
                              </div>
                              <div className="flex justify-end ">
                                <LineItemPrice
                                  region={cart.region}
                                  item={item}
                                  style="tight"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex items-end justify-between text-small-regular flex-1">
                            <div>
                              <button
                                className="flex items-center gap-x-1  text-[14px] text-gray-500"
                                onClick={() => deleteItem(item.id)}
                              >
                                <Trash size={14} />
                                <span>Remove</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="p-4 flex flex-col gap-y-4 text-small-regular absolute bottom-0 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">
                      Subtotal{" "}
                      <span className="font-normal">(excl. taxes)</span>
                    </span>
                    <span className="text-large-semi">
                      {formatAmount({
                        amount: cart.subtotal || 0,
                        region: cart.region,
                        includeTaxes: false,
                      })}
                    </span>
                  </div>
                  <div>
                  {customer 
                      ? <Link href="/checkout" passHref>
                          <Button className="bg-[#015464] w-full">Checkout</Button>
                        </Link>
                      : <Link href="/account/login" passHref>
                          <Button className="bg-[#015464] w-full">Login to continue</Button>
                        </Link>
                  }
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                  <div className="bg-gray-900 text-small-regular flex items-center justify-center h-6 rounded-full text-white">
                  </div>
                  <span>Your shopping cart is empty.</span>
                  <div>
                    <Link href="/browse">
                      <>
                        <span className="sr-only">Go to all products page</span>
                        <Button className="bg-primary" onClick={close}>Explore products</Button>
                      </>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default CartDropdown
