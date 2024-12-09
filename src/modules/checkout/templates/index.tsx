import { CheckoutProvider } from "@lib/context/checkout-context";
import ChevronDown from "@modules/common/icons/chevron-down";
import MedusaCTA from "@modules/layout/components/medusa-cta";
import Link from "next/link";
import CheckoutLoader from "../components/checkout-loader";
import CheckoutForm from "./checkout-form";
import CheckoutSummary from "./checkout-summary";
import Image from "next/image";
import logo from "@modules/common/icons/eNOOL_Logo.svg";
import Lefe from "@public/images/lefe1.png";
import bgimg from "@public/images/bg1.png";

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <Image
        className=" absolute z-0 w-5/6 top-0 right-0 "
        src={bgimg}
        alt="bgimg"
      />
      {/* <Image
        className=" hidden lg:block absolute top-36 z-0 bottom-36 right-10 w-24 "
        src={Lefe}
        alt=""
      /> */}
      <div className="relative small:min-h-screen">
        <div className="h-16 bg-white">
          <nav className="flex items-center h-full justify-between content-container container mx-auto">
            <Link
              href="/cart"
              className="text-small-semi text-gray-700 flex items-center gap-x-2 uppercase flex-1 basis-0"
            >
              <>
                <ChevronDown className="rotate-90" size={16} />
                <span className="mt-px hidden small:block">
                  Back to shopping cart
                </span>
                <span className="mt-px block small:hidden">Back</span>
              </>
            </Link>
            <Link href="/" className="text-xl-semi">
              <Image
                className="w-56 justify-center mx-auto"
                src={logo}
                alt="Logo"
              />
            </Link>
            <div className="flex-1 basis-0" />
          </nav>
        </div>
        <div className="relative lg:container mx-5 lg:mx-auto my-10 lg:my-0">
          <CheckoutLoader />
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 small:grid-cols-[1fr_416px] gap-y-8 content-container gap-x-8 lg:py-12  lg:px-20  2xl:px-20">
            <CheckoutForm />
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </CheckoutProvider>
  );
};

export default CheckoutTemplate;
