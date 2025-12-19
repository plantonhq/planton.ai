'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, BodyText, CheckIcon, Badge } from './shared';

const securityModels = [
  {
    level: 'Basic',
    title: 'AWS Access Keys',
    icon: '🔑',
    description: 'Provide AWS access key and secret key. Planton-hosted runners use these credentials.',
    security: ['Credentials encrypted at rest', 'Stored in Google Secret Manager', 'Never logged or exposed', 'Rotatable anytime'],
    bestFor: 'Development environments, initial platform evaluation, non-production workloads',
    color: 'yellow',
  },
  {
    level: 'Intermediate',
    title: 'Trust Relationship - AWS Assume Role',
    icon: '🔗',
    description: 'Configure cross-account trust policy. Planton assumes a role with time-limited credentials.',
    security: ['No long-lived credentials stored', 'Temporary session tokens', 'Trust policy controls access', 'Revocable instantly'],
    bestFor: 'Production environments, compliance requirements (HIPAA, SOC 2)',
    color: 'blue',
  },
  {
    level: 'Maximum',
    title: 'Customer-Hosted Runner',
    icon: '🏠',
    description: 'Deploy planton-deployer Docker image in YOUR AWS account. All operations run within your boundary.',
    security: ['Credentials never leave your account', 'You control IAM role', 'You control network', 'Runner code auditable'],
    bestFor: 'Maximum security, zero-trust environments, regulated industries',
    highlight: true,
    color: 'green',
  },
];

const compliance = [
  {
    title: 'SOC 2 Type I',
    target: 'Q1 2026',
    description: 'Third-party audit of security controls. Validates appropriate controls for data security, availability, and confidentiality.',
    status: 'Audit partner selected, control documentation in progress',
  },
  {
    title: 'HIPAA BAA',
    target: 'Q2 2026',
    description: 'Business Associate Agreement for handling Protected Health Information under HIPAA regulations.',
    status: 'Architecture review in progress, compliance framework being codified',
  },
  {
    title: 'NIST CSF & MITRE ATT&CK',
    target: 'Ongoing',
    description: 'Base images pre-configured with NIST CSF standards. Automated threat detection in deployment pipelines.',
    status: 'Standards codified in Terraform modules',
  },
];

const verticals = [
  { vertical: 'Healthcare', standards: 'HIPAA + NIST CSF + state regulations' },
  { vertical: 'Fintech', standards: 'PCI DSS + SOC 2 + SOX compliance' },
  { vertical: 'Energy', standards: 'NERC CIP standards' },
  { vertical: 'Government', standards: 'FedRAMP requirements' },
];

export const SecurityCompliance: FC = () => {
  return (
    <Section variant="gradient" id="security">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="success" className="mb-6">SECURITY & COMPLIANCE</Badge>
        <SectionTitle>
          Secure by Design,{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Compliance-Ready
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Multiple security models, scoped permissions, and clear compliance roadmap—
          because trust is earned, not assumed.
        </SectionSubtitle>
      </Stack>

      {/* Security models */}
      <Box className="mb-20">
        <Typography className="text-xl font-semibold text-white text-center mb-8">
          Deployment Runner Security Models
        </Typography>
        <Typography className="text-center text-[#a0a0a0] mb-8 max-w-2xl mx-auto">
          You Choose Your Security Posture. Start simple, upgrade to more secure models as your requirements grow.
        </Typography>

        <Box className="grid lg:grid-cols-3 gap-6">
          {securityModels.map((model, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${
                model.highlight 
                  ? 'border-[#10b981]/50 bg-gradient-to-br from-[#10b981]/10 to-[#0a0a0a]' 
                  : ''
              }`}
            >
              {model.highlight && (
                <Badge variant="success" className="self-start mb-4">RECOMMENDED</Badge>
              )}
              
              <Box className="flex items-center gap-3 mb-4">
                <Typography className="text-3xl">{model.icon}</Typography>
                <Box>
                  <Typography className="text-xs text-[#666] uppercase tracking-wide">
                    {model.level}
                  </Typography>
                  <Typography className="text-white font-semibold">
                    {model.title}
                  </Typography>
                </Box>
              </Box>
              
              <BodyText className="mb-4 text-sm flex-1">
                {model.description}
              </BodyText>
              
              <Box className="mb-4">
                <Typography className="text-xs text-[#666] uppercase tracking-wide mb-2">
                  Security
                </Typography>
                <Stack className="gap-1">
                  {model.security.map((item, i) => (
                    <Typography key={i} className="text-xs text-[#a0a0a0] flex items-center gap-2">
                      <CheckIcon /> {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>
              
              <Box className="pt-4 border-t border-[#2a2a2a] mt-auto">
                <Typography className="text-xs text-[#666] uppercase tracking-wide mb-1">
                  Best For
                </Typography>
                <Typography className="text-xs text-[#a0a0a0]">
                  {model.bestFor}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Scoped permissions */}
      <Card className="mb-20">
        <Box className="grid lg:grid-cols-2 gap-8 items-center">
          <Box>
            <Typography className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              Scoped Permissions: Least Privilege by Design
            </Typography>
            <BodyText className="mb-6">
              <span className="text-white font-semibold">No Blanket Admin Required:</span> Planton 
              never asks for AdministratorAccess or wildcard permissions. Every deployment 
              component specifies exact IAM permissions needed.
            </BodyText>
            
            <Stack className="gap-3">
              {[
                'Audit the Terraform Code: All components are open source. Read exact resources being created.',
                'Generate Scoped IAM Policy: Each component includes documented IAM permissions.',
                'Combine for Your Stack: Deploying VPC + ALB + ECR? Combine policies for each component.',
                'Security teams can audit exact permissions before granting access.',
              ].map((item, index) => (
                <Box key={index} className="flex items-start gap-3">
                  <Box className="mt-0.5 flex-shrink-0">
                    <CheckIcon />
                  </Box>
                  <Typography className="text-sm text-[#b0b0b0]">{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
          
          <Box className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] font-mono text-xs overflow-hidden">
            <Typography className="text-[#666] mb-2">{/* Example: AWS ALB permissions */}</Typography>
            <Box className="text-[#b0b0b0]">
              <Typography className="text-[#7c3aed]">{'{'}</Typography>
              <Typography className="ml-2">&quot;Effect&quot;: <span className="text-[#10b981]">&quot;Allow&quot;</span>,</Typography>
              <Typography className="ml-2">&quot;Action&quot;: [</Typography>
              <Typography className="ml-4 text-[#f59e0b]">&quot;elasticloadbalancing:Create*&quot;</Typography>
              <Typography className="ml-4 text-[#f59e0b]">&quot;elasticloadbalancing:Describe*&quot;</Typography>
              <Typography className="ml-4 text-[#f59e0b]">&quot;elasticloadbalancing:Modify*&quot;</Typography>
              <Typography className="ml-2">]</Typography>
              <Typography className="text-[#7c3aed]">{'}'}</Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Compliance roadmap */}
      <Box className="mb-16">
        <Typography className="text-xl font-semibold text-white text-center mb-8">
          Compliance Roadmap
        </Typography>
        
        <Box className="grid md:grid-cols-3 gap-6">
          {compliance.map((item, index) => (
            <Card key={index}>
              <Box className="flex items-center justify-between mb-4">
                <Typography className="text-white font-semibold">{item.title}</Typography>
                <Badge variant="purple">{item.target}</Badge>
              </Box>
              <BodyText className="text-sm mb-4">{item.description}</BodyText>
              <Box className="pt-4 border-t border-[#2a2a2a]">
                <Typography className="text-xs text-[#666]">
                  <span className="text-[#10b981]">Status:</span> {item.status}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Vertical compliance */}
      <Card className="bg-gradient-to-br from-[#7c3aed]/10 to-[#0ea5e9]/10 border-[#7c3aed]/30">
        <Typography className="text-lg font-semibold text-white mb-4 text-center">
          Compliance as a Vertical Strategy
        </Typography>
        <Typography className="text-[#a0a0a0] text-center mb-6 max-w-2xl mx-auto">
          Domain-specific compliance rules. Standards evolve—our rule engine updates requirements 
          without code changes. Select your vertical, platform enforces appropriate controls.
        </Typography>
        
        <Box className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((item, index) => (
            <Box key={index} className="p-4 rounded-lg bg-[#0a0a0a]/50 border border-[#2a2a2a]">
              <Typography className="text-white font-medium mb-1">{item.vertical}</Typography>
              <Typography className="text-xs text-[#a0a0a0]">{item.standards}</Typography>
            </Box>
          ))}
        </Box>
        
        <Typography className="text-xs text-[#666] text-center mt-6">
          Compliance features are separate add-on tiers. Not every customer needs HIPAA—
          domain-specific compliance priced based on value delivered.
        </Typography>
      </Card>
    </Section>
  );
};
