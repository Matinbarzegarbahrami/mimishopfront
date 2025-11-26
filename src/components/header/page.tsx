"use client";
import { Menu, Undo2 } from 'lucide-react';
import style from "./style.module.css"
import { useState, useRef, useEffect } from "react";


export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const btnRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleOutsideClick(e:any) {
      if (!navbar) return;

      // اگر کلیک داخل نوبار یا روی دکمه نبود -> ببند
      const clickedInsideNav = navRef.current?.contains(e.target);
      const clickedOnButton = btnRef.current?.contains(e.target);
      if (!clickedInsideNav && !clickedOnButton) {
        setNavbar(false);
      }
    }

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [navbar]);

  return (
    <div className={style.header}>
      <button
        ref={btnRef}
        aria-expanded={navbar}
        onClick={() => setNavbar(prev => !prev)}
        className={style.navbtn}
      >
        <Menu />
      </button>

      <ul ref={navRef} className={navbar ? style.navbarT : style.navbarF}>
        <div className={style.navhead}>
          <li><a style={{color:"#fff", fontWeight:"bold", fontSize:20}} href="">null shop</a></li>
          <li><button className={style.navbarbtn} onClick={()=>setNavbar(false)}><Undo2 color={"#fff"}/></button></li>
        </div>
        <div className={style.navitems}>
          <li><a style={{color:"#fff"}} href="">خانه</a></li>
          <li><a style={{color:"#fff"}} href="#">آدرس</a></li>
          <li><a style={{color:"#fff"}} href="#">پشتیبانی</a></li>
          <li><a style={{color:"#fff"}} href="#">درباره ما</a></li>
        </div>
      </ul>

      <a href="#">null shop</a>
    </div>
  );
}
