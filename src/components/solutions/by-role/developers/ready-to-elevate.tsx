import { FC } from 'react';
import { Button, Link, Stack } from '@mui/material';
import { TypoH2, TypoP1 } from '@/components';

export const ReadyToElevate: FC = () => {
  return (
    <Stack className="items-center relative bg-black">
      <img src="/images/solutions/developers/bg-12.svg" />
      <Stack className="w-full max-w-[1400px] absolute left-1/2 top-28 transform -translate-x-1/2 gap-8 items-center text-center">
        <TypoH2 className="max-w-[1050px]">Ready to Elevate Your Development Workflow?</TypoH2>
        <TypoP1 className="text-text-secondary max-w-[1350px]">
          Unlock your full potential as a developer by focusing on what you do best—building amazing
          features. Let Planton Cloud handle the operational complexities with its AI-powered tools,
          familiar interfaces, and seamless integrations. Join the community of developers who are
          coding smarter, not harder.
        </TypoP1>
        <Stack className="flex-row items-center gap-2">
          <Button
            className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
            LinkComponent={Link}
            href="https://console.planton.cloud"
            target="_self"
          >
            Get Started for Free
          </Button>
          <Button
            className="bg-transparent px-5 py-3 rounded-[10px] w-fit"
            LinkComponent={Link}
            href="https://2x31rcyg54d.typeform.com/planton-demo"
            target="_self"
          >
            Book Demo
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
