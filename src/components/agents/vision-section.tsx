'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

export const VisionSection = () => {
  return (
    <PageSection className="py-32 bg-[#050505]">
      <PageSectionBackgroundContainer>
        <Box
          className="absolute top-0 left-0 w-full h-full"
          sx={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </PageSectionBackgroundContainer>

      <SectionContainer className="z-[1] relative">
        <Stack direction="column" spacing={4} className="mb-20">
          <SectionTitle
            title="The Vision: Where We're Going"
            subtitle="This is just the beginning. Agents are evolving into an autonomous DevOps system."
          />
        </Stack>

        <Stack spacing={8} className="max-w-6xl mx-auto">
          {/* Context-Aware Agents */}
          <Box className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-10 relative overflow-hidden text-left">
            <Box className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-[80px]" />
            
            <Stack spacing={6} className="relative z-10">
              <Box className="flex items-center gap-5">
                <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <Typography fontSize={32} fontWeight={700} className="text-white">@</Typography>
                </Box>
                <Box>
                  <Typography fontSize={14} fontWeight={600} className="text-blue-400 mb-1 uppercase tracking-wider">
                    Current Focus
                  </Typography>
                  <Typography fontSize={32} fontWeight={700} className="text-white">
                    Context-Aware Agents
                  </Typography>
                </Box>
              </Box>

              <Typography fontSize={18} className="text-gray-300 leading-relaxed max-w-3xl">
                Agents embedded exactly where you need them—not a separate copilot screen you have to switch to.
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Box className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Typography fontSize={16} fontWeight={600} className="text-blue-300 mb-4">
                    How It Works
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      'Click "Pipeline Manager" in your Service screen',
                      'Agent receives full context automatically',
                      'No manual copying of URLs or IDs',
                      'Agent starts with complete information'
                    ].map((item, idx) => (
                      <Box key={idx} className="flex items-start gap-3">
                        <Box className="w-5 h-5 rounded-md bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Typography fontSize={12} className="text-blue-400">+</Typography>
                        </Box>
                        <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
                <Box className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <Typography fontSize={16} fontWeight={600} className="text-cyan-300 mb-4">
                    The Benefit
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      'Users stay in their workflow',
                      'No screen switching or context loss',
                      'Faster, more accurate assistance',
                      'Seamless UX integration'
                    ].map((item, idx) => (
                      <Box key={idx} className="flex items-start gap-3">
                        <Box className="w-5 h-5 rounded-md bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Typography fontSize={12} className="text-cyan-400">+</Typography>
                        </Box>
                        <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </div>
            </Stack>
          </Box>

          {/* Autonomous Agents */}
          <Box className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent p-10 relative overflow-hidden text-left">
            <Box className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[80px]" />
            
            <Stack spacing={6} className="relative z-10">
              <Box className="flex items-center gap-5">
                <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/30">
                  <Typography fontSize={32} fontWeight={700} className="text-white">A</Typography>
                </Box>
                <Box>
                  <Typography fontSize={14} fontWeight={600} className="text-purple-400 mb-1 uppercase tracking-wider">
                    Next Step
                  </Typography>
                  <Typography fontSize={32} fontWeight={700} className="text-white">
                    Autonomous Agents
                  </Typography>
                </Box>
              </Box>

              <Typography fontSize={18} className="text-gray-300 leading-relaxed max-w-3xl">
                Agents by nature are autonomous—small units of work that can be scheduled, monitored, and rerun automatically.
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Scheduled Execution', desc: 'Drift detection nightly, security audits weekly, optimization monthly' },
                  { title: 'Continuous Optimization', desc: 'Improve database indexes, container resources, cache hit rates' },
                  { title: 'Self-Healing Systems', desc: 'Detect, diagnose, and fix routine issues without human intervention' },
                ].map((item, idx) => (
                  <Box key={idx} className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <Typography fontSize={15} fontWeight={600} className="text-purple-300 mb-2">
                      {item.title}
                    </Typography>
                    <Typography fontSize={13} className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </div>
            </Stack>
          </Box>

          {/* Expandable Fleet */}
          <Box className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-10 relative overflow-hidden text-left">
            <Box className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-[80px]" />
            
            <Stack spacing={6} className="relative z-10">
              <Box className="flex items-center gap-5">
                <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-500/30">
                  <Typography fontSize={32} fontWeight={700} className="text-white">+</Typography>
                </Box>
                <Box>
                  <Typography fontSize={14} fontWeight={600} className="text-green-400 mb-1 uppercase tracking-wider">
                    Future
                  </Typography>
                  <Typography fontSize={32} fontWeight={700} className="text-white">
                    Expandable Fleet
                  </Typography>
                </Box>
              </Box>

              <Typography fontSize={18} className="text-gray-300 leading-relaxed max-w-3xl">
                Create new specialized agents as needs emerge. Your organization&apos;s unique workflows become automated expertise.
              </Typography>

              <Stack spacing={4}>
                {[
                  { title: 'Organization-Specific Agents', desc: 'Build agents that understand your deployment patterns, compliance requirements, and tooling' },
                  { title: 'Custom Workflow Automation', desc: 'Agent that handles your Friday deployment freeze, or your security review workflow' },
                  { title: 'Agent Marketplace', desc: 'Share agents with the community. Discover agents built by others. A GitHub Actions marketplace for DevOps agents.' },
                ].map((item, idx) => (
                  <Box key={idx} className="flex items-start gap-4">
                    <Box className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-2.5" />
                    <Box>
                      <Typography fontSize={16} fontWeight={600} className="text-green-300 mb-1">
                        {item.title}
                      </Typography>
                      <Typography fontSize={14} className="text-gray-400">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </SectionContainer>
    </PageSection>
  );
};













