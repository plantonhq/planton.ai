import { ComponentProps, FC } from 'react';
import { Button, ButtonProps, Typography, TypographyProps } from '@mui/material';
import Link from 'next/link';
import { SvgIconSizeResponsive } from '@/components/layout/header/styled';
import DiscordIcon from 'public/images/discord.svg';

export const TypoH1: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <Typography className={`text-[100px] leading-[100px] font-medium ${className}`} {...props} />
  );
};

export const TypoH2: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <Typography
      className={`text-[32px] md:text-[86px] leading-[38px] md:leading-[86px] font-bold md:font-medium ${className}`}
      {...props}
    />
  );
};

export const TypoH3: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <Typography
      className={`text-base md:text-[48px] leading-[1] md:leading-[68px] font-bold md:font-semibold ${className}`}
      {...props}
    />
  );
};

export const TypoP1: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <Typography
      className={`text-sm md:text-2xl md:leading-[38px] font-normal md:font-medium ${className}`}
      {...props}
    />
  );
};

export const TypoB2Medium: FC<TypographyProps> = ({ className, ...props }) => {
  return (
    <Typography
      className={`text-xs md:text-[16px] font-medium leading-[16px] ${className}`}
      {...props}
    />
  );
};

export const TypoB2Regular: FC<TypographyProps> = ({ className, ...props }) => {
  return <Typography className={`text-base font-normal leading-[25px] ${className}`} {...props} />;
};

export const Btn: FC<ButtonProps & ComponentProps<'a'>> = ({ className, ...props }) => {
  return (
    <Button
      className={`px-3 md:px-5 py-2 md:py-3 h-8 md:h-10 text-xs md:text-base leading-[2] md:leading-[1] font-medium rounded-[10px] w-fit ${className}`}
      {...props}
    />
  );
};

export const PrimaryBtn: FC<ButtonProps & ComponentProps<'a'>> = ({ className, ...props }) => {
  return <Btn className={`bg-[#0095FF] ${className}`} {...props} />;
};

export const GetStartedBtn: FC<ButtonProps & ComponentProps<'a'>> = ({ className, ...props }) => {
  return (
    <PrimaryBtn
      LinkComponent={Link}
      href="https://console.planton.cloud"
      target="_self"
      className={`hover:bg-[#1976D2] transition-colors ${className}`}
      {...props}
    />
  );
};

export const BookDemoBtn: FC<ButtonProps & ComponentProps<'a'>> = ({ className, ...props }) => {
  return (
    <Btn
      LinkComponent={Link}
      href="https://docs.google.com/forms/d/17tEVBbpIGl0AR4M75IOBYj4Ywap1RPCzZc4HMWA-67U"
      target="_self"
      className={`hover:bg-white/10 transition-colors ${className}`}
      {...props}
    />
  );
};

export const JoinDiscordBtn: FC<ButtonProps & ComponentProps<'a'>> = ({ className, ...props }) => {
  return (
    <Btn
      startIcon={<SvgIconSizeResponsive viewBox="0 0 14 14" component={DiscordIcon} />}
      LinkComponent={Link}
      href="https://discord.gg/pwcSapdQAp"
      target="_blank"
      className={` ${className}`}
      {...props}
    />
  );
};
