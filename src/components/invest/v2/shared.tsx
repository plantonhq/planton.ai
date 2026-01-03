'use client';

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// ============================================================================
// DESIGN TOKENS - Hybrid: Landing page colors + Pitch deck drama
// ============================================================================

export const colors = {
  // Primary gradient (from landing-page-v2)
  gradientStart: '#7c3aed',  // Purple
  gradientEnd: '#0ea5e9',    // Blue
  
  // Accent colors
  accentGreen: '#10b981',
  accentRed: '#ef4444',
  accentAmber: '#f59e0b',
  accentPink: '#ec4899',
  
  // Background layers (darker for pitch deck drama)
  bgPrimary: '#0a0a0f',
  bgSecondary: '#0f0f1a',
  bgCard: '#151520',
  bgCardHover: '#1a1a2e',
  
  // Text
  textPrimary: '#ffffff',
  textSecondary: '#a0a0a0',
  textMuted: '#666666',
  
  // Borders
  border: '#2a2a3a',
  borderHover: '#3a3a4a',
};

// ============================================================================
// SLIDE WRAPPER - Mobile-first, single screen
// ============================================================================

interface SlideProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'problem' | 'solution' | 'gradient';
}

export const Slide: FC<SlideProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const bgClass = {
    default: 'bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]',
    problem: 'bg-gradient-to-br from-[#1a0a0a] via-[#2d1515] to-[#1a0a0a]',
    solution: 'bg-gradient-to-br from-[#0a1a0f] via-[#152d1a] to-[#0a1a0f]',
    gradient: 'bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]',
  }[variant];

  return (
    <div 
      className={`
        h-[100dvh] overflow-hidden
        flex flex-col items-center justify-center
        px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12
        ${bgClass}
        ${className}
      `}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl mx-auto text-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================================
// TYPOGRAPHY - Responsive scaling
// ============================================================================

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const SlideTitle: FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`
    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    font-bold text-white leading-tight
    ${className}
  `}>
    {children}
  </h2>
);

export const SlideSubtitle: FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`
    text-sm sm:text-base md:text-lg lg:text-xl
    text-white/60 mt-2 sm:mt-3 md:mt-4
    max-w-2xl mx-auto
    ${className}
  `}>
    {children}
  </p>
);

export const CardTitle: FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`
    text-base sm:text-lg md:text-xl
    font-bold text-white
    ${className}
  `}>
    {children}
  </h3>
);

export const CardText: FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`
    text-xs sm:text-sm
    text-white/60
    ${className}
  `}>
    {children}
  </p>
);

// ============================================================================
// CARDS - Compact for mobile
// ============================================================================

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'success' | 'danger';
}

export const Card: FC<CardProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantClass = {
    default: 'bg-white/5 border-white/10',
    highlight: 'bg-gradient-to-br from-pink-500/20 to-violet-500/20 border-pink-500/30',
    success: 'bg-emerald-500/10 border-emerald-500/30',
    danger: 'bg-red-500/10 border-red-500/30',
  }[variant];

  return (
    <div className={`
      rounded-xl sm:rounded-2xl
      border p-3 sm:p-4 md:p-5
      ${variantClass}
      ${className}
    `}>
      {children}
    </div>
  );
};

// ============================================================================
// METRICS - Large numbers
// ============================================================================

interface MetricProps {
  value: string;
  label: string;
  sublabel?: string;
  highlight?: boolean;
  className?: string;
}

export const Metric: FC<MetricProps> = ({ 
  value, 
  label, 
  sublabel,
  highlight = false,
  className = ''
}) => (
  <div className={`
    text-center p-2 sm:p-3 md:p-4
    ${highlight ? 'bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-xl' : ''}
    ${className}
  `}>
    <div className={`
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      font-bold mb-1
      ${highlight 
        ? 'text-pink-400' 
        : 'bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent'
      }
    `}>
      {value}
    </div>
    <div className="text-xs sm:text-sm text-white/60">{label}</div>
    {sublabel && (
      <div className="text-xs text-white/40 mt-0.5">{sublabel}</div>
    )}
  </div>
);

// ============================================================================
// BADGES
// ============================================================================

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'purple' | 'pink';
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantClass = {
    default: 'bg-white/10 text-white/70 border-white/20',
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    purple: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  }[variant];

  return (
    <span className={`
      inline-flex items-center
      px-2 py-0.5 sm:px-2.5 sm:py-1
      rounded-full border
      text-xs font-medium
      ${variantClass}
      ${className}
    `}>
      {children}
    </span>
  );
};

// ============================================================================
// ICONS
// ============================================================================

export const CheckIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const XIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-red-400 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const WarningIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-amber-400 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

// ============================================================================
// GRID LAYOUTS
// ============================================================================

interface GridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  gap?: 'sm' | 'md';
  className?: string;
}

export const Grid: FC<GridProps> = ({ 
  children, 
  cols = 3,
  gap = 'md',
  className = '' 
}) => {
  const colsClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  }[cols];

  const gapClass = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-3 sm:gap-4 md:gap-6',
  }[gap];

  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
};

// ============================================================================
// CALLOUT BOX
// ============================================================================

interface CalloutProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'highlight';
  className?: string;
}

export const Callout: FC<CalloutProps> = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const variantClass = {
    default: 'bg-white/5 border-white/10',
    success: 'bg-emerald-500/10 border-emerald-500/30',
    highlight: 'bg-gradient-to-r from-pink-500/10 to-violet-500/10 border-white/10',
  }[variant];

  return (
    <div className={`
      border rounded-lg sm:rounded-xl
      p-3 sm:p-4 md:p-6
      max-w-2xl mx-auto
      ${variantClass}
      ${className}
    `}>
      {children}
    </div>
  );
};

// ============================================================================
// TEAM MEMBER CARD
// ============================================================================

interface TeamMemberProps {
  name: string;
  role: string;
  description: ReactNode;
  highlight?: boolean;
  icon?: ReactNode;
  avatar?: string;
  badge?: ReactNode;
}

export const TeamMember: FC<TeamMemberProps> = ({
  name,
  role,
  description,
  highlight = false,
  icon,
  avatar,
  badge,
}) => (
  <Card variant={highlight ? 'highlight' : 'default'} className="text-left relative">
    {badge && (
      <div className="absolute -top-1 -right-1 sm:top-1 sm:right-1">
        {badge}
      </div>
    )}
    <div className="flex items-start gap-2 sm:gap-3">
      {avatar ? (
        <Image 
          src={avatar} 
          alt={name} 
          width={40} 
          height={40} 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-[center_25%] shrink-0"
        />
      ) : (
        <div className={`
          p-1.5 sm:p-2 rounded-lg shrink-0
          ${highlight ? 'bg-pink-500/20' : 'bg-white/10'}
        `}>
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="text-sm sm:text-base font-semibold text-white truncate">{name}</h3>
        <p className={`text-xs sm:text-sm ${highlight ? 'text-pink-300' : 'text-white/50'}`}>{role}</p>
        <div className="text-xs text-white/40 mt-1">{description}</div>
      </div>
    </div>
  </Card>
);

// ============================================================================
// CUSTOMER CARD
// ============================================================================

interface CustomerCardProps {
  name: string;
  metric: string;
  metricLabel: string;
  className?: string;
}

export const CustomerCard: FC<CustomerCardProps> = ({
  name,
  metric,
  metricLabel,
  className = '',
}) => (
  <Card className={`text-center ${className}`}>
    <div className="text-sm sm:text-base font-semibold text-white mb-1">{name}</div>
    <div className="text-xl sm:text-2xl font-bold text-pink-400">{metric}</div>
    <div className="text-xs text-white/50">{metricLabel}</div>
  </Card>
);

// ============================================================================
// ROADMAP ITEM
// ============================================================================

interface RoadmapItemProps {
  phase: string;
  title: string;
  status: string;
  items: string[];
  color: 'emerald' | 'cyan' | 'violet' | 'pink';
  icon: ReactNode;
}

export const RoadmapItem: FC<RoadmapItemProps> = ({
  phase,
  title,
  status,
  items,
  color,
  icon,
}) => {
  const colorClasses = {
    emerald: { border: 'border-emerald-500/30', icon: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-400' },
    cyan: { border: 'border-cyan-500/30', icon: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-400' },
    violet: { border: 'border-violet-500/30', icon: 'text-violet-400', badge: 'bg-violet-500/20 text-violet-400' },
    pink: { border: 'border-pink-500/30', icon: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-400' },
  }[color];

  return (
    <div className={`bg-white/5 border rounded-xl p-3 sm:p-4 text-left ${colorClasses.border}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span className={colorClasses.icon}>{icon}</span>
          <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${colorClasses.badge}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="text-xs text-white/50 mb-0.5">{phase}</div>
      <h3 className="text-sm sm:text-base font-bold text-white mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.slice(0, 2).map((item, i) => (
          <li key={i} className="text-xs text-white/60 flex items-start gap-1.5">
            <span className={`mt-0.5 ${colorClasses.icon}`}>•</span>
            <span className="line-clamp-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ============================================================================
// USE OF FUNDS ITEM
// ============================================================================

interface FundsItemProps {
  title: string;
  percentage: string;
  description: string;
  icon: ReactNode;
}

export const FundsItem: FC<FundsItemProps> = ({
  title,
  percentage,
  description,
  icon,
}) => (
  <Card className="text-left">
    <div className="flex items-center justify-between mb-2">
      <span className="text-white/60">{icon}</span>
      <span className="text-lg sm:text-xl font-bold text-pink-400">{percentage}</span>
    </div>
    <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{title}</h3>
    <p className="text-xs text-white/50 line-clamp-2">{description}</p>
  </Card>
);

// ============================================================================
// COMPARISON TABLE
// ============================================================================

interface ComparisonRowProps {
  feature: string;
  planton: ReactNode;
  competitor1: ReactNode;
  competitor2: ReactNode;
}

export const ComparisonRow: FC<ComparisonRowProps> = ({
  feature,
  planton,
  competitor1,
  competitor2,
}) => (
  <div className="grid grid-cols-4 gap-2 py-2 border-b border-white/10 text-xs sm:text-sm">
    <div className="text-white/70 text-left">{feature}</div>
    <div className="text-center font-medium text-white">{planton}</div>
    <div className="text-center text-white/60">{competitor1}</div>
    <div className="text-center text-white/60">{competitor2}</div>
  </div>
);

