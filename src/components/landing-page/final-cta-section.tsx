'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, GetStartedBtn, BookDemoBtn, Btn } from '@/components';

export const FinalCTASection: FC = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: 'center',
        bgcolor: 'black',
        py: { xs: 8, md: 12 },
        px: { xs: 2.5, md: 0 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent, rgba(0,149,255,0.02), transparent)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '800px',
          aspectRatio: '1',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 50%)',
          borderRadius: '50%',
          filter: 'blur(200px)',
          background: 'linear-gradient(180deg, rgba(0,149,255,0.15) 0%, rgba(138,51,145,0.15) 100%)',
        }}
      />

      <Stack
        sx={{
          width: '100%',
          maxWidth: '56rem',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          zIndex: 10,
          position: 'relative',
        }}
      >
        {/* Header */}
        <Stack sx={{ alignItems: 'center', textAlign: 'center', gap: { xs: 2, md: 3 } }}>
          <TypoH2>Ready to Eliminate Your DevOps Bottleneck?</TypoH2>
          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1.125rem' }, color: 'text.secondary' }}>
            Join IT consulting firms and startups deploying infrastructure in minutes, not weeks.
          </Typography>
        </Stack>

        {/* Primary CTA */}
        <Stack
          sx={{
            alignItems: 'center',
            gap: 2,
            p: { xs: 3, md: 5 },
            bgcolor: '#161B22',
            border: '1px solid #3D3D3D',
            borderRadius: '12px',
            width: '100%',
          }}
        >
          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
            <GetStartedBtn sx={{ px: 4, py: 2, height: 'auto', fontSize: '1.125rem' }}>
              Start Free Trial →
            </GetStartedBtn>
            <BookDemoBtn
              sx={{ px: 4, py: 2, height: 'auto', fontSize: '1.125rem', border: '1px solid #3D3D3D' }}
            >
              Book Live Demo →
            </BookDemoBtn>
          </Stack>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              ✓ 100 automation minutes included
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              ✓ No credit card required
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              ✓ Full platform access
            </Typography>
          </Stack>

          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 1 }}>
            Deploy your first environment in &lt;10 minutes
          </Typography>
        </Stack>

        {/* Secondary CTAs */}
        <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
          <Btn
            LinkComponent={Link}
            href="/pricing"
            sx={{ px: 3, py: 1.5, height: 'auto', border: '1px solid #3D3D3D', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}
          >
            Calculate Pricing →
          </Btn>
        </Stack>

        {/* Trust Bar */}
        <Box
          sx={{
            width: '100%',
            p: { xs: 2, md: 3 },
            bgcolor: '#161B22',
            border: '1px solid #3D3D3D',
            borderRadius: '12px',
          }}
        >
          <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { xs: 2, md: 4 } }}>
            {[
              '5 Paying Customers',
              '100% Retention Rate',
              'Open Source Foundation',
              'Multi-Cloud Support',
              '24/7 Support',
            ].map((item, index) => (
              <Stack key={index} direction="row" alignItems="center" spacing={1}>
                <Typography sx={{ color: '#10B981' }}>✓</Typography>
                <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' }, color: 'text.secondary' }}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Customer Quotes */}
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: '#161B22',
              border: '1px solid #3D3D3D',
              borderRadius: '12px',
              borderLeft: '4px solid #0095FF',
            }}
          >
            <Typography sx={{ fontSize: '0.875rem', fontStyle: 'italic', mb: 1 }}>
              "Developers self-onboard their own services. That's a huge win."
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              — Tynybay, deploying Odwen warehousing platform
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: '#161B22',
              border: '1px solid #3D3D3D',
              borderRadius: '12px',
              borderLeft: '4px solid #10B981',
            }}
          >
            <Typography sx={{ fontSize: '0.875rem', fontStyle: 'italic', mb: 1 }}>
              "Complete AWS ECS environment deployed in under 1 hour with 7 developers managing
              everything themselves."
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
              — iorta TechNext, SalesVerse platform
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
