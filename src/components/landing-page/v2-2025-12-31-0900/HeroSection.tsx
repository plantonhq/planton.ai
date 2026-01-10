'use client';

import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { Badge, PrimaryButton, ArrowRightIcon } from './shared';

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
  { src: '/images/providers/digital-ocean.svg', alt: 'DigitalOcean', name: 'DigitalOcean' },
  { src: '/images/providers/civo.svg', alt: 'Civo', name: 'Civo' },
  { src: '/images/providers/kubernetes.svg', alt: 'Kubernetes', name: 'Kubernetes' },
  { src: '/images/providers/cloudflare.svg', alt: 'Cloudflare', name: 'Cloudflare' },
];

const socialProofPoints = [
  { text: '7 developers managing production on AWS without a DevOps hire', icon: '👥' },
  { text: '<1 hour infrastructure setup (vs. couple weeks manual)', icon: '⚡' },
  { text: '100% customer retention since launch', icon: '✓' },
];

const cloudScenarios = [
  {
    command: 'planton chart install aws-ecs --name api --env dev --values values.yaml',
    info: 'Installing aws-ecs chart...',
    steps: [
      '✓ VPC created (3m 12s)',
      '✓ Load Balancer configured (4m 45s)',
      '✓ ECR registry ready (1m 30s)',
      '✓ SSL certificates issued (2m 15s)',
      '✓ DNS configured (1m 8s)',
    ],
    time: '12 minutes',
    endpoint: 'https://api.dev.acmecorp.io',
  },
  {
    command: 'planton chart install gcp-cloud-run --name api --env staging --values values.yaml',
    info: 'Installing gcp-cloud-run chart...',
    steps: [
      '✓ VPC network created (2m 45s)',
      '✓ Cloud Run service deployed (3m 20s)',
      '✓ Artifact Registry ready (1m 15s)',
      '✓ SSL certificates issued (2m 30s)',
      '✓ Cloud DNS configured (1m 10s)',
    ],
    time: '11 minutes',
    endpoint: 'https://api.staging.acmecorp.dev',
  },
  {
    command: 'planton chart install azure-container-apps --name api --env prod --values values.yaml',
    info: 'Installing azure-container-apps chart...',
    steps: [
      '✓ Resource Group created (1m 45s)',
      '✓ Container Apps Environment ready (5m 20s)',
      '✓ Container Registry configured (2m 10s)',
      '✓ Managed Identity assigned (1m 5s)',
      '✓ Custom domain verified (3m 40s)',
    ],
    time: '14 minutes',
    endpoint: 'https://api.acmecorp.com',
  },
  {
    command: 'planton chart install digitalocean-app-platform --name api --env preview --values values.yaml',
    info: 'Installing digitalocean-app-platform chart...',
    steps: [
      '✓ App Platform app created (2m 30s)',
      '✓ Container Registry linked (1m 45s)',
      '✓ Load Balancer provisioned (3m 15s)',
      '✓ SSL certificate issued (2m 20s)',
      '✓ Domain configured (1m 10s)',
    ],
    time: '11 minutes',
    endpoint: 'https://api.preview.acmecorp.io',
  },
];

const getTerminalLines = (scenario: typeof cloudScenarios[0]) => [
  { type: 'command', text: scenario.command, delay: 600 },
  { type: 'output', text: '', delay: 400 },
  { type: 'info', text: scenario.info, delay: 300 },
  { type: 'output', text: '', delay: 300 },
  ...scenario.steps.map((step, i) => ({ 
    type: 'success', 
    text: step, 
    delay: 500 + (i * 100) 
  })),
  { type: 'output', text: '', delay: 300 },
  { type: 'final', text: `⚡ Complete in ${scenario.time}`, delay: 400 },
  { type: 'output', text: '', delay: 300 },
  { type: 'endpoint', text: `→ ${scenario.endpoint}`, delay: 400 },
];

const AnimatedTerminal: FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const currentScenario = cloudScenarios[scenarioIndex];
  const terminalLines = getTerminalLines(currentScenario);

  useEffect(() => {
    const scenario = cloudScenarios[scenarioIndex];
    const lines = getTerminalLines(scenario);
    
    let currentLine = 0;
    let totalDelay = 0;
    const timeoutIds: NodeJS.Timeout[] = [];

    const showNextLine = () => {
      if (currentLine < lines.length) {
        const line = lines[currentLine];
        totalDelay += line.delay || 400;
        
        const timeoutId = setTimeout(() => {
          setVisibleLines(prev => prev + 1);
        }, totalDelay);
        timeoutIds.push(timeoutId);
        
        currentLine++;
        showNextLine();
      } else {
        // After 4 seconds, switch to next scenario
        const resetTimeout = setTimeout(() => {
          setVisibleLines(0);
          setScenarioIndex(prev => (prev + 1) % cloudScenarios.length);
        }, 4000 + totalDelay);
        timeoutIds.push(resetTimeout);
      }
    };

    showNextLine();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [scenarioIndex]);

  return (
    <Box className="rounded-lg overflow-hidden border border-cyan-500/30 bg-black/60 backdrop-blur-sm text-left w-full">
      {/* Terminal header */}
      <Box className="flex items-center px-4 py-2.5 bg-gray-900/80 border-b border-cyan-500/20">
        <Box className="flex items-center gap-3">
          <Box className="flex gap-1.5">
            <Box className="w-3 h-3 rounded-full bg-red-500/80" />
            <Box className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <Box className="w-3 h-3 rounded-full bg-green-500/80" />
          </Box>
          <Box className="flex items-center gap-1.5 text-sm text-gray-400">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Terminal</span>
          </Box>
        </Box>
      </Box>

      {/* Terminal content - fixed height to prevent layout shifts */}
      <Box className="p-4 font-mono text-xs sm:text-sm h-[280px] overflow-hidden">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <Box key={index} className="mb-1.5">
            {line.type === 'command' && (
              <Box className="flex items-start gap-2 overflow-hidden">
                <span className="text-green-400 select-none flex-shrink-0">$</span>
                <code className="text-gray-100 break-words overflow-hidden">{line.text}</code>
              </Box>
            )}
            {line.type === 'info' && (
              <Typography className="text-cyan-400 text-sm">
                {line.text}
              </Typography>
            )}
            {line.type === 'success' && (
              <Typography className="text-green-400 text-sm">
                {line.text}
              </Typography>
            )}
            {line.type === 'final' && (
              <Typography className="text-amber-400 text-sm font-semibold">
                {line.text}
              </Typography>
            )}
            {line.type === 'endpoint' && (
              <Typography className="text-purple-400 text-sm font-medium">
                {line.text}
              </Typography>
            )}
            {line.type === 'output' && (
              <Box className="h-2" />
            )}
          </Box>
        ))}
        {visibleLines > 0 && visibleLines < terminalLines.length && (
          <Box className="inline-block animate-pulse">
            <span className="text-cyan-400">▊</span>
          </Box>
        )}
        {visibleLines === 0 && (
          <Box className="inline-block animate-pulse">
            <span className="text-cyan-400">▊</span>
          </Box>
        )}
      </Box>
    </Box>
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
            Deploy Production Infrastructure in Minutes, Not Weeks.
            <br className="hidden sm:block" />
            <span className="whitespace-nowrap">No ops team required.</span>{' '}
            <span className="whitespace-nowrap">No vendor lock-in.</span>
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
            <Link href="https://console.planton.ai/signup" target="_blank">
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
