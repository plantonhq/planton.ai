import { Box, Button, Stack, Typography } from '@mui/material';

import {
  PageMain,
  PageSection,
  PageSectionBackgroundContainer,
  Pill,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';
import { WordsCarousel } from '@/components';

import Image from 'next/image';

import Jumpstart from './JumpStart';
import Link from 'next/link';

export default function MultiCloud() {
  return (
    <PageMain>
      <PageSection className="h-full flex">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-full w-full bg-[url('/images/solutions/by-size/enterprises/hero-card-bg.jpg')] bg-cover bg-center" />
          <Box
            className="absolute h-full w-full"
            sx={{
              backgroundImage:
                'radial-gradient(64.84% 26.2% at 46.91% 50.04%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.80) 100%);',
            }}
          />
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1] relative m-auto">
          <Stack direction="row" spacing={4} className="mt-8">
            <Stack justifyContent="center">
              <Box className="text-left">
                <Pill variant="purple">Solution - Enterprises</Pill>
                <Stack direction="column" className="mt-8">
                  <SectionTitle
                    title="Enterprise-Grade DevOps:"
                    // subtitle="Seamlessly deploy and manage your applications across AWS, Google Cloud, and more—all from one unified platform. Simplify your multi-cloud strategy and accelerate innovation."
                  />
                  <Box className="mb-8">
                    <WordsCarousel words={['Scalable', 'Secure']} />
                  </Box>
                  <p className="text-gray-400 text-xl leading-relaxed">
                    Experience the power of AI-driven DevOps tailored for enterprise-scale
                    reliability, security, and compliance.
                  </p>
                  <div className="items-center mt-8">
                    <Button
                      className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                      LinkComponent={Link}
                      href="https://console.planton.cloud"
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
                </Stack>
              </Box>
            </Stack>
            <Box className="w-1/2">
              <Image
                src="/images/chat-box.png"
                alt="Simplify Multi-Cloud"
                width={800}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
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
                src="/images/solutions/by-size/enterprises/section-1.png"
                alt="Simplify Multi-Cloud"
                width={1400}
                height={1400}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Meeting Enterprise-Level Challenges"
                subtitle="Discover how Planton Cloud addresses the unique challenges faced by enterprises, such as heightened security requirements, strict compliance standards, and the need for high availability. Our platform is designed to meet these demands without adding complexity to your workflows."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex py-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-[300px] w-[300px] -left-4 -top-24 -rotate-45">
            <Image
              src="/images/solutions/by-size/enterprises/lock.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'none' }}
            />
          </Box>
          <Box className="absolute h-[300px] w-[300px] left-[600px] bottom-0 z-[2]">
            <Image
              src="/images/solutions/by-size/enterprises/lock.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'none' }}
            />
          </Box>
          <Box className="absolute h-[70px] w-[70px] right-[60px] bottom-[98px] -rotate-90 filter blur-[4px]">
            <Image
              src="/images/solutions/by-size/enterprises/lock.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box className="absolute h-[120px] w-[120px] left-[440px] -top-5">
            <Image
              src="/images/solutions/by-size/enterprises/lock.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box className="absolute h-[300px] w-[300px] right-[60px] top-20 -rotate-45 filter blur-[4px]">
            <Image
              src="/images/solutions/by-size/enterprises/lock.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'none' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row" spacing={4} className="mt-8">
            <Box className="w-1/2">
              <Image
                src="/images/solutions/by-size/enterprises/section-2.png"
                alt="Simplify Multi-Cloud"
                width={1400}
                height={1400}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Uncompromised Security and Data Encryption"
                subtitle="Planton Cloud prioritizes your data security with end-to-end encryption. All data is encrypted both in transit and at rest, ensuring that sensitive information remains protected at all times. Our commitment to security gives your enterprise the confidence to operate without risk."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex pt-0 pb-24 ">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute -bottom-20 -left-[50%] h-[1700px] w-[1700px] bg-gradient-[160] from-[#7E4FBD29] from-[24.6%] to-[#06051229] to-[66.6%] rounded-full filter blur-[1px]" />
          <Box className="absolute -right-[50%] h-[1700px] w-[1700px] bg-gradient-[160] from-[#7E4FBD29] from-[24.6%] to-[#06051229] to-[66.6%] rounded-full filter blur-[1px]" />
          <Box className="absolute h-[520px] w-[520px] -left-44 top-[35%]">
            <Image
              src="/images/cube-bg.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1] relative">
          <Stack spacing={4} className="mt-8">
            <SectionTitle
              title="Commitment to Compliance Certifications"
              subtitle="We understand the importance of compliance in enterprise operations. Planton Cloud is dedicated to achieving industry-standard certifications like GDPR, HIPAA, and SOC. Our platform is built with compliance in mind, ensuring that regulatory requirements are met and maintained."
            />
            <Box className="relative">
              <Box className="relative">
                <Image
                  src="/images/solutions/by-size/enterprises/section-4.png"
                  alt="Simplify Multi-Cloud"
                  width={850}
                  height={780}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    margin: 'auto',
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex py-32 !pt-0 h-[662px]">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row" spacing={4} className="mt-8">
            <Box className="w-1/2 relative">
              <Image
                src="/images/resource-explorer.png"
                alt="Simplify Multi-Cloud"
                // width={1400}
                // height={1400}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Advanced Automation and Integration"
                subtitle="Enhance your DevOps processes with Planton Cloud's advanced automation capabilities. Integrate seamlessly with your existing tools and workflows to streamline operations. Our platform supports extensive customization, allowing you to automate complex tasks effortlessly."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <Jumpstart />

      <PageSection className="flex pt-24 h-[90vh]  overflow-x-clip">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-full w-[750px] right-0 z-[1]">
            <Box className="bg-[url('/images/solutions/by-size/enterprises/earth-cover.png')] bg-cover bg-center h-full w-full"></Box>
          </Box>
          <Box className="absolute h-[250px] w-[250px] bottom-0 right-[50%] z-[1]">
            <Image
              src="/images/solutions/by-size/enterprises/astronaut.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <Box className="relative h-full">
          <Stack direction="row-reverse" spacing={4} className="mt-8 h-full">
            <Box className="w-1/2 relative">
              <Box className="absolute -right-20">
                <video src="/videos/earth.mp4" className="w-[755px]" autoPlay loop muted />
              </Box>
            </Box>
            <Stack direction="column" spacing={4} className="mt-32 w-1/3">
              <SectionTitle
                title="Multi-Cloud Deployment Framework"
                subtitle="Deploy applications across multiple cloud providers with ease. Planton Cloud's multi-cloud deployment framework allows you to choose the best environment for each application, providing flexibility and reducing vendor lock-in."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex py-32 h-[812px]">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative h-full">
          <Stack direction="row" spacing={4} className="mt-8 h-full">
            <Box className="w-1/2 relative">
              <Image
                src="/images/solutions/by-size/enterprises/stack-status.png"
                alt="Simplify Multi-Cloud"
                // width={1400}
                // height={1400}
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Customizable Pulumi Module Registry"
                subtitle="Take full control of your infrastructure deployments with the Pulumi Module Registry. Customize or build Pulumi modules from the ground up, and register them within Planton Cloud to ensure they align with your enterprise's specific needs and compliance standards."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex pt-0">
        <PageSectionBackgroundContainer className="overflow-y-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-[320px] w-[320px] right-44 -bottom-24 rotate-12 z-[1]">
            <Image
              src="/images/solutions/by-size/enterprises/spaceship-bg.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer className="relative">
          <Stack spacing={4} className="mt-8">
            <SectionTitle
              title="Control and Compliance with Own Pulumi Backend"
              subtitle="Maintain compliance and control by bringing your own Pulumi backend state managers. Run stack jobs within your own infrastructure to meet internal policies and regulatory requirements, ensuring that sensitive data remains within your network boundaries."
            />
            <Box className="relative">
              <Box className="relative">
                <Image
                  src="/images/solutions/by-size/enterprises/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1150}
                  height={780}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    margin: 'auto',
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex py-32 h-[812px]">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
          <Box className="absolute h-[320px] w-[320px] left-0 bottom-0 z-[1]">
            <Image
              src="/images/solutions/by-size/enterprises/saturn-bg.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <Box className="relative h-full">
          <Stack direction="row" spacing={4} className="mt-8 h-full">
            <Box className="w-1/2 relative">
              <Image
                src="/images/solutions/by-size/enterprises/resource-explorer.png"
                alt="Simplify Multi-Cloud"
                // width={1400}
                // height={1400}
                fill
                style={{ objectFit: 'cover', objectPosition: 'right' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="High Availability and On-Premises Deployment"
                subtitle="Achieve maximum uptime and performance by deploying Planton Cloud within your own infrastructure. On-premises deployment ensures that you meet security and compliance requirements while providing dedicated resources for your enterprise operations."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex py-32 h-[812px]">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <Box className="relative h-full">
          <Stack direction="row-reverse" spacing={4} className="mt-8 h-full">
            <Box className="w-1/2 relative">
              <Image
                src="/images/solutions/by-size/enterprises/handshake.png"
                alt="Simplify Multi-Cloud"
                // width={1400}
                // height={1400}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="Dedicated Support and Service Level Agreements"
                subtitle="Benefit from dedicated account management and support tailored to your enterprise needs. Planton Cloud offers customizable Service Level Agreements (SLAs) to ensure high availability and prompt assistance, keeping your operations running smoothly."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="bg-[url('/images/solutions/by-size/enterprises/planton-chip-bg.png')] bg-center h-[100vh]">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack>
            <Typography fontSize={86} fontWeight={700} lineHeight={1} className="text-white">
              Seamless Integration with Existing Enterprise Systems
            </Typography>
            <Typography fontSize={24} className="text-gray-400 mt-5 ">
              Build and scale sophisticated applications confidently. Planton Cloud ensures your
              infrastructure is secure, scalable, and managed efficiently, adapting to your
              startup&apos;s growth without added complexity.
            </Typography>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex pt-0">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-full w-full bg-[url('/images/stars-transparent-bg.png')] bg-cover bg-center z-[1]" />
        </PageSectionBackgroundContainer>
        <SectionContainer className="relative">
          <Stack spacing={4} className="mt-8">
            <SectionTitle
              title="Ready to Elevate Your Enterprise DevOps?"
              subtitle="Experience the security, compliance, and reliability your enterprise demands—all without sacrificing simplicity. Transform your DevOps with Planton Cloud's enterprise-grade solutions."
            />

            <div className="items-center mt-8">
              <Button
                className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                LinkComponent={Link}
                href="https://console.planton.cloud"
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
            <Box className="relative">
              <Box className="relative h-[680px]">
                <Image
                  src="/images/solutions/by-size/enterprises/section-last.png"
                  alt="Simplify Multi-Cloud"
                  width={1150}
                  height={480}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                    // margin: "auto",
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </SectionContainer>
      </PageSection>
    </PageMain>
  );
}
