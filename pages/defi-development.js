import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import TopProject from "../component/Section/TopProject";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import DescriptionSection from "../component/Section/DescriptionSection";
import { DefiDevelopmentDescriptionData } from "/Data/DescriptionData/DescriptionData";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { DefiServiceData } from "/Data/ServiceData/ServiceData";
import FeaturesItem from "../component/Section/FeaturesItem";
import { DefiDevelopmentFeaturesData } from "/Data/FeaturesData/FeaturesData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { DefiDevelopmentBenifits } from "/Data/BenifitsItemData/BenifitsItemData";
import Faqq from "../component/Section/Faqq";
import { DefiDevelopmentFaqData } from "/Data/FaqData/FaqData";
import HeroSection from "../component/DefiDevelopmentPage/HeroSection";
import SaveTime from "../component/Section/SaveTime";

function DefiDevelopment() {
  return (
    <>
      <Head>
        <title>DeFi Development and Consulting Services|NFT Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="Explore the future of finance with NFT Constructer's DeFi development services. Revolutionize your financial endeavors with secure and innovative decentralized finance solutions tailored to your needs"
        ></meta>
        <meta
          name="og:description"
          content="Explore the future of finance with NFT Constructer's DeFi development services. Revolutionize your financial endeavors with secure and innovative decentralized finance solutions tailored to your needs"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="DeFi Development and Consulting Services|NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/5.jpg" />
        <meta property="image" content="assets/img/meta/5.jpg" />
        <meta
          name="keywords"
          content="defi development Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      <HeroSection />
      {/* =============service card section ================== */}
      <SaveTime />

      {/* ================about us section ================== */}
      <DescriptionSection data={DefiDevelopmentDescriptionData} />

      {/* ==============pricing range ============== */}
      <div className="cpt-6">
        <PriceRangeSlider />
      </div>
      {/* ===================service section ================== */}
      <ServiceCardItem
        data={DefiServiceData}
        title={"DeFi Services"}
        id={"defi-service"}
        description={`While we excel as NFT pioneers, our expertise extends
         to Defi development, where we harness blockchain technology for 
         financial empowerment. Our seasoned Defi experts create innovative,
         secure, and user-friendly solutions that revolutionize the financial
       landscape. Whether you're a crypto enthusiast, investor, or business
         seeking financial decentralization, we're your trusted partner.
         Join us on a journey where Defi development meets the groundbreaking
          NFT realm, paving the way for a decentralized financial future.`}
      />
      {/* ===================Mentioned  ================== */}

      <div className="cpt-6">
        <Featured />
      </div>
      {/* ==================Features================== */}
      <div className="cpb-7">
        <FeaturesItem data={DefiDevelopmentFeaturesData} title="Defi Development Services" />
      </div>

      {/* ===================Newsletter section  ================== */}
      {/* <div className="cpt-6">
        <Newsletter />
      </div> */}

      {/* ===============Benefits================== */}
      <BenifitsItem data={DefiDevelopmentBenifits} title={"Defi Development"} 
        alt="defi development"
       description="By harnessing the proficiency of NFT Constructor, you'll discover the unparalleled benefits of decentralized finance solutions. Whether you're seeking yield farming, liquidity provision, or blockchain-based financial services, our DeFi expertise ensures that your digital assets are put to work for you."
      />

      {/* =====================top project===================== */}
      <TopProject />

      {/* <!--  ============ business grow  =============--> */}
      {/* <HowItWork /> */}

      {/* =====================happy clients======================= */}
      <Review />

      {/* ==========================faq================== */}
      <Faqq data={DefiDevelopmentFaqData} />

      {/* ===============================contact us ================ */}
      <ContactBtn />
    </>
  );
}
DefiDevelopment.layout = AppLayout;

export default DefiDevelopment;
