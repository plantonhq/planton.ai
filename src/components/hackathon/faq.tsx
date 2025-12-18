'use client';

import { Box, Typography, Stack } from '@mui/material';
import {
  PageSection,
  SectionContainer,
} from '@/components/landing-page';

export const FAQ = () => {
  return (
    <PageSection>
      <SectionContainer>
        <Stack spacing={3} className="max-w-4xl mx-auto text-center mb-12">
          <Typography
            fontSize={48}
            fontWeight={700}
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Frequently Asked Questions
          </Typography>
          <Typography fontSize={18} className="text-gray-400">
            Got questions? We&apos;ve got answers.
          </Typography>
        </Stack>

        <Box className="max-w-4xl mx-auto space-y-4">
          <FAQItem
            question="Do I need to know mobile development?"
            answer="Not at all! This hackathon is about learning together. We'll set up development environments as a group and figure things out collectively. Beginners are absolutely welcome."
          />
          <FAQItem
            question="What if I don't have an app idea?"
            answer="That's totally fine! You can join one of the two initial projects (Vehicle Mileage Tracker or Apartment Expense Tracker), or team up with someone else who has an idea. The goal is to learn and build together."
          />
          <FAQItem
            question="Do I need to bring anything?"
            answer="Just your laptop and enthusiasm! We'll handle development environment setup together during the hackathon. No need to prepare or install anything in advance."
          />
          <FAQItem
            question="Can I join remotely?"
            answer="Absolutely! This is a hybrid event. Whether you're joining from the office or from home, you'll be able to participate fully. We'll make sure remote participants are well-integrated."
          />
          <FAQItem
            question="What if I can't stay the full day?"
            answer="No problem! While it's a full-day event (8-10 hours), you can join for whatever time works for you. Even a few hours of participation is valuable."
          />
          <FAQItem
            question="Will there be food and breaks?"
            answer="Yes! We'll have regular breaks throughout the day. For in-person participants, we'll arrange food. Remote participants, keep your favorite snacks handy!"
          />
          <FAQItem
            question="What platforms are we targeting?"
            answer="We're aiming for cross-platform development - apps that work on both Android and iOS. We'll explore tools like React Native or Flutter that enable building for both platforms at once."
          />
          <FAQItem
            question="Is this competitive or collaborative?"
            answer="100% collaborative! This isn't a competition - it's a learning and building experience. The goal is to establish mobile development workflows and help each other succeed."
          />
          <FAQItem
            question="How do I RSVP?"
            answer="Super informal! Just react or comment on the Slack announcement so we can get a rough headcount. Or just show up on the day - no formal registration needed."
          />
        </Box>
      </SectionContainer>
    </PageSection>
  );
};

const FAQItem = ({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string;
}) => (
  <Box className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
    <Typography fontSize={18} fontWeight={700} className="text-white mb-3">
      {question}
    </Typography>
    <Typography fontSize={15} className="text-gray-400 leading-relaxed">
      {answer}
    </Typography>
  </Box>
);

