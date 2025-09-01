import { FC } from 'react';
import { Stack } from '@mui/material';
import { FlipBox } from '../common';

export const EffortlessCICD: FC = () => {
  return (
    <Stack className="relative w-full items-center justify-center bg-[#161A1F] py-32 gap-40">
      <FlipBox
        title="Effortless CI/CD Configuration"
        subTitle="Streamline your build and deployment processes with Planton Cloud's seamless CI/CD integrations. Set up pipelines with minimal effort, automate testing, and deploy with confidence. Focus on coding—we'll handle the rest."
        bgImgSrc="/images/features/planton-copilot/gradient-card-1.svg"
        topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        gap={'106px'}
      />
      <FlipBox
        title="True Multi-Cloud Flexibility"
        subTitle="Don't let infrastructure limit your vision. Deploy across AWS, Google Cloud, Azure, and more using standardized components. With Planton Cloud, you have the freedom to choose the best environment for every project."
        bgImgSrc="/images/features/planton-copilot/gradient-card-2.svg"
        topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        gap={'106px'}
        reverse
      />
      <FlipBox
        title="Simplify Configuration and Secrets Management"
        subTitle="Complexity shouldn't compromise security. Planton Cloud uses hierarchavical configurations to manage environments efficiently. Securely handle environment variables and secrets, ensuring your applications are both robust and protected."
        bgImgSrc="/images/features/planton-copilot/gradient-card-1.svg"
        topImgSrc="/images/features/planton-copilot/chatbox-2.svg"
        gap={'106px'}
      />
    </Stack>
  );
};
