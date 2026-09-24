"use client";

import { COUNTS, PRICE_RANGES, TYPES } from "./properties";

const field =
  "w-full bg-transparent text-sm outline-none placeholder:text-[#9a9ea6]";
const label = "mb-1 block text-xs text-[#6b6f76] dark:text-[#9a9ea6]";

function Select({ id, title, value, onChange, options }) {
  return (
    <div className="md:px-5">
      <label htmlFor={id} className={label}>
        {title}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${field} cursor-pointer`}
      >
        {options.map((o) => (
          <option key={o} value={o} className="text-black">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function SearchBar({ values, onChange, onSearch }) {
  const set = (key) => (v) => onChange({ ...values, [key]: v });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
      role="search"
      className="mx-auto grid max-w-[1160px] gap-4 rounded-xl bg-white p-5 shadow-lg dark:bg-[#1f2126] md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr_auto] md:items-center md:divide-x md:divide-[#ece9e3] md:dark:divide-[#2d3037]"
    >
      <div className="md:pr-5">
        <label htmlFor="loc" className={label}>
          Location
        </label>
        <input
          id="loc"
          value={values.location}
          onChange={(e) => set("location")(e.target.value)}
          placeholder="Enter location"
          className={field}
        />
      </div>
      <Select
        id="type"
        title="Property Type"
        value={values.type}
        onChange={set("type")}
        options={TYPES}
      />
      <Select
        id="price"
        title="Price Range"
        value={values.price}
        onChange={set("price")}
        options={PRICE_RANGES.map((r) => r.label)}
      />
      <Select
        id="beds"
        title="Bedrooms"
        value={values.beds}
        onChange={set("beds")}
        options={COUNTS}
      />
      <Select
        id="baths"
        title="Bathrooms"
        value={values.baths}
        onChange={set("baths")}
        options={COUNTS}
      />
      <button
        type="submit"
        className="h-12 rounded-md bg-[#16181d] px-8 text-sm font-medium text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b98a4e] dark:bg-[#b98a4e] dark:hover:bg-[#a67a42] md:ml-4"
      >
        Search
      </button>
    </form>
  );
}
