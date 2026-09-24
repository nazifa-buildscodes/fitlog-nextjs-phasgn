"use client";

import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isPlan = pathname === "/my-plan";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#242830] bg-[#0d0f12]/95 backdrop-blur-md">
      <div className="container-fit flex min-h-[64px] items-center justify-between gap-4">

        {/* LEFT SIDE — MOBILE MENU + LOGO */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-lg text-[#d2d5da] transition hover:bg-[#1c2027] hover:text-white sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

         
{/*
  <Link
    href="/"
    onClick={closeMenu}
    className="flex shrink-0 items-center gap-2"
    aria-label="FitLog Home"
  >
    <Image
      src="/assets/logo.png"
      alt=""
      width={20}
      height={20}
      className="h-[20px] w-[20px] object-contain"
      priority
    />

    <span className="font-display text-[20px] leading-none text-white">
      FITLOG
    </span>
  </Link>
*/}

{/* Logo */}
<Link
  href="/"
  onClick={closeMenu}
  className="flex shrink-0 items-center gap-2 font-display text-lg text-white"
  aria-label="FitLog Home"
>
  <Dumbbell
    size={23}
    strokeWidth={3}
    className="text-[#c8ff00]"
  />
  FITLOG
</Link>


        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
              isHome
                ? "bg-[#1c2027] text-[#c8ff00]"
                : "text-[#c7cad0] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
              isPlan
                ? "bg-[#1c2027] text-[#c8ff00]"
                : "text-[#c7cad0] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* PLAN + SAVED */}
        <div className="flex items-center gap-4 text-sm font-bold">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#d2d5da] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#c8ff00] px-2 text-xs font-black text-[#11150b]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[#d2d5da] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="grid h-6 min-w-6 place-items-center rounded-full border border-[#858b95] px-2 text-xs text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="border-t border-[#242830] bg-[#111419] sm:hidden">
          <nav className="container-fit flex flex-col gap-1 py-3">

            <Link
              href="/"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                isHome
                  ? "bg-[#1c2027] text-[#c8ff00]"
                  : "text-[#c7cad0] hover:bg-[#1c2027] hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                isPlan
                  ? "bg-[#1c2027] text-[#c8ff00]"
                  : "text-[#c7cad0] hover:bg-[#1c2027] hover:text-white"
              }`}
            >
              My Plan
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}