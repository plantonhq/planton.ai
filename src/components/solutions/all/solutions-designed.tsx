import { FC } from 'react';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '../../common';

interface ISolutionGridBox {
  imgSrc: string;
  title: string;
  subTitle: string;
  desc: string;
  url: string;
  className?: string;
}

export const SolutionGridBox: FC<ISolutionGridBox> = ({
  imgSrc,
  title,
  subTitle,
  desc,
  className,
  url,
}) => {
  return (
    <Stack
      className={`px-14 py-11 gap-14 rounded-xl bg-[#202020] shadow-[0px_33px_17.100000381469727px_0px_rgba(0,0,0,0.43)] border border-[#454545] ${className}`}
    >
      <img src={imgSrc} className="w-[240px]" />
      <Stack className="gap-5">
        <TypoH3>{title}</TypoH3>
        <TypoP1>{subTitle}</TypoP1>
        <TypoP1 className="text-text-secondary">{desc}</TypoP1>
        <Link href={url} className="text-2xl font-medium text-[#0099FF]">
          Learn More
        </Link>
      </Stack>
    </Stack>
  );
};

export const SolutionsDesigned: FC = () => {
  return (
    <Stack className="relative items-center overflow-hidden py-28 bg-[linear-gradient(180.42deg,_#FF6D1F_-82.69%,_#000000_15.48%)]">
      <Stack className="gap-11 items-center max-w-[1550px]">
        <TypoH2 className="max-w-[1200px] text-center">
          Solutions Designed for Every Stage of Growth
        </TypoH2>
        <TypoP1 className="text-text-secondary text-center max-w-[1240px]">
          Whether you&apos;re launching a startup or managing a global enterprise, Planton Cloud
          offers tailored solutions to meet your unique needs.
        </TypoP1>
        <Box className="relative grid grid-cols-2 gap-8">
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-1.svg"
            title="Startups"
            subTitle="Launch Quickly Without DevOps Overhead"
            desc="Get your ideas to market faster with AI-powered DevOps tools designed for lean teams. Eliminate infrastructure complexities and focus on building great products."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-2.svg"
            title="Growing Teams"
            subTitle="Scale Efficiently with Collaborative Tools"
            desc="Enhance team collaboration and streamline operations as you expand. Planton Cloud provides scalable solutions that grow with your team, ensuring seamless communication and productivity."
            url=""
            className=""
          />
          <SolutionGridBox
            imgSrc="/images/solutions/grid-icon-3.svg"
            title="Enterprises"
            subTitle="Enterprise-Grade Security and Compliance"
            desc="Achieve high availability, robust security, and compliance standards with AI-driven DevOps tailored for enterprise needs. Simplify complex operations without sacrificing control."
            url=""
            className="col-span-2"
          />
        </Box>
      </Stack>
      <img
        src="/images/solutions/torus.svg"
        className="w-[800px] aspect-square absolute bottom-0 right-1/2 transform translate-x-[calc(50%+850px)] blur-[200px]"
      />
    </Stack>
  );
};
