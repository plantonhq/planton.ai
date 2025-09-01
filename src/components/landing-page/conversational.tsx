import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Stack } from '@mui/material';
import { TypoB2Regular, TypoH1, TypoH2, TypoH3, TypoP1 } from '@/components/common';
import { BetaReleaseCard } from '@/components/landing-page';

export const Conversational: FC = () => {
  return (
    <Stack className="w-full items-center relative py-5 md:py-28 overflow-hidden">
      <Stack className="w-full items-center relative h-full">
        <Stack className="px-5 md:px-0 items-center text-center md:items-start md:text-start md:max-w-6xl gap-4 md:gap-8 z-10">
          <Link
            href="/features/planton-copilot"
            className="inline-flex w-fit items-center gap-2 border border-[#0E8BFF] bg-[rgba(21,137,254,0.13)] text-[#29B6F6] p-2.5 rounded-full hover:bg-[rgba(13,71,161,0.4)] transition-colors"
          >
            <Image
              src="/images/plantora.gif"
              alt="Plantora"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%">
              Introducing Planton Copilot
            </span>
            <span className="ml-2">→</span>
          </Link>
          <TypoH1 className="hidden md:block !leading-[90px]">
            Effortless Cloud Management— <br />
            All Through One Chat”
          </TypoH1>
          <TypoH2 className="md:hidden ">
            Effortless Cloud Management— <br />
            All Through One Chat”
          </TypoH2>
          <TypoH3 className="md:hidden">
            Take the complexity out of DevOps. Our AI-Powered Copilot helps you provision, update,
            and oversee cloud resources in minutes—no endless scripts or back-and-forth needed.
          </TypoH3>
          <TypoP1 className="hidden md:block max-w-4xl">
            Take the complexity out of DevOps. Our AI-Powered Copilot helps you provision, update,
            and oversee cloud resources in minutes—no endless scripts or back-and-forth needed.
          </TypoP1>
          <TypoB2Regular className="text-text-secondary max-w-4xl">
            Eliminate manual tasks, reduce errors, and enable secure collaboration all in one
            intelligent interface. Give your team the freedom to innovate faster and deploy with
            confidence.
          </TypoB2Regular>
          <BetaReleaseCard />
        </Stack>
        <video
          src="/videos/intro.mp4"
          className="md:hidden w-full object-cover"
          autoPlay
          muted
          loop
        />
        <Box className="hidden md:block absolute left-0 top-0 right-0 bottom-0">
          <Box className="relative h-full">
            <Box className="absolute w-full h-[30%] z-[1] bg-gradient-to-b from-black via-black via-66% to-transparent" />
            <Box className="absolute w-[70%] h-full z-[1] bg-gradient-to-r from-black via-black via-66% to-transparent left-0" />
            <Box className="absolute w-[1265px] h-[72%] right-1/2 transform translate-x-[70%] top-28">
              <video
                src="/videos/intro.mp4"
                className="w-full h-full object-cover right-0"
                autoPlay
                muted
                loop
              />
            </Box>
            <Box className="absolute w-full h-[30%] bottom-0 z-[1] bg-gradient-to-t from-black via-black via-66% to-transparent" />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
