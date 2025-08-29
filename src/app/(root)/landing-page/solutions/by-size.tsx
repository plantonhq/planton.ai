import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';

export const BySize = () => {
  return (
    <>
      <div className="text-center my-16">
        <Typography fontSize={86} lineHeight={1} className="text-white">
          Scaling with every Organization
        </Typography>
        <Typography fontSize={24} className="text-gray-400 mt-5">
          From Startups to Enterprises, Planton Cloud Adapts
        </Typography>
      </div>

      <Box>
        <Stack gap={5}>
          <Stack
            p={5}
            className="backdrop-blur-[14px] bg-[#1E2228]/20 border border-[#3D3D3D] flex-row rounded-[42px]"
          >
            <Stack className="flex-row h-64 w-full">
              <Box flex={1}>
                <Typography fontSize={48}>Startups: Accelerate Innovation</Typography>
                <Typography fontSize={24} className="text-gray-400 mt-5">
                  Rapid deployment and iteration through self-service capabilities.
                </Typography>
              </Box>
              <Box className="relative w-[400px]">
                <Image
                  src="/images/rocket-launch.png"
                  alt="solutions"
                  width={400}
                  height={100}
                  className="absolute bottom-0"
                />
                <Box className="w-[682px] aspect-square absolute -top-48 -left-52 blur-3xl mix-blend-screen rounded-full bg-[linear-gradient(180deg,_rgba(83,_113,_212,_0.18)_0%,_rgba(95,_10,_159,_0.18)_100%)]" />
              </Box>
            </Stack>
          </Stack>
          <Stack gap={5} className="flex-row">
            <Stack
              p={5}
              className="backdrop-blur-[14px] bg-[#1E2228]/20 border border-[#3D3D3D] flex-row rounded-[42px]"
            >
              <Stack className="flex-row w-full">
                <Box flex={1}>
                  <Typography fontSize={24}>Growing Teams: Enhance Collaboration</Typography>
                  <Typography fontSize={24} className="text-gray-400 mt-5">
                    Centralized tools and role-based access control streamline workflows.
                  </Typography>
                </Box>
                <Box className="relative scale-[1.5] translate-x-8">
                  <Image
                    src="/images/team-collaboration.png"
                    alt="solutions"
                    width={200}
                    height={200}
                    className=""
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack
              p={5}
              className="backdrop-blur-[14px] bg-[#1E2228]/20 border border-[#3D3D3D] flex-row rounded-[42px]"
            >
              <Stack className="flex-row w-full">
                <Box flex={1}>
                  <Typography fontSize={24}>Enterprises: Secure and Compliant Scaling</Typography>
                  <Typography fontSize={24} className="text-gray-400 mt-5">
                    Advanced IAM, audit trails, and on-premises deployment options.
                  </Typography>
                </Box>
                <Box className="relative scale-[1.5] translate-x-12">
                  <Image
                    src="/images/solutions/by-size/enterprise-scaling.png"
                    alt="solutions"
                    width={200}
                    height={200}
                    className=""
                  />
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
