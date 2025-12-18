'use client';

import { Box, Stack, Button, Typography, Link } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  Pill,
} from '@/components/landing-page';

export const HeroSection = () => {
  return (
    <PageSection>
      <PageSectionBackgroundContainer>
        {/* Primary glow */}
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] filter blur-[120px]"
          sx={{
            backgroundImage:
              'radial-gradient(circle, rgba(5, 93, 255, 0.4) 0%, rgba(5, 93, 255, 0.1) 40%, transparent 70%)',
          }}
        />
        {/* Secondary accent glows */}
        <Box
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] filter blur-[100px] opacity-50"
          sx={{
            backgroundImage:
              'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
          }}
        />
        <Box
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] filter blur-[100px] opacity-50"
          sx={{
            backgroundImage:
              'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
          }}
        />
      </PageSectionBackgroundContainer>
      
      <SectionContainer className="z-[1]">
        <Pill variant="blue">AI Agents</Pill>
        <Stack direction="column" spacing={4} className="mt-8">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight">
            Cursor for DevOps
          </h1>
          <Typography fontSize={24} className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A coordinated system of specialized AI agents, each mastering a specific domain of
            DevOps operations. From pipeline troubleshooting to database provisioning—expert-level
            assistance on every screen, 24/7.
          </Typography>
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25"
              LinkComponent={Link}
              href="https://console.planton.cloud"
              target="_self"
            >
              Get Started
            </Button>
            <Button
              className="bg-white/5 text-white px-8 py-4 text-lg font-medium rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm"
              LinkComponent={Link}
              href="https://share.hsforms.com/2trKElpQ2R7-aR1f916tY7gpxl8x"
              target="_self"
            >
              Book Demo
            </Button>
          </div>
        </Stack>

        {/* Hero Visual - Agents Constellation */}
        <div className="mx-auto mt-16 relative h-[500px] w-full max-w-5xl">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {/* Pulse rings */}
              <div className="absolute inset-0 w-32 h-32 rounded-full border border-blue-500/30 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 w-32 h-32 rounded-full border border-blue-500/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              {/* Core */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                <div className="text-center">
                  <Typography fontSize={14} fontWeight={700} className="text-white">Planton</Typography>
                  <Typography fontSize={10} className="text-blue-200">Cloud</Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Nodes - Orbiting around center */}
          {/* Pipeline Agent - Top */}
          <AgentNode 
            position="top-8 left-1/2 -translate-x-1/2"
            color="from-cyan-400 to-blue-500"
            icon="P"
            label="Pipeline"
            delay="0s"
          />
          
          {/* AWS Agent - Top Right */}
          <AgentNode 
            position="top-20 right-16"
            color="from-orange-400 to-red-500"
            icon="A"
            label="AWS RDS"
            delay="0.5s"
          />
          
          {/* K8s Agent - Right */}
          <AgentNode 
            position="top-1/2 -translate-y-1/2 right-4"
            color="from-blue-400 to-indigo-600"
            icon="K"
            label="K8s"
            delay="1s"
          />
          
          {/* DB Agent - Bottom Right */}
          <AgentNode 
            position="bottom-20 right-16"
            color="from-yellow-400 to-orange-500"
            icon="D"
            label="Database"
            delay="1.5s"
          />
          
          {/* Security Agent - Bottom */}
          <AgentNode 
            position="bottom-8 left-1/2 -translate-x-1/2"
            color="from-green-400 to-emerald-600"
            icon="S"
            label="Security"
            delay="2s"
          />
          
          {/* Drift Agent - Bottom Left */}
          <AgentNode 
            position="bottom-20 left-16"
            color="from-purple-400 to-pink-500"
            icon="D"
            label="Drift"
            delay="2.5s"
          />
          
          {/* Logs Agent - Left */}
          <AgentNode 
            position="top-1/2 -translate-y-1/2 left-4"
            color="from-amber-400 to-orange-500"
            icon="L"
            label="Logs"
            delay="3s"
          />
          
          {/* Compliance Agent - Top Left */}
          <AgentNode 
            position="top-20 left-16"
            color="from-teal-400 to-cyan-600"
            icon="C"
            label="Compliance"
            delay="3.5s"
          />

          {/* Connection Lines - SVG overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
            {/* Lines from center to each agent */}
            <line x1="50%" y1="50%" x2="50%" y2="8%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="96%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="50%" y2="92%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="4%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
            <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
          </svg>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <Typography fontSize={48} fontWeight={700} className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              19+
            </Typography>
            <Typography fontSize={14} className="text-gray-500 mt-1">
              Specialized Agents
            </Typography>
          </div>
          <div className="text-center">
            <Typography fontSize={48} fontWeight={700} className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              10x
            </Typography>
            <Typography fontSize={14} className="text-gray-500 mt-1">
              Faster Resolution
            </Typography>
          </div>
          <div className="text-center">
            <Typography fontSize={48} fontWeight={700} className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              24/7
            </Typography>
            <Typography fontSize={14} className="text-gray-500 mt-1">
              Always Available
            </Typography>
          </div>
        </div>
      </SectionContainer>
    </PageSection>
  );
};

// Agent Node Component
const AgentNode = ({ 
  position, 
  color, 
  icon, 
  label, 
  delay 
}: { 
  position: string; 
  color: string; 
  icon: string; 
  label: string; 
  delay: string;
}) => (
  <div 
    className={`absolute ${position} animate-pulse`}
    style={{ animationDelay: delay, animationDuration: '2s' }}
  >
    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer`}>
      <span className="text-white font-bold text-xl">{icon}</span>
    </div>
    <Typography fontSize={11} className="text-gray-400 text-center mt-2 font-medium">
      {label}
    </Typography>
  </div>
);














