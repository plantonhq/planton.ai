'use client';

import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TypoH2, TypoP1, Pill, PrimaryBtn } from '@/components';

export const AgentFleetSection: FC = () => {
  return (
    <Stack className="w-full items-center bg-black py-16 md:py-24 px-5 md:px-0 relative overflow-hidden">
      {/* Background gradient */}
      <Box className="absolute w-[1000px] aspect-square top-0 left-1/2 transform -translate-x-1/2 rounded-full blur-[200px] bg-[linear-gradient(180deg,_rgba(0,149,255,0.1)_0%,_rgba(138,51,145,0.1)_100%)]" />

      <Stack className="w-full max-w-7xl items-center gap-8 md:gap-12 z-10 relative">
        {/* Section Header */}
        <Stack className="items-center text-center gap-4 md:gap-6">
          <Pill>Agent Fleet</Pill>
          <TypoH2 className="!text-3xl md:!text-5xl">AI That Actually Works for DevOps</TypoH2>
          <Typography className="text-sm md:text-lg text-text-secondary">
            Specialized agents, not generic copilots. Deterministic outputs, not 80% accuracy.
          </Typography>
        </Stack>

        {/* Honest Context */}
        <Stack className="w-full p-6 md:p-10 bg-[#F59E0B15] border border-[#F59E0B33] rounded-xl gap-4">
          <Typography className="text-sm font-medium text-[#F59E0B]">
            Honest Context: The Copilot Experiment That Failed
          </Typography>
          <Typography className="text-sm md:text-base text-text-secondary">
            Planton spent 8 months building a generic AI copilot for DevOps. It hallucinated
            constantly. Customers were hesitant to use it for production because accuracy wasn't
            good enough. DevOps requires deterministic outputs—if you're creating or destroying
            a database, 80% accuracy isn't acceptable.
          </Typography>
          <Typography className="text-sm md:text-base text-white font-medium">
            The Pivot: Learning from Cursor's success, Planton rebuilt the AI layer from scratch
            as "Agent Fleet"—specialized agents for specific DevOps tasks combined with real
            tooling, deep context, and narrow scope. Not a one-size-fits-all chatbot.
          </Typography>
        </Stack>

        {/* What Agent Fleet Is */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            What Agent Fleet Is
          </Typography>

          <Box className="grid md:grid-cols-2 gap-6">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#EF4444]">
                Not a Generic Copilot
              </Typography>
              <Typography className="text-xs text-text-secondary">
                Agent Fleet doesn't try to do everything. Each agent is specialized for a
                specific domain—pipeline troubleshooting, ECS debugging, Kubernetes diagnostics.
                Narrow scope = higher accuracy = production-ready.
              </Typography>
            </Stack>

            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3">
              <Typography className="text-sm font-medium text-[#10B981]">
                Agentic Architecture
              </Typography>
              <Typography className="text-xs text-text-secondary">
                These aren't chatbots with fancy prompts. They're agents with real capabilities:
              </Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Terminal access</span> - Run commands, inspect logs, analyze configs
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Repository operations</span> - Clone repos, read code, understand context
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Cloud API integration</span> - Query AWS, GCP, Azure for real-time state
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • <span className="text-white">Platform awareness</span> - Full context of your Planton infrastructure
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D]">
            <Typography className="text-sm font-medium text-[#0095FF] mb-2">
              Technology Under the Hood:
            </Typography>
            <Typography className="text-xs text-text-secondary">
              MCP (Model Context Protocol) servers - AWS MCP, GitHub MCP, Planton MCP |
              Specialized tooling for each agent's domain | Context-aware LLMs that understand
              your specific infrastructure
            </Typography>
          </Box>
        </Stack>

        {/* Current Agents */}
        <Box className="w-full grid md:grid-cols-2 gap-6">
          {/* Agent 1: Pipeline Manager */}
          <Stack className="p-6 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4">
            <Stack className="flex-row items-center gap-3">
              <Box className="w-10 h-10 rounded-lg bg-[#0095FF20] border border-[#0095FF33] flex items-center justify-center">
                <Typography className="text-xl">🔧</Typography>
              </Box>
              <Stack>
                <Typography className="text-lg font-semibold text-white">
                  Pipeline Manager
                </Typography>
                <Typography className="text-xs text-[#0095FF]">Beta</Typography>
              </Stack>
            </Stack>

            <Typography className="text-sm text-text-secondary">
              Troubleshoots CI/CD pipeline failures—whether they're due to Docker build errors,
              deployment misconfigurations, or code issues.
            </Typography>

            <Stack className="gap-2">
              <Typography className="text-xs font-medium text-white">Capabilities:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Analyzes build logs to identify root cause
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Understands Tekton, GitHub Actions, GitLab CI configs
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Can clone your repo to inspect Dockerfiles and code
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Suggests fixes based on actual errors, not generic advice
                </Typography>
              </Stack>
            </Stack>

            <Box className="p-3 bg-[#0D1117] rounded-lg border border-[#30363D]">
              <Typography className="text-xs text-text-secondary">
                <span className="text-white">Example:</span> Your pipeline fails with npm install
                error → Pipeline Manager reads the log, identifies the specific dependency issue,
                checks your package.json, and suggests: "Update Node.js version or pin
                dependency version"
              </Typography>
            </Box>
          </Stack>

          {/* Agent 2: ECS Troubleshooter */}
          <Stack className="p-6 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-4">
            <Stack className="flex-row items-center gap-3">
              <Box className="w-10 h-10 rounded-lg bg-[#FF990020] border border-[#FF990033] flex items-center justify-center">
                <Typography className="text-xl">🔍</Typography>
              </Box>
              <Stack>
                <Typography className="text-lg font-semibold text-white">
                  ECS Troubleshooter
                </Typography>
                <Typography className="text-xs text-[#FF9900]">Beta</Typography>
              </Stack>
            </Stack>

            <Typography className="text-sm text-text-secondary">
              Debugs AWS ECS service issues—task failures, networking problems, resource
              constraints.
            </Typography>

            <Stack className="gap-2">
              <Typography className="text-xs font-medium text-white">Capabilities:</Typography>
              <Stack className="gap-1">
                <Typography className="text-xs text-text-secondary">
                  • Integrates with AWS MCP server to query ECS task status
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Reads CloudWatch logs for failed tasks
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Analyzes service event history
                </Typography>
                <Typography className="text-xs text-text-secondary">
                  • Understands Planton service configurations
                </Typography>
              </Stack>
            </Stack>

            <Box className="p-3 bg-[#0D1117] rounded-lg border border-[#30363D]">
              <Typography className="text-xs text-text-secondary">
                <span className="text-white">Example:</span> ECS shows "Essential container
                exited" → Agent queries ECS API, pulls CloudWatch logs, identifies exit code,
                cross-references with your config, suggests: "Increase memory limit or fix
                application crash"
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Why This Approach Works */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Why This Approach Works
          </Typography>
          <Box className="grid md:grid-cols-3 gap-4">
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#10B981]">
                Deterministic Outputs
              </Typography>
              <Typography className="text-xs text-text-secondary">
                Specialized agents with real tooling produce consistent, reliable results. They
                don't hallucinate because they work with actual data—your logs, your configs,
                your infrastructure state.
              </Typography>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#0095FF]">
                Production-Ready
              </Typography>
              <Typography className="text-xs text-text-secondary">
                Customers trust these agents for real troubleshooting because they behave like
                experienced DevOps engineers—methodical investigation, root cause analysis,
                specific fixes.
              </Typography>
            </Stack>
            <Stack className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-2">
              <Typography className="text-sm font-medium text-[#8B5CF6]">
                Continuously Improving
              </Typography>
              <Typography className="text-xs text-text-secondary">
                As Planton adds more specialized agents (Kubernetes Diagnostics, Database
                Performance, Security Scanner), the fleet becomes more capable without
                sacrificing accuracy.
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Roadmap */}
        <Stack className="w-full p-6 md:p-10 bg-[#161B22] border border-[#3D3D3D] rounded-xl gap-6">
          <Typography className="text-xl md:text-2xl font-semibold text-white">
            Coming Soon
          </Typography>
          <Box className="grid md:grid-cols-3 gap-4">
            {[
              {
                name: 'Kubernetes Diagnostics Agent',
                items: [
                  'Pod crash loops and restarts',
                  'Resource quota and limit issues',
                  'Network policy debugging',
                ],
              },
              {
                name: 'Database Performance Agent',
                items: [
                  'Slow query analysis',
                  'Connection pool optimization',
                  'Index recommendations',
                ],
              },
              {
                name: 'Security Scanner Agent',
                items: [
                  'Infrastructure misconfigurations',
                  'Compliance violations (HIPAA, SOC 2)',
                  'Overly permissive IAM roles',
                ],
              },
            ].map((agent, index) => (
              <Stack
                key={index}
                className="p-4 bg-[#0D1117] rounded-lg border border-[#30363D] gap-3"
              >
                <Typography className="text-sm font-medium text-white">{agent.name}</Typography>
                <Stack className="gap-1">
                  {agent.items.map((item, i) => (
                    <Typography key={i} className="text-xs text-text-secondary">
                      • {item}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Box>
        </Stack>

        {/* CTA */}
        <Stack className="items-center gap-4">
          <PrimaryBtn className="!px-6 !py-3 !h-auto !text-base">
            Request Early Access to Agent Fleet Beta
          </PrimaryBtn>
          <Typography className="text-xs text-text-secondary">
            Currently available for select customers. Join the waitlist to get priority access.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
