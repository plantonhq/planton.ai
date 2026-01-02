'use client';

import React from 'react';
import { Slide, SlideTitle, SlideSubtitle, CustomerCard, Grid, Callout } from '../shared';

const customers = [
  {
    name: 'Jai.CX',
    metric: '<1 hr',
    metricLabel: 'deploy time',
    description: 'Solo dev, first user',
  },
  {
    name: 'TynyBay',
    metric: '8+',
    metricLabel: 'client projects',
    description: 'IT consulting',
  },
  {
    name: 'iorta TechNext',
    metric: '96%',
    metricLabel: 'cost savings',
    description: '$450/mo spend',
  },
];

export default function SlideCustomers() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Customers</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Trusted by IT consulting firms and startups
      </SlideSubtitle>

      {/* Customer Cards */}
      <Grid cols={3} gap="sm" className="mb-4 sm:mb-6">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.name}
            name={customer.name}
            metric={customer.metric}
            metricLabel={customer.metricLabel}
          />
        ))}
      </Grid>

      {/* Key Quote */}
      <Callout variant="highlight" className="max-w-lg">
        <p className="text-sm sm:text-base text-white italic">
          &ldquo;Developers self-onboard their own services. That&apos;s a huge win.&rdquo;
        </p>
        <p className="text-xs text-white/50 mt-2">— TynyBay, IT Consulting</p>
      </Callout>

      {/* Retention highlight */}
      <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
        <span className="text-emerald-400 text-lg">✓</span>
        <span className="text-sm sm:text-base text-white font-medium">
          100% customer retention since launch
        </span>
      </div>
    </Slide>
  );
}

