'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

export const ProblemSolution = () => {
  return (
    <PageSection className="py-32 bg-black">
      <SectionContainer>
        <Stack direction="column" spacing={4} className="mb-16">
          <SectionTitle
            title="The Problem We Solve"
            subtitle="DevOps doesn't need a single superhero. It needs a team of specialists who are always available."
          />
        </Stack>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional DevOps */}
          <Box className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent p-10 relative overflow-hidden text-left">
            <Box className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full filter blur-[80px]" />
            
            <Stack spacing={6} className="relative z-10">
              <Box className="flex items-center gap-4">
                <Box className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <Typography fontSize={24}>X</Typography>
                </Box>
                <Typography fontSize={28} fontWeight={700} className="text-red-400">
                  Traditional DevOps
                </Typography>
              </Box>

              <Stack spacing={4}>
                {[
                  { text: 'Single overworked DevOps team handling hundreds of requests' },
                  { text: 'Ticket queues and 3-5 day delays for simple infrastructure needs' },
                  { text: 'Constant context switching between pipelines, databases, clusters' },
                  { text: 'Knowledge siloed in a few senior engineers\' heads' },
                  { text: 'Developers blocked waiting for infrastructure approval' },
                  { text: '2 AM wake-up calls when pipelines fail' },
                ].map((item, idx) => (
                  <Box key={idx} className="flex items-start gap-4">
                    <Box className="w-6 h-6 rounded-md bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Box className="w-2 h-2 rounded-full bg-red-400" />
                    </Box>
                    <Typography fontSize={16} className="text-gray-300 leading-relaxed">
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                <Typography fontSize={14} fontWeight={600} className="text-red-300 mb-2 uppercase tracking-wide">
                  The Bottleneck
                </Typography>
                <Typography fontSize={15} className="text-gray-400 leading-relaxed">
                  No matter how talented your DevOps team, they can&apos;t scale linearly. Every new developer, service, and environment adds to the queue.
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* With Agents */}
          <Box className="rounded-3xl border border-green-500/20 bg-gradient-to-b from-green-500/5 to-transparent p-10 relative overflow-hidden text-left">
            <Box className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full filter blur-[80px]" />
            
            <Stack spacing={6} className="relative z-10">
              <Box className="flex items-center gap-4">
                <Box className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Typography fontSize={24}>*</Typography>
                </Box>
                <Typography fontSize={28} fontWeight={700} className="text-green-400">
                  With Agents
                </Typography>
              </Box>

              <Stack spacing={4}>
                {[
                  { text: 'Specialized AI agents available 24/7, no tickets, no queues' },
                  { text: 'Instant responses—databases in 20 minutes, not 3 days' },
                  { text: 'Each agent is an expert in its specific domain' },
                  { text: 'Knowledge democratized—every developer has access' },
                  { text: 'Developers self-serve infrastructure without leaving workflow' },
                  { text: 'Pipeline failures diagnosed and fixed in minutes, autonomously' },
                ].map((item, idx) => (
                  <Box key={idx} className="flex items-start gap-4">
                    <Box className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Typography fontSize={12} className="text-green-400">+</Typography>
                    </Box>
                    <Typography fontSize={16} className="text-gray-300 leading-relaxed">
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              <Box className="p-5 rounded-xl bg-green-500/10 border border-green-500/20">
                <Typography fontSize={14} fontWeight={600} className="text-green-300 mb-2 uppercase tracking-wide">
                  The Multiplier
                </Typography>
                <Typography fontSize={15} className="text-gray-400 leading-relaxed">
                  Agents scale infinitely. Every developer gets instant access to specialized DevOps expertise, without adding headcount.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </div>
      </SectionContainer>
    </PageSection>
  );
};














