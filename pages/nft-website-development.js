
import AppLayout from "../component/Layout/Layout";
import TopProject from "../component/Section/TopProject";
import Head from "next/head";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import Faqq from "../component/Section/Faqq";
import { NftDevelopmentFaqData } from "/Data/FaqData/FaqData";
import HeroSection from "../component/NftDevelopmentPage/HeroSection";
import DescriptionSection from "../component/Section/DescriptionSection";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { NftDevelopmentServiceData } from "/Data/ServiceData/ServiceData";
import FeaturesItem from "../component/Section/FeaturesItem";
import { NftDevelopmentFeaturesData } from "/Data/FeaturesData/FeaturesData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { NftDevelopmentDescriptionData } from "/Data/DescriptionData/DescriptionData";
import { NftDevelopmnetBenifitsData } from "/Data/BenifitsItemData/BenifitsItemData";
import NftDevelopmentTechStack from "../component/Section/NftDevelopmentTechStack";
import SaveTime from "../component/Section/SaveTime";
import WorkPlace from "../component/Section/WorkPlace";
function NFTWebsiteDevelopmentPage() {
  return (
    <>
      <Head>
        <title>
          Web Development Services for NFT Defi and Crypto Collectibles
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="description"
          content="Looking for professional NFT website development services? We specialize in crafting unique, secure, and user-friendly NFT platforms to help your business thrive in the digital collectibles market. Get started with us today!"
        ></meta>
        <meta
          name="og:description"
          content="Looking for professional NFT website development services? We specialize in crafting unique, secure, and user-friendly NFT platforms to help your business thrive in the digital collectibles market. Get started with us today!"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Web Development Services for NFT Defi and Crypto Collectibles"
        />
        <meta property="og:image" content="assets/img/meta/2.jpg" />
        <meta property="image" content="assets/img/meta/2.jpg" />
        <meta
          name="keywords"
          content="nft website development Web Development Services for NFT Defi and Crypto Collectibles"
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
      <main className="home-page">
        <div className="home-page-overlay"></div>
        <HeroSection />
        {/* =============service card section ================== */}
        <SaveTime />
        {/* =============service card section ================== */}
        {/* ================about us section ================== */}
        <DescriptionSection data={NftDevelopmentDescriptionData} />

        {/* ================about us section end ================== */}
        {/* ==============pricing range ============== */}
        <div className="cpt-6">
          <PriceRangeSlider />
        </div>
        {/* ==============pricing range end ============== */}
        {/* ===================demo request section end ================== */}

        {/* ===================service section ================== */}
        <ServiceCardItem
          data={NftDevelopmentServiceData}
          title={"Token Development Services"}
          description={`At NFT Constructer, we specialize in the art of 
          crafting exceptional NFT websites. With a decade of experience in
          the digital realm, we are at the forefront of NFT website development.
          Our team of experts is dedicated to bringing your unique vision to life 
          in the digital art and collectibles space. Whether you're an artist,
          creator, or collector, we're here to turn your NFT dreams into reality.`}
          id={"nft-development"}
          alt="nft website development"
        />
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpt-6">
          <Featured alt="nft website development" />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================development track ================== */}
        <NftDevelopmentTechStack
        alt="nft website development"
          short_dis={`NFT CONSTRUCTER is a leading NFT, Defi Metaverse development company.
        We are highly innovative & work with advanced technologies.`}
        />

        {/* ==================Features================== */}
        <div className="cpb-7">
          <FeaturesItem data={NftDevelopmentFeaturesData}  title={"NFT Development Services"} alt="nft website development" />
        </div>

        {/* ===============Benefits================== */}
        <BenifitsItem
          data={NftDevelopmnetBenifitsData}
          title={"NFT Development"}
          alt="nft website development"
          description="As you embrace this digital ownership revolution, NFT Constructer is your trusted companion, ensuring that your digital treasures stand out in a rapidly evolving landscape. The future of NFT development begins here, with us."
        />
        {/* ===============Benefits end================== */}

        {/* =====================top project===================== */}
        <TopProject alt="nft website development"/>

        {/* <WorkPlace/> */}

        {/* =====================happy clients======================= */}
        <Review alt="nft website development" />

        {/* ==========================faq================== */}
        <Faqq data={NftDevelopmentFaqData}  alt="nft website development"/>

        {/* ===============================contact us ================ */}
        <ContactBtn alt="nft website development"/>
      </main>
    </>
  );
}
NFTWebsiteDevelopmentPage.layout = AppLayout;

export default NFTWebsiteDevelopmentPage;
