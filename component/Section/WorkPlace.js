import React from "react";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "../../styles/section/WorkPlace.module.css";
import Website from "../json/website.json";
import Lottie from "lottie-react";
import Link from "next/link";
const WorkPlace = () => {
  const [isLooping, setIsLooping] = useState(true);
  const handleReplayClick = () => {
    setIsLooping(false);
  };
  const [activePlace, setActivePlace] = useState(1);
  const togglePlace = (index) => {
    setActivePlace(index);
  };
  return (
    <>
      <section className={`${styles.work_place} cpt-6`}>
        <div className="container">
          <div className={styles.work_place_wrapper}>
            <div className={`section-title`}>
              <h2 className="sec-title">Get started with the Alchemy SDK</h2>
              <p className="sec-des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className={`${styles.work_place_header} cpt-7`}>
              <button
                className={
                  activePlace === 1
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(1);
                }}
              >
            Website
              </button>
              <button
                className={
                  activePlace === 2
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(2);
                }}
              >
                Development
              </button>
              <button
                className={
                  activePlace === 3
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(3);
                }}
              >
                Discovery
              </button>
              <button
                className={
                  activePlace === 4
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(4);
                }}
              >
                Architecture & Design
              </button>
              <button
                className={
                  activePlace === 5
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(5);
                }}
              >
                Release & Support
              </button>
            </div>
            <div className={styles.work_place_content}>
              <div
                className={
                  activePlace === 1
                    ? `${styles.work_place_content_item} ${styles.active}`
                    : `${styles.work_place_content_item}`
                }
              >
                <div className={`${styles.work_place_content_wrapper} cpb-6`}>
                  <div className={styles.work_place_content_left}>
                    <h1>Website</h1>
                    <p>
                      This phase aims to bring everyone involved on the same
                      page. Before starting Discovery we get to know each other
                      and define actual busines need and your persnol
                      expectations and how we can fit them
                    </p>

                    <Link href={"/"}>Get started for free</Link>
                  </div>
                  <div className={styles.work_place_content_right}>
                    <button className={styles.button_replay} onClick={handleReplayClick}>Replay</button>
                    <div className={`${styles.scale_tabs_code_snippet}`}>
                      <div className={styles.scale_tab_code_numbers_container}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                      </div>
                      <div className={styles.scale_tabs_code_container}>
                        <div className={styles.nft_tab_cover}>
                          <div className={styles.text_color_code_green}>
                            //Show all NFTs owned by user
                          </div>
                        </div>
                        <div className={styles.nft_tab_cover}>
                         
                        </div>
                        <div className={styles.nft_tab_cover}>
                          <div>
                            <span className={styles.text_color_pink}>
                              getNftsForOwner
                            </span>
                            ('0xshah.eth')
                          </div>
                        </div>
                      </div>
                    </div>
                    <Lottie animationData={Website}   loop={isLooping} />
                  </div>
                </div>
              </div>
              <div
                className={
                  activePlace === 2
                    ? `${styles.work_place_content_item} ${styles.active}`
                    : `${styles.work_place_content_item}`
                }
              >
                <h1>hello workafd2</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPlace;
