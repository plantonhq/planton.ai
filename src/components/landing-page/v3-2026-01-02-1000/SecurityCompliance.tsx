'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Card, Badge } from './shared';

const securityModels = [
  { label: 'OAuth-Based Access', description: 'Short-lived tokens, no stored credentials' },
  { label: 'Trust Relationship', description: 'Planton assumes IAM role in your account' },
  { label: 'Customer-Hosted Runner', description: 'All operations in your network' },
];

export const SecurityCompliance: FC = () => {
  return (
    <Section id="security">
      <Stack className="items-center text-center mb-12">
        <Badge variant="success" className="mb-6">SECURITY</Badge>
        <SectionTitle>
          Your Cloud, Your{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Control
          </span>
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Choose your security model. All operations happen in your cloud account.
        </SectionSubtitle>
      </Stack>

      {/* Security models as horizontal badges */}
      <Box className="flex flex-wrap justify-center gap-4 mb-12">
        {securityModels.map((model, index) => (
          <Card key={index} className="text-center flex-1 min-w-[200px] max-w-[300px]">
            <Typography className="text-white font-medium mb-2">{model.label}</Typography>
            <Typography className="text-sm text-[#a0a0a0]">{model.description}</Typography>
          </Card>
        ))}
      </Box>

      {/* IAM code example */}
      <Card className="p-0 overflow-hidden max-w-3xl mx-auto">
        <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
          <Typography className="text-sm font-medium text-white">
            Scoped IAM Permissions (Example)
          </Typography>
        </Box>
        <Box className="p-6 font-mono text-sm bg-[#0a0a0a] overflow-x-auto">
          <pre className="text-[#a0a0a0]">
{`{
  "Effect": "Allow",
  "Action": [
    "ecs:CreateService",
    "ecs:UpdateService",
    "ecs:DeleteService"
  ],
  "Resource": "arn:aws:ecs:*:*:service/planton-*"
}`}
          </pre>
        </Box>
        <Box className="p-4 border-t border-[#2a2a2a] bg-[#0f0f0f]">
          <Typography className="text-xs text-[#666]">
            Only resources with <code className="text-[#10b981]">planton-</code> prefix. 
            Never full account access.
          </Typography>
        </Box>
      </Card>
    </Section>
  );
};
