import style from "./style.module.css";
import React, { useRef } from "react";
import Footer from "../../components/Footer/Index";
import Filter from "./Filter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToTop from "../../Hooks/ScrollToTop";
import PageLoading from "../../components/PageLoading/Index";

const Index = () => {
  const header_top = useRef(null);
  const header_bottom = useRef(null);
  useGSAP(() => {
    gsap.from(header_top.current, {
      delay: 0.75,
      duration: 1,
      opacity: 0,
      y: 30,
    });
    gsap.from(header_bottom.current, {
      delay: 1,
      duration: 1,
      opacity: 0,
      y: 20,
    });
  });
  return (
    <div className={style.main_cont}>
      <ScrollToTop />
      <div className={style.top_section}>
        <div className={style.header_cont}>
          <div className={style.header_top_section} ref={header_top}>
            <h1>Take a look at </h1>
            <h1>our best works</h1>
          </div>
          <p ref={header_bottom}>Help us make even more better works!</p>
        </div>
      </div>
      <Filter />
      <Footer />
    </div>
  );
};

export default PageLoading(Index);
