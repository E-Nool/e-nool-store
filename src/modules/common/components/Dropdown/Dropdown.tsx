import React, { useRef, useEffect } from "react"
import Link from "next/link"
import ReportBookModal from "@modules/report-book/report-book-modal"
import BookShelfModal from "@modules/book-shelf/book-shelf-modal"
import AddToCartComponent from "@modules/products/components/product-actions/add-to-cart"
import RemoveBookshelfItem from "@modules/common/components/remove-bookshelf-item"

const Dropdown = ({ isDropdownOpen, setDropdownOpen, handle, customContainer = "" ,product=""}) => {
  const dropdownRef = useRef(null)
  const moreOptionRef = useRef(null)

  const handleDocumentClick = (event) => {
    let skipElements = ["report-a-book","add-to-cart","book-shelf", "remove-book-shelf"]
    if (dropdownRef.current && event.target !== moreOptionRef.current) {
      if(!skipElements.includes(event.target.id)){
        setDropdownOpen(false)
      }
    }
  }
  //

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick)
    document.addEventListener("modal:close:btn:clicked", handleDocumentClick)
    return () => {
      document.removeEventListener("click", handleDocumentClick)
      document.removeEventListener("modal:close:btn:clicked", handleDocumentClick)
    }
  }, [handleDocumentClick])

  // console.log(product)

  return (
    <div
      className={`pl-[15px] block absolute z-50 top-3 left-3 ${customContainer}`}
      // style={{ display: "block", zIndex: 1000 }}
      style={{ display: "block" }}
      ref={dropdownRef}
    >
      <div className="">
        <input
          type="checkbox"
          className="peer hidden"
          id="dropdown-open"
          checked
        />
        <div className="peer-checked:block  hidden w-36 divide-y divide-gray-100 rounded border bg-white shadow">
          <ul
            className="py-1 text-sm text-[#015464]"
            aria-labelledby="dropdownDefault "
          >
            {/* <Link href="/account/login">
              <li className="block px-4 py-2 hover:bg-gray-100 text-xs text-left ">
                Buy Now
              </li>
            </Link> */}
            <AddToCartComponent product={product}></AddToCartComponent>
            <Link href={`/products/${handle}`}>
              <li className="block px-4 py-2 hover:bg-gray-100 text-xs text-left">
                View Book Details
              </li>
            </Link>
            {/*<Link href="/add-to-bookshelf">
              <li className="block px-4 py-2 hover:bg-gray-100 text-xs text-left">
                Add to Bookshelf
              </li>
            </Link>*/}
            <RemoveBookshelfItem product={product}/>

            <BookShelfModal product={product}></BookShelfModal>
            <ReportBookModal product = {product} listPage={true} setDropdownOpen={setDropdownOpen}></ReportBookModal>
             
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
