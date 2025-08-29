import { Box, Icon, IconButton, Stack, Typography } from "@mui/material";

import Image from "next/image";
import { useState } from "react";

interface SectionsNavigatorProps {
  title: string;
  sections: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const SectionsNavigator = ({
  title,
  sections,
}: SectionsNavigatorProps) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sections.length);
  };

  const handlePrevious = () => {
    setIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <Stack gap={16} className="mt-8">
      <div className="text-center ">
        <Typography fontSize={86} lineHeight={1} className="text-white">
          {title}
        </Typography>
        {/* <Typography fontSize={24} className="text-gray-400 mt-5">
          From Startups to Enterprises, Planton Cloud Adapts
        </Typography> */}
      </div>

      <Box>
        <Stack gap={5}>
          <Stack className="backdrop-blur-[14px] bg-[#1E2228A8] border border-[#3D3D3D] flex-row rounded-[42px]">
            <Stack className="flex-row h-[700px] w-full">
              <Stack p={5} flex={1} className="flex-col justify-between">
                <Box>
                  <Typography fontSize={24} lineHeight={1}>
                    {index + 1}/{sections.length}
                  </Typography>
                  <Box className="h-1 w-full mt-2 rounded-full bg-gradient-to-r from-[#3A3A3A] to-[#14151D] to-[110%]">
                    <Box
                      sx={{
                        width: `${100 / sections.length}%`,
                        transform: `translateX(${100 * index}%)`,
                      }}
                      className="h-1 rounded-full bg-[#03A587] transition-all duration-300"
                    ></Box>
                  </Box>
                </Box>
                <Box>
                  <Typography fontSize={100} lineHeight={1}>
                    {sections[index].title}
                  </Typography>
                  <Typography fontSize={24} className="text-gray-400 mt-5">
                    {sections[index].description}
                  </Typography>
                </Box>
                <Stack gap={2} className="flex-row">
                  <IconButton
                    onClick={handlePrevious}
                    className="text-white p-3 rounded-full border border-[#343434] hover:bg-[#343434]/60"
                  >
                    <Icon className="!text-4xl">keyboard_arrow_left</Icon>
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    className="text-white p-3 rounded-full border border-[#343434] hover:bg-[#343434]/60"
                  >
                    <Icon className="!text-4xl">keyboard_arrow_right</Icon>
                  </IconButton>
                </Stack>
              </Stack>
              <Box className="relative w-[400px]">
                <Image
                  src={sections[index].image}
                  alt="solutions"
                  width={400}
                  height={100}
                  className="absolute bottom-0 scale-[1.2]"
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
