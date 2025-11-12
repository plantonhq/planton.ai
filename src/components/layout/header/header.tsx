'use client';

import { FC, ReactNode, useRef, useState } from 'react';
import Link from 'next/link';
import CopilotIcon from 'public/images/menu/copilot.svg';
import SelfServiceDevopsIcon from 'public/images/menu/self-service-devops.svg';
import ServiceHubIcon from 'public/images/menu/service-hub.svg';
import PulumiIcon from 'public/images/menu/pulumi.svg';
import KubernetesIcon from 'public/images/menu/kubernetes.svg';
import AuditableIntelligenceIcon from 'public/images/menu/auditable-intelligence.svg';
import { Divider, Stack, SvgIcon, Typography } from '@mui/material';
import {
  IMenuItems,
  ProductMenu,
  ProductMenuItem,
} from '@/components/layout/header/ProductMenu';
import { Close, DensityMedium } from '@mui/icons-material';
import { Btn, JoinDiscordBtn } from '@/components/common';
import {
  StyledDrawer,
  StyledSvgIcon,
  SvgIconSizeResponsive,
} from '@/components/layout/header/styled';
import { MenuAccordian } from '@/components/layout/header/menu-accordion';
import { JoinBetaBtn } from '@/components/landing-page';

// import {
//   Features,
//   ProductMenu,
//   ProductMenuItem,
//   RoundBtn,
// } from "@/app/_components";
// import { productMainMenus } from "@/app/_utils/constants";

interface MenuSectionProps {
  children: ReactNode;
}

interface IHeaderLogo {
  className?: string;
}

export const HeaderLogo = ({ className }: IHeaderLogo) => {
  return (
    <Link href="/" className={className}>
      {/* <Image src="/images/header-logo.svg" width={24} height={24} alt="Logo" /> */}
      <SvgIcon width={32} height={32}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
        >
          <path
            d="M11.8461 -0.154297H6.59239C-0.485 -0.154297 0.00721739 5.77323 0.00721739 5.77323V28.8139C0.00316622 28.8862 0.000465445 28.9542 0.000465445 29.025C0.000465445 29.0959 0.000465446 29.1696 0.00721739 29.2361C0.0587062 30.0458 0.401948 30.8025 0.964535 31.3464C1.52712 31.8904 2.26507 32.1791 3.0227 32.1517C3.78032 32.1244 4.4984 31.783 5.02544 31.1997C5.55248 30.6163 5.84728 29.8366 5.84765 29.025C5.84765 28.8197 5.79364 9.94707 5.79364 9.4201C5.79364 9.29577 5.79701 9.17577 5.80309 9.05867C5.80309 0.857719 11.8461 -0.154297 11.8461 -0.154297Z"
            fill="currentColor"
          />
          <path
            d="M18.2953 -0.154297H14.8031C14.8031 -0.154297 8.61536 0.844532 8.61536 8.93862C8.81793 5.35068 15.8222 5.69599 15.8222 5.69599H16.5309C17.8482 5.69618 19.1145 6.22194 20.0649 7.16331C21.0152 8.10468 21.5761 9.38876 21.6302 10.747C21.6843 12.1053 21.2275 13.4325 20.3552 14.4512C19.4829 15.4699 18.2627 16.1012 16.9499 16.2129C16.8116 16.2244 16.6733 16.2322 16.5309 16.2322H14.7333C14.7333 16.2322 10.4655 15.9361 10.4655 19.3878C10.4655 22.8395 15.3051 22.4478 15.3051 22.4478H18.2939C18.5013 22.4478 18.7087 22.4385 18.9127 22.425C23.9846 22.0953 28.0001 17.2553 28.0001 11.201C28.0001 5.14663 23.6555 -0.154297 18.2953 -0.154297Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    </Link>
  );
};

const MenuSection: FC<MenuSectionProps> = ({ children }) => {
  return (
    <Stack direction="row" className="items-center gap-3 text-sm">
      {children}
    </Stack>
  );
};

interface IHeaderComputer {
  className?: string;
}

export const menuFeatures: IMenuItems[] = [
  {
    label: 'Planton Copilot',
    subLabel: 'Github Copilot, but for DevOps',
    icon: <SvgIconSizeResponsive component={CopilotIcon} />,
    href: '/features/planton-copilot',
  },
  {
    label: 'Self-Service DevOps',
    subLabel: 'Skip DevOps Queue -> Ship Faster',
    icon: <StyledSvgIcon component={SelfServiceDevopsIcon} />,
    href: '/features/self-service-devops',
  },
  {
    label: 'Service Hub',
    subLabel: 'Vercel, but for Backend',
    icon: <StyledSvgIcon component={ServiceHubIcon} />,
    href: '/features/service-hub',
  },
  {
    label: 'IaC Workflows',
    subLabel: 'terraform plan -> terraform apply',
    icon: <StyledSvgIcon component={PulumiIcon} />,
    href: '/features/iac-workflows',
  },
  {
    label: 'Kubernetes Dashboard',
    subLabel: 'App Centric Dashboard',
    icon: <StyledSvgIcon component={KubernetesIcon} />,
    href: '/features/kubernetes-dashboard',
  },
  {
    label: 'Auditable Intelligence',
    subLabel: 'All actions Recorded & Reviewed',
    icon: <StyledSvgIcon component={AuditableIntelligenceIcon} />,
    href: '/features/auditable-intelligence',
  },
];
export const menuExplorer: IMenuItems[] = [
  {
    label: '',
    subLabel: 'All Features',
    href: '/features',
  },
  {
    label: '',
    subLabel: 'Documentation',
    href: '/docs',
  },
  {
    label: '',
    subLabel: 'Tutorials',
    href: '/tutorials',
  },
  {
    label: '',
    subLabel: 'Blog',
    href: '/blog',
  },
];
export const menuByUseCases: IMenuItems[] = [
  { label: '', subLabel: 'ChatOps', href: '/solutions/by-use-case/chat-ops' },
  {
    label: '',
    subLabel: 'Internal Developer Platform',
    href: '/solutions/by-use-case/internal-developer-platform',
  },
  { label: '', subLabel: 'Multi-Cloud', href: '/solutions/by-use-case/multi-cloud' },
];
export const menuBySize: IMenuItems[] = [
  { label: '', subLabel: 'Startups', href: '/solutions/by-size/startups' },
  { label: '', subLabel: 'Growing Teams', href: '/solutions/by-size/growing-teams' },
  { label: '', subLabel: 'Enterprises', href: '/solutions/by-size/enterprises' },
];
export const menuByRole: IMenuItems[] = [
  { label: '', subLabel: 'Developer', href: '/solutions/by-role/developers' },
  { label: '', subLabel: 'DevOps', href: '/solutions/by-role/devops' },
  { label: '', subLabel: 'Startup Founder', href: '/solutions/by-role/startup-founders' },
  { label: '', subLabel: 'Engineering Leader', href: '/solutions/by-role/engineering-leader' },
];

// Resources dropdown (replacement for Open Source)
export const menuResources: IMenuItems[] = [
  { label: '', subLabel: 'Docs', href: '/docs' },
  { label: '', subLabel: 'Tutorials', href: '/tutorials' },
  { label: '', subLabel: 'Blog', href: '/blog' },
  { label: '', subLabel: 'Tour', href: '/tour' },
  { label: '', subLabel: 'Demo', href: '/demo' },
  { label: '', subLabel: 'ACME', href: '/acme' },
];

const HeaderComputer: FC<IHeaderComputer> = ({ className }) => {
  return (
    <Stack className={`${className} flex-row items-center gap-6 text-sm`}>
      <HeaderLogo />
      <ProductMenu
        title="Features"
        leftMenu={[
          {
            items: menuFeatures,
          },
        ]}
        rightMenu={[
          {
            title: 'Explore',
            items: menuExplorer,
          },
        ]}
      />
      <ProductMenu
        title="Solutions"
        leftMenu={[
          {
            title: 'By Use Case',
            items: menuByUseCases,
          },
          {
            title: 'By Size',
            items: menuBySize,
          },
        ]}
        rightMenu={[
          {
            title: 'By Role',
            items: menuByRole,
          },
        ]}
        footerMenu={{ label: 'View all Solutions', href: '/solutions' }}
      />
      <ProductMenu
        title="Resources"
        leftMenu={[
          {
            items: menuResources,
          },
        ]}
        leftWidthClass="w-auto min-w-[180px]"
      />
      <Link href="/pricing" className="text-base font-medium">
        Pricing
      </Link>
    </Stack>
  );
};

// const MenuLabel: FC<TypographyProps> = (props) => {
//   return (
//     <Typography
//       {...props}
//       className={`${props.className}  text-white text-sm font-medium cursor-pointer`}
//     >
//       {props.children}
//     </Typography>
//   );
// };

interface IHeaderMobile {
  className?: string;
}

const HeaderMobile: FC<IHeaderMobile> = ({ className }) => {
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [expandedPanel, setExpandedPanel] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const handleClick = () => {
    setOpenMenu((previousOpen) => !previousOpen);
  };

  const canBeOpen = openMenu && Boolean(anchorRef.current);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <DensityMedium
        ref={anchorRef}
        className={`${className} relative z-10`}
        fontSize="small"
        aria-describedby={id}
        onClick={handleClick}
      />
      <StyledDrawer open={openMenu} onClose={handleClick} className="w-[350px]">
        <Stack className="gap-7">
          <Stack className="flex-row items-center gap-8 justify-between">
            <img src="/images/header-logo-mobile.svg" />
            <Close onClick={handleClick} />
          </Stack>
          <Stack className="gap-8">
            <MenuAccordian
              expanded={expandedPanel === 'panel-1'}
              title="Features"
              onChange={handleChange('panel-1')}
            >
              <Stack className="gap-6">
                {menuFeatures.map((item, index) => (
                  <ProductMenuItem {...item} key={index} />
                ))}
                <Divider className="border-[#232323] -mt-3" />
                <Stack className="gap-4">
                  <Typography className="text-sm font-normal">Explore</Typography>
                  {menuExplorer.map((item, index) => (
                    <ProductMenuItem {...item} key={index} />
                  ))}
                  <Divider className="border-[#232323] -mt-1" />
                </Stack>
              </Stack>
            </MenuAccordian>
            <MenuAccordian
              expanded={expandedPanel === 'panel-2'}
              title="Solutions"
              onChange={handleChange('panel-2')}
            >
              <Stack className="gap-6">
                <Stack className="gap-4">
                  <Typography className="text-sm font-normal">By Use Case</Typography>
                  {menuByUseCases.map((item, index) => (
                    <ProductMenuItem {...item} key={index} />
                  ))}
                  <Divider className="border-[#232323] -mt-1" />
                </Stack>

                <Stack className="gap-4">
                  <Typography className="text-sm font-normal">By Size</Typography>
                  {menuBySize.map((item, index) => (
                    <ProductMenuItem {...item} key={index} />
                  ))}
                  <Divider className="border-[#232323] -mt-1" />
                </Stack>

                <Stack className="gap-4">
                  <Typography className="text-sm font-normal">By Role</Typography>
                  {menuByRole.map((item, index) => (
                    <ProductMenuItem {...item} key={index} />
                  ))}
                  <Divider className="border-[#232323] -mt-1" />
                </Stack>
              </Stack>
            </MenuAccordian>
            <MenuAccordian
              expanded={expandedPanel === 'panel-3'}
              title="Resources"
              onChange={handleChange('panel-3')}
            >
              <Stack className="gap-5">
                {menuResources.map((item, index) => (
                  <ProductMenuItem {...item} key={index} />
                ))}
                <Divider className="border-[#232323] -mt-2" />
              </Stack>
            </MenuAccordian>
            <Link href="/pricing" className="text-text-secondary text-base font-semibold">
              Pricing
            </Link>
          </Stack>
        </Stack>
      </StyledDrawer>
    </>
  );
};

export function Header() {
  return (
    <Stack className="app-header w-full md:h-[70px] fixed top-0 left-0 z-20 flex-row justify-between items-center px-5 py-3 md:px-[32px] md:py-2.5 bg-gray-900 bg-opacity-0 backdrop-blur-sm">
      <HeaderMobile className="md:hidden" />
      <HeaderComputer className="hidden md:flex" />
      <MenuSection>
        <JoinDiscordBtn className="text-text-secondary">Discord</JoinDiscordBtn>
        <Btn
          className="text-text-secondary"
          LinkComponent={Link}
          href="https://console.planton.ai/"
          target="_blank"
        >
          Login
        </Btn>
        <JoinBetaBtn className="bg-white text-black !h-8 !px-3 !py-2">Join Beta</JoinBetaBtn>
        {/* <Link href="https://console.planton.ai/" target="_blank">
          <Stack className="flex-row">
            <Typography className="text-sm text-gray-400 font-medium">
              Go To Console
            </Typography>
            {/* <OpenInNew className="text-lg ml-1" />
          </Stack>
        </Link> */}
      </MenuSection>
    </Stack>
  );
}
