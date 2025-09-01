import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import { TypoH2, TypoP1 } from '../common';

export const HomeSelfService: FC = () => {
  return (
    <Stack className="items-center bg-black pt-52 relative overflow-hidden">
      <Box
        sx={{ borderRadius: '50%' }}
        className="w-[900px] aspect-[1.46] absolute bottom-40 left-1/2 transform -translate-x-1/2 blur-[1000px] bg-[linear-gradient(180deg,_rgba(185,_53,_56,_0.9)_0%,_rgba(98,_57,_158,_0.9)_100%)]"
      />
      <Box
        sx={{ borderRadius: '50%' }}
        className="w-[870px] aspect-square absolute bottom-0 left-1/2 transform -translate-x-[10%] translate-y-[40%] bg-[#623a9e] blur-[400px] z-10"
      />
      <Stack className="w-full items-center relative">
        <Box className="absolute w-[230px] aspect-square left-1/2 top-0 transform -translate-x-[60px] -translate-y-[140px] filter blur-sm z-10">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={130}
            height={130}
          />
        </Box>
        <Box className="absolute w-[270px] aspect-square left-1/2 top-0 transform -translate-x-[850px] translate-y-[150px] filter blur-sm z-10">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={570}
            height={270}
          />
        </Box>
        <Box className="absolute w-[860px] aspect-square left-1/2 top-0 transform -translate-x-[75%] -translate-y-[48%] filter z-10">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={860}
            height={860}
          />
        </Box>
        <Box className="absolute w-[370px] aspect-square left-1/2 top-0 transform -translate-x-[450px] translate-y-[30px] filter">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={370}
            height={370}
          />
        </Box>
        <Box className="absolute w-[660px] aspect-square left-1/2 bottom-0 transform -translate-x-[150%] -translate-y-[5%] filter overflow-hidden z-10">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={660}
            height={660}
          />
        </Box>
        <Box className="absolute w-[590px] aspect-square right-1/2 top-1/2 transform translate-x-[160%] -translate-y-[60%] filter z-10">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={590}
            height={590}
          />
        </Box>
        <Box className="absolute w-[390px] aspect-square left-1/2 bottom-0 transform -translate-x-[350px] translate-y-[120px] filter z-[1] overflow-hidden">
          <Image
            src="/images/rocket.gif"
            alt="Planton Cloud Platform"
            className="w-full h-full transform rotate-45"
            width={390}
            height={390}
          />
        </Box>
        <Box className="w-full max-w-7xl mx-auto">
          {/* Platform Preview Container with Gradient Background */}
          <Box className="relative h-[700px] backdrop-blur-lg border border-[#3D3D3D] border-b-0 rounded-tl-3xl rounded-tr-3xl">
            {/* Gradient background effect */}
            <Box className="absolute inset-0 bg-gradient-radial from-[#8A3391] from-[-10.91%] to-[#444F9E] to-73% rounded-full w-[720px] h-[800px] top-[280px] filter m-auto blur-[510px]" />

            {/* Platform Preview Image Container */}
            <Box className="relative h-full pt-12 pl-12 border border-gray-800/50 bg-gradient-to-b from-gray-900/50 to-gray-900/30 rounded-tl-3xl rounded-tr-3xl">
              <Stack className="w-full h-full flex-row">
                <Stack flex={1} className="justify-center">
                  <Stack className="gap-8">
                    <TypoH2>Self-Service DevOps</TypoH2>
                    <TypoP1 className="text-text-secondary">
                      Breaking free from DevOps bottlenecks
                    </TypoP1>
                  </Stack>
                </Stack>
                <Stack className="w-[57%] h-full relative">
                  <Image
                    src="/images/pulumi-stack.png"
                    alt="Planton Cloud Platform"
                    className="w-full h-full"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'left' }}
                  />
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box className="w-full border-y border-y-[#3D3D3D] relative" sx={{ zIndex: 1 }}>
          <Stack className="flex flex-row max-w-7xl mx-auto border-x border-x-[#3D3D3D]">
            <Box className="flex border-r border-r-[#3D3D3D] px-12 py-28 w-1/2">
              <TypoP1 component="span">
                AI Assistance:{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  Use natural language commands with Plantora to bootstrap services and configure
                  pipelines.
                </TypoP1>
              </TypoP1>
            </Box>

            <Stack className="w-1/2">
              <Box className="flex px-10 py-11 border-b border-b-[#3D3D3D]">
                <TypoP1 component="span">
                  Eliminate Delays:{' '}
                  <TypoP1 component="span" className="text-text-secondary">
                    Transform weeks of waiting into instant action with self-service capabilities.
                  </TypoP1>
                </TypoP1>
              </Box>
              <Box className="flex px-10 py-11">
                <TypoP1 component="span">
                  Accelerate Innovation:{' '}
                  <TypoP1 component="span" className="text-text-secondary">
                    Empower developers to build, deploy, and scale faster than ever.
                  </TypoP1>
                </TypoP1>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};
