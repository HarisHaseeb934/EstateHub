'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  {
    title: "Fintech &\nBanking",
    href: "/fintech-and-banking",
    imgSrc:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    alt: "Fintech and Banking",
    isShifted: false,
  },
  {
    title: "Healthcare &\nWellness",
    href: "/healthcare-and-wellness",
    imgSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Healthcare and Wellness",
    isShifted: true,
  },
  {
    title: "Education &\nE-Learning",
    href: "/education-and-elearning",
    imgSrc:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
    alt: "Education and E-Learning",
    isShifted: false,
  },
  {
    title: "Real Estate &\nProperty",
    href: "/real-estate-property",
    imgSrc:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    alt: "Real Estate and Property",
    isShifted: true,
  },
  {
    title: "Retail &\nE-Commerce",
    href: "/retail-ecommerce",
    imgSrc:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    alt: "Retail and E-Commerce",
    isShifted: false,
  },
  {
    title: "Supply Chain\n& Logistics",
    href: "/supply-chain-logistics",
    imgSrc:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    alt: "Supply Chain and Logistics",
    isShifted: true,
  },
  {
    title: "Public Sector",
    href: "/public-sector",
    imgSrc:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    alt: "Public Sector",
    isShifted: false,
  },
  {
    title: "Startups",
    href: "/startups",
    imgSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    alt: "Startups",
    isShifted: true,
  },
  {
    title: "Oil, Gas\n& Energy",
    href: "/oil-gas-energy",
    imgSrc:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    alt: "Oil, Gas and Energy",
    isShifted: false,
  },
  {
    title: "Tele-\ncommunication",
    href: "/telecommunication",
    imgSrc:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    alt: "Telecommunication",
    isShifted: true,
  },
  {
    title: "NGO",
    href: "/ngo",
    imgSrc:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    alt: "NGO",
    isShifted: false,
  },
  {
    title: "NGO",
    href: "/ngo",
    imgSrc:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    alt: "NGO",
    isShifted: true,
  },
];

export default function IndustriesEmpower() {
  return (
    <section className="w-full bg-brand-accent py-14 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Industries We <span className="block text-[#65b0ff]">Empower</span>
          </h2>
        </div>
        <p className="mb-10 max-w-3xl text-white/85 text-sm sm:text-base leading-relaxed">
          We deliver tailored digital solutions across industries, empowering
          businesses to innovate, scale, and thrive in a connected world.
        </p>

        <div className="overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={18}
            loop={true}
            grabCursor={true}
            watchOverflow={true}
            centeredSlides={false}
            centerInsufficientSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 1.08,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.35,
              },
              640: {
                slidesPerView: 1.7,
              },
              768: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3.05,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!overflow-visible pb-8"
          >
            {images.map((image, index) => {
              const { title, isShifted, alt, imgSrc } = image;

              return (
                <SwiperSlide
                  key={`${title}-${index}`}
                  className={`h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] transition-transform pb-20 duration-300 ease-out ${
                    isShifted ? "translate-y-12" : "translate-y-0"
                  }`}
                >
                  <div className="group relative h-full w-full overflow-hidden rounded-[28px] sm:rounded-[34px] lg:rounded-[42px] shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                    <img
                      src={imgSrc}
                      alt={alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                      <h3 className="max-w-[70%] text-lg font-semibold leading-tight text-white sm:text-xl lg:text-2xl">
                        {title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

