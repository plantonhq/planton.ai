'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

const scenarios = [
  {
    title: 'Pipeline Failure at 2 AM',
    icon: '!',
    before: {
      steps: [
        'Pipeline fails, pager wakes DevOps engineer',
        'Engineer logs in, starts debugging logs',
        'Scrolls through cryptic error messages',
        'Googles error codes, tries random fixes',
        'After 2-4 hours, identifies Node version mismatch',
        'Updates Dockerfile, pushes fix',
      ],
      time: '2-4 hours',
      outcome: 'Exhausted engineer, delayed deployment',
    },
    after: {
      steps: [
        'Pipeline fails, agent automatically triggered',
        'Agent analyzes Tekton task logs in seconds',
        'Identifies root cause: Node 16 vs Node 18',
        'Suggests Dockerfile update with exact changes',
        'Developer approves fix',
        'Pipeline re-runs successfully',
      ],
      time: '15 minutes',
      outcome: 'Problem solved autonomously',
    },
  },
  {
    title: 'Need Production Database',
    icon: 'D',
    before: {
      steps: [
        'Developer submits ticket to DevOps',
        'Ticket sits in queue for 1-2 days',
        'DevOps researches instance types, security',
        'Writes Terraform, tests in staging',
        'Reviews encryption, backups, IAM',
        'Deploys, hands credentials back',
      ],
      time: '3-5 days',
      outcome: 'Developer blocked, delivery delayed',
    },
    after: {
      steps: [
        '"I need PostgreSQL for payments, ~1000 TPS"',
        'Agent identifies optimal instance (db.r6g.large)',
        'Configures Multi-AZ, encryption, backups',
        'Sets up security groups automatically',
        'Generates Planton Cloud manifest',
        'Developer approves, deployment executes',
      ],
      time: '20 minutes',
      outcome: 'Production-ready with best practices',
    },
  },
  {
    title: 'Pod Failing to Schedule',
    icon: 'K',
    before: {
      steps: [
        'Pod stuck in Pending, app won\'t start',
        'Developer escalates to DevOps team',
        'DevOps runs kubectl describe pod',
        'Investigates resources, node selectors',
        'Hours debugging cluster state',
        'Identifies: memory request > capacity',
      ],
      time: '3-6 hours',
      outcome: 'Deployment blocked, team frustrated',
    },
    after: {
      steps: [
        'Developer clicks "Troubleshoot" in dashboard',
        'Agent analyzes pod spec and cluster state',
        'Identifies: memory request (8Gi) > available',
        'Recommends: reduce to 4Gi or add nodes',
        'Developer adjusts request',
        'Pod schedules immediately',
      ],
      time: '10 minutes',
      outcome: 'Problem diagnosed instantly',
    },
  },
];

export const RealScenarios = () => {
  return (
    <PageSection className="py-32 bg-black">
      <PageSectionBackgroundContainer>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] filter blur-[150px] opacity-30"
          sx={{
            backgroundImage:
              'radial-gradient(ellipse, rgba(236, 72, 153, 0.4) 0%, transparent 60%)',
          }}
        />
      </PageSectionBackgroundContainer>

      <SectionContainer className="z-[1] relative">
        <Stack direction="column" spacing={4} className="mb-20">
          <SectionTitle
            title="Before & After"
            subtitle="Real scenarios that show how agents transform time-consuming DevOps tasks into instant solutions."
          />
        </Stack>

        <Stack spacing={20} className="max-w-7xl mx-auto">
          {scenarios.map((scenario, index) => (
            <Box key={index}>
              {/* Scenario Header */}
              <Box className="text-center mb-12">
                <Box className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-pink-500/30">
                  <Typography fontSize={32} fontWeight={700} className="text-white">{scenario.icon}</Typography>
                </Box>
                <Typography fontSize={36} fontWeight={700} className="text-white">
                  {scenario.title}
                </Typography>
              </Box>

              {/* Before vs After Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Before */}
                <Box className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent p-8 relative overflow-hidden text-left">
                  {/* Red accent */}
                  <Box className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full filter blur-[60px]" />
                  
                  <Stack spacing={5} className="relative z-10">
                    <Box className="flex items-center justify-between">
                      <Typography fontSize={24} fontWeight={700} className="text-red-400">
                        Before
                      </Typography>
                      <Box className="px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
                        <Typography fontSize={18} fontWeight={700} className="text-red-300">
                          {scenario.before.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack spacing={3}>
                      {scenario.before.steps.map((step, idx) => (
                        <Box key={idx} className="flex items-start gap-4">
                          <Box className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Typography fontSize={14} fontWeight={700} className="text-red-400">
                              {idx + 1}
                            </Typography>
                          </Box>
                          <Typography fontSize={15} className="text-gray-300 leading-relaxed">
                            {step}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Box className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <Typography fontSize={14} className="text-red-300">
                        <strong>Outcome:</strong> {scenario.before.outcome}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                {/* After */}
                <Box className="rounded-3xl border border-green-500/20 bg-gradient-to-b from-green-500/5 to-transparent p-8 relative overflow-hidden text-left">
                  {/* Green accent */}
                  <Box className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full filter blur-[60px]" />
                  
                  <Stack spacing={5} className="relative z-10">
                    <Box className="flex items-center justify-between">
                      <Typography fontSize={24} fontWeight={700} className="text-green-400">
                        With Agent
                      </Typography>
                      <Box className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30">
                        <Typography fontSize={18} fontWeight={700} className="text-green-300">
                          {scenario.after.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Stack spacing={3}>
                      {scenario.after.steps.map((step, idx) => (
                        <Box key={idx} className="flex items-start gap-4">
                          <Box className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Typography fontSize={14} fontWeight={700} className="text-green-400">
                              {idx + 1}
                            </Typography>
                          </Box>
                          <Typography fontSize={15} className="text-gray-300 leading-relaxed">
                            {step}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Box className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                      <Typography fontSize={14} className="text-green-300">
                        <strong>Outcome:</strong> {scenario.after.outcome}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </div>

              {/* Time Savings Highlight */}
              <Box className="mt-8 text-center">
                <Box className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 via-transparent to-green-500/10 border border-white/10">
                  <Typography fontSize={16} className="text-red-400 line-through">
                    {scenario.before.time}
                  </Typography>
                  <Typography fontSize={20} className="text-gray-400">-&gt;</Typography>
                  <Typography fontSize={16} className="text-green-400 font-bold">
                    {scenario.after.time}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </SectionContainer>
    </PageSection>
  );
};














