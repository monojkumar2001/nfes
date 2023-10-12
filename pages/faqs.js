import React, { useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Faq from "react-faq-component";
import Styles from "../styles/pages/HomePage/HomeFaq.module.css";
import ContactBtn from "../component/Section/ContactBtn";
function FaqPage() {
  const data = {
    rows: [
      {
        title: "What is an NFT?",
        content: `An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content using blockchain technology.`,
      },
      {
        title: "How do I buy or sell NFTs?",
        content:
          "NFTs can be bought and sold on NFT marketplaces such as OpenSea, Rarible, and NBA Top Shot. You typically need cryptocurrency to make purchases.",
      },
      {
        title: "What are gas fees in NFT transactions?",
        content: `Gas fees are the costs associated with processing transactions on blockchain networks. They can vary depending on network congestion and the blockchain used. Be aware of these fees when trading NFTs.`,
      },
      {
        title: "Can NFTs be transferred or sold?",
        content: `- Yes, NFTs can be transferred or sold on compatible marketplaces. Ownership and transaction history are recorded on the blockchain.`,
      },
      {
        title: "Which blockchain platforms support NFT development?",
        content:`Ethereum, Binance Smart Chain, Polkadot, Flow, and Tezos are some popular blockchain platforms that support NFT development.`,
      },
      {
        title: "What is the metaverse?",
        content:`The metaverse stands as an infinite digital universe, sculpted by the visionary and the proficient alike. Here, diverse souls coalesce to engage, connect, toil, and luxuriate in an interwoven expanse where the constraints of the tangible world are but a distant memory.
        `,
      },
      {
        title: "How do royalties work with NFTs?",
        content:` NFT creators can set royalty percentages, ensuring that they receive a portion of future sales when the NFT is resold in secondary markets. This is often encoded in the NFT's smart contract.`,
      },
      {
        title: "What is minting an NFT?",
        content:`Minting an NFT is like giving birth to a digital collectible. You start by uploading a digital item, like artwork or music, add some details about it, and then the blockchain magically creates a one-of-a-kind digital certificate that proves its uniqueness and ownership. It's like turning your special digital creation into a rare, collectible item that can be bought, sold, or shown off in the digital world.
        `,
      },
      {
        title: "What is a smart contract?",
        content:`A smart contract is a self-executing contract with the terms of the agreement directly written into code. It automatically executes and enforces the terms of an agreement when predefined conditions are met, without the need for intermediaries.
        `,
      },
      {
        title: "Which blockchain platforms support smart contracts?",
        content:`Smart contracts are most commonly associated with the Ethereum blockchain, but they are also supported by other platforms like Binance Smart Chain, Cardano, and Polkadot. Each platform may have its own programming language and capabilities for creating smart contracts.
        `,
      },
      {
        title: "Are smart contracts secure?",
        content:`Smart contracts are considered secure when well-audited and properly written. However, vulnerabilities in code can lead to security breaches and loss of funds.
        `,
      },
      {
        title: "What is NFT in web development?",
        content:`Imagine an NFT website or marketplace as a digital treasure chest where you can buy, sell, and trade one-of-a-kind digital items known as NFTs. Building an NFT website is like crafting a special online store where these unique digital treasures, securely stored on a blockchain, can find new owners and adventures.
        `,
      },
      {
        title: "Do I need to be a programmer to develop NFTs?",
        content:`Many individuals are curious about the technical requirements and whether coding skills are necessary to get involved in NFT development.
        `,
      },
      {
        title: "What role do NFT marketplaces play in NFT development?",
        content:`People inquire about the significance of NFT marketplaces in showcasing, buying, and selling NFTs and how to choose the right platform.
        `,
      },
    ],
  };
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };
  return (
    <>
      <Head>
        <title>Frequently Asked Questions (FAQ) - Your Key Resource for Answers</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />

        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content=" Explore our FAQ page to get quick, comprehensive answers to common queries. Find clarity on our services and offerings. Your one-stop information hub"
        ></meta>
        <meta
          name="og:description"
          content=" Explore our FAQ page to get quick, comprehensive answers to common queries. Find clarity on our services and offerings. Your one-stop information hub"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Frequently Asked Questions (FAQ) - Your Key Resource for Answers"
        />
        <meta property="og:image" content="assets/img/meta/faqs.jpg" />
        <meta property="image" content="assets/img/meta/faqs.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <div className={`${Styles.faqs_section_page} cpb-6  cpt-7`}>
        <div className={Styles.yellow_filter}></div>
        <div className={Styles.green_filter}></div>
        <div className="container">
          <div className="section-title">
            <h2 className="sec-title">Your Questions Answered</h2>
            <p> Find answers of your  questions on our FAQs page. Get the information you need quickly and efficiently. Your source for clarity and solutions.</p>
          </div>
          <div className={`${Styles.faq_content}  cpt-7`}>
            <Faq data={data} styles={styles} />
          </div>
        </div>
      </div>
      <ContactBtn alt="faqs" />
    </>
  );
}

FaqPage.layout = AppLayout;

export default FaqPage;
