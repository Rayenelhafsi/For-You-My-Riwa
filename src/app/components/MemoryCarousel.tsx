import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// slick-theme.css removed to avoid font loading issues in sandbox environment
// We are using custom arrows and dots, so we don't need the default theme assets
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img1 from "figma:asset/c75fff3095bbab666123d0afccb7b698a7aa2d66.png";
import img2 from "figma:asset/0b51578771cc5fc2e30f1e26cb9664d5c46b2754.png";
import img3 from "figma:asset/2f29a8d86dc44d5ccd483bf45d24a791b43c5c36.png";
import img4 from "figma:asset/6fd69dc015d549639e057c4cacf9eb22a90a5498.png";

const images = [
  {
    url: img1,
    caption: "Our Beautiful Smiles"
  },
  {
    url: img2,
    caption: "nchlh we will marry"
  },
  {
    url: img3,
    caption: "Wardati"
  },
  {
    url: img4,
    caption: "first valentine date"
  }
];

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 w-10 h-10 before:content-['']`}
      style={{ ...style, right: "-15px" }}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-rose-500/80 hover:bg-rose-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg border border-rose-300/30 group">
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </div>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !flex items-center justify-center z-10 w-10 h-10 before:content-['']`}
      style={{ ...style, left: "-15px" }}
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-rose-500/80 hover:bg-rose-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg border border-rose-300/30 group">
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </div>
    </div>
  );
}

export const MemoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    appendDots: (dots: any) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-rose-300/30 hover:bg-rose-500 transition-colors cursor-pointer dot-custom" />
    )
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 px-4 relative">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
          <h3 className="text-2xl font-['Dancing_Script'] text-rose-200">Our Beautiful Memories</h3>
          <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-rose-200/20 shadow-xl">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-1 outline-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-grab active:cursor-grabbing">
                <ImageWithFallback
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <p className="text-white font-['Playfair_Display'] text-lg italic tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .slick-dots li { width: auto; margin: 0; }
        .slick-dots .slick-active .dot-custom { background-color: #f43f5e; transform: scale(1.2); }
      `}</style>
    </div>
  );
};
