'use client';

import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Section, SectionTitle, SectionSubtitle, Badge, TestimonialCard } from './shared';

const testimonials = [
  {
    name: 'Harsha CH',
    role: 'Solo Developer',
    company: 'Jai.CX',
    location: 'USA/India',
    quote: "As Planton's first user, I filled out forms one by one for VPC, ECS, Route 53, certificates. That led to Infra Charts—now I deploy complete environments in a single form. Weeks of Terraform → under 1 hr.",
    avatar: '/images/customers/people/harsha-ch.jpeg',
  },
  {
    name: 'Balaji Borra',
    role: 'DevOps Engineer',
    company: 'TynyBay',
    location: 'India',
    quote: 'I handle 8+ client projects with Planton—no more rewriting Terraform between clients. My efficiency has improved dramatically, and I provide far better experience to all our developers.',
    avatar: '/images/customers/people/balaji-borra.png',
  },
  {
    name: 'Rakesh Kandhi',
    role: 'Senior Developer',
    company: 'TynyBay',
    location: 'India',
    quote: 'I can now update service configurations and deploy to dev, staging, and prod—all without waiting on DevOps. Self-service infrastructure through ServiceHub is a game changer for productivity.',
    avatar: '/images/customers/people/rakesh-kandhi.jpeg',
  },
  {
    name: 'Sai Saketh',
    role: 'Junior DevOps Engineer',
    company: 'iorta TechNext',
    location: 'India',
    quote: 'Planton enabled me to provide a mature developer experience to our 7-person team without requiring deep AWS expertise. They deploy to multiple environments independently and manage the entire infrastructure lifecycle themselves.',
    avatar: null, // No image available
  },
  {
    name: 'Rohith Reddy Gopu',
    role: 'CEO',
    company: 'TynyBay',
    location: 'India',
    quote: 'For a client in regulated industry (BFSI) who mandated GCP, Planton delivered the entire infra despite zero GCP experience on our team. Mature infrastructure out-of-the-box. Using Planton for all future client projects.',
    avatar: '/images/customers/people/rohith-reddy-gopu.jpeg',
  },
];

export const WallOfLove: FC = () => {
  return (
    <Section variant="gradient" id="wall-of-love">
      {/* Section header */}
      <Stack className="items-center text-center mb-16">
        <Badge variant="success" className="mb-6">WALL OF LOVE</Badge>
        <SectionTitle>
          Loved by{' '}
          <span className="bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent">
            DevOps Engineers
          </span>
          {' '}and Developers
        </SectionTitle>
        <SectionSubtitle className="mx-auto">
          Real feedback from teams using Planton in production
        </SectionSubtitle>
      </Stack>

      {/* Testimonial grid - masonry-style layout */}
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Box 
            key={index}
            className={`
              ${index === 0 ? 'lg:row-span-1' : ''}
              ${index === 1 ? 'lg:row-span-1' : ''}
            `}
            sx={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              '@keyframes fadeInUp': {
                from: {
                  opacity: 0,
                  transform: 'translateY(20px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <TestimonialCard
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
              location={testimonial.location}
              avatar={testimonial.avatar}
              className="h-full"
            />
          </Box>
        ))}
      </Box>

      {/* Social proof note */}
      <Stack className="items-center mt-12">
        <Typography className="text-sm text-[#666]">
          All testimonials from verified customers with permission
        </Typography>
      </Stack>
    </Section>
  );
};

