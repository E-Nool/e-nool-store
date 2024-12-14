'use-client'
import { useCheckout } from "@lib/context/checkout-context"
import Button from "@modules/common/components/button"
import Checkbox from "@modules/common/components/checkbox"
import Spinner from "@modules/common/icons/spinner"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"
import {useState} from 'react';

const Addresses = () => {
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()

  return (
    <div className="bg-[#015464] rounded-2xl text-white">
      <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-[#7CC9B5] w-8 h-8 rounded-full text-white flex justify-center items-center text-sm font-graphikBold">
          1
        </div>
        <h2 className="font-graphikBold">Shipping address</h2>
      </div>
      {isEdit ? (
        <div className="px-8 pb-8 font-black checkout_address">
          <ShippingAddress 
            isTermsChecked={isTermsChecked}
            setIsTermsChecked={setIsTermsChecked}
          />
          <div className="mt-6 hidden">
            <Checkbox
              label="Same as billing address"
              checked={checked}
              onChange={onChange}
            />
          </div>
          {/* {!checked && (
            <div>
              <div className="text-xl-semi flex items-center gap-x-4 pb-6 pt-8">
                <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm">
                  2
                </div>
                <h2>Billing address</h2>
              </div>
              <BillingAddress />
            </div>
          )} */}
          <Button
            className="max-w-[300px] border-0 mt-6 bg-[#7AC8B3] color-[#015464] rounded-3xl"
            onClick={handleSubmit(setAddresses)}
            disabled={!isTermsChecked}
          >
            Continue to Payment
          </Button>
        </div>
      ) : (
        <div>
          <div className=" px-5 pb-5 text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                  {/* ✓ */}
                </div>
                <div className="flex items-start justify-between w-full flex-col md:flex-row gap-10 md:gap-0">
                  <div className="flex flex-col">
                    <span>
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </span>
                    <span>
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </span>
                    <span>
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </span>
                    <span>
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </span>
                    <div className="mt-4 flex flex-col">
                      <span>{cart.shipping_address.phone}</span>
                      <span>{cart.email}</span>
                    </div>
                    {/* {checked && (
                      <div className="flex items-center gap-x-2 mt-6">
                        <div className="flex items-center justify-center border border-gray-700 bg-gray-100 w-4 h-4">
                          ✓
                        </div>
                        <span>Same as billing address</span>
                      </div>
                    )} */}
                  </div>
                  <div>
                    <button className = "  w-full uppercase flex items-center justify-center min-h-[50px] px-8 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-[#7cc9b5] border-[#7cc9b5] hover:bg-white hover:text-[#1a5f5f] disabled:hover:bg-gray-900 disabled:hover:text-white rounded-[25px]  " onClick={setEdit}>Edit</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <Spinner />
              </div>
            )}
          </div>
          {/* {!checked && (
            <div>
              <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
                <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm">
                  2
                </div>
                <h2>Billing address</h2>
              </div>
              <div className="bg-gray-50 px-8 py-6 text-small-regular">
                {cart && cart.billing_address ? (
                  <div className="flex items-start gap-x-8">
                    <div className="bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                      ✓
                    </div>
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col">
                        <span>
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </span>
                        <span>
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </span>
                        <span>
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </span>
                        <span>
                          {cart.billing_address.country_code?.toUpperCase()}
                        </span>

                        <div className="mt-4 flex flex-col">
                          <span>{cart.billing_address.phone}</span>
                        </div>
                      </div>
                      <div>
                        <button onClick={setEdit}>Edit</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <Spinner />
                  </div>
                )}
              </div>
            </div>
          )} */}
        </div>
      )}
    </div>
  )
}

export default Addresses
