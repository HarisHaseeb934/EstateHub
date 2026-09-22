"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import NavOp from "../ui/NavOp";

import { HiOutlineHome } from "react-icons/hi2";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showNavColor, setShowNavColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  console.log(pathname)

  let isSolid = pathname === "/blogs" || pathname === "/allblogs" || pathname === "/blogs/1";

  useEffect(() => {
    const handleNav = () => {
      let currentScrollY = window.scrollY;
      const threshold = window.innerHeight / 2;

      if (currentScrollY < lastScrollY.current) {
        setShowNav(true);
        if (currentScrollY !== 0 || currentScrollY > threshold) {
          setShowNavColor(true);
        } else {
          setShowNavColor(false);
        }
      }
      if (currentScrollY > lastScrollY.current) {
        setShowNav(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleNav);
    return () => {
      window.removeEventListener("scroll", handleNav);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  return (
    <div
      className={`fixed w-full top-0 ${showNav ? "translate-y-0" : "-translate-y-full"}  transition-translate duration-300 z-50`}
    >
      <header
        className={`w-full flex justify-center transition-all  duration-500 z-50 ${showNavColor ? `${isSolid ? "bg-brand-navy" : "bg-black/30 backdrop-blur-md "}` : `${isSolid ? "bg-brand-navy" : "bg-transparent backdrop-blur-xs"}`}`}
      >
        {/* ${showNavColor ? "bg-black/30 backdrop-blur-md " : "bg-transparent backdrop-blur-xs"}  */}
        <nav className="max-w-310 w-full min-h-20 px-5 flex justify-between items-center relative">
          {/* <span className="text-white bg-brand-navy relative flex justify-center shadow-[0_2px_4px_rgba(0,0,0,0.05),0_12px_24px_rgba(0,0,0,0.5)] items-center border rounded-full px-1">
                            <Home className="absolute text-brand-darkGold z-0 " size={45} />
                            <span className="sm:text-2xl text-xl relative z-10 font-syne font-bold">Restate</span>
                        </span> */}

          <Link href={'/'} className="cursor-pointer">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-700 bg-brand-darkGold">
                <HiOutlineHome className="w-5 h-5 text-white" />
              </div>
              <span>EstateHub</span>
            </div>
          </Link>

          <div className="hidden mx-auto w-fit absolute min-[865px]:flex inset-x-0 items-center justify-center">
            <NavOp stylesDiff={" "} />
          </div>

          <div className="flex  items-center gap-2  text-brand-text">
            <Link href={'/contact'}><Button
              content={"Contact Us"}
              colors={
                "text-brand-text hidden sm:flex hover:bg-transparent hover:[text-shadow:0_2px_4px_rgba(0,0,0,1.5)]  hover:border-brand-text bg-brand-darkGold border-brand-darkGold"
              }
            /></Link>
            <div
              className="hidden justify-center transition-colors items-center max-[865px]:flex hover:bg-brand-accent gap-1.5 flex-col px-2 py-3 rounded"
              onClick={() => setShowMenu(!showMenu)}
            >
              <span
                className={`w-6 border transition-transform duration-500 border-brand-text flex ${showMenu ? "-rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 border transition-opacity duration-500 border-brand-text flex mr-2 ${showMenu ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-6 border border-brand-text duration-500 flex ${showMenu ? "rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`absolute left-0 top-20 z-50 min-[865px]:hidden  w-full grid duration-500 ease-in-out overflow-hidden transition-all bg-brand-accent/80 backdrop-blur-2xl ${showMenu ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}   `}
      >
        <NavOp
          stylesDiff={"flex-col overflow-hidden  p-3"}
          pWrapper={"overflow-hidden"}
        />
      </div>
    </div>
  );
};

export default Navbar;
