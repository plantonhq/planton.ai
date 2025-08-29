import { FC, ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { BookDemoBtn, FrameImage, GetStartedBtn, TypoH2, TypoH3, TypoP1 } from '../common';
import { StyledAiBtn } from '@/components/plantora-ai/styled';
import { InnovationBox } from '@/components/solutions';

interface IOlBox {
  count: number;
  title: string;
  desc?: ReactNode;
  className?: string;
}

export const OlBox: FC<IOlBox> = ({ count, title, desc = '', className }) => {
  return (
    <Box
      className={`p-5 md:p-[50px] rounded-3xl md:rounded-[42px] backdrop-blur-[2px]  md:backdrop-blur-[9px] grow ${className}`}
    >
      <Stack className="flex-row gap-2 md:gap-3">
        <TypoH3>{count}.</TypoH3>
        <Stack className="flex-col gap-2 md:gap-4">
          <TypoH3>{title}</TypoH3>
          {desc}
        </Stack>
      </Stack>
    </Box>
  );
};

export const EmpowerYourTeam: FC = () => {
  return (
    <Stack className="items-center bg-black relative overflow-hidden gap-10 md:gap-56 mt-0 md:mt-32 p-5 md:pb-24">
      <Stack className="items-center gap-16 md:gap-60">
        <Box
          sx={{ borderRadius: '50%' }}
          className="w-full md:w-[2500px] aspect-[0.97] absolute top-16 blur-[3.50px] z-0 bg-[linear-gradient(180deg,_rgba(138,_51,_145,_0.16)_10.55%,_rgba(6,_5,_18,_0.16)_74.21%)]"
        />
        <Stack className="items-center text-center gap-3 md:gap-5 z-10">
          <StyledAiBtn>
            <Typography className="text-base font-medium bg-[linear-gradient(278.2deg,_#A6DDFF_2.25%,_#33C2FF_48.08%,_#0077FF_100%)] bg-clip-text text-transparent">
              Planton Copilot
            </Typography>
          </StyledAiBtn>
          <TypoH2 className="max-w-[1250px]">Empower Your Team with Our Planton Copilot</TypoH2>
          <TypoP1 className="text-text-secondary max-w-[1200px]">
            Eliminate the complexity of cloud resource management, effortlessly automate tedious
            DevOps tasks, and collaborate securely—all through a single, intelligent chat interface.
          </TypoP1>
          <Stack className="flex-row items-center gap-2">
            <GetStartedBtn>Get Started Now</GetStartedBtn>
            <BookDemoBtn>Book Demo</BookDemoBtn>
          </Stack>
        </Stack>
        <Stack className="items-center gap-5 md:gap-16 z-10">
          <Stack className="md:max-w-[1200px] items-center text-center gap-2 md:gap-8 ">
            <TypoH2>Why Planton Copilot?</TypoH2>
            <TypoP1 className="text-text-secondary">
              Modern cloud operations demand agility, speed, and precision. Our Planton Copilot is
              your AI-powered assistant that automates resource provisioning, streamlines
              configuration updates, and enables secure collaboration—so your team can innovate
              faster without wrestling with complex DevOps workflows.
            </TypoP1>
          </Stack>
          <Box className="relative w-full md:max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-14 md:gap-y-11 ">
            <img
              src="/images/features/planton-copilot/torus.png"
              className="md:hidden w-[500px] absolute left-0 bottom-0 transform translate-y-[10%] -translate-x-[60%] blur-[300px] z-0"
            />
            <InnovationBox
              title="Accelerate Deployments"
              desc="Provision AWS, GCP, or Azure resources in minutes."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Reduce Errors"
              desc="Built-in confirmations ensure every change is intentional."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Unified Visibility"
              desc="Follow real-time Infrastructure-as-Code (IaC) workflows directly in the chat."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
            <InnovationBox
              title="Collaborate Securely"
              desc="Invite new teammates and share credentials—all with explicit confirmations."
              descClassName="text-text-secondary"
              className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
            />
          </Box>
        </Stack>
      </Stack>
      <Stack className="items-center bg-black relative">
        <Stack className="items-center gap-5 md:gap-24">
          <Stack className="items-center gap-3 md:gap-8 md:max-w-[1250px]">
            <TypoH2 className="md:max-w-[1100px] text-center md:mb-14">
              Instantly Provision Cloud Resources
            </TypoH2>
            <TypoH3 className="text-center">How It Works ? </TypoH3>
            <Box className="relative w-full">
              <img
                src="/images/features/planton-copilot/triangle.svg"
                className="w-[230px] md:w-auto absolute left-0 md:-left-28 bottom-0 md:-bottom-32 transform -translate-x-1/2 translate-y-[12%] md:translate-y-[40%] mix-blend-color-dodge z-30 md:z-10"
              />
              <img
                src="/images/features/planton-copilot/torus.png"
                className="hidden md:block w-[1100px] absolute -left-0 top-0 blur-[500px] transform -translate-x-1/2 -translate-y-[10%] z-0"
              />
              <Box className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-4 md:gap-y-8 z-20 relative">
                <OlBox
                  count={1}
                  title="Open the Copilot Chat"
                  desc={
                    <TypoP1 component="span">
                      From the top banner,{' '}
                      <TypoP1 component="span" className="text-text-secondary">
                        click Ask Copilot to launch the chat.
                      </TypoP1>
                    </TypoP1>
                  }
                  className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
                />
                <OlBox
                  count={2}
                  title="Describe Your Needs"
                  desc={
                    <>
                      <TypoP1 component="span" className="text-text-secondary">
                        Type a simple intent like <br />
                        <TypoP1 component="span" color="text.primary">
                          “Create AWS DynamoDB table.”
                        </TypoP1>
                      </TypoP1>
                    </>
                  }
                  className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
                />
                <OlBox
                  count={3}
                  title="Provide Key Details"
                  desc={
                    <>
                      <TypoP1 component="span" className="text-text-secondary">
                        Copilot prompts for essential info <br />
                        <TypoP1 component="span" color="text.primary">
                          —table name, hash key,
                          <br /> environment, and more.
                        </TypoP1>
                      </TypoP1>
                    </>
                  }
                  className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
                />
                <OlBox
                  count={4}
                  title="Confirm & Deploy"
                  desc={
                    <TypoP1 component="span" className="text-text-secondary">
                      Once you confirm, watch IaC workflows run in real-time,{' '}
                      <TypoP1 component="span" color="text.primary">
                        all within the same chat window.
                      </TypoP1>
                    </TypoP1>
                  }
                  className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)] md:!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.6)_-6%,_rgba(138,_51,_145,_0.6)_125.86%)]"
                />
              </Box>
            </Box>
          </Stack>
          <Stack className="md:max-w-[1250px] items-center gap-3 md:gap-8">
            <TypoH3 className="text-center">What This Looks Like?</TypoH3>
            <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-4 md:gap-y-8">
              <InnovationBox
                title="User Prompt"
                desc="Want to create AWS DynamoDB table."
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="Copilot Reply"
                desc="Lists mandatory info needed (table name, hash key, environment, etc.)."
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="User Input"
                desc="Table name: user-sessions; Hash key: session-ID (type: S); Environment: dev…"
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="Copilot Confirmation"
                desc="Shows final YAML specification, asks “Proceed?"
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="User Confirms"
                desc="Yes, proceed."
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
              <InnovationBox
                title="Copilot Status Update"
                desc="DynamoDB table successfully created.” IaC workflow logs displayed in chat."
                descClassName="text-text-secondary"
                className="!bg-[linear-gradient(38deg,_rgba(36,_23,_65,_0.24)_-6%,_rgba(138,_51,_145,_0.24)_125.86%)]"
              />
            </Box>
            <FrameImage src="/images/features/planton-copilot/create-dynamo-db.gif" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
