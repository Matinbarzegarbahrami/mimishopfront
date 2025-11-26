"use client";
import { Menu, Undo2 } from "lucide-react";
import style from "./style.module.css";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  // Ref دقیق برای هر عنصر
  const navRef = useRef<HTMLUListElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  // Detect click outside navbar
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!navbar) return;

      const clickedInsideNav = navRef.current?.contains(e.target as Node);
      const clickedOnButton = btnRef.current?.contains(e.target as Node);

      if (!clickedInsideNav && !clickedOnButton) {
        setNavbar(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [navbar]);

  return (
    <header className={style.header}>
      {/* دکمه باز/بستن منو */}
      <button
        ref={btnRef}
        aria-expanded={navbar}
        onClick={() => setNavbar(prev => !prev)}
        className={style.navbtn}
      >
        <Menu />
      </button>

      {/* منو */}
      <ul ref={navRef} className={navbar ? style.navbarT : style.navbarF}>
        <div className={style.navhead}>
          <li>
            <a style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }} href="">
              null shop
            </a>
          </li>
          <li>
            <button
              className={style.navbarbtn}
              onClick={() => setNavbar(false)}
            >
              <Undo2 color="#fff" />
            </button>
          </li>
        </div>

        <div className={style.navitems}>
          <li>
            <a style={{ color: "#fff" }} href="">
              خانه
            </a>
          </li>
          <li>
            <a style={{ color: "#fff" }} href="#">
              آدرس
            </a>
          </li>
          <li>
            <a style={{ color: "#fff" }} href="#">
              پشتیبانی
            </a>
          </li>
          <li>
            <a style={{ color: "#fff" }} href="#">
              درباره ما
            </a>
          </li>
        </div>
      </ul>

      <a href="#">null shop</a>
    </header>
  );
}
