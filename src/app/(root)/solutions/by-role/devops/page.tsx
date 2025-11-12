import { Metadata } from 'next';
import { Box, Button, Stack } from '@mui/material';

import {
  PageMain,
  PageSectionBackgroundContainer,
  PageSection,
  SectionContainer,
  Pill,
  SectionTitle,
  BlurCard,
} from '@/components/landing-page';

import Image from 'next/image';
import { TypoH2 } from '@/components/common/typography';
import { TypoP1 } from '@/components/common';
import { StyledGradientBorderBox } from '@/components/solutions/by-role/developers/styled';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Build Faster, Deploy Smarter ',
};

export default function DevOps() {
  return (
    <PageMain>
      <PageSection className="min-h-[100vh]">
        <SectionContainer className="z-[1] relative m-auto">
          <Stack spacing={4} className="mt-8">
            <Stack justifyContent="center">
              <Box className="">
                <Pill variant="purple">DevOps</Pill>
                <SectionTitle
                  title="Unleash Your Automation, Skip the Documentation"
                  subtitle="Provide self-service capabilities to your developers and focus on what you love—building automation."
                />
                <div className="items-center mt-8">
                  <Button
                    className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                    LinkComponent={Link}
                    href="https://console.planton.ai"
                    target="_self"
                  >
                    Try Planton Cloud Now
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
              </Box>
            </Stack>
          </Stack>
        </SectionContainer>

        <Box className="-mt-48">
          <Box className="relative h-full w-full p-[34rem]">
            <Image
              src="/images/solutions/by-role/devops/hero-card.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
          </Box>
        </Box>
      </PageSection>

      <PageSection>
        <SectionContainer>
          <Stack className="items-center text-left relative">
            <Box className="grid grid-cols-1 gap-5 z-20 mb-3">
              <Stack className="w-2/3">
                <StyledGradientBorderBox className="w-[70px] mb-4 aspect-square flex flex-col items-center p-[20px] rounded-full">
                  <img src="/images/solutions/developers/tool-1.svg" />
                </StyledGradientBorderBox>
                <SectionTitle
                  title="Empower Developers with Self-Service Automation"
                  subtitle="Focus on coding, not infrastructure. Planton Cloud automates CI/CD pipelines and streamlines troubleshooting, handling DevOps so you can build amazing features effortlessly."
                />
              </Stack>
            </Box>
            <Stack className="w-full mt-4 max-w-[1500px] px-12 pt-16 relative items-center rounded-t-[54px] border border-[#515151] backdrop-blur-[12px] bg-[#1e2228]/25 z-10 border-b-0">
              <img
                src="/images/solutions/developers/stack-job-details.svg"
                className="w-full ml-6"
              />
            </Stack>
            <img src="/images/solutions/developers/bg-3.svg" className="absolute bottom-20 z-0" />
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex pt-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row-reverse" spacing={4} className="mt-8">
            <Box className="w-1/2">
              <Image
                src="/images/solutions/by-role/devops/section-2.png"
                alt="Simplify Multi-Cloud"
                width={1400}
                height={1400}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Centralized Pulumi Module Registry"
                subtitle="Leverage the Pulumi Module Registry to create, customize, and share reusable Infrastructure as Code modules within your organization. Register your automation on Planton Cloud's web interface, making it easily accessible for your team. Standardize deployments and simplify sharing to enhance consistency across projects."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex pt-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Box className="z-[1] relative">
            <Box
              className="w-full h-[400px]"
              sx={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, #000 100%), url('/images/solutions/by-role/devops/section-3-bg.png') lightgray 50% / cover no-repeat",
              }}
            />
            <Stack direction="column-reverse" spacing={4} className="-mt-36">
              <Box className="w-full">
                <Image
                  src="/images/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Accelerate Adoption without Documentation Overhead"
                  subtitle="Say goodbye to time-consuming documentation and training. Planton Cloud's intuitive platform and AI-powered assistant, Plantora, help developers effortlessly discover and utilize your automation. Increase adoption rates while reducing the burden of creating extensive support materials."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex pt-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row" spacing={4} className="mt-8 justify-center">
            <Box className="w-1/3">
              <Image
                src="/images/solutions/by-role/developers/chatbox-1.svg"
                alt="Simplify Multi-Cloud"
                width={600}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/2 justify-center">
              <SectionTitle
                title="Enhance Developer Experience with Plantora"
                subtitle="Plantora, your AI Planton Copilot, guides developers through using your automation via conversational AI. It assists in discovering modules, understanding configurations, and executing deployments, making the developer experience seamless and reducing the support load on your team."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex py-36">
        <PageSectionBackgroundContainer className="">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-center z-[1]" />
          <Box className="absolute h-[500px] w-[500px] right-4 -bottom-0 -rotate-[30deg] z-[1]">
            <Image
              src="/images/solutions/by-role/devops/section-5-overlap.png"
              alt="Simplify Multi-Cloud"
              fill
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Box className="relative">
            <Stack direction="column-reverse" spacing={4} className="mt-8">
              <Box className="w-full">
                <Image
                  src="/images/solutions/by-role/devops/section-5.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Customize and Extend with Open APIs and SDKs"
                  subtitle="Planton Cloud offers open APIs and SDKs, empowering you to create custom tools, plugins, and interfaces tailored to your organization's needs. Extend our platform's functionality to provide specialized capabilities and integrate seamlessly with your existing workflows."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex pt-24">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-[2000px] w-[2000px] -left-[1020px] -top-[780px] rotate-[30deg]">
            <Image
              src="/images/solutions/by-role/devops/section-6-bg.jpg"
              alt="Simplify Multi-Cloud"
              fill
            />
          </Box>
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row" spacing={4} className="mt-8 justify-center">
            <Box className="">
              <BlurCard className="pr-0 pb-0 border-b-0 w-[950px] h-[800px]">
                <Box className="relative w-full h-full">
                  <Image
                    src="/images/resource-explorer.png"
                    alt="Simplify Multi-Cloud"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'left' }}
                  />
                </Box>
              </BlurCard>
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3 justify-center">
              <SectionTitle
                title="Simplify Complex Infrastructure Management"
                subtitle="Manage sophisticated, distributed architectures effortlessly. With Planton Cloud, deploy and maintain microservices, databases, and third-party services without additional DevOps overhead. Streamline your infrastructure management and dedicate more time to innovation."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex flex-col py-36 ">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-center z-[1]" />
          <Box
            className="absolute h-full w-full bg-[url('/images/solutions/by-role/devops/section-7-bg.png')] bg-center bg-position-top bg-no-repeat"
            sx={{ backgroundSize: '100%', top: '-220px' }}
          ></Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Box className="relative">
            <Stack direction="column-reverse" spacing={4} className="mt-8">
              <Box className="w-full">
                <Image
                  src="/images/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Boost Team Efficiency and Collaboration"
                  subtitle="Centralizing automation and simplifying access enhances collaboration between DevOps engineers and developers. Planton Cloud fosters a unified environment where your team works more efficiently, reduces miscommunication, and accelerates project timelines."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
        <Box className="w-full h-[400px]"></Box>
        <SectionContainer>
          <Box className="relative">
            <Stack direction="column-reverse" spacing={4} className="mt-8">
              <Box className="w-full">
                <Image
                  src="/images/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Scale DevOps Impact Without Scaling Team Size"
                  subtitle="Amplify your DevOps capabilities without increasing your team size. Planton Cloud allows you to support more developers, manage additional services, and handle complex infrastructure, all while maintaining your current resources."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex flex-col py-36 pb-0">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-center z-[1]" />
          <Box className="absolute h-full w-full bg-[url('/images/solutions/by-role/devops/section-8-bg.png')] bg-center bg-cover bg-no-repeat"></Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Box className="relative">
            <Stack direction="column-reverse" spacing={4} className="mt-8">
              <Box className="w-full">
                <Image
                  src="/images/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Secure, Auditable, and Compliant Operations"
                  subtitle="Maintain robust security and compliance with Planton Cloud's advanced access controls and auditing features. Ensure that automation is used appropriately and all changes are tracked across interfaces, providing peace of mind and meeting regulatory requirements."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
      </PageSection>

      <PageSection>
        <Stack className="pt-32 relative overflow-hidden items-center bg-black ">
          <img
            src="/images/solutions/developers/bg-7.svg"
            className="absolute bottom-0 right-1/2 transform translate-x-[54%]"
          />
          <Stack className="w-full max-w-[1920px] z-10">
            <Stack className="self-start justify-center flex-row gap-8">
              <img src="/images/solutions/developers/edit-3.svg" style={{ width: '860px' }} />
              <Stack className="gap-4 max-w-[750px] h-fit mt-16 p-9 rounded-[48px] backdrop-blur-[90px] bg-[linear-gradient(301deg,_#351B74C4_36.21%,_#A772D1C4_181.28%)]">
                <TypoH2 className="max-w-[650px]" style={{ fontSize: '64px', lineHeight: '1' }}>
                  Dogfooding: Proven Success from Our Own Experience
                </TypoH2>
                <TypoP1 className="text-text-secondary">
                  Our team uses Planton Cloud to manage complex projects with a small group of
                  engineers. By dogfooding our platform, we&apos;ve proven its effectiveness in
                  enhancing DevOps efficiency and enabling rapid development without additional
                  resources. See how our experience can benefit your organization.
                </TypoP1>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </PageSection>

      <PageSection className="flex flex-col py-36 pb-0">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-center z-[1]" />
          {/* <Box className="absolute h-full w-full bg-[url('/images/solutions/by-role/devops/section-9-bg.png')] bg-center bg-cover bg-no-repeat"></Box> */}
        </PageSectionBackgroundContainer>
        <SectionContainer className="absolute z-[1] left-0 right-0 top-12">
          <Box className="relative">
            <Stack direction="column-reverse" spacing={4} className="mt-8">
              <Box className="w-full">
                {/* <Image
                  src="/images/solutions/by-role/devops/section-9-bg.png"
                  alt="Simplify Multi-Cloud"
                  width={1400}
                  height={1400}
                  style={{ objectFit: "cover", objectPosition: "top" }}
                /> */}
              </Box>
              <Stack direction="column" spacing={4} className="mt-8 w-full">
                <SectionTitle
                  title="Future-Proof Your DevOps with an Extensible Platform"
                  subtitle="Prepare for future challenges with Planton Cloud's extensible platform. As your organization grows, leverage our ability to create custom plugins, integrate new tools, and adapt to emerging technologies, ensuring your DevOps practices remain at the forefront of innovation."
                />
              </Stack>
            </Stack>
          </Box>
        </SectionContainer>
        <Box className="w-full relative">
          <Image
            src="/images/solutions/by-role/devops/section-9-bg.png"
            alt="Simplify Multi-Cloud"
            width={1400}
            height={1400}
            style={{ objectFit: 'cover', objectPosition: 'top', width: '100%' }}
          />
        </Box>
      </PageSection>

      <PageSection className="!pt-0">
        <Stack className="relative w-full items-center">
          <Box
            className="w-full max-w-[1920px] object-cover opacity-55 -z-0"
            sx={{
              ':after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background:
                  'radial-gradient(34.65% 34.34% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)',
              },
            }}
          >
            <video src="/videos/waves.mp4" autoPlay muted loop />
          </Box>
          <Stack className="w-full max-w-[1300px] absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 items-center text-center gap-5 z-10">
            <TypoH2 className="max-w-[1200px]">
              Unleash the Full Potential of Your DevOps Team
            </TypoH2>
            <TypoP1 className="max-w-[1300px] text-center text-text-secondary">
              Unlock greater efficiency and innovation in your DevOps efforts. Enhance automation
              adoption, streamline operations, and focus on what you do best with Planton Cloud.
              Transform your workflow and drive impactful results across your organization.
            </TypoP1>
            <Stack className="flex-row items-center gap-2">
              <Button
                className="bg-[#0095FF] px-5 py-3 rounded-[10px] w-fit h-[40px]"
                href="https://console.planton.ai/"
                target="_self"
              >
                Get Started Free
              </Button>
              <Button
                className="bg-transparent px-5 py-3 rounded-[10px] w-fit"
                href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
                target="_self"
              >
                Book Demo
              </Button>
            </Stack>
          </Stack>
          <Box className="w-[528px] aspect-square absolute left-1/2 bottom-10 transform -translate-x-1/2 bg-gradient-to-b from-[#6c1cb3] to-[#0e065f] rounded-full blur-[150px] z-0" />
        </Stack>
      </PageSection>
    </PageMain>
  );
}
