import { FC } from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { CarouselSection, TypoH2, TypoP1 } from '../../common';
import { StyledAiBtn } from '../../plantora-ai/styled';

export const DevOpsWorkflows: FC = () => {
  return (
    <Stack className="relative overflow-x-hidden pt-24 items-center bg-black">
      <Box className="w-[2100px] aspect-[0.97] absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-[75%] rounded-full blur-[48px] bg-[linear-gradient(300deg,_#fe9ac780_-25.13%,_#06051266_56.9%)]" />
      <img
        src="/images/features/rectangle-1.svg"
        className="absolute left-1/2 top-0 transform -translate-x-[180%] -translate-y-[10%]"
      />
      <Stack className="items-center text-center gap-9 max-w-[1550px] z-10">
        <StyledAiBtn>
          <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
            All Features
          </Typography>
        </StyledAiBtn>
        <CarouselSection
          title="your"
          labels={[
            { label: 'Ease', width: '240px' },
            { label: 'Automate', width: '440px' },
            { label: 'Scale', width: '270px' },
          ]}
        />
        <TypoH2 className="max-w-[1050px]">DevOps workflows with Planton Cloud.</TypoH2>
        <Box className="max-w-[700px]">
          <TypoP1 className="text-text-secondary">
            Simplify compliance and collaboration with Auditable Intelligence from Planton Cloud.
          </TypoP1>
        </Box>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-10"
            LinkComponent={Link}
            href="https://console.planton.ai"
            target="_self"
          >
            Get Started
          </Button>
          <Button
            className="px-5 py-3 font-medium h-[40px] rounded-[10px]"
            LinkComponent={Link}
            href="https://2x31rcyg54d.typeform.com/planton-demo"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
        <img src="/images/features/pulumi-module-registry.svg" />
      </Stack>
    </Stack>
  );
};
