'use client';

import { Box, Button, ButtonProps, Typography, TypographyProps } from '@mui/material';
import { ComponentProps, FC, ReactNode } from 'react';

// ============================================================================
// DESIGN TOKENS
// ============================================================================

export const colors = {
  // Primary gradient
  gradientStart: '#7c3aed',
  gradientEnd: '#0ea5e9',
  gradientAccent: '#10b981',
  
  // Background layers
  bgPrimary: '#0a0a0a',
  bgSecondary: '#111111',
  bgTertiary: '#1a1a1a',
  bgCard: '#151515',
  bgCardHover: '#1f1f1f',
  
  // Text
  textPrimary: '#ffffff',
  textSecondary: '#a0a0a0',
  textMuted: '#666666',
  
  // Accent
  accentPurple: '#7c3aed',
  accentBlue: '#0ea5e9',
  accentGreen: '#10b981',
  accentRed: '#ef4444',
  
  // Borders
  border: '#2a2a2a',
  borderHover: '#3a3a3a',
};

// ============================================================================
// SECTION WRAPPER
// ============================================================================

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

export const Section: FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  variant = 'default' 
}) => {
  const bgClass = variant === 'dark' 
    ? 'bg-[#0a0a0a]' 
    : variant === 'gradient'
    ? 'bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a]'
    : 'bg-[#0a0a0a]';
    
  return (
    <Box 
      component="section" 
      id={id}
      className={`w-full py-16 md:py-24 px-4 md:px-8 ${bgClass} ${className}`}
    >
      <Box className="max-w-7xl mx-auto">
        {children}
      </Box>
    </Box>
  );
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const SectionTitle: FC<TypographyProps> = ({ className, ...props }) => (
  <Typography
    variant="h2"
    className={`text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${className}`}
    {...props}
  />
);

export const SectionSubtitle: FC<TypographyProps> = ({ className, ...props }) => (
  <Typography
    className={`text-base md:text-xl text-[#a0a0a0] font-normal mt-4 max-w-3xl ${className}`}
    {...props}
  />
);

export const FeatureTitle: FC<TypographyProps> = ({ className, ...props }) => (
  <Typography
    variant="h3"
    className={`text-xl md:text-2xl font-semibold text-white ${className}`}
    {...props}
  />
);

export const BodyText: FC<TypographyProps> = ({ className, ...props }) => (
  <Typography
    className={`text-sm md:text-base text-[#b0b0b0] leading-relaxed ${className}`}
    {...props}
  />
);

// ============================================================================
// BUTTONS
// ============================================================================

export const PrimaryButton: FC<ButtonProps & ComponentProps<'a'>> = ({ 
  className, 
  children,
  ...props 
}) => (
  <Button
    className={`
      bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9]
      hover:from-[#8b5cf6] hover:to-[#38bdf8]
      text-white font-semibold
      px-6 py-3 rounded-lg
      transition-all duration-300
      shadow-lg shadow-purple-500/20
      hover:shadow-xl hover:shadow-purple-500/30
      hover:-translate-y-0.5
      ${className}
    `}
    {...props}
  >
    {children}
  </Button>
);

export const SecondaryButton: FC<ButtonProps & ComponentProps<'a'>> = ({ 
  className, 
  children,
  ...props 
}) => (
  <Button
    className={`
      bg-transparent
      border border-[#3a3a3a]
      hover:border-[#7c3aed]
      text-white font-medium
      px-6 py-3 rounded-lg
      transition-all duration-300
      hover:bg-[#7c3aed]/10
      ${className}
    `}
    {...props}
  >
    {children}
  </Button>
);

// ============================================================================
// CARDS
// ============================================================================

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}) => (
  <Box
    className={`
      rounded-xl
      ${gradient 
        ? 'bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#2a2a2a]' 
        : 'bg-[#151515] border border-[#2a2a2a]'
      }
      ${hover ? 'hover:border-[#3a3a3a] hover:bg-[#1a1a1a] transition-all duration-300' : ''}
      p-6 md:p-8
      ${className}
    `}
  >
    {children}
  </Box>
);

export const FeatureCard: FC<CardProps & { icon?: ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
  className = '',
}) => (
  <Card className={`${className}`}>
    {icon && (
      <Box className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/20 flex items-center justify-center mb-4 text-[#7c3aed]">
        {icon}
      </Box>
    )}
    <FeatureTitle className="mb-3">{title}</FeatureTitle>
    <BodyText>{description}</BodyText>
  </Card>
);

// ============================================================================
// BADGES & TAGS
// ============================================================================

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'purple';
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-[#2a2a2a] text-[#a0a0a0] border-[#3a3a3a]',
    success: 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30',
    warning: 'bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30',
    purple: 'bg-[#7c3aed]/10 text-[#a78bfa] border-[#7c3aed]/30',
  };
  
  return (
    <Box
      component="span"
      className={`
        inline-flex items-center
        px-3 py-1.5 rounded-full
        text-xs md:text-sm font-medium
        border
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </Box>
  );
};

// ============================================================================
// GRID LAYOUTS
// ============================================================================

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Grid: FC<GridProps> = ({ 
  children, 
  cols = 3, 
  gap = 'md',
  className = '' 
}) => {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  const gapClass = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };
  
  return (
    <Box className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`}>
      {children}
    </Box>
  );
};

// ============================================================================
// ICONS
// ============================================================================

export const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const XIcon = () => (
  <svg className="w-5 h-5 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const CloudIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

export const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const GitBranchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  </svg>
);

export const CpuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

// ============================================================================
// DIVIDER
// ============================================================================

export const Divider: FC<{ className?: string }> = ({ className = '' }) => (
  <Box className={`w-full h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent ${className}`} />
);

// ============================================================================
// QUOTE / TESTIMONIAL
// ============================================================================

interface QuoteProps {
  text: string;
  author: string;
  role?: string;
  className?: string;
}

export const Quote: FC<QuoteProps> = ({ text, author, role, className = '' }) => (
  <Box className={`border-l-4 border-[#7c3aed] pl-6 py-2 ${className}`}>
    <Typography className="text-lg md:text-xl text-white italic mb-3">
      &quot;{text}&quot;
    </Typography>
    <Typography className="text-sm text-[#a0a0a0]">
      — <span className="text-white font-medium">{author}</span>
      {role && <span className="text-[#666]">, {role}</span>}
    </Typography>
  </Box>
);

// ============================================================================
// METRIC DISPLAY
// ============================================================================

interface MetricProps {
  value: string;
  label: string;
  className?: string;
}

export const Metric: FC<MetricProps> = ({ value, label, className = '' }) => (
  <Box className={`text-center ${className}`}>
    <Typography className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent">
      {value}
    </Typography>
    <Typography className="text-sm md:text-base text-[#a0a0a0] mt-2">
      {label}
    </Typography>
  </Box>
);
