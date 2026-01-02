'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
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
    competitor1: { status: 'no', text: 'Write everything' },
    competitor2: { status: 'partial', text: 'Limited (Pulumi ESC)' },
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
  title: string;
  titleColor: string;
}

const ComparisonTableView: FC<ComparisonTableViewProps> = ({ data, headers, title, titleColor }) => {
  return (
    <Box className="rounded-xl border border-[#2a2a2a] overflow-hidden bg-[#0a0a0a]">
      {/* Table Title Header */}
      <Box className={`p-4 border-b border-[#2a2a2a] bg-gradient-to-r ${titleColor}`}>
        <Typography className="text-lg font-semibold text-white text-center">
          {title}
        </Typography>
      </Box>
      
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
                      ? 'text-white bg-gradient-to-r from-[#7c3aed]/20 to-[#0ea5e9]/20' 
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
      <Box className="md:hidden space-y-4 p-4">
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
    </Box>
  );
};

export const ComparisonTable: FC = () => {
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

      {/* Both Comparison Tables - Stacked */}
      <Stack className="gap-8">
        {/* IaC Platforms Comparison */}
        <ComparisonTableView 
          data={iacComparisonData}
          headers={['Planton', 'Terraform Cloud', 'Pulumi Cloud', 'Manual DevOps']}
          title="vs IaC Platforms"
          titleColor="from-[#7c3aed]/30 to-[#a78bfa]/30"
        />

        {/* PaaS Platforms Comparison */}
        <ComparisonTableView 
          data={paasComparisonData}
          headers={['Planton', 'Vercel', 'Heroku', 'Render']}
          title="vs PaaS Platforms"
          titleColor="from-[#0ea5e9]/30 to-[#38bdf8]/30"
        />
      </Stack>

      {/* Key differentiator callout */}
      <Box className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#7c3aed]/10 to-[#0ea5e9]/10 border border-[#7c3aed]/30">
        <Stack direction={{ xs: 'column', md: 'row' }} className="items-center gap-4">
          <Box className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#0ea5e9] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 28 32">
              <path d="M11.8461 -0.154297H6.59239C-0.485 -0.154297 0.00721739 5.77323 0.00721739 5.77323V28.8139C0.00316622 28.8862 0.000465445 28.9542 0.000465445 29.025C0.000465445 29.0959 0.000465446 29.1696 0.00721739 29.2361C0.0587062 30.0458 0.401948 30.8025 0.964535 31.3464C1.52712 31.8904 2.26507 32.1791 3.0227 32.1517C3.78032 32.1244 4.4984 31.783 5.02544 31.1997C5.55248 30.6163 5.84728 29.8366 5.84765 29.025C5.84765 28.8197 5.79364 9.94707 5.79364 9.4201C5.79364 9.29577 5.79701 9.17577 5.80309 9.05867C5.80309 0.857719 11.8461 -0.154297 11.8461 -0.154297Z" />
              <path d="M18.2953 -0.154297H14.8031C14.8031 -0.154297 8.61536 0.844532 8.61536 8.93862C8.81793 5.35068 15.8222 5.69599 15.8222 5.69599H16.5309C17.8482 5.69618 19.1145 6.22194 20.0649 7.16331C21.0152 8.10468 21.5761 9.38876 21.6302 10.747C21.6843 12.1053 21.2275 13.4325 20.3552 14.4512C19.4829 15.4699 18.2627 16.1012 16.9499 16.2129C16.8116 16.2244 16.6733 16.2322 16.5309 16.2322H14.7333C14.7333 16.2322 10.4655 15.9361 10.4655 19.3878C10.4655 22.8395 15.3051 22.4478 15.3051 22.4478H18.2939C18.5013 22.4478 18.7087 22.4385 18.9127 22.425C23.9846 22.0953 28.0001 17.2553 28.0001 11.201C28.0001 5.14663 23.6555 -0.154297 18.2953 -0.154297Z" />
            </svg>
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
