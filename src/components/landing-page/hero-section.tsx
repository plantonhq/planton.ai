'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import { BookDemoBtn, GetStartedBtn, TypoH2, TypoP1 } from '@/components/common';

export const HeroSection: FC = () => {
  return (
    <Stack className="w-full items-center relative py-5 md:py-28 overflow-hidden bg-black">
      {/* Background gradients */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '600px', md: '1200px' },
            aspectRatio: '1',
            top: '-200px',
            left: '-200px',
            borderRadius: '50%',
            filter: 'blur(150px)',
            background: 'linear-gradient(180deg, rgba(0,149,255,0.15) 0%, transparent 70%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '400px', md: '800px' },
            aspectRatio: '1',
            top: '100px',
            right: '-200px',
            borderRadius: '50%',
            filter: 'blur(150px)',
            background: 'linear-gradient(180deg, rgba(138,51,145,0.15) 0%, transparent 70%)',
          }}
        />
      </Box>

      <Stack className="w-full items-center relative h-full z-10">
        <Stack className="px-5 md:px-0 items-center text-center max-w-6xl gap-4 md:gap-6">
          {/* Social Proof Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              border: '1px solid #3D3D3D',
              bgcolor: 'rgba(30,34,40,0.6)',
              color: '#999',
              px: 2,
              py: 1,
              borderRadius: '9999px',
            }}
          >
            <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
              Trusted by 5+ IT consulting firms | 100% customer retention
            </Typography>
          </Box>

          {/* Headline */}
          <TypoH2>
            DevOps-in-a-Box—
            <br />
            From Code to Cloud in Under an Hour
          </TypoH2>

          {/* Subheadline */}
          <TypoP1 className="text-text-secondary" sx={{ maxWidth: '56rem' }}>
            Multi-cloud automation platform that eliminates DevOps bottlenecks. Deploy
            infrastructure and backend services in minutes—no scripts, no waiting, no dedicated
            ops team required.
          </TypoP1>

          {/* CTAs */}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <GetStartedBtn
              sx={{
                px: 3,
                py: 1.5,
                height: 'auto',
                fontSize: '1rem',
              }}
            >
              Start Free Trial
            </GetStartedBtn>
            <BookDemoBtn
              sx={{
                px: 3,
                py: 1.5,
                height: 'auto',
                fontSize: '1rem',
                border: '1px solid #3D3D3D',
              }}
            >
              Watch 5-Min Demo
            </BookDemoBtn>
          </Stack>

          {/* CTA Details */}
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
            100 automation minutes, no credit card required
          </Typography>

          {/* Trust Indicators */}
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            sx={{
              gap: { xs: 2, md: 4 },
              mt: 3,
              borderTop: '1px solid #3D3D3D',
              pt: 3,
              width: '100%',
            }}
          >
            <Stack alignItems="center" spacing={0.5}>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                Multi-Cloud
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
                AWS • GCP • Azure • Digital Ocean • Cloudflare
              </Typography>
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                height: '32px',
                bgcolor: '#3D3D3D',
              }}
            />
            <Stack alignItems="center" spacing={0.5}>
              <Link
                href="https://github.com/project-planton/project-planton"
                target="_blank"
                style={{ color: '#0095FF', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Open Source Foundation
              </Link>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                (Project Planton)
              </Typography>
            </Stack>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                height: '32px',
                bgcolor: '#3D3D3D',
              }}
            />
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Zero Vendor Lock-In
            </Typography>
          </Stack>
        </Stack>

        {/* Visual placeholder - can be replaced with actual screenshot/video */}
        <Box sx={{ width: '100%', maxWidth: '72rem', mt: { xs: 5, md: 8 }, px: { xs: 2.5, md: 0 } }}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: { xs: '12px', md: '16px' },
              border: '1px solid #3D3D3D',
              overflow: 'hidden',
              bgcolor: 'rgba(30,34,40,0.46)',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: { xs: '200px', md: '600px' },
                aspectRatio: '1',
                borderRadius: '50%',
                left: '50%',
                top: 0,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(100px)',
                background: 'linear-gradient(307deg, #8A3391 -10.91%, #444F9E 73.76%)',
              }}
            />
            <Box sx={{ position: 'relative', p: { xs: 2, md: 4 } }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 2, md: 4 },
                }}
              >
                {/* Infra Hub Preview */}
                <Stack
                  spacing={1.5}
                  sx={{
                    p: { xs: 2, md: 3 },
                    bgcolor: '#161B22',
                    borderRadius: '8px',
                    border: '1px solid #3D3D3D',
                  }}
                >
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#0095FF' }}>
                    Infra Hub
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                    Live Terraform deployment progress
                  </Typography>
                  <Box
                    sx={{
                      height: { xs: '128px', md: '192px' },
                      bgcolor: '#0D1117',
                      borderRadius: '6px',
                      border: '1px solid #30363D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      [Dashboard Preview]
                    </Typography>
                  </Box>
                </Stack>
                {/* Service Hub Preview */}
                <Stack
                  spacing={1.5}
                  sx={{
                    p: { xs: 2, md: 3 },
                    bgcolor: '#161B22',
                    borderRadius: '8px',
                    border: '1px solid #3D3D3D',
                  }}
                >
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#10B981' }}>
                    Service Hub
                  </Typography>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>
                    Git commit → build → deploy
                  </Typography>
                  <Box
                    sx={{
                      height: { xs: '128px', md: '192px' },
                      bgcolor: '#0D1117',
                      borderRadius: '6px',
                      border: '1px solid #30363D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      [Pipeline Preview]
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
