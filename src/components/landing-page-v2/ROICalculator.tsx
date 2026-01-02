'use client';

import { Box, Stack, Typography, Slider, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';
import Link from 'next/link';
import { FC, useState, useMemo } from 'react';
import { Section, SectionTitle, SectionSubtitle, Badge, Card, PrimaryButton, ArrowRightIcon } from './shared';

type DevOpsSetup = 'none' | 'junior' | 'senior' | 'team';

interface CalculatorInputs {
  teamSize: number;
  devOpsSetup: DevOpsSetup;
  cloudSpend: number;
  deploymentsPerWeek: number;
}

const devOpsOptions = [
  { value: 'none', label: 'No dedicated DevOps', salary: 0 },
  { value: 'junior', label: 'DevOps Engineer', salary: 75000 },
  { value: 'senior', label: 'Senior DevOps Engineer', salary: 150000 },
  { value: 'team', label: 'DevOps Team (2-3 engineers)', salary: 350000 },
];

const calculateROI = (inputs: CalculatorInputs) => {
  // Current costs
  const devOpsOption = devOpsOptions.find(o => o.value === inputs.devOpsSetup);
  const devOpsSalary = devOpsOption?.salary || 0;
  const benefits = devOpsSalary * 0.30;
  const recruitment = devOpsSalary * 0.10;
  const tooling = inputs.devOpsSetup !== 'none' ? 6000 : 0;
  const currentAnnual = devOpsSalary + benefits + recruitment + tooling;

  // Planton costs
  const seatCost = inputs.teamSize * 20 * 12; // $20/dev/month
  const usageMinutes = inputs.deploymentsPerWeek * 52 * 45; // 45 min avg per deployment
  const usageCost = (usageMinutes / 60) * 0.36; // $0.36/hour
  const plantonAnnual = seatCost + usageCost;

  // Savings
  const savings = Math.max(0, currentAnnual - plantonAnnual);
  const savingsPercent = currentAnnual > 0 ? (savings / currentAnnual) * 100 : 0;
  const paybackDays = savings > 0 ? (plantonAnnual / savings) * 365 : 0;
  const fiveYearSavings = savings * 5;

  return {
    currentAnnual,
    plantonAnnual,
    savings,
    savingsPercent,
    paybackDays,
    fiveYearSavings,
  };
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

export const ROICalculator: FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    teamSize: 7,
    devOpsSetup: 'senior',
    cloudSpend: 1500,
    deploymentsPerWeek: 10,
  });

  const results = useMemo(() => calculateROI(inputs), [inputs]);

  return (
    <Section id="roi-calculator">
      {/* Section header */}
      <Stack className="items-center text-center mb-12">
        <Badge variant="success" className="mb-6">ROI CALCULATOR</Badge>
        <SectionTitle>
          Calculate Your{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Savings
          </span>
          {' '}with Planton
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          See how much you&apos;ll save compared to hiring DevOps engineers or using legacy platforms
        </SectionSubtitle>
      </Stack>

      {/* Calculator */}
      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <Card className="p-6 md:p-8">
          <Typography className="text-lg font-semibold text-white mb-6">
            Your Current Setup
          </Typography>

          <Stack className="gap-8">
            {/* Team Size */}
            <Box>
              <Typography className="text-sm text-[#a0a0a0] mb-3">
                Team Size: <span className="text-white font-medium">{inputs.teamSize} developers</span>
              </Typography>
              <Slider
                value={inputs.teamSize}
                onChange={(_, value) => setInputs(prev => ({ ...prev, teamSize: value as number }))}
                min={1}
                max={50}
                sx={{
                  color: '#7c3aed',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#7c3aed',
                  },
                  '& .MuiSlider-track': {
                    background: 'linear-gradient(90deg, #7c3aed, #0ea5e9)',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#2a2a2a',
                  },
                }}
              />
              <Box className="flex justify-between text-xs text-[#666]">
                <span>1</span>
                <span>50</span>
              </Box>
            </Box>

            {/* DevOps Setup */}
            <FormControl fullWidth>
              <InputLabel 
                id="devops-setup-label"
                sx={{ color: '#a0a0a0', '&.Mui-focused': { color: '#7c3aed' } }}
              >
                Current DevOps Setup
              </InputLabel>
              <Select
                labelId="devops-setup-label"
                value={inputs.devOpsSetup}
                label="Current DevOps Setup"
                onChange={(e) => setInputs(prev => ({ ...prev, devOpsSetup: e.target.value as DevOpsSetup }))}
                sx={{
                  color: '#fff',
                  '.MuiOutlinedInput-notchedOutline': {
                    borderColor: '#2a2a2a',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3a3a3a',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7c3aed',
                  },
                  '.MuiSvgIcon-root': {
                    color: '#a0a0a0',
                  },
                }}
              >
                {devOpsOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    {option.salary > 0 && (
                      <span className="text-[#666] ml-2">
                        ({formatCurrency(option.salary)}/year)
                      </span>
                    )}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Cloud Spending */}
            <TextField
              label="Monthly Cloud Spending"
              type="number"
              value={inputs.cloudSpend}
              onChange={(e) => setInputs(prev => ({ ...prev, cloudSpend: Number(e.target.value) || 0 }))}
              InputProps={{
                startAdornment: <Typography className="text-[#a0a0a0] mr-1">$</Typography>,
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': {
                    borderColor: '#2a2a2a',
                  },
                  '&:hover fieldset': {
                    borderColor: '#3a3a3a',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#7c3aed',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#a0a0a0',
                  '&.Mui-focused': {
                    color: '#7c3aed',
                  },
                },
              }}
            />

            {/* Deployments per Week */}
            <Box>
              <Typography className="text-sm text-[#a0a0a0] mb-3">
                Deployments per Week: <span className="text-white font-medium">{inputs.deploymentsPerWeek}</span>
              </Typography>
              <Slider
                value={inputs.deploymentsPerWeek}
                onChange={(_, value) => setInputs(prev => ({ ...prev, deploymentsPerWeek: value as number }))}
                min={1}
                max={50}
                sx={{
                  color: '#7c3aed',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#7c3aed',
                  },
                  '& .MuiSlider-track': {
                    background: 'linear-gradient(90deg, #7c3aed, #0ea5e9)',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#2a2a2a',
                  },
                }}
              />
              <Box className="flex justify-between text-xs text-[#666]">
                <span>1</span>
                <span>50</span>
              </Box>
            </Box>
          </Stack>
        </Card>

        {/* Results */}
        <Box className="rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#7c3aed]/30 p-6 md:p-8">
          <Typography className="text-lg font-semibold text-white mb-6">
            Your Savings with Planton
          </Typography>

          <Stack className="gap-6">
            {/* Current Annual Cost */}
            <Box className="p-4 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/30">
              <Typography className="text-sm text-[#ef4444] mb-1">
                Current Annual Cost
              </Typography>
              <Typography className="text-2xl md:text-3xl font-bold text-white">
                {formatCurrency(results.currentAnnual)}
              </Typography>
              <Typography className="text-xs text-[#a0a0a0] mt-1">
                DevOps salary + benefits + overhead + tooling
              </Typography>
            </Box>

            {/* Planton Annual Cost */}
            <Box className="p-4 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/30">
              <Typography className="text-sm text-[#0ea5e9] mb-1">
                Planton Annual Cost
              </Typography>
              <Typography className="text-2xl md:text-3xl font-bold text-white">
                {formatCurrency(results.plantonAnnual)}
              </Typography>
              <Typography className="text-xs text-[#a0a0a0] mt-1">
                ${inputs.teamSize * 20}/month seats + usage-based automation
              </Typography>
            </Box>

            {/* Annual Savings */}
            <Box className="p-4 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30">
              <Typography className="text-sm text-[#10b981] mb-1">
                Your Annual Savings
              </Typography>
              <Typography className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
                {formatCurrency(results.savings)}
              </Typography>
              {results.savingsPercent > 0 && (
                <Badge variant="success" className="mt-2">
                  {results.savingsPercent.toFixed(0)}% cost reduction
                </Badge>
              )}
            </Box>

            {/* Additional metrics */}
            <Box className="grid grid-cols-2 gap-4">
              <Box className="p-3 rounded-lg bg-[#151515] border border-[#2a2a2a]">
                <Typography className="text-xs text-[#666] mb-1">Payback Period</Typography>
                <Typography className="text-lg font-bold text-white">
                  {results.paybackDays > 0 ? `${results.paybackDays.toFixed(1)} days` : 'Immediate'}
                </Typography>
              </Box>
              <Box className="p-3 rounded-lg bg-[#151515] border border-[#2a2a2a]">
                <Typography className="text-xs text-[#666] mb-1">5-Year Savings</Typography>
                <Typography className="text-lg font-bold text-white">
                  {formatCurrency(results.fiveYearSavings)}
                </Typography>
              </Box>
            </Box>

            {/* CTA */}
            <Link href="https://console.planton.ai/" target="_blank" className="w-full">
              <PrimaryButton className="w-full py-4">
                Start Free Trial
                <ArrowRightIcon />
              </PrimaryButton>
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Disclaimer */}
      <Typography className="text-xs text-[#666] text-center mt-8">
        Estimates based on typical DevOps costs. Actual savings may vary based on your specific situation.
        Planton pricing: $20/dev/month + $0.006/automation minute.
      </Typography>
    </Section>
  );
};

