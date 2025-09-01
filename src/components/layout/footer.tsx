import { FC, Fragment } from 'react';
import Link from 'next/link';
import { Box, Divider, Stack, Typography } from '@mui/material';

interface IMenu {
  title: string;
  url: string;
}

interface IGroup {
  id: string;
  title: string;
  items: IMenu[];
}

const socialLinks: IMenu[] = [
  { title: '/images/layout/footer-icon-twitter-x.svg', url: '/' },
  { title: '/images/layout/footer-icon-facebook.svg', url: '/' },
  { title: '/images/layout/footer-icon-instagram.svg', url: '/' },
  { title: '/images/layout/footer-icon-github.svg', url: '/' },
];

const termsLinks: IMenu[] = [
  { title: 'Status', url: '/' },
  { title: 'Legal', url: '/' },
  { title: 'Privacy', url: '/' },
  { title: 'Terms & Conditions', url: '/' },
];

const groups: IGroup[] = [
  {
    title: 'Features',
    id: 'features',
    items: [
      { title: 'Planton Copilot', url: '/features/planton-copilot' },
      { title: 'Self-Service DevOps', url: '/features/self-service-devops' },
      { title: 'Service Hub', url: '/features/service-hub' },
      { title: 'IaC Workflows', url: '/features/iac-workflows' },
      { title: 'Kubernetes Dashboard', url: '/features/kubernetes-dashboard' },
      { title: 'Auditable Intelligence', url: '/features/auditable-intelligence' },
    ],
  },
  {
    title: 'Open Source',
    id: 'open_source',
    items: [
      { title: 'Project Planton', url: '/' },
      { title: 'Pulumi Modules', url: '/' },
    ],
  },
  {
    title: 'GET STARTED',
    id: 'get_started',
    items: [
      { title: 'Sign Up', url: '/' },
      { title: 'Pricing', url: '/pricing' },
      { title: 'Contact', url: '/' },
    ],
  },
  {
    title: 'COMPANY',
    id: 'company',
    items: [
      { title: 'About Us', url: '/' },
      { title: 'Customers', url: '/' },
      { title: 'Partners', url: '/' },
      { title: 'Careers', url: '/' },
      { title: 'Press', url: '/' },
      { title: 'Complaince', url: '/' },
    ],
  },
  {
    title: 'Explore',
    id: 'explore',
    items: [
      { title: 'All Features', url: '/features' },
      { title: 'Documentation', url: 'https://planton.ai/docs/' },
      { title: 'Blog', url: '/blog' },
    ],
  },
];

const FGroup: FC<IGroup> = ({ title, items }) => {
  return (
    <Stack className="gap-3">
      <Typography className="text-xs font-normal text-[#484848]">{title}</Typography>
      {items.map((menu, index) => (
        <Link href={menu.url} className="text-xs font-normal" key={index}>
          {menu.title}
        </Link>
      ))}
    </Stack>
  );
};

export function Footer() {
  return (
    <Stack className="md:px-24 md:py-10 md:gap-6 bg-black">
      <Stack className="px-5 md:px-0 py-6 md:py-0 md:flex-row gap-8 justify-between">
        <Stack className="gap-3">
          <img src="/images/layout/planton-cloud.svg" className="w-[120px] md:w-[230px]" />
          <Typography className="text-[12px] text-[#484848] font-normal">
            Connect with us:
          </Typography>
          <Stack className="flex-row items-center gap-3">
            {socialLinks.map((social, index) => (
              <Link href={social.url} key={index}>
                <img src={social.title} className="w-4" />
              </Link>
            ))}
          </Stack>
        </Stack>
        <Box className="md:hidden grid grid-cols-3 gap-3">
          <Stack className="gap-3">
            {groups
              .filter((grp) => ['features', 'explore'].includes(grp.id))
              .map((group, index) => (
                <Stack className="gap-3" key={index}>
                  {index !== 0 && <Divider className="border-[#303030]" />}
                  <FGroup {...group} />
                </Stack>
              ))}
          </Stack>
          <Stack className="gap-3">
            {groups
              .filter((grp) => ['open_source', 'get_started'].includes(grp.id))
              .map((group, index) => (
                <Stack className="gap-3" key={index}>
                  {index !== 0 && <Divider className="border-[#303030]" />}
                  <FGroup {...group} />
                </Stack>
              ))}
          </Stack>
          <Stack className="gap-3">
            {groups
              .filter((grp) => ['pricing', 'company'].includes(grp.id))
              .map((group, index) => (
                <Stack className="gap-3" key={index}>
                  {index !== 0 && <Divider className="border-[#303030]" />}
                  <FGroup {...group} />
                </Stack>
              ))}
          </Stack>
        </Box>
        <Box className="hidden md:grid grid-cols-5 gap-x-20 gap-y-6">
          {groups.map((group, index) => (
            <FGroup {...group} key={index} />
          ))}
        </Box>
      </Stack>
      <Divider className="border-[#303030]" />
      <Stack className="px-5 md:px-0 py-6 md:py-0 md:flex-row justify-center md:justify-between items-center gap-3">
        <Stack className="flex-row items-center gap-5">
          {termsLinks.map((term, index) => (
            <Fragment key={index}>
              {index > 0 && <Box className="w-1 aspect-square rounded-full bg-white" />}
              <Link className="text-xs font-normal whitespace-nowrap" href={term.url}>
                {term.title}
              </Link>
            </Fragment>
          ))}
        </Stack>
        <Typography className="text-xs font-normal">{`©${new Date().getFullYear()} Planton Cloud Inc. All Rights Reserved.`}</Typography>
      </Stack>
    </Stack>
  );
}
