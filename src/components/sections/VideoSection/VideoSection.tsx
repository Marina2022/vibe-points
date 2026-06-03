"use client";

import { useState } from "react";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="max-w-[1380px] mx-auto px-5 pt-10 pb-15 lg:pt-0 xs:pb-20">
      <div
        className="relative rounded-[30px] lg:rounded-[40px] overflow-hidden aspect-square lg:aspect-auto lg:h-[733px] bg-white group [transform:translateZ(0)]"
        onClick={!playing ? () => setPlaying(true) : undefined}
        style={{ cursor: playing ? "default" : "pointer" }}
      >
        {playing ? (
          <video
            src="/hero/hero-video.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            controls
            autoPlay
            preload="auto"
          />
        ) : (
          <img
            src="/hero/hero-video-preview.png"
            alt="Видео FORVIBE ПОИНТ"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-lime flex items-center justify-center shadow-[0px_6px_20px_0px_rgba(173,216,77,0.5)] transition-transform duration-200 group-hover:scale-110">
              <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-x-[2px] lg:w-7 lg:h-8"
              >
                <path d="M2 2L22 14L2 26V2Z" fill="#1a1a1a" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
