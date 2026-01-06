'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Link, Stack, styled } from '@mui/material';
import './styles.css';

const Container = styled('div')({});

const paths = {
  Features: '/features',
  'Agent Fleet': '/agents',
  'Self-Service DevOps': '/features/self-service-devops',
  'Service Hub': '/features/service-hub',
  'IaC Workflows': '/features/iac-workflows',
  'Kubernetes Dashboard': '/features/kubernetes-dashboard',
  'Auditable Intelligence': '/features/auditable-intelligence',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Container>
      <Stack className="hidden md:flex w-full h-[70px] gap-10 sticky top-0 left-0 z-20 flex-row items-center py-2.5 px-[32px] bg-gray-900 bg-opacity-0 backdrop-blur-sm">
        {Object.entries(paths).map(([key, value]) => (
          <Link
            component={NextLink}
            key={key}
            href={value}
            className={`text-base font-medium ${
              pathname === value ? 'text-[#0099FF]' : 'text-white'
            }`}
          >
            {key}
          </Link>
        ))}
      </Stack>
      <Box className="h-[100%]">{children}</Box>
    </Container>
  );
}
