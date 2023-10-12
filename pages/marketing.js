import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import TopProject from "../component/Section/TopProject";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import DescriptionSection from "../component/Section/DescriptionSection";
import { MarketingDescriptionData } from "/Data/DescriptionData/DescriptionData";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { MarketingServiceData } from "/Data/ServiceData/ServiceData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { NftMarketing } from "/Data/BenifitsItemData/BenifitsItemData";
import Faqq from "../component/Section/Faqq";
import { MarketingFaqData } from "/Data/FaqData/FaqData";
import HeroSection from "../component/MarketingPage/HeroSection";

function Marketing() {
  return (
    <>
      <Head>
        <title>
          NFT Defi Metaverse Marketing & PR Services -NFT Constructer
        </title>
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
          content="With our marketing strategies you can reach a wider audience and increase sales through paid traffic, PR, Influencers, which will help you"
        ></meta>
        <meta
          name="og:description"
          content="With our marketing strategies you can reach a wider audience and increase sales through paid traffic, PR, Influencers, which will help you"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Defi Metaverse Marketing & PR Services -NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/6.jpg" />
        <meta property="image" content="assets/img/meta/6.jpg" />
        <meta
          name="keywords"
          content="marketing Nft minting website development NFT Website Design NFT marketplace development"
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
      {/* ================about us section ================== */}
      <DescriptionSection data={MarketingDescriptionData} />

      {/* ==============pricing range ============== */}
      <div className="cpt-6">
        <PriceRangeSlider />
      </div>

      <ServiceCardItem
        data={MarketingServiceData}
        title={"Marketing Services"}
        description={`At NFT Constructer, we blend our mastery in NFT innovation
      with a passion for elevating brands through cutting-edge marketing services.
      Our team of creative strategists and digital experts is dedicated to crafting 
      unique and impactful marketing campaigns tailored to your NFT endeavors.
      Whether you're launching NFT art, collectibles, or a blockchain project,
      we're your go-to partner for reaching and engaging your audience.`}
        id={"marketing"}
        alt="marketing"
      />

      {/* ===================Mentioned section ================== */}
      <div className="cpy-6">
        <Featured alt="marketing" />
      </div>

      {/* ===============Benefits================== */}
      <BenifitsItem
        data={NftMarketing}
        title={"NFT Marketing"}
        alt="marketing"
        description="We employ innovative marketing strategies to ensure that your digital assets receive the attention they deserve. From creating captivating campaigns to targeting the right audience, we amplify your NFT presence. Trust in our expertise to drive visibility, engage collectors, and propel your digital treasures to new heights. 
       "
      />

      {/* =====================top project===================== */}
      <TopProject alt="marketing" />

      {/* =====================happy clients======================= */}
      <Review alt="marketing" />

      {/* ==========================faq================== */}
      <Faqq data={MarketingFaqData} alt="marketing" />

      {/* ===============================contact us ================ */}
      <ContactBtn alt="marketing" />
    </>
  );
}
Marketing.layout = AppLayout;

export default Marketing;
