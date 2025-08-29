import { FC } from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

interface IImgBox {
  bgImgSrc: string;
  topImgSrc?: string;
  className?: string;
  topImgClassName?: string;
}

export const ImgBox: FC<IImgBox> = ({
  bgImgSrc,
  topImgSrc,
  className,
  topImgClassName,
}) => {
  return (
    <Box
      className={`relative w-full h-full rounded-[28px] overflow-hidden bg-cover bg-center ${
        className ?? ""
      }`}
      sx={{ backgroundImage: `url(${bgImgSrc})` }}
    >
      {topImgSrc && (
        <Image
          src={topImgSrc}
          alt=""
          className={`absolute top-14 left-1/2 transform -translate-x-1/2 scale-110 ${
            topImgClassName ?? ""
          }`}
          width={400}
          height={400}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
        // <img
        //   src={topImgSrc}
        //   alt=""
        //   className={`absolute top-14 left-1/2 transform -translate-x-1/2 scale-110 ${
        //     topImgClassName ?? ""
        //   }`}
        // />
      )}
    </Box>
  );
};

export default function Jumpstart() {
  return (
    <Stack className="w-full items-center bg-[#161A1F] py-12">
      <Stack className="w-full gap-8 relative overflow-hidden max-w-[2050px]">
        <Box className="absolute w-[1280px] aspect-[1.10] bg-[linear-gradient(91.52deg,#000000_58.27%,#64646400_229.43%,#666666_233.56%)] rounded-full -top-80 -left-60 blur-[100px] z-10" />
        <Stack className="absolute top-32 left-48 z-10">
          <Stack className="gap-4 max-w-[730px]">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-b from-white to-gray-100 bg-clip-text text-transparent">
              Custom Templates and Service Hub Extension
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Leverage the power of custom templates by registering your
              organization&apos;s own in our Service Hub. Ensure that your
              developers have access to templates that align with your
              enterprise&apos;s best practices and compliance requirements,
              promoting consistency and efficiency across teams.
            </p>
          </Stack>
        </Stack>
        <Stack className="w-full flex-row gap-8 h-[320px] overflow-x-hidden">
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-3.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="ml-[300px] min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-3.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
        </Stack>
        <Stack className="w-full flex-row gap-8 h-[320px] overflow-x-hidden">
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="ml-[100px] min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-3.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
        </Stack>
        <Stack className="w-full flex-row gap-8 h-[320px] overflow-x-hidden">
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="ml-5 min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-3.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
          <ImgBox
            bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
            topImgSrc="/images/features/planton-copilot/chatbox-1.svg"
            className="min-w-[630px]"
            topImgClassName="left-[calc(50%+13px)]"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
