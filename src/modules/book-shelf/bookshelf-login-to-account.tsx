import Link from "next/link";

const BookShelfLoginToAccount = () => {
	return (
		<>
			<div className="bookshelf-login-section">
				<p className="text-center text-gray-600 mt-10">
					'Wish' to save these products? Please Login 🙂
				</p>
				<div className="text-center mt-6">
					<Link href="/account/login">
	                  <button className="rounded-full text-[#565656] text-[13px] px-8 py-3 bg-opacity-0 border font-extrabold border-[#707070]">
	                    LOG IN
	                  </button>
	                </Link>
				</div>
			</div>
		</>
	)
}

export default BookShelfLoginToAccount;