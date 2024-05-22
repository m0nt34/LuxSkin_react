import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import UseMagnet from "../../Hooks/UseMagnet";

function Index() {
  const TDModel = useRef(null);
  const footer = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      footer.current,

      {
        duration: 0.6,
        borderTopLeftRadius: "100%calc(1vw*0)%",
        borderTopRightRadius: "100%calc(1vw*0)%",
      },
      {
        duration: 0.6,
        borderTopLeftRadius: "100%calc(1vw*20)",
        borderTopRightRadius: "100%calc(1vw*20)",
        scrollTrigger: {
          trigger: footer.current,
          start: "30%% bottom",
          end: "90% 81%",
          scrub: true,
        },
      }
    );
  });
  return (
    <footer className={style.footer} ref={footer}>
      <div className={style.top_section}>
        <div className={style.subscription_container}>
          <p>STAY TUNED</p>
          <h3>
            <span>get our</span>
            <br />
            <span>newsletter</span>
          </h3>
          <div className={style.email_and_btn}>
            <div className={style.input_fld}>
              <input type="text" placeholder=" " />
              <span>Your email</span>
            </div>
            <UseMagnet str="0.4" drt="0.4">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </UseMagnet>
          </div>
        </div>

        <div className={style.canvas_cont}>
          <Spline
            style={{
              width: "100%",
              height: "100%",
            }}
            className={style.spline_model}
            ref={TDModel}
            scene="https://prod.spline.design/aCLBNCtcOUJZLROR/scene.splinecode"
          />
        </div>
        <div className={style.contacts_section}>
          <p>CONTACT US</p>
          <a href="#">luxskin@gmail.com</a>
          <a href="#">+995-555-555</a>
          <a href="#">esada es adigili</a>
        </div>
      </div>
      <div className={style.bottom_section}>
        <div className={style.social_media_container}>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                />
              </svg>
            </a>
          </UseMagnet>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
            </a>
          </UseMagnet>
          <UseMagnet str="0.7" drt="0.4">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                />
              </svg>
            </a>
          </UseMagnet>
        </div>
        <div className={style.language_container}>
          <nav className={style.language_options}>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="ka">
                <UseMagnet str="0.2" drt="0.4">
                  <span>ქართული</span>
                </UseMagnet>
              </a>
            </UseMagnet>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="ru">
                <UseMagnet str="0.2" drt="0.4">
                  <span>Русский</span>
                </UseMagnet>
              </a>
            </UseMagnet>
            <UseMagnet str="0.4" drt="0.4">
              <a href="#" data-lang="en" style={{ color: "var(--white)" }}>
                <UseMagnet str="0.2" drt="0.4">
                  <span>English</span>
                </UseMagnet>
              </a>
            </UseMagnet>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Index;
