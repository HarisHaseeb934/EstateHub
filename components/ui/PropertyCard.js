"use client";

import Image from "next/image";
import { useState } from "react";
import { PiBedBold, PiBathtubBold, PiRulerBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

export default function PropertyCard({ property: p, onToggleSave, view}) {
  const [saved, setSaved] = useState(false);

  const toggle = () => {
    setSaved(!saved);
    onToggleSave?.(p.id, !saved);
  };

  return (
    <article className={`overflow-hidden rounded-md flex border border-[#ece9e3] bg-white text-[#16181d] shadow-sm dark:shadow-none ${view === "list"? "": ""}`}>
      <div className={`relative ${view === "list" ? "aspect-[3/2] h-full" : "aspect-[16/10]"} bg-gradient-to-br from-[#3b3a38] to-[#8c7a62]`}>
        {p.image && (
          <Image
            src={p.image}
            alt={p.title}
            fill
            // (max-width: 640px) 100vw, 
            // sizes="300px"
            className={`object-cover ${view === "list"? "w-[300px]": "w-[300px]"}`}
          />
        )}
        {p.tag && (
          <span className="absolute left-3 top-3 rounded bg-brand-darkGold px-2.5 py-1 text-xs font-semibold text-white ">
            {p.tag}
          </span>
        )}
        <button
          type="button"
          aria-pressed={saved}
          aria-label={`${saved ? "Remove" : "Save"} ${p.title}`}
          onClick={toggle}
          className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white hover:bg-amber-100 transition-colors ${
            saved ? "text-[#d64545]" : "text-[#16181d] text-[#f1efea]"
          }`}
        >
          {saved ? (
            <HiHeart className="text-brand-gold" size={18} />
          ) : (
            <HiOutlineHeart className="text-black " size={18} />
          )}
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-[17px] font-bold">{p.title}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-[#404246]">
          <IoLocationOutline />
          {p.location}
        </p>

        <ul className="mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-[#404246]">
          <li className="flex items-center gap-1.5">
            <PiBedBold />
            {p.beds} Beds
          </li>
          <li className="flex items-center gap-1.5">
            <PiBathtubBold />
            {p.baths} Baths
          </li>
          <li className="flex items-center gap-1.5">
            <PiRulerBold />
            {p.sqft.toLocaleString("en-US")} sqft
          </li>
        </ul>

        <div className="mt-2 flex items-baseline justify-between border-[#ece9e3] pt-3.5 dark:border-[#2d3037]">
          <span className="text-base font-bold">
            PKR {p.price.toLocaleString("en-US")}
          </span>
          <span className="text-sm font-medium text-brand-darkGold">
            {p.status ?? "For Sale"}
          </span>
        </div>
      </div>
    </article>
  );
}
