import FeaturedProducts from "@modules/home/components/featured-products";
import Hero from "@modules/home/components/hero";
import NewAndNoteworthy from "@modules/home/components/featured-products/NewAndNoteWorthy";
import BrowseCategories from "@modules/categories/templates/BrowseCategories";
import EnoolPicks from "@modules/home/components/featured-products/EnoolPicks";
import ProcessFlow from "@modules/home/components/ProcessFlow";
import StartSeries from "@modules/home/components/featured-products/StartSeries";
import FeaturedAuthors from "@modules/authors/FeaturedAuthors";
import Testimonials from "@modules/Testimonials";
import FeaturedPublishers from "@modules/authors/FeaturedPublishers";
import BecomePartner from "@modules/authors/BecomePartner";
import BecomeAuthor from "@modules/authors/BecomeAuthor";
import About from "@modules/common/components/about";
import Pricing from "@modules/common/components/pricing";
import { Metadata } from "next";
import DefaultLayout from "@modules/layout/templates";

export const metadata: Metadata = {
  // title: "E-Nool",
  title: "eNOOL",
  description: "The Easiest Way to Find Any Book",
};

const Home = () => {
  return (
    <DefaultLayout>
      <div className="hero_bg">
        <Hero />
        <FeaturedProducts />
      </div>
      <NewAndNoteworthy />
      {/*<div className="z-[-20] relative">*/}
      <div className="z-[-20]">
        <BrowseCategories />
      </div>
      <EnoolPicks />
      <ProcessFlow />

      <div className="start_bg">
        <StartSeries />
        <div className=" mx-auto sm:px-16 px-4 py-4">
          <FeaturedAuthors />
        </div>
      </div>
      <BecomeAuthor />
      <Testimonials />
      <div className="mb-20">
        <div className=" mx-auto sm:px-16 px-4 py-4">
          <FeaturedPublishers />
        </div>
      </div>
      <BecomePartner />
      <div className="p-3">
        <About />
      </div>
      <Pricing />
    </DefaultLayout>
  );
};

export default Home;
