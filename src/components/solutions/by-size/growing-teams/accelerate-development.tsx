import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2, TypoH3, TypoP1 } from '@/components';

interface ITrackBox {
  iconSrc: string;
  title: string;
  className?: string;
}

export const TrackBox: FC<ITrackBox> = ({ title, iconSrc, className }) => {
  return (
    <Stack className={`pt-8 pr-4 pb-3 pl-6 rounded-xl bg-[#0A0A0A] gap-3 grow ${className}`}>
      <img src={iconSrc} className="w-[75px] aspect-square" />
      <TypoP1>{title}</TypoP1>
    </Stack>
  );
};

export const AccelerateDevelopment: FC = () => {
  return (
    <Stack className="items-center overflow-hidden bg-black py-32">
      <Stack className="gap-14 items-center max-w-[1400px]">
        <TypoH2 className="max-w-[1150px] text-center">
          Accelerate Development with Streamlined CI/CD
        </TypoH2>
        <Box className="relative grid grid-cols-16 gap-x-10 gap-y-6">
          <Stack className="col-span-6 p-16 aspect-square bg-gradient-to-tr from-[#8a3391] to-black rounded-xl ">
            <Stack className="gap-4">
              <img
                src="/images/solutions/by-size/growing-teams/tool-1.svg"
                className="w-[88px] aspect-square"
              />
              <TypoH3>Build</TypoH3>
              <TypoP1>
                Builds are generated regularly to incorporate ongoing changes by the development
                team.
              </TypoP1>
            </Stack>
          </Stack>
          <Stack className="col-span-4 justify-between gap-6">
            <TrackBox
              title="Test"
              iconSrc="/images/features/planton-copilot/cloud.svg"
              className="bg-gradient-to-tr from-[#8a3391] to-black"
            />
            <TrackBox
              title="Deploy"
              iconSrc="/images/solutions/by-size/growing-teams/tool-2.svg"
              className="bg-gradient-to-tr from-[#8a3391] to-black"
            />
          </Stack>
          <TypoP1 className="col-span-6 rounded-[32px] p-9 bg-[linear-gradient(207.34deg,_#0E1018_-42.57%,_#29018E_5.28%,_#3E0EA6_56.96%,_#39008A_151.11%)]">
            Set up Continuous Integration and Continuous Deployment pipelines with ease. Planton
            Cloud&apos;s built-in IaC workflows automate deployments, ensuring consistency across
            environments. Developers can focus on coding while Planton Cloud handles the build and
            deployment processes.
          </TypoP1>

          <img
            src="/images/solutions/by-size/growing-teams/automation.svg"
            className="absolute transform top-0 -translate-y-1/2 right-0 translate-x-1/2 w-[200px]"
          />
          <img
            src="/images/solutions/by-size/growing-teams/success.svg"
            className="absolute transform bottom-0 translate-y-1/2 left-0 -translate-x-1/2 w-[250px]"
          />
        </Box>
      </Stack>
    </Stack>
  );
};
