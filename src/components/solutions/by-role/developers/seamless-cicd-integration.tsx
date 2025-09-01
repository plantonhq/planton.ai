import { FC } from 'react';
import { Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const SeamlessCICDIntegration: FC = () => {
  return (
    <Stack className="items-center relative bg-black pt-20">
      <img src="/images/solutions/by-size/growing-teams/grid-icons.svg" className="w-full max-w-[2000px]" />
      <Stack className="absolute top-52 gap-8 text-center max-w-[1400px] z-10">
        <TypoH2>Seamless CI/CD Integration with GitHub and GitLab</TypoH2>
        <TypoP1 className="text-text-secondary">
          Automate your development pipeline effortlessly. Planton Cloud integrates with GitHub and
          GitLab, enabling you to set up CI/CD pipelines with minimal configuration. Keep your
          workflow smooth and efficient by connecting your repositories directly to deployment
          processes.
        </TypoP1>
      </Stack>
    </Stack>
  );
};
