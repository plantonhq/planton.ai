"use client";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function RolesComponent() {
  const words = ["One Platform", "Every Cloud"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <Box className="word-carousel h-[135px] p-1 bg-gradient-[270] from-[#0049A5] to-[#8570F4] w-fit rounded-[32px] overflow-hidden">
      <Box className="word-carousel-container h-[127px] overflow-hidden bg-black/50 rounded-[32px] px-6 flex flex-col">
        <Box
          className="transition-all duration-500"
          style={{ marginTop: `-${129 * currentIndex + 0}px` }}
        >
          {words.map((word, index) => (
            <Typography
              fontSize={86}
              key={index}
              className={`font-extrabold transition-all duration-500 word bg-clip-text text-transparent bg-gradient-to-r from-[#0049A5] to-[#8570F4] ${
                currentIndex === index
                  ? "visible opacity-100 overflow-visible"
                  : "opacity-0"
              }`}
            >
              {word}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
