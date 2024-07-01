import React, { useEffect, useState, useContext, useRef } from "react";
import style from "../../assets/styles/navBar.module.css";

import { NavLink, useLocation } from "react-router-dom";
import UseMagnet from "../../hooks/UseMagnet";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import LuxSkinIcon from "../../assets/icons/LuxSkinIcon";
import MenuIcon from "./MenuIcon";
function Index() {
  const location = useLocation();
  const [endpoint, setEndpoint] = useState("");
  const [menuClick, setMenuClick] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const menuActv = useRef(false);
  const ulRef = useRef(null);
  useEffect(() => {
    setEndpoint(location.pathname);
  }, [location.pathname]);
  useGSAP(() => {
    gsap.to(ulRef.current.children, {
      duration: 0,
      x: -50,
      opacity: 0,
    });
  });
  function ShowMFunction() {
    if (menuActv.current) {
      setTimeout(() => {
        setShowMenu(!showMenu);
      }, 1000);
      gsap.to(ulRef.current.children, {
        duration: 0.3,
        x: -50,
        opacity: 0,
        ease: "power3.out",
      });
    } else {
      setShowMenu(!showMenu);
      setTimeout(() => {
        gsap.to(ulRef.current.children, {
          duration: 0.25,
          x: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
        });
      }, 450);
    }
  }
  function handleMenuClose() {
    ShowMFunction();
    menuActv.current = !menuActv.current;
    setMenuClick(false);
    setTimeout(() => {
      setMenuClick(true);
    }, 1000);
  }
  return (
    <div className={style.fs_cont}>
      <div
        className={`${style.menu_cont} ${menuActv.current ? style.active : ""}`}
        style={{
          visibility: showMenu ? "visible" : "hidden",
          pointerEvents: showMenu ? "all" : "none",
          transition: menuClick
            ? " height 0s,padding 0s"
            : " height 0.8s,padding 0.8s",
        }}
      >
        <div className={style.menu_inside_cont}>
          <div className={style.links_cont}>
            <ul ref={ulRef}>
              <li>
                <UseMagnet str="0.4" drt="0.8">
                  <NavLink
                    to="/works"
                    className={endpoint === "/works" ? style.active : null}
                    onClick={() => {
                      setTimeout(() => {
                        handleMenuClose();
                      }, 250);
                    }}
                  >
                    <UseMagnet str="0.15" drt="0.8">
                      <p>WORKS</p>
                    </UseMagnet>
                  </NavLink>
                </UseMagnet>
              </li>
              <li>
                <UseMagnet str="0.4" drt="0.8">
                  <a href="#">
                    <UseMagnet str="0.15" drt="0.8">
                      <p>RATE US</p>
                    </UseMagnet>
                  </a>
                </UseMagnet>
              </li>
              <li>
                <UseMagnet str="0.4" drt="0.8">
                  <a href="#">
                    <UseMagnet str="0.15" drt="0.8">
                      <p>ABOUT US</p>
                    </UseMagnet>
                  </a>
                </UseMagnet>
              </li>
              <li>
                <UseMagnet str="0.4" drt="0.8">
                  <NavLink
                    to="/contact"
                    className={endpoint === "/contact" ? style.active : null}
                    onClick={() => {
                      setTimeout(() => {
                        handleMenuClose();
                      }, 250);
                    }}
                  >
                    <UseMagnet str="0.15" drt="0.8">
                      <p>CONTACT</p>
                    </UseMagnet>
                  </NavLink>
                </UseMagnet>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className={style.main_cont}>
        <div className={style.left_side}>
          <a href="/">
            <LuxSkinIcon
              className={
                endpoint === "/" ? `${style.logo} ${style.active}` : style.logo
              }
            />
          </a>
        </div>
        <MenuIcon
          MenuCloseFunction={handleMenuClose}
          clickStyle={{ pointerEvents: menuClick ? "all" : "none" }}
          menuActv={menuActv.current}
        />
      </nav>
    </div>
  );
}

export default Index;
