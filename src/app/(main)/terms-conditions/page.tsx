"use client";
import { Metadata } from "next";
import Image from "next/image";
import DefaultLayout from "@modules/layout/templates";
import Link from "next/link";
import Leaf from "../../../../public/images/LandingPage/Leaf1.png";
import PrivacyPolicyImage from "../../../../public/images/PrivacyPolicy.png";
import Aboutbg from "../../../../public/images/aboutbg.png";
import img1 from "../../../../public/images/img1.png";
import Ellipse from "../../../../public/images/Ellipse.png";
import Lefe from "../../../../public/images/lefe1.png";
import Terms from "../../../../public/images/terms.png";
import Leaf2 from "../../../../public/images/leaf2.png";
import Lefe2 from "../../../../public/images/lefe2.png";

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Explore all of our products.",
// }

export default function StorePage() {
  return (
    <DefaultLayout>
      <div className="min-[2000px]:container min-[2000px]:mx-auto">
        <div className="pl-10 md:pl-20 absolute top-20  mt-20 text-[#015464] md:ml-5 ">
          <nav>
            <ul className="flex m-0 items-center p-0">
              <li className="flex items-center text-left">
                <Link
                  href="/"
                  title=""
                  className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li className="flex items-center text-left">
                <svg
                  className="block h-5 w-5 align-middle text-[#015464] "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                </svg>

                <a
                  href="#"
                  title=""
                  className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className=" min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24">
          <Image
            className="absolute left-0 z-[-1]  h-[500px] top-[-83px]"
            src={Aboutbg}
            alt=""
          />
          <Image className="hidden md:block absolute z-0 top-24 left-0 w-16 " src={Leaf} alt="" />
          <div className=" container justify-center items-center flex mt-40 z-0 ">
            <div className=" max-w-3xl ">
              <Image
                src={PrivacyPolicyImage}
                alt="privacypolicy-img"
                className="hidden"
              />
              <h1 className=" text-[#015464] font-graphikBold text-3xl md:text-5xl">
                Terms and conditions
              </h1>
            </div>
            <Image
              className="hidden lg:block max-w-md ml-20"
              src={Terms}
              alt="Terms"
            />
            <Image
              className=" hidden lg:block absolute top-5 z-0 bottom- -right-20 w-28 "
              src={Lefe}
              alt=""
            />
          </div>
        </div>
        <Image
          className=" hidden lg:block absolute top-[650px] z-0 bottom-36 -left-28 w-72 "
          alt="Image"
          src={img1}
        />
        <Image
          className=" hidden lg:block absolute top-[898px] z-0 bottom-36 left-10 w-28 "
          alt="Image"
          src={Ellipse}
        />
        <div className=" mt-20  min-[2000px]:container min-[2000px]:mx-auto mb-10 px-10 md:px-24 flex flex-col m-auto ">
          <div>
            <p className=" text-[#015464] font-semibold text-base pb-1 font-graphik">
              General Terms of Use
            </p>
            <p className=" text-[#015464] font-semibold text-base pb-1 font-graphik">
              As of Jan 22nd, 2024
            </p>
          </div>

          <div className=" mt-5 ">
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL is a digital reading and publishing platform, available
              either via the eNOOL website or the eNOOL app (the “Platform”) and
              is shared by a diverse community of authors, publishers and other
              organizations that produce content (collectively, “Publishing
              Organizations”) and readers and viewers who enjoy that content
              (collectively, “Members”). All communities have standards, and
              eNOOL is no exception. The eNOOL Platform is a place where all
              members can expect to enjoy digital content in an open, inviting,
              comfortable and safe environment.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Please read the following terms of use carefully. By registering
              For, accessing, browsing, posting, uploading, downloading from,
              Registering an account, subscribing to, or otherwise using eNOOL
              Or its platform, you acknowledge that you understand and accept
              All the provisions of these general terms of use. You represent
              That you have the authority to bind yourself to these terms of use
              And that you or the organization you represent intend to be
              Legally bound by these terms. If you do not agree with these
              Statements or the terms and conditions set out below, you cannot
              Proceed on the eNOOL platform and you may not access any content
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              By continuing to use the eNOOL Platform, you or the organization
              you represent (“You”) agree to be bound by the General Terms of
              Use set out below and the policies, terms and conditions which are
              incorporated by reference.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Eligibility
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              To be eligible to be a member, or to use the Platform, or to
              create a eNOOL account (“Account”), You must meet all of the
              following criteria:
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You must be thirteen (13) years of age to access content
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You must be eighteen (18) years of age to upload content
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              If You are acting on behalf of an organization, you must be an
              authorized representative of the organization with the authority
              to bind the organization to these terms and conditions
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You must comply with all eNOOL policies, terms and conditions,
              whether set out in this policy or otherwise available at here.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You must comply with all applicable laws at all times
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Your account must remain in good standing. You are responsible for
              the security of your account. You are responsible for the activity
              and the content within your Account. If you have reason to believe
              your account is no longer secure, please notify eNOOL immediately
              at support@eNOOL.in. eNOOL reserves the right to remove, delete or
              suspend any account at any time, in its sole discretion and
              without notice, including, without limitation, for any non-payment
              of fees or for any violation of these General Terms of Use or any
              other eNOOL policy, term or condition.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Additional Terms Incorporated by Reference
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              In addition to the General Terms of Use set out herein, the
              following eNOOL policies and terms are expressly incorporated by
              reference into this Agreement: Privacy Policy, Prohibited Activity
              and Content and Member Agreement. These policies and terms and
              conditions, together with any new or additional policies, terms
              and conditions, may be amended and updated by eNOOL from time to
              time, in its sole discretion and without notice, by posting them
              on its website here. By continuing to use the Platform, you
              acknowledge and agree to the current versions of these policies,
              terms and conditions.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Privacy
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Your privacy is important to us. Our Privacy Policy outlines how
              we collect, use, disclose and protect Your personal information
              and is available here.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Individual Terms and Conditions
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              When using the Platform, You may be subject to additional terms
              and conditions. Examples include free Subscriptions and promo
              codes. These individual terms and conditions are incorporated by
              reference into these General Terms of Use.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Members; Subscriptions; Purchases
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL offers access to eBooks, audiobooks, articles, videos and
              other content from Participating Organizations (collectively,
              “Content”), either (a) by a subscription (“Subscription”) for
              unlimited access to specific Content for a set period of time
              (generally, a month) (the “Subscription Period”) or (b) for
              specific Content which You purchase. The various types of
              Subscriptions and the different ways in which You may access
              Content on the Platform are available [here]. If You wish to
              subscribe to or otherwise have access to the Platform, the terms
              of Your relationship with eNOOL are available here in the Member
              Agreement.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Publishing Organizations
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              If You wish to upload or publish Content on the Platform, the
              terms of Your relationship with eNOOL are available here in the
              Publishing Agreement.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Prohibited Activity
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL wishes to create a community where all Members can expect to
              enjoy Content in an open, inviting, comfortable and safe
              environment. All Members, including You, must comply with the
              Policy Against Prohibited Activity and Content, which is available
              here.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Member Indemnification Obligation
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              To the fullest extent of the law, You agree to indemnify, defend
              and hold eNOOL, its officers, directors, employees and affiliates
              harmless from and against all losses, claims damage or action
              arising from any breach of Your use or misuse of the Platform, any
              violation by You of these General Terms of Service or any other
              eNOOL policy or term or condition, or any of Your representations,
              warranties and obligations set forth in herein and therein.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              eNOOL’s Rights
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL shall have sole control over all features and functionality
              of the Platform and the terms of the various types of
              Subscriptions. eNOOL reserves the right to modify these General
              Terms of Use and any other policy, terms or conditions
              incorporated by reference herein, at any time in its sole
              discretion and without notice; provided, however, that You will be
              provided with prior notice of any changes that materially affect
              Your rights and obligations. In addition, a current version of
              these General Terms of Use or the applicable policy, term or
              condition will be posted here and will indicate the effective date
              of the change. Your continued use of the eNOOL Platform after the
              posting of such changes constitutes Your binding acceptance of
              such changes. eNOOL may change or discontinue all or any part of
              the Platform and the Content, at any time and without notice, at
              its sole discretion.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Links; Third-Party Sites, Products and Services
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              The eNOOL Platform may include links to third-party websites and
              references to third-party products and services solely as a
              convenience to its Members. eNOOL does not endorse, and in fact,
              specifically disclaims any such third-party sites, products or
              services (collectively, “Third-Party Links”) and the information,
              perspectives, opinions, videos, images, materials, claims,
              products or services contained at or accessible through these
              Third-Party Links. You may proceed to these Third-Party Links at
              Your own risk. eNOOL specifically disclaims any representations or
              warranties of any kind with respect to these Third-Party Links and
              is not liable for any damages incurred by You as a result of these
              Third-Party Links.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Cancellation of Subscription or Account
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You may cancel Your Subscription or Your Account at any time
              through Your Account or by providing eNOOL with email notification
              of cancellation at support@eNOOL.in. Please refer to the
              Publishing Agreement or the Member Agreement, as applicable, for
              further details on cancelling Your Subscription or Your Account
              with eNOOL.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Intellectual Property and Other Proprietary Rights
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              All elements of the Platform, including, without limitation, all
              design, information, computer code, products, services and
              graphics (“Proprietary Information”) belong solely to eNOOL and
              its licensors. All Proprietary Information is protected by
              copyright, trade dress, patent and trademark law and all other
              relevant intellectual property and other proprietary rights.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Reservation of Rights
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL reserves all rights not expressly granted in these General
              Terms of Use.
            </p>
            <p className=" text-[#015464] font-semibold text-xs pb-5 font-graphik">
              Disclaimers
            </p>
            <p className=" text-[#015464] font-semibold text-xs pb-5 font-graphik">
              NO WARRANTIES
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Notwithstanding anything else in these general terms of use or any other eNOOL policy, term or condition, and to the fullest extent permissible pursuant to applicable law, eNOOL disclaims all warranties, statutory, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, any claims for accessibility, reliability, security and availability, that the platform is or will be error free or virus free, and any claims of non-infringement of proprietary rights. No advice or information, whether oral or written, obtained by you from eNOOL or through the platform will create any warranty not expressly stated herein.
            </p>
            <p className=" text-[#015464] font-semibold text-xs pb-5 font-graphik">
              EXCLUSIONS
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Notwithstanding anything else in these general terms of use or any other eNOOL policy, term or condition, and to the fullest extent permissible pursuant to applicable law, eNOOL disclaims all warranties, statutory, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, any claims for accessibility, reliability, security and availability, that the platform is or will be error free or virus free, and any claims of non-infringement of proprietary rights. No advice or information, whether oral or written, obtained by you from eNOOL or through the platform will create any warranty not expressly stated herein.
            </p>
            <p className=" text-[#015464] font-semibold text-xs pb-5 font-graphik">
              LIMITATION OF LIABILITY
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Notwithstanding anything else in these general terms of use or any other eNOOL policy, term or condition, and to the fullest extent permissible pursuant to applicable law, eNOOL disclaims all warranties, statutory, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, any claims for accessibility, reliability, security and availability, that the platform is or will be error free or virus free, and any claims of non-infringement of proprietary rights. No advice or information, whether oral or written, obtained by you from eNOOL or through the platform will create any warranty not expressly stated herein.
            </p>
            <p className=" text-[#015464] font-semibold text-xs pb-5 font-graphik">
              Miscellaneous
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              The failure of eNOOL to exercise or enforce any right or provision
              of these General Terms of Use will not constitute a waiver of such
              right or provision. Any waiver of any provision of these Terms
              will be effective only if in writing and signed by eNOOL. If any
              provision of these General Terms of Use or any other eNOOL policy,
              term or condition is held to be unlawful, void, or for any reason
              unenforceable, then that provision will be limited or eliminated
              from such terms to the minimum extent necessary and will not
              affect the validity and enforceability of any remaining
              provisions. These General Terms of Use may not be transferred or
              assigned by You. Upon termination of Your Account or Subscription,
              any provision which by its nature or express terms should survive
              such termination, will survive such termination.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Entire Agreement
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              These General Terms of Use, including all policies, terms and
              conditions incorporated herein, constitute the entire agreement
              between You and eNOOL relating to the access and use of the
              Platform.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Agreement Amendment
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL reserves the right to update and change these General Terms
              of Use, including all policies, terms and conditions incorporated
              herein, from time to time. You will be provided with notice of
              such changes which materially affects Your rights and obligations.
              In addition, the current version of these General Terms of Use,
              including all policies, terms and conditions incorporated herein,
              will be posted here and will indicate the effective date of the
              change. By continuing to use the Platform, You acknowledge and
              agree to the current versions of these policies, terms and
              conditions.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Applicable Law
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL is owned and operated in India and all other countries by
              MGS E-Solution Pvt Ltd. corporation pursuant to the laws of the
              Province of British Columbia and the federal laws of Canada
              applicable therein. Regardless of the place of execution or
              performance or the domicile of the Member, these General Terms of
              Use, including all policies, terms and conditions incorporated
              herein, are governed by and construed in accordance with the laws
              of the India applicable therein and the Member agrees to
              irrevocable attorn to the non-exclusive jurisdiction of the courts
              of the India and the venue of Chennai.
            </p>
          </div>

          <div className=" mt-5">
            <h1 className=" text-[#015464] font-semibold text-xl pb-5 font-graphik">
              Website Information and usage
            </h1>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              eNOOL ™ is a Division of MGS E-Solution PVT Ltd, is the owners the
              website – www.eNOOL.in This privacy policy informs you how we use
              personal information submitted or collected at this site with your
              consent.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Please read this privacy policy before using the site or
              submitting any personal information. By using the site or the
              various features available and present herein, you are accepting
              the practices and the standard operating procedure as described in
              this privacy policy. These practices may be changed time to time
              as part of continuous change and applicability of new legal and
              statutory provisions which are binding upon us as a law-abiding
              corporate citizen but any changes which could be undertaken by the
              Company shall be published and changes will only applicable to
              activities and information on a prospective basis, not
              retroactively. You are encouraged to review the privacy policy
              whenever you visit the site to make sure that you understand how
              any personal information you provide will be used.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              This notice applies to all information collected or submitted on
              our website. eNOOL.in collects or requests you to submit personal
              information, such as your e-mail address, name, home or work
              address or telephone number. Information collected by eNOOL.in is
              used solely for the purpose of billing on e-book purchase or
              membership.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              We do not collect any information about your computer hardware,
              software or payment information. Neither we sell/ disclose/ share/
              distribute sensitive information to any 3rd party for any purpose
              except to extent of delivery of ordered products. However, if we
              are obliged to act under a valid Judicial, statutory or regulatory
              order, ruling or Judgments, to provide your details, we shall
              undertake our responsibility in that regards in a diligent manner,
              and shall not be liable to either inform or intimate you prior to
              our formal disclosure to abovementioned authorities.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Any claim for damages in a Civil Suit or in Tort, brought or
              instituted by you against eNOOL.in Online Shopping Private Limited
              or its authorized officers, agents, managers or other related
              personnel shall not hold as a valid claim by us at any point of
              time.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You are encouraged to review the privacy policy whenever you visit
              the site to make sure that you understand how any personal
              information you would be providing shall be used. We are not
              responsible for the privacy statements or other content on Web
              sites who are hosted on our home page or website, and you are
              requested to check the veracity and the applicability of the same
              directly. We do not hold any association with such websites, or
              online links.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              We use the information that we collect from you to provide our
              services to you. In addition to this we may use the information
              for one or more of the following purposes:
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              i.To provide information to you that you request from us relating
              to our products or services.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              ii.To provide information to you relating to other products that
              may be of interest to you. Such additional information will only
              be provided where you have consented to receive such information
              and the same is existing with us at the time of utilization of the
              consent so provided by you.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              iii.To inform you of any changes to our website, services or goods
              offered by various Vendors.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              If you have previously purchased goods or services from us, we may
              provide to you details of similar goods or services, or other
              goods or services, that you may be interested in. With us you can
              be sure that we do not disclose any thing that could be held
              against or serve as an identification to individuals or to use
              such classification in a manner which is portrayed by way of race,
              creed, religion, sex, political and caste. We use return email
              addresses to answer the email and we don’t use the same for any
              other purpose. We use non-identifying information to design our
              website and share the same with advertisers.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Only authorized employees, agents and contractors (who have agreed
              to keep information secure and confidential) have access to this
              information. All emails and newsletters from this site allow you
              to opt out of further mailings.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              We may share information with governmental agencies or other
              companies assisting us in fraud prevention or investigation. We
              may do so when: (1) permitted or required by law; or, (2) trying
              to protect against or prevent actual or potential fraud or
              unauthorized transactions; or, (3) investigating fraud which has
              already taken place.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              When you visit our websites, we automatically record information
              that your browser sends whenever you visit a website. For example,
              we may receive and collect: the name of the domain and host from
              which you access the Internet; the Internet Protocol (IP) address
              of the computer you are using; the date and time you access our
              websites; and the Internet address of the website from which you
              linked directly to our sites. We use this information to monitor
              the usage of our websites and as necessary for our business. This
              information does not include personal information.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              We use cookies to personalize and enhance your browsing experience
              at our website. Cookies are small files that we place on your
              computer’s hard drive to collect information about your activities
              on our websites. Cookies help us to:
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Keep track of items in your shopping cart and provide you with
              content that is tailored to you; Remember information you gave us
              so that you don’t have to reenter it; Monitor the total number of
              visitors and pages viewed.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              Our site links to other websites that may collect personally
              identifiable information about you. eNOOL.in is not responsible
              for the privacy practices or the content of those linked websites.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              You can access and update all your personally identifiable
              information that we collect online by logging into your account at
              ours by providing user id and secure password.
            </p>
            <p className=" w-[700px] max-w-full text-[#14adad] text-xs pb-4 indent-4 text-justify">
              “We/the company/us” are terms used in privacy policy, terms and
              conditions or on our website are interchangeable and shall mean
              and include as entity referring to eNOOL, a division of MGS
              E-Solution PVT Ltd.
            </p>
          </div>
          <Image
            className=" hidden lg:block absolute top-[850px] z-0 bottom-36 right-0 w-28 "
            alt="Image"
            src={Leaf2}
          />
          <Image
            className=" hidden lg:block absolute top-[990px] z-0 bottom-36 right-64 w-24 "
            alt="Image"
            src={Lefe2}
          />
          <Image
            className=" hidden lg:block absolute top-[1100px] z-0 bottom-36 right-0 w-72 "
            alt="Image"
            src={img1}
          />
          <Image
            className=" hidden lg:block absolute top-[1380px] z-0 bottom-36 right-20 w-20 "
            alt="Image"
            src={Ellipse}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
