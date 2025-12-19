'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { Badge, PrimaryButton, SecondaryButton, ArrowRightIcon } from './shared';

const trustIndicators = [
  'Open Source Foundation',
  'Zero Vendor Lock-In',
];

const cloudProviders = [
  { src: '/images/providers/aws.svg', alt: 'AWS', name: 'AWS' },
  { src: '/images/providers/gcp.svg', alt: 'GCP', name: 'GCP' },
  { src: '/images/providers/azure.svg', alt: 'Azure', name: 'Azure' },
  { src: '/images/providers/kubernetes.svg', alt: 'Kubernetes', name: 'Kubernetes' },
  { src: '/images/providers/digital-ocean.svg', alt: 'Digital Ocean', name: 'Digital Ocean' },
  { src: '/images/providers/civo.svg', alt: 'Civo', name: 'Civo' },
  { src: '/images/providers/cloudflare.svg', alt: 'Cloudflare', name: 'Cloudflare' },
];

export const HeroSection: FC = () => {
  return (
    <Box className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient effects */}
      <Box className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb */}
        <Box 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          sx={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Secondary gradient orb */}
        <Box 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          sx={{
            background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Grid pattern overlay */}
        <Box 
          className="absolute inset-0 opacity-[0.03]"
          sx={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </Box>

      {/* Content */}
      <Box className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <Stack className="items-center text-center gap-8">
          {/* Social proof badge */}
          <Badge variant="purple" className="animate-pulse">
            Trusted by 5+ IT consulting firms • 100% customer retention
          </Badge>

          {/* Main headline */}
          <Typography
            variant="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl"
          >
            DevOps-in-a-Box
            <br />
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#0ea5e9] bg-clip-text text-transparent">
              From Code to Cloud
            </span>
            <br />
            in Under an Hour
          </Typography>

          {/* Subheadline */}
          <Typography className="text-lg md:text-xl lg:text-2xl text-[#a0a0a0] max-w-3xl leading-relaxed">
            Multi-cloud automation platform that eliminates DevOps bottlenecks. 
            Deploy infrastructure and backend services in minutes—no scripts, 
            no waiting, no dedicated ops team required.
          </Typography>

          {/* CTA buttons */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            className="gap-4 mt-4"
          >
            <Link href="https://console.planton.ai/" target="_blank">
              <PrimaryButton className="text-base md:text-lg px-8 py-4">
                Start Free Trial
                <ArrowRightIcon />
              </PrimaryButton>
            </Link>
            <Link href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" target="_blank">
              <SecondaryButton className="text-base md:text-lg px-8 py-4">
                Request Demo
              </SecondaryButton>
            </Link>
          </Stack>

          {/* Free trial note */}
          <Typography className="text-sm text-[#666]">
            100 automation minutes, no credit card required
          </Typography>

          {/* Trust indicators */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            className="gap-3 md:gap-4 mt-8 flex-wrap justify-center"
          >
            {trustIndicators.map((indicator, index) => (
              <Box
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a2a2a] bg-[#111]/50"
              >
                <Box className="w-2 h-2 rounded-full bg-[#10b981]" />
                <Typography className="text-sm text-[#a0a0a0]">
                  {indicator}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Cloud provider logos */}
          <Box className="mt-8 pt-8 border-t border-[#2a2a2a]/50 w-full max-w-4xl">
            <Typography className="text-sm text-[#666] text-center mb-6">
              Multi-Cloud Support
            </Typography>
            <Box className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {cloudProviders.map((provider, index) => (
                <Box
                  key={index}
                  className="transition-opacity hover:opacity-100 opacity-70"
                  sx={{ height: { xs: 32, sm: 40 }, width: 'auto' }}
                >
                  <Image
                    src={provider.src}
                    alt={provider.alt}
                    width={80}
                    height={40}
                    style={{ 
                      height: '100%', 
                      width: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Visual placeholder for dashboard preview */}
          <Box className="relative w-full max-w-5xl mt-12">
            <Box 
              className="aspect-[16/9] rounded-xl border border-[#2a2a2a] bg-gradient-to-br from-[#151515] to-[#0a0a0a] overflow-hidden"
              sx={{
                boxShadow: '0 40px 80px -20px rgba(124,58,237,0.2), 0 20px 40px -10px rgba(0,0,0,0.5)',
              }}
            >
              {/* Mock dashboard UI */}
              <Box className="p-4 md:p-6 h-full flex flex-col">
                {/* Top bar */}
                <Box className="flex items-center gap-2 mb-4">
                  <Box className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <Box className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <Box className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <Box className="ml-4 flex-1 h-6 rounded bg-[#1a1a1a]" />
                </Box>
                
                {/* Split view mock */}
                <Box className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left panel - Infra Hub */}
                  <Box className="rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] p-4">
                    <Box className="flex items-center gap-2 mb-4">
                      <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa]" />
                      <Typography className="text-sm font-medium text-white">Infra Hub</Typography>
                    </Box>
                    <Stack className="gap-2">
                      {['VPC Created', 'Load Balancer', 'ECR Registry'].map((item, i) => (
                        <Box key={i} className="flex items-center gap-2">
                          <Box className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </Box>
                          <Typography className="text-xs text-[#a0a0a0]">{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                  
                  {/* Right panel - Service Hub */}
                  <Box className="rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] p-4">
                    <Box className="flex items-center gap-2 mb-4">
                      <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0ea5e9] to-[#38bdf8]" />
                      <Typography className="text-sm font-medium text-white">Service Hub</Typography>
                    </Box>
                    <Stack className="gap-2">
                      {['Build: Success', 'Push: Complete', 'Deploy: Running'].map((item, i) => (
                        <Box key={i} className="flex items-center gap-2">
                          <Box 
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              i === 2 ? 'bg-[#0ea5e9] animate-pulse' : 'bg-[#10b981]'
                            }`}
                          >
                            {i === 2 ? (
                              <Box className="w-2 h-2 rounded-full bg-white" />
                            ) : (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </Box>
                          <Typography className="text-xs text-[#a0a0a0]">{item}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            </Box>
            
            {/* Glow effect beneath */}
            <Box 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 opacity-50"
              sx={{
                background: 'radial-gradient(ellipse, rgba(124,58,237,0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
