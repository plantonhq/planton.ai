'use client';

import React from 'react';
import { Slide, SlideTitle, SlideSubtitle, Metric, Grid, Card, CardTitle, CardText } from '../shared';

const whyNow = [
  {
    title: 'AI Wave',
    description: 'LLMs Enable New Automation',
  },
  {
    title: 'Cloud Complexity',
    description: 'AWS Has 200+ Services',
  },
  {
    title: 'Talent Shortage',
    description: 'Not Enough DevOps Engineers',
  },
];

export default function SlideMarket() {
  return (
    <Slide variant="gradient">
      <SlideTitle>Market Opportunity</SlideTitle>
      <SlideSubtitle className="mb-4 sm:mb-6">
        Cloud Spend Is Massive. Complexity Is the Problem.
      </SlideSubtitle>

      {/* TAM/SAM Numbers */}
      <Grid cols={3} gap="sm" className="mb-4 sm:mb-6">
        <Metric
          value="$150B+"
          label="Global Cloud Spend"
          sublabel="20%+ YoY growth"
        />
        <Metric
          value="$20B+"
          label="DevOps Tools Market"
          sublabel="Infrastructure automation"
          highlight
        />
        <Metric
          value="~50K"
          label="Mid-size Companies"
          sublabel="Without dedicated DevOps"
        />
      </Grid>

      {/* Why Now */}
      <Grid cols={3} gap="sm" className="max-w-2xl mx-auto">
        {whyNow.map((item) => (
          <Card key={item.title} className="text-center">
            <CardTitle className="text-sm sm:text-base mb-1">{item.title}</CardTitle>
            <CardText className="text-xs">{item.description}</CardText>
          </Card>
        ))}
      </Grid>
    </Slide>
  );
}

