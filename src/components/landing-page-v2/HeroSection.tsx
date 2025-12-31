'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { Badge, PrimaryButton, ArrowRightIcon, TerminalWindow } from './shared';

const trustIndicators = [
  'Multi-Cloud (AWS, GCP, Azure)',
  'Open Source Foundation',
  'Zero Vendor Lock-In',
  'Standards-Based',
];

const cloudProviders = [
  { src: '/images/providers/aws.svg', alt: 'AWS', name: 'AWS' },
  { src: '/images/providers/gcp.svg', alt: 'GCP', name: 'GCP' },
  { src: '/images/providers/azure.svg', alt: 'Azure', name: 'Azure' },
  { src: '/images/providers/kubernetes.svg', alt: 'Kubernetes', name: 'Kubernetes' },
  { src: '/images/providers/cloudflare.svg', alt: 'Cloudflare', name: 'Cloudflare' },
];

const socialProofPoints = [
  { text: '7 developers managing production on AWS without a DevOps hire', icon: '👥' },
  { text: '<1 hour infrastructure setup (vs. couple weeks manual)', icon: '⚡' },
  { text: '100% customer retention since launch', icon: '✓' },
];

const terminalLines = [
  { type: 'command', text: '$ planton infra-chart deploy aws-ecs-environment' },
  { type: 'output', text: '', delay: 500 },
  { type: 'success', text: '✓ VPC created (15s)', delay: 800 },
  { type: 'success', text: '✓ Load Balancer configured (22s)', delay: 600 },
  { type: 'success', text: '✓ ECR registry ready (8s)', delay: 500 },
  { type: 'success', text: '✓ SSL certificates issued (35s)', delay: 700 },
  { type: 'success', text: '✓ DNS configured (12s)', delay: 600 },
  { type: 'output', text: '', delay: 300 },
  { type: 'final', text: '⚡ Complete in 52 seconds', delay: 500 },
];

const AnimatedTerminal: FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let currentLine = 0;
    let totalDelay = 0;

    const showNextLine = () => {
      if (currentLine < terminalLines.length) {
        const line = terminalLines[currentLine];
        totalDelay += line.delay || 400;
        
        setTimeout(() => {
          setVisibleLines(prev => prev + 1);
        }, totalDelay);
        
        currentLine++;
        showNextLine();
      } else {
        // Reset after 3 seconds
        setTimeout(() => {
          setVisibleLines(0);
          currentLine = 0;
          totalDelay = 0;
          showNextLine();
        }, 3000 + totalDelay);
      }
    };

    showNextLine();
  }, []);

  return (
    <TerminalWindow title="Terminal" className="text-left">
      {terminalLines.slice(0, visibleLines).map((line, index) => (
        <Box key={index} className="mb-1">
          {line.type === 'command' && (
            <Typography className="font-mono text-sm text-[#0ea5e9]">
              {line.text}
            </Typography>
          )}
          {line.type === 'success' && (
            <Typography className="font-mono text-sm text-[#10b981]">
              {line.text}
            </Typography>
          )}
          {line.type === 'final' && (
            <Typography className="font-mono text-sm text-[#f59e0b] font-bold">
              {line.text}
            </Typography>
          )}
          {line.type === 'output' && (
            <Box className="h-2" />
          )}
        </Box>
      ))}
      {visibleLines > 0 && visibleLines < terminalLines.length && (
        <Box className="animate-pulse">
          <Typography className="font-mono text-sm text-[#666]">_</Typography>
        </Box>
      )}
    </TerminalWindow>
  );
};

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
            Trusted by Tech Teams • 100% customer retention
          </Badge>

          {/* Main headline - UPDATED */}
          <Typography
            variant="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl"
          >
            What if DevOps
            <br />
            <span className="bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#0ea5e9] bg-clip-text text-transparent">
              Didn&apos;t Block
            </span>
            <br />
            Your Developers?
          </Typography>

          {/* Subheadline - UPDATED */}
          <Typography className="text-lg md:text-xl lg:text-2xl text-[#a0a0a0] max-w-3xl leading-relaxed">
            Multi-cloud infrastructure automation that eliminates DevOps bottlenecks.
            No ops team required. No vendor lock-in. 100% open source.
          </Typography>

          {/* Quantified Social Proof - NEW */}
          <Box className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
            {socialProofPoints.map((point, index) => (
              <Box
                key={index}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#151515] border border-[#2a2a2a]"
              >
                <span className="text-xl">{point.icon}</span>
                <Typography className="text-sm text-[#b0b0b0] text-left">
                  {point.text}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* CTA buttons - SIMPLIFIED HIERARCHY */}
          <Stack className="items-center gap-4 mt-4">
            {/* Primary CTA */}
            <Link href="https://console.planton.ai/" target="_blank">
              <PrimaryButton className="text-lg md:text-xl px-10 py-5 shadow-2xl shadow-purple-500/30">
                Start Free Trial
                <ArrowRightIcon />
              </PrimaryButton>
            </Link>
            
            {/* Free trial note */}
            <Typography className="text-sm text-[#666]">
              100 automation minutes free • No credit card required
            </Typography>

            {/* Secondary CTAs */}
            <Stack direction="row" className="gap-4 mt-2">
              <Link 
                href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" 
                target="_blank"
                className="text-[#a78bfa] hover:text-white transition-colors text-sm font-medium"
              >
                Watch 5-Min Demo →
              </Link>
              <Link 
                href="#pricing"
                className="text-[#a0a0a0] hover:text-white transition-colors text-sm"
              >
                See Pricing
              </Link>
            </Stack>
          </Stack>

          {/* Trust indicators - UPDATED */}
          <Stack 
            direction="row" 
            className="gap-2 md:gap-3 mt-8 flex-wrap justify-center"
          >
            {trustIndicators.map((indicator, index) => (
              <Box
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a2a2a] bg-[#111]/50"
              >
                <Box className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <Typography className="text-xs text-[#a0a0a0]">
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

          {/* Animated Terminal Preview - NEW */}
          <Box className="relative w-full max-w-3xl mt-12">
            <AnimatedTerminal />
            
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
