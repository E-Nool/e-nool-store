// @ts-nocheck
"use client"
import { medusaClient } from "@lib/config"
import Image from "next/image"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Select from "react-select"
import Spinner from "@modules/common/icons/spinner"
import chooseBookBg from "@public/images/LoginPage/choosebook.svg"
import searchbar from "@modules/common/icons/searchbar.svg"
import arrowforward from "@modules/common/icons/arrow-forward.svg"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef, useState, useEffect } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { BannerImage } from "../BannerImage"
import { BackButton } from "../BackButton"
import { useUpdateMe } from "medusa-react"
import InlineError from "@modules/common/components/inline-error"
import { getProductCategories } from "@lib/util/products_api"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const ChooseBookToRead = () => {
  const { loginView, refetchCustomer } = useAccount()
  const router = useRouter()
  const [selectedBooks, setSelectedBooks] = useState([])
  const customerData = JSON.parse(localStorage.getItem("customer") || "{}")
  const [formError, setFormError] = useState({})
  const [productCategories, setProductCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategoriesInfo, setSelectedCategoriesInfo] = useState([]);
  // console.log("selectedBooks", selectedBooks)
  

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  const onSubmit = handleSubmit(async (credentials) => {
    if (selectedCategories.length === 0) {
      setFormError({ category: { message: "Please select at least one category" } })

      return
    }
    setFormError({})
    update(
      {
        id: customerData.id,
        metadata: {
          ...customerData.metadata,
          interests: selectedCategories,
          profileStatus: 5,
        },
      },
      {
        onSuccess: async () => {
          const response = await refetchCustomer()
          localStorage.setItem(
            "customer",
            JSON.stringify(response?.data?.customer)
          )
          router.push("/account")
        },
        onError: () => {
          console.log("error")
        },
      }
    )
  })

  const handleCheckboxChange = (index: string, pre_selected = false) => {
    const newSelectedCategories = [...selectedCategories];
    const newSelectedCategoriesInfo = [...selectedCategoriesInfo];
    const selected = pre_selected ? newSelectedCategoriesInfo[index] : productCategories[index];

    if (newSelectedCategories.includes(selected['id'])) {
      newSelectedCategories.splice(newSelectedCategories.indexOf(selected['id']), 1);
      for(let i = 0; i < newSelectedCategoriesInfo.length; i++){
        if(newSelectedCategoriesInfo[i]['id'] === selected['id']){
          newSelectedCategoriesInfo.splice(i, 1);
          break;
        }
      }
    } else {
      newSelectedCategories.push(selected['id'])
      newSelectedCategoriesInfo.push(selected)
    }
    setSelectedCategories(newSelectedCategories)
    setSelectedCategoriesInfo(newSelectedCategoriesInfo)
  }

  const handleRemoveSelected = (index: number) => {
    console.log(index)
  }
  useEffect(() => {
    async function fetchProductCategories(q = ''){
      const cats = await getProductCategories(q);
      setProductCategories(searchTerm ? cats?.product_categories : cats?.product_categories?.slice(0,10))
    }
    fetchProductCategories(searchTerm);
  }, [searchTerm]);

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        <BannerImage src={chooseBookBg} />
        <div className="flex items-center w-full max-w-md px-2 mx-auto lg:w-2/6">
          <BackButton />
          <div className="flex-1 items-center w-full">
            <div className="text-center mt-[200px] md:mt-[0] items-center justify-center ">
              <p className="mt-3 text-[#015464]  text-4xl font-graphikBold">
                Choose Book To Read
              </p>
              <p className="py-3  text-[#408080] text-[10px]">
              படிக்க புத்தகத்தை தேர்வு செய்யவும்              
              </p>
              <div className="my-4 mx-auto h-1 w-80 bg-[#E0E7FF] opacity-50 rounded"></div>

              <div className="flex items-center justify-center w-full mb-5">
               {/* <Link href="/account">
                  <button className="px-6 text-[10px] py-3 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90 flex items-center">
                    Skip This Step
                    <Image
                      src={arrowforward}
                      alt="Arrow Forward"
                      className="ml-2"
                      width={20}
                      height={10}
                    />
                  </button>
                </Link>*/}
              </div>
              <div className="relative justify-center mx-auto">
                <input
                  name="searchBook"
                  id="searchBook"
                  placeholder="Search for categories"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full px-4 py-3 outline-none text-sm placeholder-[#2E384D] bg-[#E0E7FF]/50 border  rounded-sm focus:border-blue-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                >
                  <Image
                    src={searchbar}
                    alt="searchbar "
                    className="w-full h-full"
                    fill={true}
                  />
                </button>
              </div>
            </div>
            {selectedCategoriesInfo.length !== 0 ? (
              <div className="mt-8">
                <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-3 gap-4 justify-spacearound overflow-y-auto max-h-[300px]">
                  {selectedCategoriesInfo.map((cat, index) => (
                    <div
                      key={index}
                      className="w-30 h-10 flex items-center px-4 border border-gray-200 rounded-3xl dark:border-gray-700"
                    >
                      <div
                        className="w-full py-4 ml-2 text-[12px]  font-medium text-black dark:text-black"
                      >
                        {cat.name}
                      </div>
                      <button onClick={() => handleCheckboxChange(index, true)}>
                         &#x2715;
                      </button>
                      {/*<input
                        id={`bordered-checkbox-${index}`}
                        type="checkbox"
                        value=""
                        onChange={() => handleCheckboxChange(index)}
                        checked={selectedCategories.includes(cat['id'])}
                        name="bordered-checkbox"
                        className="w-4 h-4 text-[#3ACC6C] border border-gray-300 rounded  appearance-nonechecked:bg-[#3ACC6C] "
                      />*/}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            
            <div className="mt-8 h-1 w-full bg-[#E0E7FF] opacity-60 rounded"></div>
            <div className="mt-8">
              {productCategories.length === 0 ? (
                <div className="text-center">
                  No categories were found.
                </div>
              ) : null}
              <form onSubmit={onSubmit}>
                <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-3 gap-4 justify-spacearound overflow-y-auto max-h-[300px]">
                  {productCategories.map((cat, index) => (
                    <div
                      key={index}
                      className="w-30 h-10 gap-1 flex items-center px-4 border border-gray-200 rounded-3xl dark:border-gray-700"
                    >
                      <label
                        htmlFor={`bordered-checkbox-${index}`}
                        className="w-full py-4 ml-2 text-[12px]  font-medium text-black dark:text-black"
                      >
                        {cat.name}
                      </label>
                      <input
                        id={`bordered-checkbox-${index}`}
                        type="checkbox"
                        value=""
                        onChange={() => handleCheckboxChange(index)}
                        checked={selectedCategories.includes(cat['id'])}
                        name="bordered-checkbox"
                        className="w-4 h-4 text-[#3ACC6C] border border-gray-300 rounded  appearance-nonechecked:bg-[#3ACC6C] "
                      />
                    </div>
                  ))}
                </div>

                {formError?.category && (
                  <InlineError errors={formError} property="category" />
                )}

                <div className="mt-6 mx-auto">
                  {/* <Link href="/"> */}
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <div className="flex justify-center">
                        <Spinner />
                      </div>
                    ) : (
                      "Start Reading"
                    )}
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseBookToRead

const choosebook = [
  "Animals",
  "Social Science",
  "Study Aids",
  "Psychology",
  "Religion",

  // Add more checkbox labels as needed
]
