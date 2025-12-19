'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, Badge, PrimaryButton } from './shared';
import Link from 'next/link';

const agentCapabilities = [
  { icon: '💻', label: 'Terminal access', description: 'Run commands, inspect logs, analyze configurations' },
  { icon: '📁', label: 'Repository operations', description: 'Clone repos, read code, understand context' },
  { icon: '☁️', label: 'Cloud API integration', description: 'Query AWS, GCP, Azure for real-time resource state' },
  { icon: '🔗', label: 'Platform awareness', description: 'Full context of your Planton infrastructure and services' },
];

const agents = [
  {
    name: 'Pipeline Manager',
    status: 'Beta',
    description: 'Troubleshoots CI/CD pipeline failures—whether they\'re due to Docker build errors, deployment misconfigurations, or code issues.',
    capabilities: [
      'Analyzes build logs to identify root cause',
      'Understands Tekton, GitHub Actions, and GitLab CI configurations',
      'Can clone your repository to inspect Dockerfiles and code',
      'Suggests fixes based on actual errors, not generic advice',
    ],
    example: {
      input: 'ERROR: failed to solve: process \'/bin/sh -c npm install\' did not complete successfully',
      steps: [
        'Reads the full build log',
        'Identifies the specific npm dependency causing the issue',
        'Checks your package.json for compatibility problems',
        'Suggests the fix: update Node.js version or pin dependency version',
      ],
    },
  },
  {
    name: 'ECS Troubleshooter',
    status: 'Beta',
    description: 'Debugs AWS ECS service issues—task failures, networking problems, resource constraints.',
    capabilities: [
      'Integrates with AWS MCP server to query ECS task status',
      'Reads CloudWatch logs for your failed tasks',
      'Analyzes service event history',
      'Understands Planton service configurations and deployment history',
    ],
    example: {
      input: 'STOPPED (Essential container exited)',
      steps: [
        'Queries ECS for task details via AWS API',
        'Pulls CloudWatch logs for the stopped container',
        'Identifies exit code and error message',
        'Cross-references with your service configuration',
        'Suggests fix: increase memory limit or fix application crash',
      ],
    },
  },
];

const roadmap = [
  { name: 'Kubernetes Diagnostics Agent', features: ['Pod crash loops', 'Resource quotas', 'Network policy debugging'] },
  { name: 'Database Performance Agent', features: ['Slow query analysis', 'Connection pool optimization', 'Index recommendations'] },
  { name: 'Security Scanner Agent', features: ['Infrastructure misconfigurations', 'Compliance violations', 'Overly permissive IAM roles'] },
];

export const AgentFleet: FC = () => {
  return (
    <Section id="agent-fleet">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="purple" className="mb-6">AGENT FLEET</Badge>
        <SectionTitle>
          AI That{' '}
          <span className="bg-gradient-to-r from-[#f59e0b] to-[#ef4444] bg-clip-text text-transparent">
            Actually Works
          </span>
          {' '}for DevOps
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Specialized agents, not generic copilots. Deterministic outputs, not 80% accuracy.
        </SectionSubtitle>
      </Stack>

      {/* Honest context */}
      <Card className="mb-16 bg-gradient-to-br from-[#f59e0b]/10 to-[#ef4444]/10 border-[#f59e0b]/30">
        <Box className="grid lg:grid-cols-2 gap-8">
          <Box>
            <Typography className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              The Copilot Experiment That Failed
            </Typography>
            <BodyText>
              Planton spent 8 months building a generic AI copilot for DevOps. It hallucinated 
              constantly. Customers were hesitant to use it for production because accuracy wasn&apos;t 
              good enough. DevOps requires deterministic outputs—if you&apos;re creating or destroying 
              a database, 80% accuracy isn&apos;t acceptable.
            </BodyText>
          </Box>
          <Box>
            <Typography className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              The Pivot
            </Typography>
            <BodyText>
              Learning from Cursor&apos;s success, Planton rebuilt the AI layer from scratch as 
              &quot;Agent Fleet&quot;—specialized agents for specific DevOps tasks combined with real tooling, 
              deep context, and narrow scope. Not a one-size-fits-all chatbot.
            </BodyText>
          </Box>
        </Box>
      </Card>

      {/* What Agent Fleet Is */}
      <Box className="mb-16">
        <Box className="text-center mb-12">
          <Typography className="text-xl md:text-2xl font-semibold text-white mb-4">
            Not a Generic Copilot—Agentic Architecture
          </Typography>
          <BodyText className="max-w-2xl mx-auto">
            These aren&apos;t chatbots with fancy prompts. They&apos;re agents with real capabilities. 
            Narrow scope = higher accuracy = production-ready.
          </BodyText>
        </Box>

        <Box className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agentCapabilities.map((cap, index) => (
            <Card key={index} className="text-center p-5">
              <Typography className="text-3xl mb-3">{cap.icon}</Typography>
              <Typography className="text-white font-medium mb-2">{cap.label}</Typography>
              <Typography className="text-xs text-[#a0a0a0]">{cap.description}</Typography>
            </Card>
          ))}
        </Box>

        <Box className="text-center mt-8">
          <BodyText className="text-sm">
            <span className="text-[#7c3aed] font-medium">Technology:</span> MCP (Model Context Protocol) 
            servers for AWS, GitHub, and Planton. Specialized tooling for each domain. Context-aware 
            LLMs that understand your specific infrastructure.
          </BodyText>
        </Box>
      </Box>

      {/* Current Agents */}
      <Box className="mb-16">
        <Typography className="text-xl font-semibold text-white text-center mb-8">
          Current Agents (Beta)
        </Typography>

        <Box className="grid lg:grid-cols-2 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="p-0 overflow-hidden">
              {/* Header */}
              <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f] flex items-center justify-between">
                <Box className="flex items-center gap-3">
                  <Box className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </Box>
                  <Typography className="text-white font-medium">{agent.name}</Typography>
                </Box>
                <Badge variant="purple">{agent.status}</Badge>
              </Box>
              
              {/* Content */}
              <Box className="p-6 bg-[#0a0a0a]">
                <BodyText className="mb-4">{agent.description}</BodyText>
                
                <Typography className="text-sm text-[#666] uppercase tracking-wide mb-3">
                  Capabilities
                </Typography>
                <Stack className="gap-2 mb-6">
                  {agent.capabilities.map((cap, i) => (
                    <Typography key={i} className="text-sm text-[#b0b0b0] flex items-start gap-2">
                      <span className="text-[#10b981]">•</span> {cap}
                    </Typography>
                  ))}
                </Stack>
                
                {/* Example */}
                <Box className="p-4 rounded-lg bg-[#111] border border-[#2a2a2a]">
                  <Typography className="text-xs text-[#666] uppercase tracking-wide mb-2">
                    Example
                  </Typography>
                  <Typography className="text-xs text-[#ef4444] font-mono mb-3">
                    {agent.example.input}
                  </Typography>
                  <Stack className="gap-1">
                    {agent.example.steps.map((step, i) => (
                      <Typography key={i} className="text-xs text-[#a0a0a0]">
                        {i + 1}. {step}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Roadmap */}
      <Box className="mb-16">
        <Typography className="text-lg font-semibold text-white text-center mb-8">
          Coming Soon
        </Typography>
        <Box className="grid md:grid-cols-3 gap-4">
          {roadmap.map((item, index) => (
            <Card key={index} className="bg-[#111] border-dashed">
              <Typography className="text-white font-medium mb-3">{item.name}</Typography>
              <Stack className="gap-1">
                {item.features.map((feature, i) => (
                  <Typography key={i} className="text-xs text-[#666]">• {feature}</Typography>
                ))}
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>

      {/* CTA */}
      <Box className="text-center">
        <Link href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U" target="_blank">
          <PrimaryButton className="text-lg px-8 py-4">
            Request Early Access to Agent Fleet Beta
          </PrimaryButton>
        </Link>
        <Typography className="text-sm text-[#666] mt-4">
          Currently available for select customers. Join the waitlist to get priority access.
        </Typography>
      </Box>
    </Section>
  );
};
