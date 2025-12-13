'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

const journeyPhases = [
  {
    phase: '01',
    period: '2023 - Early 2024',
    title: 'The Single Copilot Vision',
    description:
      'Started with a ChatGPT-style interface—a single AI copilot handling all DevOps requests through natural language.',
    highlight: {
      type: 'problem',
      title: 'The Problem',
      text: 'DevOps is too broad. Pipelines, databases, Kubernetes, security—different domains with different tools. One AI couldn\'t master it all.',
    },
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    phase: '02',
    period: 'Mid 2024',
    title: 'The Realization',
    description:
      'A single generalist AI becomes mediocre at everything. Knowledge buried in the copilot. DevOps engineers struggled to identify the right use cases.',
    highlight: {
      type: 'insight',
      title: 'The Insight',
      text: 'If DevOps requires a team of specialists, why expect a single AI to handle it all?',
    },
    gradient: 'from-purple-500 to-pink-500',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    phase: '03',
    period: 'Late 2024',
    title: 'The Pivot to Microagents',
    description:
      'Power is in specialization. Create micro agents for specific tasks—Tekton pipelines, AWS RDS, Kubernetes troubleshooting.',
    highlight: {
      type: 'achievement',
      title: 'Achievement',
      text: 'Made agent creation incredibly simple: instructions + MCP tools + backend. No boilerplate.',
    },
    gradient: 'from-green-500 to-emerald-500',
    bgGlow: 'rgba(34, 197, 94, 0.15)',
  },
  {
    phase: '04',
    period: 'Q4 2024',
    title: 'Graphton Framework',
    description:
      'Built a declarative framework for agent creation. 3-10 lines of code instead of 100+ with raw LangGraph.',
    highlight: {
      type: 'feature',
      title: 'Key Features',
      text: 'Automatic MCP authentication, loop detection, prompt enhancement. Production-ready agents in minutes.',
    },
    gradient: 'from-orange-500 to-red-500',
    bgGlow: 'rgba(249, 115, 22, 0.15)',
  },
  {
    phase: '05',
    period: 'Current',
    title: 'Context-Aware Integration',
    description:
      'Agents embedded in specific screens—not a separate copilot interface. Full context, automatically.',
    highlight: {
      type: 'benefit',
      title: 'Benefit',
      text: 'Users stay in workflow. No context switching. Agent knows exactly what you\'re working on.',
    },
    gradient: 'from-indigo-500 to-violet-500',
    bgGlow: 'rgba(99, 102, 241, 0.15)',
  },
  {
    phase: '06',
    period: 'Vision',
    title: 'Autonomous Future',
    description:
      'Agents by nature are autonomous—small units of work that can be scheduled and rerun automatically.',
    highlight: {
      type: 'vision',
      title: 'The Vision',
      text: 'Continuous optimization. Self-healing infrastructure. DevOps that improves itself overnight.',
    },
    gradient: 'from-pink-500 to-rose-500',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
  },
];

const highlightColors: Record<string, { bg: string; border: string; text: string }> = {
  problem: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-300' },
  insight: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-300' },
  achievement: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-300' },
  feature: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-300' },
  benefit: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-300' },
  vision: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-300' },
};

export const JourneyTimeline = () => {
  return (
    <PageSection className="py-32 bg-black">
      <PageSectionBackgroundContainer>
        {/* Ambient glow */}
        <Box
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[1000px] h-[600px] filter blur-[150px] opacity-30"
          sx={{
            backgroundImage:
              'radial-gradient(ellipse, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0) 70%)',
          }}
        />
      </PageSectionBackgroundContainer>

      <SectionContainer className="z-[1] relative">
        <Stack direction="column" spacing={4} className="mb-20">
          <SectionTitle
            title="The Journey to Agents"
            subtitle="From a single copilot dream to a specialized fleet of DevOps experts. Here's how we evolved our thinking."
          />
        </Stack>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {journeyPhases.map((item, index) => (
            <Box
              key={index}
              className="relative group"
            >
              {/* Card */}
              <Box
                className="h-full rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:border-white/20 overflow-hidden"
                sx={{
                  background: `linear-gradient(135deg, ${item.bgGlow} 0%, rgba(0,0,0,0.8) 100%)`,
                }}
              >
                {/* Phase Number */}
                <div className="flex items-center gap-4 mb-6">
                  <Box
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-lg">{item.phase}</span>
                  </Box>
                  <Typography fontSize={13} className="text-gray-500 font-medium tracking-wide">
                    {item.period}
                  </Typography>
                </div>

                {/* Title */}
                <Typography fontSize={24} fontWeight={700} className="text-white mb-3">
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography fontSize={15} className="text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </Typography>

                {/* Highlight Box */}
                <Box
                  className={`p-4 rounded-xl ${highlightColors[item.highlight.type].bg} border ${highlightColors[item.highlight.type].border}`}
                >
                  <Typography
                    fontSize={12}
                    fontWeight={600}
                    className={`${highlightColors[item.highlight.type].text} mb-1 uppercase tracking-wider`}
                  >
                    {item.highlight.title}
                  </Typography>
                  <Typography fontSize={14} className="text-gray-300 leading-relaxed">
                    {item.highlight.text}
                  </Typography>
                </Box>

                {/* Decorative gradient line at bottom */}
                <Box
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-50`}
                />
              </Box>
            </Box>
          ))}
        </div>
      </SectionContainer>
    </PageSection>
  );
};
