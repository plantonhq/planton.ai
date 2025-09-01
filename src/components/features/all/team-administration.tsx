import { FC, ImgHTMLAttributes } from 'react';
import { Box, Stack } from '@mui/material';
import { TypoH2 } from '@/components/common';
import { SecretBox } from './secrets-management';

const SquiglyLineImg: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ className, ...props }) => (
  <img
    src="/images/features/squigly-line.svg"
    className={`absolute w-[600px] bottom-0 left-1/2 transform -translate-x-[170%] translate-y-[10%] ${className}`}
    {...props}
  />
);

export const TeamAdministration: FC = () => {
  return (
    <Stack className="relative overflow-hidden items-center backdrop-blur-3xl bg-[linear-gradient(0deg,_#000000_0%,_#000000_100%)]">
      <Box className="w-[2000px] relative">
        <Box className="w-full h-[341px] absolute top-0 blur-[100px] bg-gradient-to-t from-black to-black" />
        <img src="/images/features/dashboard-2.svg" />
      </Box>
      <Stack className="w-full absolute top-36 items-center z-20">
        <TypoH2 className="text-center">Team Administration</TypoH2>
        <Box className="grid grid-cols-2 gap-8 max-w-[1540px] mt-72 z-10">
          <SecretBox
            title="Granular Access Control with Team Hierarchies"
            subTitle="Planton Cloud's Team Administration enables the creation of teams and sub-teams, mirroring organizational structures. Permissions and roles can be assigned at the organization level, environment level, and even down to individual resources, offering unparalleled granularity in access control."
            url=""
          />
          <SecretBox
            title="AI-Powered Permission Management."
            subTitle="Planton Cloud's AI assistant streamlines team management with natural language commands for tasks like role assignments and access control, boosting productivity."
            url=""
          />
        </Box>
      </Stack>
      <SquiglyLineImg className='scale-150 blur-[200px] -z-0' />
      <SquiglyLineImg className='z-10' />
    </Stack>
  );
};
