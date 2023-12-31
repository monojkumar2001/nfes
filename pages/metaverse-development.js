import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import TopProject from "../component/Section/TopProject";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import DescriptionSection from "../component/Section/DescriptionSection";
import { MetaverseDescriptionData } from "/Data/DescriptionData/DescriptionData";
import Faqq from "../component/Section/Faqq";
import { MetaverseFaqData } from "/Data/FaqData/FaqData";
import Servicecard from "../component/Section/SaveTime";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { MetaverseServiceData } from "/Data/ServiceData/ServiceData";
import FeaturesItem from "../component/Section/FeaturesItem";
import { MetaverseFeaturesData } from "/Data/FeaturesData/FeaturesData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { MetaverseDevelopment } from "/Data/BenifitsItemData/BenifitsItemData";
import HeroSection from "../component/MetaversePage/HeroSection";

function Metaverse() {
  return (
    <>
      <Head>
        <title>Top Notch Metaverse Development Company|NFT Constructer </title>
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
          content="Leading metaverse development company that creates metaverse applications and solutions for NFTs, gaming, real estate, Defi, and others"
        ></meta>
        <meta
          name="og:description"
          content="Leading metaverse development company that creates metaverse applications and solutions for NFTs, gaming, real estate, Defi, and others"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Top Notch Metaverse Development Company|NFT Constructer "
        />
        <meta property="og:image" content="assets/img/meta/3.jpg" />
        <meta property="image" content="assets/img/meta/3.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      {/* <OfferA /> */}
      <HeroSection />

      {/* =============service card section ================== */}
      <Servicecard />

      {/* =============== Description Section ============= */}
      <DescriptionSection data={MetaverseDescriptionData} />

      {/* ==============pricing range ============== */}
      <div className="cpt-6">
        <PriceRangeSlider />
      </div>

      {/* ===================service section ================== */}
      <ServiceCardItem
        data={MetaverseServiceData}
        title={"Metaverse Services"}
        description={`Embark on an immersive journey into the Metaverse with our 
        visionary development expertise. At NFT Constructer , we specialize in
         crafting unique and engaging Metaverse experiences that transcend reality.
          Our seasoned team of developers and creators leverages the latest 
          technologies to build virtual worlds that captivate and inspire.`}
        id={"metaverse"}
        alt="metaverse"
      />

      {/* ===================Mentioned section ================== */}
      <div className="cpt-6">
        <Featured alt="metaverse"/>
      </div>

      {/* ==================Features================== */}
      <div className="cpb-6">
        <FeaturesItem data={MetaverseFeaturesData} title={"Metaverse Development Services"} alt="metaverse" />
      </div>

      {/* ===============Benefits================== */}
      <BenifitsItem
        data={MetaverseDevelopment}
        title={"Metaverse Development"}
        alt="metaverse"
        description="Leveraging our expertise, you can be sure that your Metaverse projects are built with innovation and precision. NFT Constructer ensures your creations thrive in this dynamic digital landscape. We provide the tools and guidance you need to stand out and create lasting, memorable experiences. "
      />

      {/* =====================top project===================== */}
      <TopProject alt="metaverse" />

      {/* =====================happy clients======================= */}
      <Review alt="metaverse" />

      {/* ==========================faq================== */}
      <Faqq data={MetaverseFaqData} alt="metaverse"/>

      {/* ========================== Contact Button ================== */}
      <ContactBtn alt="metaverse" />
    </>
  );
}
Metaverse.layout = AppLayout;

export default Metaverse;
