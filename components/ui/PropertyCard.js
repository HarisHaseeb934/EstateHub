"use client";

import Image from "next/image";
import { useState } from "react";
import { PiBedBold, PiBathtubBold, PiRulerBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

export default function PropertyCard({ property: p, onToggleSave, view }) {
  const [saved, setSaved] = useState(false);

  const toggle = () => {
    setSaved(!saved);
    onToggleSave?.(p.id, !saved);
  };

  return (
    <article className={`overflow-hidden rounded-md flex ${view === "list" ? "flex-row items-stretch" : "flex-col"} border border-[#ece9e3] bg-white text-[#16181d] shadow-sm`}>
      <div className={`relative shrink-0 bg-gradient-to-br ${view === "list" ? "w-24 sm:w-40 md:w-auto aspect-square md:aspect-[16/10]" : "aspect-[16/10]"} from-[#3b3a38] to-[#8c7a62]`}>
        {p.image && (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes={view === "list" ? "(max-width: 768px) 80px, 300px" : "(max-width: 640px) 100vw, 300px"}
            className="w-full h-full object-cover"
          />
        )}
        {p.tag && (
          <span className="absolute left-3 top-3 rounded bg-brand-darkGold px-2.5 py-1 text-xs font-semibold text-white">
            {p.tag}
          </span>
        )}
        <button
          type="button"
          aria-pressed={saved}
          aria-label={`${saved ? "Remove" : "Save"} ${p.title}`}
          onClick={toggle}
          className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white hover:bg-amber-100 transition-colors"
        >
          {saved ? (
            <HiHeart className="text-brand-gold" size={18} />
          ) : (
            <HiOutlineHeart className="text-black" size={18} />
          )}
        </button>
      </div>

      <div className={`min-w-0 flex-1 ${view === "list" ? "p-2 sm:p-4" : "p-4"}`}>
        <h3 className={`truncate ${view === "list" ? "text-[13px] sm:text-[17px]" : "text-[17px]"} font-bold`}>
          {p.title}
        </h3>
        <p className={`mt-1.5 flex items-center gap-1.5 ${view === "list" ? "text-[10px] sm:text-[13px]" : "text-[13px]"} text-[#404246]`}>
          <IoLocationOutline className="shrink-0" />
          <span className="truncate">{p.location}</span>
        </p>

        <ul className={`flex flex-wrap gap-x-4 gap-y-1.5 ${view === "list" ? "mt-2 text-[10px] sm:text-[13px] sm:mt-3.5" : "text-[13px] mt-3.5"} text-[#404246]`}>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <PiBedBold className="shrink-0" />
            {p.beds} Beds
          </li>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <PiBathtubBold className="shrink-0" />
            {p.baths} Baths
          </li>
          <li className="flex items-center gap-1.5 whitespace-nowrap">
            <PiRulerBold className="shrink-0" />
            {p.sqft.toLocaleString("en-US")} sqft
          </li>
        </ul>

        <div className={`flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-[#ece9e3] ${view === "list" ? "mt-1 pt-1 sm:pt-3.5 sm:mt-2" : "pt-3.5 mt-2"} dark:border-[#2d3037]`}>
          <span className={`truncate ${view === "list" ? "text-[13px] sm:text-[17px]" : "text-[17px]"} font-bold`}>
            PKR {p.price.toLocaleString("en-US")}
          </span>
          <span className={`whitespace-nowrap ${view === "list" ? "text-[13px] sm:text-[17px]" : "text-[17px]"} font-medium text-brand-darkGold`}>
            {p.status ?? "For Sale"}
          </span>
        </div>
      </div>
    </article>
  );
}
