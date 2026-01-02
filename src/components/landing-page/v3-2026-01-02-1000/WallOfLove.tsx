'use client';

import { Box, Stack } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, Badge, TestimonialCard } from './shared';

const testimonials = [
  {
    name: 'Balaji Borra',
    role: 'DevOps Engineer',
    company: 'TYNYBAY',
    location: 'India',
    quote: 'I handle 8+ client projects with Planton—no more rewriting Terraform between clients.',
    avatar: '/images/customers/people/balaji-borra.png',
  },
  {
    name: 'Rakesh Kandhi',
    role: 'Senior Developer',
    company: 'TYNYBAY',
    location: 'India',
    quote: 'I deploy to dev, staging, and prod without waiting on DevOps. Self-service is a game changer.',
    avatar: '/images/customers/people/rakesh-kandhi.jpeg',
  },
  {
    name: 'Sai Saketh',
    role: 'DevOps Engineer',
    company: 'iorta TechNext',
    location: 'India',
    quote: 'Our 7-person team deploys independently without deep AWS expertise.',
    avatar: null,
  },
];

export const WallOfLove: FC = () => {
  return (
    <Section variant="gradient" id="wall-of-love">
      <Stack className="items-center text-center mb-12">
        <Badge variant="success" className="mb-6">WALL OF LOVE</Badge>
        <SectionTitle>
          Loved by{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            Teams
          </span>
        </SectionTitle>
      </Stack>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            quote={testimonial.quote}
            location={testimonial.location}
            avatar={testimonial.avatar}
            className="h-full"
          />
        ))}
      </Box>
    </Section>
  );
};

