import { useState } from "react"
import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"
import Checkbox from "@modules/common/components/checkbox"

const ShippingAddress = ({isTermsChecked, setIsTermsChecked}) => {
  const { customer } = useMeCustomer()
  const [phone, setPhone] = useState('');
  // const [isTermsChecked, setIsTermsChecked] = useState(false);
  const handlePhoneChange = event => {
    const result = event.target.value.replace(/\D/g, '');
    setPhone(result);
  };

  const handleTerms = (event) => {
    setIsTermsChecked(event.target.checked)
  }

  return (
    <div>
      {/* {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-[#0000001A] p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )} */}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="Email*"
              {...register("email", {
                required: "Email is required",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
              aria-placeholder="Email"
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="First name*"
                {...register("shipping_address.first_name", {
                  required: "First name is required",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Last name*"
                {...register("shipping_address.last_name", {
                  required: "Last name is required",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            {/* <Input
              label="Company"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            /> */}
            <Input
              label="Address*"
              {...register("shipping_address.address_1", {
                required: "Address is required",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Apartments, suite, etc."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[150px_1fr] gap-x-2">
              <Input
                label="Postal code*"
                {...register("shipping_address.postal_code", {
                  required: "Postal code is required",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="City*"
                {...register("shipping_address.city", {
                  required: "City is required",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: "Country is required",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="State / Province"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Phone"
              // value={phone}
              // onChange = {handlePhoneChange}              
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
            <label className="flex gap-x-2 font-normal">
              <input 
                type="checkbox" 
                id="checkout-terms" 
                value="1" 
                checked={isTermsChecked} 
                onChange={handleTerms}
              />
              Terms & Contitions
              <br/>
            </label>
            <p className="font-normal"><small>Please accept the terms and conditions to proceed with the payment.</small></p>
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
