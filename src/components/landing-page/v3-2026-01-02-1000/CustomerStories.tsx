'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, Card, Quote, Badge } from './shared';

const customers = [
  {
    company: 'TYNYBAY',
    companyLogo: '/images/customers/logos/tynybay.png',
    type: 'IT Consulting Firm',
    cloud: 'AWS, GCP',
    teamSize: '1 DevOps + 1 Dev',
    economics: {
      before: '3 clients max',
      after: '8+ clients',
      savings: '2.5x capacity',
    },
    quote: 'For a client who mandated GCP despite zero team experience, Planton delivered the entire infrastructure. Using Planton for all future client projects.',
    result: 'Scaled from 3 to 8+ concurrent clients without hiring additional DevOps.',
  },
  {
    company: 'iorta TechNext',
    companyLogo: '/images/customers/logos/iorta.svg',
    type: 'BFSI Product Company',
    cloud: 'AWS (ECS)',
    teamSize: '7 developers',
    spend: '~$450/month',
    economics: {
      before: '$150K+/year DevOps hire',
      after: '$450/month',
      savings: '96%',
    },
    quote: 'Planton enabled me to provide enterprise-grade DevOps to our 7-person team. They deploy independently and manage the entire infrastructure lifecycle.',
    result: 'Highest platform usage customer. Gets enterprise-grade DevOps at 1/30th the cost.',
  },
];

export const CustomerStories: FC = () => {
  return (
    <Section variant="gradient" id="customer-stories">
      <Stack className="items-center text-center mb-12">
        <Badge variant="success" className="mb-6">CUSTOMER STORIES</Badge>
        <SectionTitle>
          Proven{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Impact
          </span>
        </SectionTitle>
      </Stack>

      <Box className="grid md:grid-cols-2 gap-6">
        {customers.map((customer, index) => (
          <Card key={index} className="p-0 overflow-hidden">
            {/* Header */}
            <Box className="p-4 border-b border-[#2a2a2a] bg-[#0f0f0f]">
              <Box className="flex items-center gap-4">
                <Box className="w-10 h-10 rounded-lg bg-[#1a1a1a] p-2 flex items-center justify-center">
                  <img 
                    src={customer.companyLogo} 
                    alt={customer.company} 
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </Box>
                <Box>
                  <Typography className="text-white font-semibold">{customer.company}</Typography>
                  <Typography className="text-xs text-[#666]">{customer.type}</Typography>
                </Box>
                <Box className="ml-auto flex gap-2">
                  <Badge variant="purple">{customer.cloud}</Badge>
                  <Badge variant="default">{customer.teamSize}</Badge>
                </Box>
              </Box>
            </Box>
            
            {/* Content */}
            <Box className="p-6 bg-[#0a0a0a]">
              {/* Economics */}
              <Box className="p-4 rounded-lg bg-[#7c3aed]/10 border border-[#7c3aed]/30 mb-6">
                <Box className="grid grid-cols-3 gap-4 text-center">
                  <Box>
                    <Typography className="text-sm text-[#ef4444] line-through">{customer.economics.before}</Typography>
                  </Box>
                  <Box>
                    <Typography className="text-sm text-[#10b981] font-medium">{customer.economics.after}</Typography>
                  </Box>
                  <Box>
                    <Typography className="text-lg font-bold text-[#10b981]">{customer.economics.savings}</Typography>
                  </Box>
                </Box>
              </Box>
              
              {/* Quote */}
              <Quote text={customer.quote} author={customer.company} companyLogo={customer.companyLogo} />
              
              {/* Result */}
              <Box className="mt-4 pt-4 border-t border-[#2a2a2a]">
                <Typography className="text-sm text-[#a0a0a0]">
                  <span className="text-[#10b981] font-medium">Result:</span> {customer.result}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Section>
  );
};
