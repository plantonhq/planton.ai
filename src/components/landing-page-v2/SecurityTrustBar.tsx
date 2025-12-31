'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { ShieldIcon } from './shared';

const securityBadges = [
  {
    label: 'SOC 2 Type I',
    status: 'Q1 2026',
    available: false,
  },
  {
    label: 'GDPR Compliant',
    status: 'Available',
    available: true,
  },
  {
    label: 'Zero-Trust Architecture',
    status: 'Available',
    available: true,
  },
  {
    label: 'Open Source Audit',
    status: 'Available',
    available: true,
  },
];

export const SecurityTrustBar: FC = () => {
  return (
    <Box className="w-full py-6 px-4 md:px-8 bg-gradient-to-r from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a] border-y border-[#2a2a2a]/50">
      <Box className="max-w-7xl mx-auto">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          className="items-center justify-center gap-4 md:gap-8"
        >
          {/* Label */}
          <Box className="flex items-center gap-2 text-[#a0a0a0]">
            <ShieldIcon />
            <Typography className="text-sm font-medium">
              Enterprise-Grade Security
            </Typography>
          </Box>
          
          {/* Badges */}
          <Stack 
            direction="row" 
            className="flex-wrap justify-center gap-3"
          >
            {securityBadges.map((badge, index) => (
              <Box
                key={index}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full
                  border transition-all duration-300
                  ${badge.available 
                    ? 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]' 
                    : 'bg-[#7c3aed]/10 border-[#7c3aed]/30 text-[#a78bfa]'
                  }
                `}
              >
                {badge.available ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                <Typography className="text-xs md:text-sm font-medium">
                  {badge.label}
                </Typography>
                {!badge.available && (
                  <Typography className="text-xs text-[#666]">
                    ({badge.status})
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

