'use client';

import {
  PageMain,
  SectionTitle,
  SectionContainer,
  PageSection,
  Pill,
  PageSectionBackgroundContainer,
  BlurCard,
} from '@/components/landing-page';
import { Button, Stack, Box, Typography, Link } from '@mui/material';
import Image from 'next/image';
import { EmpowermentSection } from './empowerment-section';
import IntelligenceUseCases from './use-cases';

export default function IntelligencePage() {
  return (
    <PageMain>
      <PageSection>
        <PageSectionBackgroundContainer>
          <Box
            className="absolute bottom-[-40%] left-[-25%] h-full w-2/3 filter blur-[100px] mix-blend-lighten z-[1]"
            sx={{
              backgroundImage:
                'radial-gradient(417.06% 241.19% at 50% 55.41%, #055DFF 0%, rgba(5, 93, 255, 0.11) 12.2%, rgba(5, 93, 255, 0.00) 100%)',
            }}
          />
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Pill>Auditable Intelligence</Pill>
          <Stack direction="column" spacing={4} className="mt-8">
            <SectionTitle
              title="Achieve Full Transparency with Auditable Intelligence"
              subtitle="Simplify compliance and collaboration with Auditable Intelligence from Planton Cloud."
            />
            <div className="items-center">
              <Button
                className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                LinkComponent={Link}
                href="https://console.planton.cloud"
                target="_self"
              >
                Get Started
              </Button>
              <Button
                className="bg-transparent text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
                LinkComponent={Link}
                href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
                target="_self"
              >
                Book Demo
              </Button>
            </div>
          </Stack>
          <div className="mt-8 flex justify-center h-[630px] relative">
            <Image
              src="/images/resource-explorer.png"
              alt="Resource Explorer"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </SectionContainer>
      </PageSection>

      <PageSection>
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="relative w-full h-full">
            <div className="absolute left-[-230px] bottom-[-330px] w-[830px] h-[830px] rotate-45 z-[1]">
              <Image
                src="/images/features/auditable-intelligence/donut.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
                className="z-[1]"
              />
            </div>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack direction="column" spacing={4}>
            <SectionTitle
              title="What is Auditable Intelligence?"
              subtitle="Introducing Planton Cloud's Auditable Intelligence—a feature that provides full visibility and traceability of your deployment configurations and infrastructure changes."
            />
          </Stack>
          <Stack direction="row" spacing={4} my={8} justifyContent="center">
            <BlurCard className="flex-[1]">
              <Image
                src="/images/features/auditable-intelligence/debugging.png"
                alt="Debugging"
                width={100}
                height={100}
                className="mb-4"
              />
              <Typography fontSize={48} lineHeight={1.2} textAlign="left">
                Maintain transparency
              </Typography>
            </BlurCard>
            <BlurCard className="flex-[1]">
              <Image
                src="/images/features/auditable-intelligence/compliance.png"
                alt="Compliance"
                width={100}
                height={100}
                className="mb-4"
              />
              <Typography fontSize={48} lineHeight={1.2} textAlign="left">
                Ensure compliance
              </Typography>
            </BlurCard>
            <BlurCard className="flex-[1]">
              <Image
                src="/images/team-collaboration.png"
                alt="Team Collaboration"
                width={100}
                height={100}
                className="mb-4"
              />
              <Typography fontSize={48} lineHeight={1.2} textAlign="left">
                Enhance team collaboration
              </Typography>
            </BlurCard>
          </Stack>
          <div className="mt-8 flex justify-center h-[630px] relative">
            <Image
              src="/images/resource-explorer.png"
              alt="Resource Explorer"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-72">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="relative w-full h-full">
            <div className="absolute left-[-230px] top-0 w-[830px] h-[830px] rotate-45">
              <Image
                src="/images/features/auditable-intelligence/donut.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
                className="blur-[500px] z-[1]"
              />
            </div>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack direction="column" spacing={4}>
            <SectionTitle
              title="Unified Git Diff Format for Clarity"
              subtitle="Planton Cloud captures all configuration changes using the familiar git diff format. Developers can view side-by-side comparisons, complete with commit messages, authors, and timestamps, making it easy to track and understand changes over time."
            />
          </Stack>
          <div className="mt-24 flex justify-center h-[630px] relative">
            <Image
              src="/images/resource-explorer.png"
              alt="Resource Explorer"
              fill
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-72">
        <SectionContainer>
          <Stack direction="row" spacing={4}>
            <Box
              className="flex justify-center h-[480px] relative w-1/2 rounded-[32px] pt-[110px] px-[14px]"
              sx={{
                backgroundImage: 'url(/images/features/planton-copilot/gradient-card-1.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              <div className="relative w-full h-full">
                <Image src="/images/resource-explorer.png" alt="Resource Explorer" fill />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Pulumi Diffs for Infrastructure Changes
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Integration with Pulumi allows you to see the actual impact of configuration changes
                on your infrastructure. Detailed diffs provide a clear picture of resource
                modifications, ensuring you know exactly what&apos;s happening under the hood.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-72">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="relative w-full h-full">
            <div className="absolute left-[-230px] top-0 w-[830px] h-[830px] rotate-45">
              <Image
                src="/images/features/auditable-intelligence/donut.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
                className="blur-[500px] z-[1]"
              />
            </div>
            <div className="absolute left-[-230px] top-[130px] w-[550px] h-[550px] rotate-[30deg]">
              <Image
                src="/images/features/auditable-intelligence/donut.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
                className="z-[1]"
              />
            </div>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack direction="row-reverse" spacing={4}>
            <Box
              className="flex justify-center h-[480px] relative w-1/2 rounded-[32px] pt-[110px] px-[14px]"
              sx={{
                backgroundImage: 'url(/images/features/planton-copilot/gradient-card-1.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              <div className="relative w-full h-full">
                <Image src="/images/resource-explorer.png" alt="Resource Explorer" fill />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Audit Trails <br /> wherever you work
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Whether you make changes through the GUI, CLI, or chat with Plantora, every action
                is tracked and auditable. Planton Cloud ensures consistency, giving your team
                confidence regardless of how they deploy.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-72 pb-36">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="relative w-full h-full">
            <div className="absolute right-0 w-1/2 h-full">
              <Image
                src="/images/features/auditable-intelligence/ellipse-56.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack direction="row" spacing={4} className="relative z-[1] mx-[-90px]">
            <Box className="flex justify-center h-[550px] relative w-2/3 rounded-[32px]">
              <div className="relative w-full h-full">
                <Image src="/images/resource-explorer.png" alt="Resource Explorer" fill />
              </div>
            </Box>
            <Stack gap={3} className="w-1/3 justify-center text-left">
              <Typography fontSize={48} fontWeight={700} color="white">
                Real-Time Tracking with Your Planton Copilot
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Meet Plantora, your AI-powered Planton Copilot. Interact through chat to make
                deployment changes, and receive immediate tracking updates, including diffs and
                stack job logs, right within your conversation.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-36">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="relative w-full h-full">
            <div className="absolute top-0 w-full h-full">
              <Image
                src="/images/features/auditable-intelligence/circles-top.png"
                alt="donut"
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <BlurCard className="pb-0">
            <Stack gap={3} className="justify-center text-left">
              <Typography fontSize={48} fontWeight={700} color="white">
                Stack jobs for Every Change
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Every configuration change triggers a stack job, documenting the deployment process.
                Access history, logs, and outcomes to gain complete transparency into how changes
                are applied and their effects.
              </Typography>
            </Stack>
            <div className="mt-12 flex justify-center h-[630px] relative">
              <Image
                src="/images/features/auditable-intelligence/stack-jobs.png"
                alt="Resource Explorer"
                fill
                objectFit="cover"
                objectPosition="top left"
              />
            </div>
          </BlurCard>
        </SectionContainer>
      </PageSection>

      <EmpowermentSection />

      <IntelligenceUseCases />

      <Stack className="pt-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Typography fontSize={86} lineHeight={1} className="text-white">
            Ready to Revolutionize Your Deployment Process?
          </Typography>
          <Typography fontSize={24} className="text-gray-400 mt-11">
            Enhance transparency, ensure compliance, and empower your team with Planton Cloud&apos;s
            Auditable Intelligence. Take the first step towards seamless deployment tracking and
            unparalleled visibility.
          </Typography>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
            LinkComponent={Link}
            href="https://console.planton.cloud"
            target="_self"
          >
            Get Started with Auditable Intelligence
          </Button>
        </div>

        <Stack className="flex-row my-16">
          <Stack flex={1} className="relative w-[1020px] h-[700px]">
            <Stack className="relative h-full w-full">
              <Image
                src="/images/book-a-demo.png"
                alt="Planton Cloud Platform"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </PageMain>
  );
}
