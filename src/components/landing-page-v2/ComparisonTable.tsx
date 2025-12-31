'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { Section, SectionTitle, SectionSubtitle, Badge, CheckIcon, XIcon, WarningIcon, Card } from './shared';

type ComparisonStatus = 'yes' | 'no' | 'partial' | 'na';

interface ComparisonRow {
  feature: string;
  planton: { status: ComparisonStatus; text?: string };
  competitor1: { status: ComparisonStatus; text?: string };
  competitor2: { status: ComparisonStatus; text?: string };
  competitor3: { status: ComparisonStatus; text?: string };
}

const iacComparisonData: ComparisonRow[] = [
  {
    feature: 'Setup Time',
    planton: { status: 'yes', text: '<1 hour' },
    competitor1: { status: 'partial', text: '1-2 days' },
    competitor2: { status: 'partial', text: '1-2 days' },
    competitor3: { status: 'no', text: '1-2 weeks' },
  },
  {
    feature: 'Monthly Cost (7 devs)',
    planton: { status: 'yes', text: '$450' },
    competitor1: { status: 'partial', text: '$1,200+' },
    competitor2: { status: 'partial', text: '$1,000+' },
    competitor3: { status: 'no', text: '$12,500' },
  },
  {
    feature: 'Backend CI/CD',
    planton: { status: 'yes', text: 'Included (ServiceHub)' },
    competitor1: { status: 'no', text: 'Build yourself' },
    competitor2: { status: 'no', text: 'Build yourself' },
    competitor3: { status: 'no', text: 'Build yourself' },
  },
  {
    feature: 'Out-of-the-Box Infra',
    planton: { status: 'yes', text: '120+ components' },
    competitor1: { status: 'partial', text: 'Limited (Pulumi ESC)' },
    competitor2: { status: 'partial', text: 'Limited' },
    competitor3: { status: 'no', text: 'Write everything' },
  },
  {
    feature: 'CLI Open Source',
    planton: { status: 'yes', text: 'project-planton' },
    competitor1: { status: 'yes', text: 'terraform' },
    competitor2: { status: 'yes', text: 'pulumi' },
    competitor3: { status: 'na' },
  },
  {
    feature: 'Deployment Modules Open Source',
    planton: { status: 'yes', text: '100% on GitHub' },
    competitor1: { status: 'no', text: 'You write & maintain' },
    competitor2: { status: 'no', text: 'You write & maintain' },
    competitor3: { status: 'na' },
  },
  {
    feature: 'Platform (SaaS) Open Source',
    planton: { status: 'no', text: 'Proprietary' },
    competitor1: { status: 'no', text: 'Proprietary' },
    competitor2: { status: 'no', text: 'Proprietary' },
    competitor3: { status: 'na' },
  },
  {
    feature: 'AI Assistance Scope',
    planton: { status: 'yes', text: 'Full SDLC' },
    competitor1: { status: 'no', text: 'None' },
    competitor2: { status: 'partial', text: 'Infra-only' },
    competitor3: { status: 'no', text: 'None' },
  },
  {
    feature: 'Exit Strategy',
    planton: { status: 'yes', text: 'Export everything' },
    competitor1: { status: 'partial', text: 'Migration cost' },
    competitor2: { status: 'partial', text: 'Migration cost' },
    competitor3: { status: 'na' },
  },
];

const paasComparisonData: ComparisonRow[] = [
  {
    feature: 'Service Deployment',
    planton: { status: 'yes', text: 'Backend services' },
    competitor1: { status: 'partial', text: 'Next.js only' },
    competitor2: { status: 'yes', text: 'Backend services' },
    competitor3: { status: 'yes', text: 'Backend services' },
  },
  {
    feature: 'Infrastructure Deployment',
    planton: { status: 'yes', text: 'Full automation' },
    competitor1: { status: 'no', text: 'None' },
    competitor2: { status: 'no', text: 'None' },
    competitor3: { status: 'no', text: 'None' },
  },
  {
    feature: 'Infrastructure Control',
    planton: { status: 'yes', text: 'Full (your cloud)' },
    competitor1: { status: 'no', text: 'Zero control' },
    competitor2: { status: 'no', text: 'Zero control' },
    competitor3: { status: 'no', text: 'Zero control' },
  },
  {
    feature: 'Cloud Provider',
    planton: { status: 'yes', text: 'YOUR cloud' },
    competitor1: { status: 'no', text: 'Vercel only' },
    competitor2: { status: 'no', text: 'Heroku only' },
    competitor3: { status: 'no', text: 'Render only' },
  },
  {
    feature: 'Custom Infrastructure',
    planton: { status: 'yes', text: 'VPC, databases, queues' },
    competitor1: { status: 'no', text: 'Not available' },
    competitor2: { status: 'partial', text: 'Add-ons only' },
    competitor3: { status: 'partial', text: 'Add-ons only' },
  },
  {
    feature: 'IaC Code Access',
    planton: { status: 'yes', text: '100% open source' },
    competitor1: { status: 'no', text: 'Black box' },
    competitor2: { status: 'no', text: 'Black box' },
    competitor3: { status: 'no', text: 'Black box' },
  },
  {
    feature: 'Exit Strategy',
    planton: { status: 'yes', text: 'Export everything' },
    competitor1: { status: 'partial', text: 'Rebuild' },
    competitor2: { status: 'partial', text: 'Rebuild' },
    competitor3: { status: 'partial', text: 'Rebuild' },
  },
  {
    feature: 'Monthly Cost (7 devs)',
    planton: { status: 'yes', text: '$450' },
    competitor1: { status: 'partial', text: '$20-200+' },
    competitor2: { status: 'partial', text: '$175-500+' },
    competitor3: { status: 'partial', text: '$85-400+' },
  },
];

const StatusCell: FC<{ status: ComparisonStatus; text?: string; isPlanton?: boolean }> = ({ 
  status, 
  text,
  isPlanton = false,
}) => {
  const getIcon = () => {
    switch (status) {
      case 'yes': return <CheckIcon />;
      case 'no': return <XIcon />;
      case 'partial': return <WarningIcon />;
      case 'na': return <span className="text-[#666] text-sm">N/A</span>;
    }
  };

  return (
    <Box className={`flex items-center gap-2 ${isPlanton ? 'font-medium' : ''}`}>
      {getIcon()}
      {text && (
        <span className={`text-sm ${isPlanton ? 'text-white' : 'text-[#a0a0a0]'}`}>
          {text}
        </span>
      )}
    </Box>
  );
};

interface ComparisonTableViewProps {
  data: ComparisonRow[];
  headers: string[];
}

const ComparisonTableView: FC<ComparisonTableViewProps> = ({ data, headers }) => {
  return (
    <>
      {/* Desktop Table */}
      <Box className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#2a2a2a]">
              <th className="text-left py-4 px-4 text-sm font-semibold text-[#666]">
                Feature
              </th>
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className={`text-left py-4 px-4 text-sm font-semibold ${
                    i === 0 
                      ? 'text-white bg-gradient-to-r from-[#7c3aed]/20 to-[#0ea5e9]/20 rounded-t-lg' 
                      : 'text-[#a0a0a0]'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className={`border-b border-[#2a2a2a]/50 ${
                  rowIndex % 2 === 0 ? 'bg-[#0f0f0f]' : 'bg-[#0a0a0a]'
                }`}
              >
                <td className="py-4 px-4 text-sm text-[#b0b0b0]">
                  {row.feature}
                </td>
                <td className="py-4 px-4 bg-gradient-to-r from-[#7c3aed]/10 to-[#0ea5e9]/10">
                  <StatusCell 
                    status={row.planton.status} 
                    text={row.planton.text} 
                    isPlanton 
                  />
                </td>
                <td className="py-4 px-4">
                  <StatusCell 
                    status={row.competitor1.status} 
                    text={row.competitor1.text} 
                  />
                </td>
                <td className="py-4 px-4">
                  <StatusCell 
                    status={row.competitor2.status} 
                    text={row.competitor2.text} 
                  />
                </td>
                <td className="py-4 px-4">
                  <StatusCell 
                    status={row.competitor3.status} 
                    text={row.competitor3.text} 
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>

      {/* Mobile Cards */}
      <Box className="md:hidden space-y-4">
        {data.map((row, rowIndex) => (
          <Card key={rowIndex} className="p-4">
            <Typography className="text-sm font-semibold text-white mb-3">
              {row.feature}
            </Typography>
            <Stack className="gap-2">
              <Box className="flex justify-between items-center py-2 border-b border-[#2a2a2a]/50">
                <Typography className="text-xs text-[#a0a0a0]">{headers[0]}</Typography>
                <StatusCell status={row.planton.status} text={row.planton.text} isPlanton />
              </Box>
              <Box className="flex justify-between items-center py-2 border-b border-[#2a2a2a]/50">
                <Typography className="text-xs text-[#666]">{headers[1]}</Typography>
                <StatusCell status={row.competitor1.status} text={row.competitor1.text} />
              </Box>
              <Box className="flex justify-between items-center py-2 border-b border-[#2a2a2a]/50">
                <Typography className="text-xs text-[#666]">{headers[2]}</Typography>
                <StatusCell status={row.competitor2.status} text={row.competitor2.text} />
              </Box>
              <Box className="flex justify-between items-center py-2">
                <Typography className="text-xs text-[#666]">{headers[3]}</Typography>
                <StatusCell status={row.competitor3.status} text={row.competitor3.text} />
              </Box>
            </Stack>
          </Card>
        ))}
      </Box>
    </>
  );
};

export const ComparisonTable: FC = () => {
  const [activeTab, setActiveTab] = useState<'iac' | 'paas'>('iac');

  return (
    <Section id="comparison">
      {/* Section header */}
      <Stack className="items-center text-center mb-12">
        <Badge variant="purple" className="mb-6">COMPARISON</Badge>
        <SectionTitle>
          Why Teams Choose{' '}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
            Planton
          </span>
          {' '}Over Alternatives
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          We&apos;re not the only DevOps platform. But we&apos;re the only one that&apos;s fully open source,
          multi-cloud, and built with a no-lock-in philosophy from day one.
        </SectionSubtitle>
      </Stack>

      {/* Tabs */}
      <Stack direction="row" className="justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('iac')}
          className={`
            px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300
            ${activeTab === 'iac'
              ? 'bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] text-white'
              : 'bg-[#1a1a1a] text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#3a3a3a]'
            }
          `}
        >
          vs IaC Platforms
        </button>
        <button
          onClick={() => setActiveTab('paas')}
          className={`
            px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300
            ${activeTab === 'paas'
              ? 'bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] text-white'
              : 'bg-[#1a1a1a] text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#3a3a3a]'
            }
          `}
        >
          vs PaaS Platforms
        </button>
      </Stack>

      {/* Comparison Table */}
      <Box className="rounded-xl border border-[#2a2a2a] overflow-hidden bg-[#0a0a0a]">
        {activeTab === 'iac' ? (
          <ComparisonTableView 
            data={iacComparisonData}
            headers={['Planton', 'Terraform Cloud', 'Pulumi Cloud', 'Manual DevOps']}
          />
        ) : (
          <ComparisonTableView 
            data={paasComparisonData}
            headers={['Planton', 'Vercel', 'Heroku', 'Render']}
          />
        )}
      </Box>

      {/* Key differentiator callout */}
      <Box className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#7c3aed]/10 to-[#0ea5e9]/10 border border-[#7c3aed]/30">
        <Stack direction={{ xs: 'column', md: 'row' }} className="items-center gap-4">
          <Box className="flex-shrink-0">
            <Badge variant="success">UNIQUE POSITIONING</Badge>
          </Box>
          <Typography className="text-sm md:text-base text-[#b0b0b0] text-center md:text-left">
            <span className="text-white font-medium">Planton</span> is the only platform that combines 
            <span className="text-[#10b981]"> out-of-the-box service deployment</span> (like Vercel/Heroku) + 
            <span className="text-[#0ea5e9]"> infrastructure automation</span> (like Terraform/Pulumi) + 
            <span className="text-[#a78bfa]"> in YOUR cloud account</span> with full control and no vendor lock-in.
          </Typography>
        </Stack>
      </Box>
    </Section>
  );
};

