'use client';

import { Box, Stack, Typography } from '@mui/material';
import {
  PageSection,
  PageSectionBackgroundContainer,
  SectionContainer,
  SectionTitle,
} from '@/components/landing-page';

export const TechnologySection = () => {
  return (
    <PageSection className="py-32 bg-[#050505]">
      <PageSectionBackgroundContainer>
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] filter blur-[150px] opacity-40"
          sx={{
            backgroundImage:
              'radial-gradient(ellipse, rgba(59, 130, 246, 0.4) 0%, transparent 60%)',
          }}
        />
      </PageSectionBackgroundContainer>

      <SectionContainer className="z-[1] relative">
        <Stack direction="column" spacing={4} className="mb-20">
          <SectionTitle
            title="The Technology Behind It"
            subtitle="We didn't reinvent the wheel. We built on proven foundations and added AI magic—just like Cursor did."
          />
        </Stack>

        {/* The Cursor Analogy */}
        <Box className="max-w-6xl mx-auto mb-20">
          <Box className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10 backdrop-blur-sm text-left">
            <Typography fontSize={14} fontWeight={600} className="text-blue-400 mb-4 uppercase tracking-wider">
              The Cursor Analogy
            </Typography>
            <Typography fontSize={28} fontWeight={700} className="text-white mb-6">
              Cursor didn&apos;t build a code editor from scratch. It forked VS Code and added AI magic.
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* VS Code Foundation */}
              <Box className="rounded-2xl bg-gradient-to-b from-slate-800/50 to-transparent p-6 border border-slate-700/50">
                <Box className="flex items-center gap-3 mb-4">
                  <Box className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Typography fontSize={20}>E</Typography>
                  </Box>
                  <Typography fontSize={18} fontWeight={600} className="text-blue-300">
                    VS Code Foundation
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  {['File system management', 'Syntax highlighting', 'Extension ecosystem', 'Decades of UX refinement'].map((item, idx) => (
                    <Box key={idx} className="flex items-center gap-2">
                      <Box className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Cursor AI Layer */}
              <Box className="rounded-2xl bg-gradient-to-b from-purple-900/30 to-transparent p-6 border border-purple-700/50">
                <Box className="flex items-center gap-3 mb-4">
                  <Box className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Typography fontSize={20}>*</Typography>
                  </Box>
                  <Typography fontSize={18} fontWeight={600} className="text-purple-300">
                    Cursor&apos;s AI Layer
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  {['Code completion', 'Natural language edits', 'Codebase understanding', '10x developer productivity'].map((item, idx) => (
                    <Box key={idx} className="flex items-center gap-2">
                      <Box className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </div>
          </Box>
        </Box>

        {/* Agent Fleet Follows Same Playbook */}
        <Box className="max-w-6xl mx-auto mb-20">
          <Box className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-10 text-left">
            <Typography fontSize={14} fontWeight={600} className="text-green-400 mb-4 uppercase tracking-wider">
              Same Playbook for DevOps
            </Typography>
            <Typography fontSize={28} fontWeight={700} className="text-white mb-6">
              Agent Fleet builds AI on top of Planton Cloud&apos;s battle-tested platform.
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Planton Cloud Foundation */}
              <Box className="rounded-2xl bg-gradient-to-b from-emerald-900/30 to-transparent p-6 border border-emerald-700/50">
                <Box className="flex items-center gap-3 mb-4">
                  <Box className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Typography fontSize={20}>P</Typography>
                  </Box>
                  <Typography fontSize={18} fontWeight={600} className="text-emerald-300">
                    Planton Cloud Foundation
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  {['150+ deployment components', 'Multi-cloud infrastructure APIs', 'InfraHub and ServiceHub', 'Standardized validation'].map((item, idx) => (
                    <Box key={idx} className="flex items-center gap-2">
                      <Box className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              {/* Agent Fleet AI Layer */}
              <Box className="rounded-2xl bg-gradient-to-b from-orange-900/30 to-transparent p-6 border border-orange-700/50">
                <Box className="flex items-center gap-3 mb-4">
                  <Box className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Typography fontSize={20}>A</Typography>
                  </Box>
                  <Typography fontSize={18} fontWeight={600} className="text-orange-300">
                    Agent Fleet AI Layer
                  </Typography>
                </Box>
                <Stack spacing={2}>
                  {['Specialized domain agents', 'Context-aware integration', 'Graphton framework', '10x faster infrastructure'].map((item, idx) => (
                    <Box key={idx} className="flex items-center gap-2">
                      <Box className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <Typography fontSize={14} className="text-gray-400">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </div>
          </Box>
        </Box>

        {/* Graphton Framework */}
        <Box className="max-w-6xl mx-auto">
          <Box className="text-center mb-12">
            <Typography fontSize={14} fontWeight={600} className="text-cyan-400 mb-3 uppercase tracking-wider">
              The Secret Sauce
            </Typography>
            <Typography fontSize={42} fontWeight={700} className="text-white mb-4">
              Graphton Framework
            </Typography>
            <Typography fontSize={18} className="text-gray-400">
              Declarative agent creation. 3-10 lines instead of 100+.
            </Typography>
          </Box>

          {/* Code Block */}
          <Box className="rounded-3xl border border-cyan-500/20 overflow-hidden">
            {/* Terminal Header */}
            <Box className="px-6 py-4 bg-slate-900/80 border-b border-white/10 flex items-center gap-3">
              <Box className="flex gap-2">
                <Box className="w-3 h-3 rounded-full bg-red-500" />
                <Box className="w-3 h-3 rounded-full bg-yellow-500" />
                <Box className="w-3 h-3 rounded-full bg-green-500" />
              </Box>
              <Typography fontSize={13} className="text-gray-500 ml-4 font-mono">
                tekton_pipeline_agent.py
              </Typography>
            </Box>
            
            {/* Code Content */}
            <Box className="p-8 bg-[#0d1117] font-mono text-sm overflow-x-auto text-left">
              <pre className="leading-7">
                <code>
                  <span className="text-purple-400">agent</span>
                  <span className="text-white"> = </span>
                  <span className="text-yellow-300">create_deep_agent</span>
                  <span className="text-white">(</span>
                  {'\n'}
                  <span className="text-gray-500">    # Model selection</span>
                  {'\n'}
                  <span className="text-cyan-300">    model</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">&quot;claude-sonnet-4.5&quot;</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'\n'}
                  <span className="text-gray-500">    # Agent instructions</span>
                  {'\n'}
                  <span className="text-cyan-300">    system_prompt</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">&quot;&quot;&quot;You troubleshoot Tekton pipelines,</span>
                  {'\n'}
                  <span className="text-green-400">        analyze build logs, and suggest fixes...&quot;&quot;&quot;</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'\n'}
                  <span className="text-gray-500">    # MCP tools for Planton Cloud integration</span>
                  {'\n'}
                  <span className="text-cyan-300">    mcp_tools</span>
                  <span className="text-white">=</span>
                  <span className="text-white">{'{'}</span>
                  {'\n'}
                  <span className="text-green-400">        &quot;planton-cloud&quot;</span>
                  <span className="text-white">: [</span>
                  {'\n'}
                  <span className="text-green-400">            &quot;get_pipeline_logs&quot;</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-green-400">            &quot;analyze_failure&quot;</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-green-400">            &quot;update_pipeline_config&quot;</span>
                  {'\n'}
                  <span className="text-white">        ]</span>
                  {'\n'}
                  <span className="text-white">    {'}'}</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  {'\n'}
                  <span className="text-gray-500">    # Sandbox backend for CLI commands</span>
                  {'\n'}
                  <span className="text-cyan-300">    backend</span>
                  <span className="text-white">=</span>
                  <span className="text-green-400">&quot;daytona&quot;</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-white">)</span>
                </code>
              </pre>
            </Box>
          </Box>

          {/* What You Get */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'You Provide', items: ['Model', 'Instructions', 'MCP tools', 'Backend'] },
              { label: 'Graphton Handles', items: ['MCP auth', 'Loop detection', 'Prompts', 'Errors'] },
            ].map((section, idx) => (
              <Box key={idx} className="col-span-1 md:col-span-2 rounded-2xl bg-white/5 p-6 border border-white/10 text-left">
                <Typography fontSize={12} fontWeight={600} className="text-gray-500 mb-3 uppercase tracking-wider">
                  {section.label}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, i) => (
                    <Box key={i} className="px-3 py-1.5 rounded-lg bg-white/10 text-sm text-gray-300">
                      {item}
                    </Box>
                  ))}
                </div>
              </Box>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <Box className="text-center p-6 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
              <Typography fontSize={48} fontWeight={700} className="text-blue-400 mb-1">
                3-10
              </Typography>
              <Typography fontSize={14} className="text-gray-500">
                Lines of code
              </Typography>
            </Box>
            <Box className="text-center p-6 rounded-2xl bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/20">
              <Typography fontSize={48} fontWeight={700} className="text-green-400 mb-1">
                Minutes
              </Typography>
              <Typography fontSize={14} className="text-gray-500">
                To production-ready
              </Typography>
            </Box>
            <Box className="text-center p-6 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/20">
              <Typography fontSize={48} fontWeight={700} className="text-purple-400 mb-1">
                Zero
              </Typography>
              <Typography fontSize={14} className="text-gray-500">
                Boilerplate code
              </Typography>
            </Box>
          </div>
        </Box>
      </SectionContainer>
    </PageSection>
  );
};






















