import {
  PageMain,
  SectionContainer,
  PageSection,
  SectionTitle,
  Pill,
  PageSectionBackgroundContainer,
} from '@/components/landing-page';
import { Box, Stack, Button, Typography, Link } from '@mui/material';
import Image from 'next/image';
import Jumpstart from './jumpstart';

export default function ServiceHub() {
  return (
    <PageMain>
      <PageSection>
        <PageSectionBackgroundContainer>
          <Box
            className="relative bottom-[-50%] mx-auto h-full w-1/2 filter blur-[100px] mix-blend-lighten"
            sx={{
              backgroundImage:
                'radial-gradient(417.06% 241.19% at 50% 55.41%, #055DFF 0%, rgba(5, 93, 255, 0.11) 12.2%, rgba(5, 93, 255, 0.00) 100%)',
            }}
          />
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1]">
          <Pill>Service Hub</Pill>
          <Stack direction="column" spacing={4} className="mt-8">
            <SectionTitle
              title="Streamline Your Microservices Development with Service Hub"
              subtitle="Centralize, Accelerate, and Simplify Service Creation with Planton Cloud's AI-Enabled Platform"
            />
            <div className="items-center">
              <Button
                className="px-5 py-2 bg-primary-50 text-white rounded-[10px] hover:bg-[#1976D2] transition-colors"
                LinkComponent={Link}
                href="https://console.planton.ai"
                target="_self"
              >
                Get Started
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
          <div className="mx-auto mt-8 flex justify-center h-[630px] w-1/2 relative">
            <Image
              src="/images/features/service-hub/service.png"
              alt="Resource Explorer"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="mix-blend-lighten"
            />
          </div>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24">
        <PageSectionBackgroundContainer>
          <Box
            className="mx-auto mt-24 h-full w-1/2 filter blur-[100px] opacity-80"
            sx={{
              backgroundImage:
                'radial-gradient(50% 50% at 50% 50%, #FFC805 0%, rgba(0, 0, 0, 0.00) 100%);',
            }}
          />
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1] relative">
          <Stack direction="column" spacing={4} className="mt-8">
            <SectionTitle
              title="All Your Services, One Hub"
              subtitle=" Gain complete visibility into every microservice within your organization. Service Hub provides a centralized registry where you can explore, manage, and understand all your services. Onboard new developers effortlessly by giving them instant access to the full landscape of your services, including languages used, deployment environments, and source code repositories."
            />
          </Stack>
          <div className="mx-auto mt-8 flex justify-center h-[630px] relative">
            <Image
              src="/images/features/service-hub/service-hub.png"
              alt="Resource Explorer"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className="mix-blend-lighten"
            />
          </div>
        </SectionContainer>
      </PageSection>

      <Jumpstart />

      <PageSection className="py-24 bg-[#161A1F]">
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/features/planton-copilot/chatbox-1.svg"
                  alt="Resource Explorer"
                  width={600}
                  height={600}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                AI-Powered Assistance with Plantora
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Meet Plantora, your conversational AI assistant that simplifies service development.
                From selecting the right templates to configuring your project and setting up
                repositories, Plantora guides you every step of the way, making complex setups a
                breeze.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24 bg-[#161A1F]">
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/features/planton-copilot/chatbox-1.svg"
                  alt="Resource Explorer"
                  width={600}
                  height={600}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Automate Builds and Deployments
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Automate your build, test, and deployment processes with our pre-built GitHub
                Actions and Workflows. Customize and extend your CI/CD pipelines to fit your
                organization&apos;s needs, reducing errors and accelerating delivery times.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24">
        <PageSectionBackgroundContainer>
          <Box className="absolute bg-[url(/images/checkboxes-bg.png)] bg-cover bg-center mx-auto h-full w-full" />
        </PageSectionBackgroundContainer>
        <SectionContainer className="z-[1]">
          <Stack
            direction="column"
            spacing={4}
            className="mt-8 relative p-10 rounded-2xl pb-0"
            sx={{
              backgroundImage:
                'radial-gradient(119.67% 95.88% at 15.34% 20.19%, #1D1D56 0%, #020108 100%)',
            }}
          >
            <Box className="absolute bg-[url(/images/features/service-hub/circles-bg.png)] bg-cover bg-center mx-auto h-full w-full top-0 left-0 rounded-2xl" />
            <Box className="relative z-[1]">
              <SectionTitle
                title="Deploy Anywhere with Flexibility"
                subtitle="Deploy your services to the platform of your choice—be it Kubernetes, AWS Fargate, Google Cloud Run, or serverless functions like AWS Lambda. With unified configuration files, enjoy a consistent deployment experience across all environments."
              />
              <div className="mx-auto mt-8 flex justify-center h-[430px] w-[95%] relative ">
                <Image
                  src="/images/features/service-hub/explorer.png"
                  alt="Resource Explorer"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="mix-blend-lighten"
                />
              </div>
            </Box>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24 bg-[#161A1F]">
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/features/planton-copilot/chatbox-1.svg"
                  alt="Resource Explorer"
                  width={600}
                  height={600}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Unified Deployment Configuration
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Simplify your deployment configurations using Planton Cloud&apos;s multi-cloud
                resource modeling APIs. Define environment variables, resource limits, and
                deployment specifics in a standardized way, ensuring consistency across all your
                services and environments.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24 bg-[#161A1F]">
        <SectionContainer>
          <Stack direction="column-reverse" spacing={4}>
            <Box
              className="flex justify-center h-[780px] relative w-full rounded-[32px] pt-[110px] px-[14px]"
              sx={{
                backgroundImage: 'url(/images/features/planton-copilot/gradient-card-1.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/features/planton-copilot/chatbox-1.svg"
                  alt="Resource Explorer"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-full justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Securely Manage Configurations and Secrets
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Handle your configurations and secrets securely using Config Maps and integrations
                with AWS Secrets Manager and Google Secrets Manager. Update configurations on the
                fly without the need to redeploy services, ensuring security and agility.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="py-24 bg-[#161A1F]">
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
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/features/planton-copilot/chatbox-1.svg"
                  alt="Resource Explorer"
                  width={600}
                  height={600}
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-1/2 justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Ingress Setup Made Easy
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Say goodbye to manual networking setups. Simply specify your domain, and Planton
                Cloud takes care of ingress and routing configurations automatically. Focus on your
                service logic while we handle the networking complexities.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <PageSection className="pt-24 bg-[#161A1F]">
        <PageSectionBackgroundContainer>
          <Box className="absolute bottom-0 bg-black h-32 w-full z-[1] filter blur-[50px] " />
          <Box className="absolute left-36">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="243"
              height="234"
              viewBox="0 0 243 234"
              fill="none"
            >
              <path
                d="M172.795 61.6494H72.4558C69.4704 61.6494 67.0503 64.0695 67.0503 67.0549V167.394C67.0503 170.379 69.4704 172.799 72.4558 172.799H172.795C175.78 172.799 178.2 170.379 178.2 167.394V67.0549C178.2 64.0695 175.78 61.6494 172.795 61.6494Z"
                fill="url(#paint0_linear_680_7374)"
              />
              <path
                d="M120.902 121.891C120.902 122.841 121.676 123.614 122.625 123.614C123.575 123.614 124.347 122.841 124.347 121.891C124.347 120.941 123.575 120.168 122.625 120.168C121.676 120.168 120.902 120.941 120.902 121.891ZM118.123 121.891C118.123 119.408 120.142 117.39 122.625 117.39C125.107 117.39 127.126 119.408 127.126 121.891C127.126 123.352 126.423 124.641 125.34 125.458C124.625 125.998 124.014 126.757 124.014 127.654V128.338C124.014 129.105 123.392 129.727 122.625 129.727C121.857 129.727 121.235 129.105 121.235 128.338V127.654C121.235 126.757 120.625 125.998 119.909 125.458C118.826 124.641 118.123 123.352 118.123 121.891ZM135.129 116.528C135.129 115.377 134.196 114.444 133.045 114.444H115.526C112.54 114.444 110.12 116.864 110.12 119.85V127.1C110.12 130.086 112.54 132.506 115.526 132.506H133.045C134.196 132.506 135.129 131.573 135.129 130.422C135.129 129.271 134.196 128.338 133.045 128.338H132.35C131.583 128.338 130.961 127.716 130.961 126.948C130.961 126.181 131.583 125.559 132.35 125.559H133.045C134.196 125.559 135.129 124.626 135.129 123.475C135.129 122.324 134.196 121.391 133.045 121.391H132.35C131.583 121.391 130.961 120.769 130.961 120.002C130.961 119.234 131.583 118.612 132.35 118.612H133.045C134.196 118.612 135.129 117.679 135.129 116.528ZM114.288 106.26C114.288 109.245 116.709 111.665 119.694 111.665H125.555C128.54 111.665 130.96 109.246 130.961 106.261L130.961 104.718C130.962 101.084 126.991 97.7743 122.63 97.7716H122.626C120.502 97.7716 118.357 98.5691 116.738 99.9598C115.182 101.296 114.288 103.032 114.288 104.72V106.26ZM133.74 104.72L133.739 108.885C133.739 110.421 134.983 111.665 136.518 111.665C137.287 111.665 137.908 112.288 137.908 113.055V133.895C137.908 134.662 137.287 135.285 136.518 135.285H108.731C107.963 135.285 107.342 134.662 107.342 133.895V113.055C107.342 112.288 107.963 111.665 108.731 111.665C110.266 111.665 111.51 110.421 111.51 108.887V104.718C111.511 102.22 112.756 99.7181 114.926 97.8521C117.042 96.0348 119.847 94.9928 122.626 94.9928H122.63C128.55 94.9956 133.741 99.5402 133.74 104.72ZM92.9432 136.99C93.3684 137.629 94.2393 137.767 94.8611 137.318C95.4832 136.868 95.6199 136 95.1967 135.36C92.2344 130.878 90.4587 125.795 89.9532 120.453C89.8584 119.45 90.6679 118.612 91.6747 118.612H92.0584C92.8257 118.612 93.4478 117.99 93.4478 117.223C93.4478 116.455 92.8257 115.833 92.0584 115.833H91.6797C90.6734 115.833 89.8654 114.994 89.9635 113.992C90.4829 108.689 92.2542 103.641 95.1968 99.1897C95.62 98.5493 95.4835 97.6819 94.8616 97.2319C94.2396 96.7818 93.3681 96.9198 92.9427 97.5589C89.6208 102.55 87.6593 108.234 87.1561 114.203C87.0795 115.112 86.3341 115.833 85.4217 115.833H85.1115C84.3442 115.833 83.7222 116.455 83.7222 117.223C83.7222 117.99 84.3442 118.612 85.1115 118.612H85.4171C86.329 118.612 87.0732 119.334 87.1471 120.243C87.6357 126.251 89.6012 131.971 92.9432 136.99ZM142.665 145.036C142.215 144.414 141.348 144.277 140.708 144.701C136.249 147.649 131.194 149.421 125.881 149.937C124.865 150.036 124.014 149.216 124.014 148.195V147.789C124.014 147.022 123.392 146.4 122.625 146.4C121.857 146.4 121.235 147.022 121.235 147.789V148.195C121.235 149.216 120.385 150.036 119.369 149.937C114.055 149.422 108.998 147.65 104.537 144.701C103.897 144.277 103.03 144.414 102.58 145.036C102.131 145.657 102.269 146.527 102.907 146.952C107.919 150.291 113.631 152.255 119.629 152.748C120.525 152.822 121.235 153.556 121.235 154.454V154.736C121.235 155.503 121.857 156.125 122.625 156.125C123.392 156.125 124.014 155.503 124.014 154.736V154.454C124.014 153.556 124.725 152.822 125.62 152.748C131.618 152.255 137.328 150.291 142.339 146.953C142.977 146.528 143.115 145.657 142.665 145.036ZM102.58 89.5125C103.03 90.1343 103.897 90.2711 104.537 89.8481C109.013 86.89 114.089 85.1162 119.422 84.6074C120.409 84.5132 121.235 85.3099 121.235 86.3015V86.6566C121.235 87.4239 121.857 88.0459 122.625 88.0459C123.392 88.0459 124.014 87.4239 124.014 86.6566V86.3015C124.014 85.3099 124.84 84.5132 125.828 84.6074C131.16 85.1162 136.235 86.8899 140.708 89.8479C141.348 90.271 142.215 90.1345 142.665 89.5129C143.115 88.8914 142.977 88.0207 142.339 87.5956C137.342 84.2678 131.65 82.306 125.671 81.8057C124.747 81.7284 124.014 80.9718 124.014 80.0449V79.7097C124.014 78.9424 123.392 78.3203 122.625 78.3203C121.857 78.3203 121.235 78.9424 121.235 79.7097V80.0448C121.235 80.9716 120.502 81.7283 119.578 81.8054C113.598 82.3047 107.904 84.2668 102.907 87.5959C102.269 88.0209 102.131 88.8912 102.58 89.5125ZM159.826 115.833C158.913 115.833 158.167 115.112 158.09 114.202C157.587 108.233 155.625 102.549 152.302 97.5586C151.877 96.9196 151.006 96.7817 150.384 97.2317C149.762 97.6818 149.625 98.5494 150.049 99.1897C152.992 103.642 154.764 108.69 155.283 113.994C155.381 114.995 154.574 115.833 153.568 115.833H153.191C152.424 115.833 151.802 116.455 151.802 117.223C151.802 117.99 152.424 118.612 153.191 118.612H153.573C154.579 118.612 155.388 119.45 155.293 120.451C154.787 125.794 153.012 130.878 150.049 135.36C149.625 136 149.762 136.868 150.384 137.318C151.006 137.767 151.877 137.629 152.302 136.991C155.645 131.972 157.609 126.252 158.099 120.245C158.173 119.335 158.918 118.612 159.831 118.612H160.138C160.905 118.612 161.527 117.99 161.527 117.223C161.527 116.455 160.905 115.833 160.138 115.833H159.826ZM144.409 95.4888C144.951 96.0313 145.831 96.0313 146.373 95.4888L155.301 86.5607C155.844 86.0182 155.844 85.1386 155.301 84.5961C154.759 84.0536 153.879 84.0536 153.337 84.5961L144.409 93.5242C143.866 94.0667 143.866 94.9463 144.409 95.4888ZM100.838 139.06C100.295 138.517 99.4158 138.517 98.8733 139.06L89.9452 147.988C89.4027 148.53 89.4027 149.41 89.9452 149.952C90.4877 150.495 91.3673 150.495 91.9098 149.952L100.838 141.024C101.38 140.482 101.38 139.602 100.838 139.06ZM105.895 100.495C106.438 99.9523 106.438 99.0727 105.895 98.5302L87.2401 79.8763C86.6976 79.3339 85.818 79.3339 85.2755 79.8764C84.733 80.4189 84.733 81.2985 85.2756 81.841L103.931 100.495C104.473 101.037 105.353 101.037 105.895 100.495ZM141.362 135.961C141.904 135.419 142.784 135.419 143.326 135.961L159.97 152.605C160.512 153.147 160.512 154.027 159.97 154.569C159.427 155.112 158.548 155.112 158.005 154.569L141.362 137.926C140.819 137.383 140.819 136.504 141.362 135.961Z"
                fill="white"
              />
              <ellipse
                cx="121.5"
                cy="117"
                rx="121.5"
                ry="117"
                fill="url(#paint1_radial_680_7374)"
              />
              <path
                d="M242.1 117C242.1 181.089 188.138 233.1 121.5 233.1C54.8621 233.1 0.9 181.089 0.9 117C0.9 52.9114 54.8621 0.9 121.5 0.9C188.138 0.9 242.1 52.9114 242.1 117Z"
                stroke="white"
                strokeOpacity="0.06"
                strokeWidth="1.8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_680_7374"
                  x1="67.0503"
                  y1="11176.6"
                  x2="11182.1"
                  y2="61.6494"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BD0816" />
                  <stop offset="1" stopColor="#FF5252" />
                </linearGradient>
                <radialGradient
                  id="paint1_radial_680_7374"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(104.49 135.72) rotate(128.82) scale(181.591 169.161)"
                >
                  <stop offset="0.669534" stopColor="#D9D9D9" stopOpacity="0.03" />
                  <stop offset="0.892782" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
          </Box>
        </PageSectionBackgroundContainer>
        <SectionContainer>
          <Stack direction="column-reverse">
            <Box className="flex justify-center h-[830px] relative w-full rounded-[32px] px-[14px] pt-10">
              <div className="relative w-[75%] h-full overflow-hidden">
                <Image
                  src="/images/features/service-hub/details.png"
                  alt="Resource Explorer"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </Box>
            <Stack gap={3} className="w-full justify-center">
              <Typography fontSize={48} fontWeight={700} color="white">
                Customize and Extend Your Service Ecosystem
              </Typography>
              <Typography fontSize={24} className="text-gray-400">
                Empower your team to innovate by creating and registering custom templates, actions,
                and workflows. Tailor the development environment to your organization&apos;s unique
                needs, fostering collaboration and continuous improvement.
              </Typography>
            </Stack>
          </Stack>
        </SectionContainer>
      </PageSection>

      <Stack className="py-12 bg-[#161A1F] items-center">
        <Stack
          className={`w-full max-w-[1200px] py-10 rounded-3xl items-center justify-center text-center bg-[url(/images/features/planton-copilot/frame-1.svg)] bg-cover bg-center`}
        >
          <Stack className="gap-10 items-center">
            <Typography
              fontSize={86}
              lineHeight={1}
              fontWeight={700}
              color="white"
              className="max-w-[930px]"
            >
              Revolutionize Service Development with AI-Powered Service Hub
            </Typography>
            <Stack className="flex-row gap-3 items-center">
              <Button className="px-5 py-3 bg-white text-black font-medium h-[40px] rounded-[10px]">
                Try Planton Cloud
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </PageMain>
  );
}
