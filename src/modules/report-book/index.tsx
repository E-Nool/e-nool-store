import React, { useEffect, useState } from "react";
import Button from "@modules/common/components/button";
import Spinner from "@modules/common/icons/spinner";
import Link from "next/link";
import { addReportBook } from "@lib/util/products_api";
import { useAccount } from "@lib/context/account-context";

const ReportBookComponent = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const productId = props.product_id || "prod_01HESYVZ761RXXP1GXAFB38KQ0";

  const { customer } = useAccount();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    var data = {
      name: event.target.name.value,
      subject: event.target.subject.value,
      email: event.target.email.value,
      message: event.target.message.value,
      product_id: productId,
      book_details: {},
    };
    const reportSubmit = await addReportBook(data);
    event.target.name.value = "";
    event.target.subject.value = "";
    event.target.email.value = "";
    event.target.message.value = "";
    setSubmitted(true);
    setSubmitting(false);
    return false;
  };

  return (
    <>
      {customer ? (
        <>
          {" "}
          {submitted ? (
            <h2 className="mt-10 pt-10  text-center text-xl text">
              Your review has been successfully submitted. Thank you!. <br></br>
              <br></br>{" "}
              <Link
                href={"/browse"}
                className="text-[#408080] hover:text-[#565656] font-extrabold"
              >
                Browse books
              </Link>
            </h2>
          ) : (
            <>
              <form onSubmit={handleSubmit} id="reviewForm" className="px-5">
                <div className="grid gap-4 mb-2 grid-cols-2 mt-1">
                  <div className="col-span-2 mt-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Name"
                      required
                    ></input>
                  </div>
                  <div className="col-span-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Subject"
                      required
                    ></input>
                  </div>
                  <div className="col-span-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="Email"
                      required
                    ></input>
                  </div>

                  <div className="col-span-2 ">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:border-gray-500 "
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <Button
                  className="min-h-0  mt-5 bg-primary"
                  disabled={submitting}
                >
                  {submitting ? <Spinner /> : "Send a message"}
                </Button>
              </form>
            </>
          )}
        </>
      ) : (
        <>
          <div className="bookshelf-login-section">
            <p className="text-center text-gray-600 mt-10">
              Please login before you report the title 🙂
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
      )}
    </>
  );
};

export default ReportBookComponent;
