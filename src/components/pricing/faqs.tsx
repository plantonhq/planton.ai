'use client';
import { FC, ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { TypoB2Regular, TypoH2 } from '@/components/common';
import Link from 'next/link';

interface IFaq {
  title: string;
  description: ReactNode;
}

const faqs: IFaq[] = [
  {
    title: 'Can we change our plan or cancel at any time?',
    description: (
      <Stack gap={2}>
        <TypoB2Regular className="text-text-secondary">
          Absolutely! You’re free to switch from Free to Plus or from Plus to Pro whenever it suits
          you.
        </TypoB2Regular>
        <TypoB2Regular className="text-text-secondary">
          If you’re already on a paid Pro plan, you can move down to Plus,
          but the transition will happen once your current billing period ends. This ensures you
          still get full Pro features for the remainder of your billing cycle, and then you’ll
          automatically switch to Plus.
        </TypoB2Regular>
        <TypoB2Regular className="text-text-secondary">
          Canceling is always an option as well—no forms, no interviews, no fuss. Just end your
          subscription whenever you need to.
        </TypoB2Regular>
      </Stack>
    ),
  },
  {
    title: 'Do you offer special pricing for schools or universities?',
    description: (
      <Stack gap={2}>
        <TypoB2Regular className="text-text-secondary">
          Yes! PlantonCloud is entirely free for K–12 classes, homeschool groups, and higher
          education—as long as you use it solely for classroom or academic activities.
        </TypoB2Regular>
        <TypoB2Regular className="text-text-secondary">
          For teachers and homeschool educators: After creating an account, <Link className="text-white underline" href="mailto:support@planton.ai">email us</Link> from your
          school’s address with your institution’s name, the class you teach, and verification that
          you’re an instructor. Once confirmed, we’ll activate the free plan.
        </TypoB2Regular>
        <TypoB2Regular className="text-text-secondary">
          For students: Once you sign up, <Link className="text-white underline" href="mailto:support@planton.ai">email us</Link> from your school’s email address with your
          institution’s name, your area of study, and your anticipated graduation date. We’ll
          finalize the free plan as soon as your details are verified.
        </TypoB2Regular>
      </Stack>
    ),
  },
  {
    title: 'Is it really possible to have 1,000 users under the Pro plan for just $299/month?',
    description: (
      <Box>
        <TypoB2Regular className="text-text-secondary">
          Definitely. PlantonCloud is one of the few solutions offering a single, capped-price
          option that covers unlimited users. We believe in straightforward, predictable pricing—no
          hidden costs, no surprises.
        </TypoB2Regular>
      </Box>
    ),
  },
  {
    title: 'Will I need to provide a credit card to try out PlantonCloud?',
    description: (
      <Box>
        <TypoB2Regular className="text-text-secondary">
          Nope! Our Free plan and all free trials do not require credit card details. If you switch
          to a paid tier with a trial, you’ll only be asked for a credit card when the trial wraps
          up—if you decide you want to keep going. You’re in complete control.
        </TypoB2Regular>
      </Box>
    ),
  },
  {
    title: 'Will I be charged automatically after my free trial?',
    description: (
      <Box>
        <TypoB2Regular className="text-text-secondary">
          No. Because we don’t request your payment information for the trial, there’s no way to
          bill you unless you decide to continue and provide a card yourself. Once the trial ends,
          if you’re happy with PlantonCloud and want to stick around, you can enter your credit card
          then. If not, no action is required.
        </TypoB2Regular>
      </Box>
    ),
  },
];

export const Faqs: FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className="bg-black relative">
      <Box className="absolute w-[1300px] aspect-square origin-top-right right-[calc(50%-1100px)] top-24  bg-[linear-gradient(260.32deg,#8A339141_41.28%,#060512A5_106.4%)] rounded-full blur-[3px] -z-0 " />
      <img
        src="/images/pricing/burger-shape.svg"
        className="w-[500px] absolute -top-72 left-[calc(50%-800px)] -z-0 origin-top-left"
      />
      <Stack className="w-full items-center py-40 z-50">
        <Box className="max-w-[1300px] px-12 py-24 rounded-[42px] bg-[linear-gradient(38.02deg,#2417413D_-6%,#8A33913D_125.86%)] backdrop-blur-[54.50px]">
          <Stack className="gap-14">
            <TypoH2 className="text-center">Curious about our pricing? Let’s clarify…</TypoH2>
            <Stack className="gap-14">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  variant="outlined"
                  className="bg-inherit before:content-none after:content-[''] after:block after:border-t after:border-[1px] after:border-solid after:border-[#373737]"
                >
                  <AccordionSummary className="px-0">
                    <Stack className="flex flex-row gap-2">
                      <Add />
                      <Typography>{faq.title}</Typography>
                    </Stack>
                  </AccordionSummary>
                  <AccordionDetails>{faq.description}</AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
