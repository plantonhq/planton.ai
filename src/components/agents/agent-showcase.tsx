'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

const agents = [
  {
    name: 'Tekton Pipeline Manager',
    shortName: 'Pipeline',
    icon: 'P',
    color: 'from-cyan-400 to-blue-600',
    shadowColor: 'shadow-cyan-500/30',
    description: 'Creates, troubleshoots, and modifies CI/CD pipelines',
    capabilities: [
      'Analyzes build logs and identifies root causes',
      'Suggests and applies fixes automatically',
      'Optimizes pipeline performance',
      'Handles Docker and Kubernetes deployments',
    ],
  },
  {
    name: 'AWS RDS Agent',
    shortName: 'RDS',
    icon: 'A',
    color: 'from-orange-400 to-red-600',
    shadowColor: 'shadow-orange-500/30',
    description: 'Provisions production-ready databases',
    capabilities: [
      'Security hardening and best practices',
      'Multi-AZ setup for high availability',
      'Backup and recovery configuration',
      'Performance tuning recommendations',
    ],
  },
  {
    name: 'Kubernetes Troubleshooter',
    shortName: 'K8s',
    icon: 'K',
    color: 'from-blue-400 to-indigo-600',
    shadowColor: 'shadow-blue-500/30',
    description: 'Diagnoses pod scheduling and cluster issues',
    capabilities: [
      'Resource optimization and limits',
      'Network debugging and DNS resolution',
      'PVC and storage troubleshooting',
      'Cluster autoscaling configuration',
    ],
  },
  {
    name: 'Database Performance Tuner',
    shortName: 'DB',
    icon: 'D',
    color: 'from-yellow-400 to-orange-600',
    shadowColor: 'shadow-yellow-500/30',
    description: 'Query optimization and database tuning',
    capabilities: [
      'Slow query analysis and optimization',
      'Index recommendations',
      'Connection pooling configuration',
      'Query plan analysis and improvements',
    ],
  },
  {
    name: 'Security Hardening Agent',
    shortName: 'Security',
    icon: 'S',
    color: 'from-green-400 to-emerald-600',
    shadowColor: 'shadow-green-500/30',
    description: 'Configuration audits and compliance',
    capabilities: [
      'SOC2 and HIPAA compliance checks',
      'Secret rotation automation',
      'IAM policy optimization',
      'Security group and firewall rules',
    ],
  },
  {
    name: 'Infrastructure Drift Detector',
    shortName: 'Drift',
    icon: 'I',
    color: 'from-purple-400 to-pink-600',
    shadowColor: 'shadow-purple-500/30',
    description: 'Detects drift between desired and actual state',
    capabilities: [
      'Continuous drift monitoring',
      'Recommends reconciliation actions',
      'Automated drift remediation',
      'Change tracking and audit logs',
    ],
  },
];

export const AgentShowcase = () => {
  return (
    <PageSection className="py-32 bg-black">
      <PageSectionBackgroundContainer>
        {/* Gradient mesh background */}
        <Box
          className="absolute inset-0 opacity-30"
          sx={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
            `,
          }}
        />
      </PageSectionBackgroundContainer>

      <SectionContainer className="z-[1] relative">
        <Stack direction="column" spacing={4} className="mb-16">
          <SectionTitle
            title="Meet the Fleet"
            subtitle="Each agent is a specialist with deep expertise in its domain. Available 24/7, never forgets, always improving."
          />
        </Stack>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <Box
              key={index}
              className="group relative"
            >
              {/* Hover glow effect */}
              <Box
                className={`absolute -inset-0.5 bg-gradient-to-r ${agent.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}
              />
              
              {/* Card */}
              <Box
                className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:translate-y-[-4px] text-left"
              >
                {/* Icon */}
                <Box
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-6 shadow-xl ${agent.shadowColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-white font-bold text-2xl">{agent.icon}</span>
                </Box>

                {/* Name */}
                <Typography fontSize={22} fontWeight={700} className="text-white mb-2">
                  {agent.name}
                </Typography>

                {/* Description */}
                <Typography fontSize={15} className="text-gray-400 mb-6">
                  {agent.description}
                </Typography>

                {/* Capabilities */}
                <Box className="border-t border-white/10 pt-5">
                  <Typography fontSize={11} fontWeight={600} className="text-gray-500 mb-3 uppercase tracking-wider">
                    Capabilities
                  </Typography>
                  <Stack spacing={2}>
                    {agent.capabilities.map((capability, idx) => (
                      <Box key={idx} className="flex items-start gap-3">
                        <Box className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.color} flex-shrink-0`} />
                        <Typography fontSize={13} className="text-gray-300 leading-relaxed">
                          {capability}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          ))}
        </div>

        {/* Additional Agents Note */}
        <Box className="mt-20 text-center max-w-3xl mx-auto">
          <Box className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Box className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <Typography fontSize={14} className="text-gray-400">
              And that&apos;s just the beginning...
            </Typography>
          </Box>
          <Typography fontSize={18} className="text-gray-500 leading-relaxed">
            We&apos;re continuously adding specialized agents for Helm charts, container security,
            log analysis, metrics, compliance, and more. Have a specific need?{' '}
            <span className="text-blue-400 font-medium">Create your own custom agent in minutes.</span>
          </Typography>
        </Box>
      </SectionContainer>
    </PageSection>
  );
};
