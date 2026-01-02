import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components/common';

export const HomeIntegratedIAC: FC = () => {
  return (
    <Stack className="w-full items-center bg-black overflow-hidden">
      <Stack className="w-full relative items-center pt-5 md:pt-16">
        <Box className="absolute top-0 z-0 w-full h-20 md:h-[333px] bg-[linear-gradient(180deg,_#47A7A4_-152.88%,_rgba(80,_52,_185,_0)_84.98%)]" />
        <img
          src="/images/landing-page/bg-11-small.svg"
          className="md:hidden absolute left-0 bottom-0 transform translate-y-[40%] z-0"
        />
        <img
          src="/images/landing-page/bg-11.svg"
          className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-[70%] translate-y-[40%] z-0"
        />
        <Stack className="w-full items-center mx-auto z-10 relative">
          <Stack className="w-full max-w-[calc(100vw-40px)] md:max-w-[1520px] items-center text-center gap-4 md:gap-5">
            <TypoH2>IaC Workflows – Automate & Track Your Infrastructure with Confidence</TypoH2>
            <Typography className="text-text-secondary md:max-w-6xl text-sm font-normal md:font-medium md:text-2xl md:leading-[38px]">
              Experience seamless infrastructure management with PlantonCloud’s IAC
              (Infrastructure-as-Code) Workflows. Provision, update, and manage your cloud resources
              using automated, version-controlled workflows—all in one intuitive platform.
            </Typography>
          </Stack>
          <Stack className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl items-center mt-5 md:mt-14 relative overflow-hidden">
            <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
            <Box className="w-full relative pt-7 md:pt-20 px-4 md:px-16 backdrop-blur-sm bg-[#1E222875] border border-[#3D3D3D] border-b-0 rounded-t-xl md:rounded-t-[42px]">
              <img
                src="/images/landing-page/bg-3-small.svg"
                className="w-full relative md:hidden"
              />
              <img
                src="/images/landing-page/bg-3.svg"
                className="hidden md:block w-full relative"
              />
            </Box>
          </Stack>
        </Stack>
        <Stack className="w-full relative items-center text-center border-t border-t-[#3D3D3D] ">
          <Box className="w-[370px] md:w-[1012px] aspect-square absolute -top-[50%] rounded-full blur-[150px] z-0 bg-[linear-gradient(217deg,_rgba(70,_170,_165,_0.58)_-1.74%,_rgba(107,_86,_162,_0.58)_53.46%,_rgba(35,_13,_166,_0.58)_117.61%)]" />
          <TypoP1
            component="span"
            className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl text-text-secondary border-x border-[#3D3D3D] p-5 md:p-0 md:py-20 md:px-14 z-10"
          >
            By grouping every infrastructure change into an easily trackable “
            <TypoP1 component="span" color="text.primary">
              Stack Job,
            </TypoP1>
            ” you’ll gain clear insight into who triggered what, when, and why. This makes rolling
            back or auditing a breeze.
          </TypoP1>
        </Stack>
        <Stack className="w-full items-center text-center border-t border-t-[#3D3D3D] ">
          <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl relative overflow-hidden border-x border-x-[#3D3D3D]">
            <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
            <Box className="relative pt-7 md:pt-20 px-4 md:px-16 border border-[#3D3D3D] backdrop-blur-sm rounded-t-xl md:rounded-t-[42px] bg-[#1E222875]">
              <img
                src="/images/landing-page/bg-4-small.svg"
                className="md:hidden w-full relative"
              />
              <img
                src="/images/landing-page/bg-4.svg"
                className="hidden md:block w-full relative"
              />
            </Box>
          </Box>
        </Stack>
        <Stack className="w-full relative items-center text-center border-t border-t-[#3D3D3D] ">
          <TypoP1 className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl border-x border-x-[#3D3D3D] p-5 md:p-0 md:py-20 md:px-14 text-text-secondary">
            Each Stack Job walks you through a simple{' '}
            <TypoP1 component="span" color="text.primary">
              three-step process:
            </TypoP1>
          </TypoP1>
        </Stack>
        <Box className="w-full border-t border-t-[#3D3D3D]">
          <Box className="w-full grid grid-cols-2 max-w-[calc(100vw-40px)] md:max-w-7xl mx-auto border-x border-x-[#3D3D3D]">
            <TypoP1
              component="span"
              className="col-span-2 md:col-span-1 border-b md:border-b-0 md:border-r border-[#3D3D3D] p-5 md:p-0 md:px-12 md:py-28"
            >
              Refresh:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Sync the current state of your resources.
              </TypoP1>
            </TypoP1>
            <Box className="col-span-2 md:col-span-1 grid grid-cols-subgrid">
              <TypoP1
                component="span"
                className="p-5 md:p-0 md:px-10 md:py-11 border-r md:border-r-0 md:border-b border-[#3D3D3D]"
              >
                Preview:{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  See proposed changes before you commit.
                </TypoP1>
              </TypoP1>
              <TypoP1 component="span" className="p-5 md:p-0 md:px-10 md:py-11">
                Apply/Destroy:{' '}
                <TypoP1 component="span" className="text-text-secondary">
                  Confidently roll out updates—or retire resources if needed.
                </TypoP1>
              </TypoP1>
            </Box>
          </Box>
        </Box>
        <Stack className="w-full relative items-center text-center border-t border-t-[#3D3D3D] ">
          <TypoP1 className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl border-x border-x-[#3D3D3D] p-5 md:p-0 md:py-20 md:px-14 text-text-secondary">
            You’ll also get real-time visibility into exactly what’s changing and any newly
            generated outputs, ensuring your team stays informed every step of the way.
          </TypoP1>
        </Stack>
        <Box className="w-full border-y border-[#3D3D3D]">
          <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl grid grid-cols-2 mx-auto border-x border-x-[#3D3D3D]">
            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-b border-b-[#3D3D3D] border-r border-r-[#3D3D3D]"
            >
              Speed & Reliability:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Automated workflows reduce manual errors and accelerate deployments.
              </TypoP1>
            </TypoP1>

            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-b border-b-[#3D3D3D]"
            >
              Governance & Auditing:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Every change is logged and versioned for compliance and oversight.
              </TypoP1>
            </TypoP1>

            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-r border-r-[#3D3D3D]"
            >
              Reduced Risk via Previews:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Review itemized changes before they happen.
              </TypoP1>
            </TypoP1>

            <TypoP1 component="span" className="p-5 md:p-0 md:px-10 md:py-11">
              Collaboration & Clarity:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Transparent commit messages and real-time statuses keep teams in sync.
              </TypoP1>
            </TypoP1>
          </Box>
        </Box>
      </Stack>
      <Stack className="w-full relative items-center pt-5 md:pt-16">
        <Box className="hidden md:block absolute top-0 z-0 w-full h-[333px] bg-[linear-gradient(180deg,_#47A7A4_-152.88%,_rgba(80,_52,_185,_0)_84.98%)]" />
        <Box className="w-[430px] md:w-[1770px] aspect-square absolute bottom-0 left-1/2 transform -translate-x-[90%] translate-y-[22%] rounded-full blur-[250px] bg-[linear-gradient(195deg,_rgba(107,_86,_162,_0.24)_-31.13%,_rgba(35,_13,_166,_0.24)_179.29%)]" />
        <Box className="w-[430px] md:w-[900px] aspect-square md:aspect-[1.47] absolute -bottom-24 md:bottom-0 right-1/2 transform translate-x-[100%] md:translate-x-1/2 rounded-[50%] blur-[400px] bg-[linear-gradient(180deg,_rgba(185,_53,_56,_0.9)_0%,_rgba(98,_57,_158,_0.9)_100%)]" />
        <Stack className="w-full items-center mx-auto z-10 relative">
          <Stack className="w-full max-w-[calc(100vw-40px)] md:max-w-[1530px] items-center text-center gap-4 md:gap-5">
            <TypoH2>
              Auditable Intelligence: Full-Visibility Change Tracking of Your Cloud Resources
            </TypoH2>
            <Typography className="text-text-secondary max-w-6xl text-sm font-normal md:font-medium md:text-2xl md:leading-[38px]">
              Ever wonder who changed your cloud resources, when they did it, and why? With
              Auditable Intelligence, you get a single, real-time source of truth for every
              configuration update—boosting team transparency and speeding up troubleshooting.
            </Typography>
          </Stack>
          <Stack className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl items-center mt-5 md:mt-14 relative overflow-hidden border border-[#3D3D3D] border-b-0 bg-[#1E222875] rounded-t-xl md:rounded-t-3xl">
            <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
            <Box className="w-full relative pt-7 md:pt-20 px-4 md:px-16 backdrop-blur-sm rounded-t-xl md:rounded-t-3xl">
              <img
                src="/images/landing-page/bg-5-small.svg"
                className="w-full md:hidden relative"
              />
              <img
                src="/images/landing-page/bg-5.svg"
                className="w-full hidden md:block relative"
              />
            </Box>
          </Stack>
        </Stack>
        <Stack className="w-full relative items-center text-center border-t border-t-[#3D3D3D] ">
          <Box className="w-[370px] md:w-[1012px] aspect-square absolute -top-[50%] rounded-full blur-[150px] z-0 bg-[linear-gradient(217deg,_rgba(70,_170,_165,_0.58)_-1.74%,_rgba(107,_86,_162,_0.58)_53.46%,_rgba(35,_13,_166,_0.58)_117.61%)]" />
          <TypoP1
            component="span"
            className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl text-text-secondary border-x border-x-[#3D3D3D] p-5 md:p-0 md:py-20 md:px-14 z-10"
          >
            Quickly scan the change log for complete accountability—no more guesswork about what
            really changed.
          </TypoP1>
        </Stack>
        <Stack className="w-full items-center text-center border-t border-t-[#3D3D3D] ">
          <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl relative overflow-hidden border-x border-x-[#3D3D3D]">
            <Box className="w-[200px] md:w-[725px] aspect-square absolute rounded-full left-1/2 top-0 transform -translate-x-1/2 filter blur-3xl bg-[linear-gradient(307deg,_#8A3391_-10.91%,_#444F9E_73.76%)]" />
            <Box className="relative pt-7 md:pt-20 px-4 md:px-16 border border-[#3D3D3D] backdrop-blur-sm rounded-t-xl md:rounded-t-[42px] bg-[#1E222875]">
              <img
                src="/images/landing-page/bg-6-small.svg"
                className="md:hidden w-full relative"
              />
              <img
                src="/images/landing-page/bg-6.svg"
                className="hidden md:block w-full relative"
              />
            </Box>
          </Box>
        </Stack>
        <Stack className="w-full relative items-center text-center border-t border-t-[#3D3D3D] ">
          <TypoP1 className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl border-x border-x-[#3D3D3D] p-5 md:p-0 md:py-20 md:px-14 text-text-secondary">
            Color-coded differences let you see exactly what changed <br />
            <TypoP1 component="span" color="text.primary">
              —no more manual comparisons.
            </TypoP1>
          </TypoP1>
        </Stack>
        <Box className="w-full border-t border-t-[#3D3D3D]">
          <Box className="w-full max-w-[calc(100vw-40px)] md:max-w-7xl grid grid-cols-2 mx-auto border-x border-x-[#3D3D3D]">
            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-b border-b-[#3D3D3D] border-r border-r-[#3D3D3D]"
            >
              Full Visibility:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Every change is tracked and documented, ensuring complete transparency.
              </TypoP1>
            </TypoP1>
            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-b border-b-[#3D3D3D]"
            >
              Instant Diffs:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Spot exact changes line by line—perfect for rapid reviews.
              </TypoP1>
            </TypoP1>
            <TypoP1
              component="span"
              className="p-5 md:p-0 md:px-10 md:py-11 border-r border-r-[#3D3D3D]"
            >
              IaC Integration:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Each commit links to your infrastructure pipelines, confirming successful
                deployments.
              </TypoP1>
            </TypoP1>
            <TypoP1 component="span" className="p-5 md:p-0 md:px-10 md:py-11">
              Fast Recovery:{' '}
              <TypoP1 component="span" className="text-text-secondary">
                Easily revert to a previous version if something goes wrong.
              </TypoP1>
            </TypoP1>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
