import { Box, Button, Link, Stack, Typography } from '@mui/material';

import {
  PageMain,
  PageSection,
  PageSectionBackgroundContainer,
  Pill,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page/v1-2025-02-15-0800/components';
import Image from 'next/image';

import './page.css';
import RolesComponent from './roles';

export default function MultiCloud() {
  return (
    <PageMain>
      <PageSection className="h-full flex">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full bg-[url('/images/solutions/by-use-case/multi-cloud/hero-card-bg.jpg')] bg-cover bg-center" />
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
                <Pill variant="purple">Solutions - Multi-Cloud Adoption</Pill>
                <Box className="mt-8">
                  <RolesComponent />
                </Box>
                <Stack direction="column" spacing={4} className="mt-8">
                  <SectionTitle
                    title="Simplify Multi-Cloud"
                    subtitle="Seamlessly deploy and manage your applications across AWS, Google Cloud, and more—all from one unified platform. Simplify your multi-cloud strategy and accelerate innovation."
                  />
                  <div className="items-center">
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
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd8aETwOMXD0Q3WFNV7XsOG68jr2-FyAg_mVRJdWEMUmEF22w/viewform"
                      target="_self"
                    >
                      Book Demo
                    </Button>
                  </div>
                </Stack>
              </Box>
            </Stack>
            <Box className="w-2/3">
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

      <PageSection className="flex py-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box
            className="absolute bottom-0 h-[500px] w-[500px] bg-gradient-[110] from-[#9747FF] from-[-17%] to-[#03A587] to-[74%] rounded-[44px] filter blur-[80px]"
            sx={{
              backgroundImage:
                'radial-gradient(64.84% 26.2% at 46.91% 50.04%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.80) 100%);',
            }}
          />
        </PageSectionBackgroundContainer>
        <Box className="z-[1] relative">
          <Stack direction="row" spacing={4} className="mt-8">
            <Box className="w-1/2">
              <Image
                src="/images/solutions/by-use-case/multi-cloud/mc-future.png"
                alt="Simplify Multi-Cloud"
                width={1400}
                height={1400}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/3">
              <SectionTitle
                title="The Future is Multi-Cloud"
                subtitle="In today's rapidly evolving technological landscape, relying on a single cloud provider can limit your organization's potential. Multi-cloud adoption isn't just a trend—it's a strategic imperative. By leveraging multiple cloud providers, you gain unparalleled flexibility, access to best-in-class services, and the ability to optimize costs and performance. Planton Cloud empowers you to seamlessly embrace a multi-cloud strategy without the complexity."
              />
            </Stack>
          </Stack>
        </Box>
      </PageSection>

      <PageSection className="flex py-24">
        <PageSectionBackgroundContainer className="overflow-visible">
          <Box className="absolute h-[100px] w-[100px] -left-4 top-36 -rotate-45">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/golang.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute h-[140px] w-[140px] left-[600px] top-44 -rotate-12 filter blur-[4px]">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/golang.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute h-[300px] w-[300px] left-[60px] -bottom-20 -rotate-12 filter blur-[4px]">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/aws.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute h-[120px] w-[120px] left-[440px] -top-5">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/aws.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute h-[300px] w-[300px] right-[60px] -top-20 -rotate-12 filter blur-[4px]">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/aws.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1] relative">
          <Stack
            direction="row"
            spacing={4}
            className="mt-8 bg-gradient-[320] from-[#062B45] from-[-20%] to-transparent to-[65%] rounded-3xl"
          >
            <Box className="w-1/2">
              <Image
                src="/images/solutions/by-use-case/multi-cloud/thinking.gif"
                alt="Simplify Multi-Cloud"
                width={1400}
                height={1400}
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </Box>
            <Stack direction="column" spacing={4} className="mt-8 w-1/2 text-left mr-11">
              <SectionTitle
                title="The Multi-Cloud Conundrum"
                subtitle="Adopting a multi-cloud strategy comes with its share of challenges. Managing different cloud environments requires specialized expertise, leading to increased operational costs and complexity. Inconsistent deployment processes, varied interfaces, and fragmented security policies can slow down your innovation. Planton Cloud simplifies these complexities, providing a unified platform that streamlines your multi-cloud operations."
              />
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="flex pt-0 pb-24 ">
        <PageSectionBackgroundContainer>
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
            <Stack direction="row" spacing={4} alignItems="center" className="relative">
              <Stack alignItems="center" className="absolute top-0 left-5">
                <Box
                  className="w-1 h-[100px] rounded-full"
                  sx={{
                    background:
                      'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 7.48%, rgba(254, 246, 219, 0.00) 32.59%, #CD3CF2 57.7%, #71E6E3 81.49%, #000 96.82%)',
                  }}
                />
                <Box className="h-[100px] w-[100px]">
                  <Image
                    src="/images/solutions/by-use-case/multi-cloud/cloud.png"
                    alt="Simplify Multi-Cloud"
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </Box>
                <Box
                  className="w-1 h-[215px] rounded-full"
                  sx={{
                    background:
                      'linear-gradient(0deg, rgba(255, 255, 255, 0.00) 7.48%, rgba(254, 246, 219, 0.00) 32.59%, #CD3CF2 57.7%, #71E6E3 81.49%, #000 96.82%)',
                  }}
                />
              </Stack>
              <Stack className="mx-[110px] mt-[110px]">
                <SectionTitle
                  title="Simplify Multi-Cloud Adoption"
                  subtitle="Planton Cloud is designed to break down the barriers to multi-cloud adoption. Our platform offers a unified deployment framework that integrates seamlessly with AWS, Google Cloud, and other providers. With Planton Cloud, you can deploy, manage, and scale your applications across any cloud environment through a single, intuitive interface."
                />
              </Stack>
            </Stack>
            <Box className="relative">
              <Box className="relative">
                <Image
                  src="/images/resource-explorer.png"
                  alt="Simplify Multi-Cloud"
                  width={1200}
                  height={650}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    margin: 'auto',
                  }}
                />
              </Box>
              <Box className="relative">
                <Image
                  src="/images/solutions/by-use-case/multi-cloud/vector-path-bg.png"
                  alt="Simplify Multi-Cloud"
                  width={600}
                  height={540}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
            </Box>
            <Stack>
              <SectionTitle
                title="Seamless Integration Across Clouds"
                subtitle="Effortlessly connect your existing cloud accounts to Planton Cloud. Our platform allows you to utilize the unique strengths of each provider—whether it's AWS's networking capabilities or Google Cloud's AI services—without the need to navigate multiple complex interfaces. Planton Cloud bridges the gap, providing a cohesive multi-cloud experience."
              />
              <Box className="relative mt-8">
                <Image
                  src="/images/solutions/by-use-case/multi-cloud/chat.png"
                  alt="Simplify Multi-Cloud"
                  width={1200}
                  height={650}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    margin: 'auto',
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection>
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full right-0 bottom-0">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/circles-bg.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer className="relative z-[1]">
          <Stack>
            <SectionTitle title="Unified Deployment Experience" />
            <Box className="bg-gradient-to-r from-[#2B1549] from-[10.6%] to-[#0A101A] to-[105%] p-8 backdrop-blur-[200px] rounded-t-3xl">
              <Typography fontSize={24}>
                Say goodbye to inconsistent deployment processes. Planton Cloud offers a
                standardized deployment pipeline across all your cloud environments. With our Stack
                Jobs and standardized components, you can deploy applications consistently, reducing
                errors and saving time. Focus on innovation, not infrastructure management.
              </Typography>
            </Box>
          </Stack>
        </SectionContainer>
        <section className="border border-[#424242] relative z-[1] h-[800px]">
          <Stack direction="row" className="h-full">
            <Stack className="w-1/2 border-r border-[#424242] relative">
              <Box className="absolute left-0 bottom-0 right-0 h-[650px] w-[90%] mx-auto">
                <Image
                  src="/images/solutions/by-use-case/multi-cloud/publish-aws.png"
                  alt="Simplify Multi-Cloud"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </Box>
              <Box className="absolute h-full w-full bg-gradient-to-b from-transparent to-black" />
              <Typography
                fontSize={48}
                fontWeight={700}
                className="text-white text-center absolute bottom-20 w-full"
              >
                Traditional Multi-Cloud Deployment
              </Typography>
            </Stack>
            <Stack className="w-1/2 relative">
              <Box className="absolute bottom-0 right-0 h-[650px] w-[90%] mx-auto">
                <Image
                  src="/images/solutions/by-use-case/multi-cloud/cloud-stacks.png"
                  alt="Simplify Multi-Cloud"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'left',
                  }}
                />
              </Box>
              <Box className="absolute h-full w-full bg-gradient-to-b from-transparent to-black" />
              <Typography
                fontSize={48}
                fontWeight={700}
                className="text-white text-center absolute bottom-20 w-full"
              >
                Planton Cloud&apos;s Unified Approach
              </Typography>
            </Stack>
          </Stack>
        </section>
      </PageSection>

      <PageSection className="py-32 bg-gradient-[100] from-black from-[54%] to-[#8A3391] to-[150%]">
        <PageSectionBackgroundContainer>
          <Box className="absolute h-full w-full">
            <Image
              src="/images/solutions/by-use-case/multi-cloud/checkmarks-bg.png"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Box
            flex={1}
            p={5}
            pb={0}
            className="border border-[#3D3D3D] rounded-[42px] bg-[#0000006B] backdrop-blur-[14px] text-left overflow-hidden"
          >
            <div className="flex">
              <Box className="">
                <Image
                  src="/images/solutions/by-use-case/multi-cloud/security.png"
                  alt="Simplify Multi-Cloud"
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </Box>
            </div>
            <Typography fontSize={48}>
              Unified Control,
              <br />
              Enhanced Security
            </Typography>
            <Typography fontSize={24} className="text-gray-400 mt-5 w-[80%]">
              Planton Cloud centralizes the management of your resources, credentials, and access
              controls across all connected cloud providers. Our sophisticated IAM system ensures
              consistent security policies, simplifying compliance and reducing risk. Manage
              everything from one secure platform.
            </Typography>

            <Box className="mt-8 h-[315px] relative -right-[200px]">
              <Image
                src="/images/solutions/by-use-case/multi-cloud/git-commits.png"
                alt="Simplify Multi-Cloud"
                width={1200}
                height={650}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </Box>
          </Box>
        </SectionContainer>
      </PageSection>

      <PageSection className="bg-[url('/images/solutions/by-use-case/multi-cloud/planton-connection-bg.png')] bg-center h-[100vh]">
        <SectionContainer>
          <Stack>
            <Typography fontSize={86} fontWeight={700} lineHeight={1} className="text-white">
              Choose the Best,
              <br />
              Leave the Rest
            </Typography>
            <Typography fontSize={24} className="text-gray-400 mt-5 ">
              Leverage the best services each cloud provider offers. With Planton Cloud, deploy AWS
              Lambda functions, Google Cloud Run services, and more—all from the same platform.
              Tailor your deployments to suit your workloads without being constrained by the
              limitations of a single provider.
            </Typography>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="px-16 pt-8 py-8 bg-gradient-[133] from-[#0F0E97] -from-[23%] via-[#310642] via-[30%] to-[#010104] to-[98%] h-fit">
        <PageSectionBackgroundContainer>
          <Box className="absolute bg-[url('/images/stars-bg.jpg')] bg-cover bg-center opacity-20 h-full w-full"></Box>
          <Box className="absolute opacity-20 h-[420px] w-[420px] rotate-45 -left-[190px] -top-[100px]">
            <Image
              src="/images/rocket.gif"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute opacity-20 h-[220px] w-[220px] rotate-45 left-[200px] bottom-4">
            <Image
              src="/images/rocket.gif"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute opacity-20 h-[420px] w-[420px] rotate-45 left-[46%] -bottom-[150px]">
            <Image
              src="/images/rocket.gif"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
          <Box className="absolute opacity-20 h-[320px] w-[320px] rotate-[60deg] -right-[50px] -top-[10px]">
            <Image
              src="/images/rocket.gif"
              alt="Simplify Multi-Cloud"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </Box>
        </PageSectionBackgroundContainer>
        <section className="relative z-[1]">
          <Stack className="text-left" gap={3}>
            <Typography fontSize={48} fontWeight={700} lineHeight="68px" className="text-white">
              Trial Plantoncloud Enterprise to see our customizable platform, security, and
              performance in action.
            </Typography>
            <Typography fontSize={24} className="text-gray-400 mt-5 ">
              The future of cloud computing is here. Embrace multi-cloud adoption with confidence
              and ease. Join the growing number of organizations transforming their operations with
              Planton Cloud. Sign up today and take the first step toward a more flexible,
              efficient, and innovative cloud strategy.
            </Typography>
            <Button
              className="border border-white text-white rounded-[50px] transition-colors w-fit py-2.5 px-4"
              LinkComponent={Link}
              href="https://console.planton.ai"
              target="_self"
            >
              Get Started
            </Button>
          </Stack>
        </section>
      </PageSection>
    </PageMain>
  );
}
