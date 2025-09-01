"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
  BlurCard,
} from "@/components/landing-page";
import { StyledTab, StyledTabs, TabPanel } from "@/components/tabs";
import { useState, SyntheticEvent } from "react";

export const EmpowermentSection = () => {
  const [value, setValue] = useState("developers");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <PageSection className="pb-24 pt-36 ">
      <PageSectionBackgroundContainer className="overflow-visible">
        <Box className="relative w-full h-full">
          <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px]">
            <Image
              src="/images/features/auditable-intelligence/burger-bg.png"
              alt="donut"
              fill
              className="z-[1]"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </Box>
      </PageSectionBackgroundContainer>
      <SectionContainer className="relative">
        <SectionTitle
          title="Empower Your Team and Secure Your Operations"
          subtitle="Meet Plantora, your AI-powered Planton Copilot. Interact through
              chat to make deployment changes, and receive immediate tracking
              updates, including diffs and stack job logs, right within your
              conversation."
        />
        <Stack alignItems="center" className="mt-8">
          <StyledTabs
            onChange={handleChange}
            value={value}
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            <StyledTab label="Developers" value="developers" />
            <StyledTab label="Organizations" value="organizations" />
          </StyledTabs>
        </Stack>
        <TabPanel value={value} index="developers">
          <Stack direction="row" className="gap-8">
            <BlurCard className="h-[507px] bg-[url('/images/features/auditable-intelligence/debugging-bg.png')] bg-cover bg-center">
              <Stack gap={3} className="justify-center text-left">
                <Typography fontSize={48} fontWeight={700} color="white">
                  Enhanced Transparency
                </Typography>
                <Typography fontSize={24} className="text-gray-400">
                  Easily track changes and understand their impacts.
                </Typography>
              </Stack>
            </BlurCard>
            <BlurCard className="h-[507px] bg-[url('/images/features/auditable-intelligence/collaboration-bg.png')] bg-cover bg-center">
              <Stack gap={3} className="justify-center text-left">
                <Typography fontSize={48} fontWeight={700} color="white">
                  Improved Collaboration
                </Typography>
                <Typography fontSize={24} className="text-gray-400">
                  Share knowledge through accessible change histories.
                </Typography>
              </Stack>
            </BlurCard>
          </Stack>
          <BlurCard className="mt-8 h-[507px] bg-[url('/images/features/auditable-intelligence/tools-bg.png')] bg-cover bg-center">
            <Stack gap={3} className="justify-center text-left">
              <Typography fontSize={48} fontWeight={700} color="white">
                Familiar Tools
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Use known formats like git diff and Pulumi diff.
              </Typography>
            </Stack>
          </BlurCard>
        </TabPanel>
        <TabPanel value={value} index="organizations">
          <Stack direction="row" className="gap-8">
            <BlurCard className="h-[507px] bg-[url('/images/features/auditable-intelligence/compliance-bg.png')] bg-cover bg-center">
              <Stack gap={3} className="justify-center text-left">
                <Typography fontSize={48} fontWeight={700} color="white">
                  Regulatory Compliance
                </Typography>
                <Typography fontSize={24} className="text-gray-400">
                  Maintain detailed audit trails for compliance.
                </Typography>
              </Stack>
            </BlurCard>
            <BlurCard className="h-[507px] bg-[url('/images/features/auditable-intelligence/risk-bg.png')] bg-cover bg-center">
              <Stack gap={3} className="justify-center text-left">
                <Typography fontSize={48} fontWeight={700} color="white">
                  Risk Mitigation
                </Typography>
                <Typography fontSize={24} className="text-gray-400">
                  Quickly identify unintended changes to prevent issues.
                </Typography>
              </Stack>
            </BlurCard>
          </Stack>
          <BlurCard className="mt-8 h-[507px] bg-[url('/images/features/auditable-intelligence/security-bg.png')] bg-cover bg-center">
            <Stack gap={3} className="justify-center text-left">
              <Typography fontSize={48} fontWeight={700} color="white">
                Security and Accountability
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Ensure authorized changes enhance security.
              </Typography>
            </Stack>
          </BlurCard>
        </TabPanel>
      </SectionContainer>
    </PageSection>
  );
};
