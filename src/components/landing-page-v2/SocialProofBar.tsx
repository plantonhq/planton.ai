'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, Badge } from './shared';

const customers = [
  {
    name: 'Jai.CX',
    url: 'https://jai.cx/',
  },
  {
    name: 'TynyBay',
    url: 'https://tynybay.com',
  },
  {
    name: 'iorta TechNext',
    url: 'https://iorta.in',
  },
  {
    name: 'Odwen',
    url: 'https://odwen.co.in',
  },
];

const metrics = [
  {
    value: '450+',
    label: 'Infrastructure Deployments',
  },
  {
    value: '52 min',
    label: 'Average Deployment Time',
  },
  {
    value: '100%',
    label: 'Customer Retention',
  },
  {
    value: '$20',
    label: '/dev/month Starting Price',
  },
];

export const SocialProofBar: FC = () => {
  return (
    <Section className="py-12 md:py-16">
      {/* Section header */}
      <Stack className="items-center text-center mb-10">
        <Typography className="text-sm text-[#a0a0a0] uppercase tracking-widest mb-3">
          Trusted by Fast-Moving Teams
        </Typography>
      </Stack>

      {/* Customer logos */}
      <Box className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12">
        {customers.map((customer, index) => (
          <a
            key={index}
            href={customer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Box
              className="
                px-6 py-3 rounded-lg
                border border-[#2a2a2a] bg-[#151515]
                transition-all duration-300
                opacity-70 grayscale
                hover:opacity-100 hover:grayscale-0
                hover:border-[#7c3aed]/50
                hover:shadow-lg hover:shadow-purple-500/10
              "
            >
              <Typography className="text-sm md:text-base font-medium text-[#a0a0a0] group-hover:text-white transition-colors">
                {customer.name}
              </Typography>
            </Box>
          </a>
        ))}
        <Badge variant="default" className="opacity-70">
          + others in beta
        </Badge>
      </Box>

      {/* Metrics grid */}
      <Box className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => (
          <Box
            key={index}
            className="
              text-center p-6 rounded-xl
              bg-[#151515] border border-[#2a2a2a]
              hover:border-[#3a3a3a] hover:bg-[#1a1a1a]
              transition-all duration-300
            "
          >
            <Typography className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
              {metric.value}
            </Typography>
            <Typography className="text-xs md:text-sm text-[#a0a0a0] mt-2">
              {metric.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

