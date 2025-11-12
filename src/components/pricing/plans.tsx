'use client';
import { FC } from 'react';
import Link from 'next/link';
import { Button, Grid2, Stack } from '@mui/material';
import { TypoB2Medium, TypoH3, TypoP1 } from '@/components/common';
import { StyledPriceCard, StyledUl } from '@/components/pricing/styled';
import {
  automationRunnerMinutesOverageRateInUsd,
  flatFeeInUsdForUnlimitedSeats,
  includedAutomationRunnerMinutesPlusPlan,
  includedAutomationRunnerMinutesProPlan,
  pricePerSeat,
} from '@/components/pricing-calculator';

interface IPlanCard {
  name: string;
  shortDesc: string;
  amount: string;
  period?: string;
  featureLabel: string;
  features: string[];
  isMostPopular?: boolean;
  isFreePlan?: boolean;
}

const plans: IPlanCard[] = [
  {
    name: 'Free',
    isFreePlan: true,
    shortDesc: '',
    amount: '$0',
    period: '/user per month',
    featureLabel: 'Run one environment at a time.',
    features: ['1 environment', '100 free automation runner minutes per month (no overage billing)'],
  },
  {
    name: 'Plus',
    shortDesc: '',
    amount: `$${pricePerSeat}`,
    period: '/seat/month',
    isMostPopular: true,
    featureLabel: 'Ideal for freelancers, startups, and smaller teams.',
    features: [
      'Pay-per-user pricing',
      'Unlimited environments',
      `Seat-based pricing at $${pricePerSeat}/user/month`,
      `${includedAutomationRunnerMinutesPlusPlan.toLocaleString()} free automation runner minutes per month, then $${automationRunnerMinutesOverageRateInUsd}/min thereafter`,
      '24/7/365 customer support',
      '30-day free trial',
    ],
  },
  {
    name: 'Pro',
    shortDesc: '',
    amount: '$299',
    period: '/month',
    featureLabel: 'Best fit for fast growing businesses.',
    features: [
      'Fixed price no per-user charges',
      'Unlimited environments',
      `Flat monthly fee for unlimited seats ($${flatFeeInUsdForUnlimitedSeats}/month)`,
      `${includedAutomationRunnerMinutesProPlan.toLocaleString()} free automation runner minutes per month, then $${automationRunnerMinutesOverageRateInUsd}/min thereafter`,
      'Priority 24/7/365 customer support',
      'Personal onboarding with our team',
      '75-day free trial',
    ],
  },
];

export const PriceCard: FC<IPlanCard> = ({
  name,
  shortDesc,
  amount,
  period,
  isMostPopular,
  featureLabel,
  features,
  isFreePlan,
}) => {
  return (
    <StyledPriceCard
      $isMostPopular={isMostPopular}
      className="w-full relative rounded-[16px] max-w-[500px] bg-[linear-gradient(132deg,_#000000_26.51%,_#8A3391_430.25%)]"
    >
      {isMostPopular && (
        <Stack className="rounded-t-[16px] px-6 py-3 items-center bg-[linear-gradient(256.05deg,_#603700_19.65%,_#FDA935_118.68%)]">
          🔥Most Popular
        </Stack>
      )}
      <Stack className="p-6 h-full justify-between gap-12">
        <Stack className={`${isMostPopular ? 'gap-4' : 'gap-12'}`}>
          <Stack className="items-center gap-4">
            <TypoP1>{name}</TypoP1>
            {shortDesc && <TypoB2Medium>{shortDesc}</TypoB2Medium>}
            <Stack className="flex-row">
              <TypoH3>
                {amount}{' '}
                {period && (
                  <sub className="text-base font-normal leading-[25px] text-text-secondary">
                    {period}
                  </sub>
                )}
              </TypoH3>
            </Stack>
          </Stack>
          <Stack className="gap-4">
            <TypoB2Medium>{featureLabel} </TypoB2Medium>
            <StyledUl className="pl-5">
              {features.map((feature, index) => (
                <li className="leading-loose" key={index}>
                  {feature}
                </li>
              ))}
            </StyledUl>
          </Stack>
        </Stack>
        <Button
          className="h-10 px-5 py-3 bg-[#0094ff] rounded-[10px]"
          LinkComponent={Link}
          href="https://console.planton.ai"
          target="_self"
        >
          {isFreePlan ? 'Get Started' : 'Subscribe'}
        </Button>
      </Stack>
    </StyledPriceCard>
  );
};

export const Plans: FC = () => {
  return (
    <Grid2 container columns={3} spacing={4} className="w-full max-w-[1400px] flex items-stretch">
      {plans.map((plan, index) => (
        <Grid2 size={1} key={index} className="flex">
          <PriceCard {...plan} />
        </Grid2>
      ))}
    </Grid2>
  );
};
