import React, { useEffect, useState } from "react";
// import Typed from "react-typed";
import Image from "next/image";
import Link from "next/link";
import Styles from "../../styles/pages/PorfolioPage/PortfolioSingleHero.module.css";
const PortfolioSingleHero = () => {
  const imageUrls = [
    "/assets/images/portfolio/portfolio-img-1.svg",
    "/assets/images/portfolio/portfolio-img-2.svg",
    "/assets/images/portfolio/portfolio-img-3.svg",
    "/assets/images/portfolio/portfolio-img-4.svg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((preIndex) => (preIndex + 1) % imageUrls.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* <!-- =========== Portfolio-Hero-Start ================= --> */}
      <section className={Styles.portfolio}>
        <div className="container">
          <div className={Styles.portfolio_wrapper}>
            <div className={Styles.portfolio_left}>
              <h1>
                Here are some of our Recent <br />
                <span>Project</span>
              </h1>
              <p>
                Enhance your business with our excellent web 3.0 and blockchain
                based web tech services.
              </p>
            </div>
            <div className={Styles.portfolio_right}>
              <div className={Styles.portfolio_right_motior}>
                <Image
                  width={856}
                  height={576}
                  loading="lazy"
                  src={"/assets/images/portfolio/single-hero-bg.jpeg"}
                  alt={"portfolio"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.home_blur}></div>
      </section>
      {/* <!-- =========== Portfolio-Hero-end ================= --> */}
    </>
  );
};

export default PortfolioSingleHero;
