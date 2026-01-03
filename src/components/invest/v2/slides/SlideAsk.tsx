'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Target, Users, Bot, Rocket, HelpCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide, SlideTitle, SlideSubtitle, FundsItem, Grid, Callout } from '../shared';

const useOfFunds = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Engineering',
    percentage: '60%',
    description: 'Hire 2-3 Engineers',
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: 'AI R&D',
    percentage: '25%',
    description: 'Agent Fleet MVP',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: 'GTM',
    percentage: '15%',
    description: 'Developer Advocacy',
  },
];

const milestones = [
  '50 Enterprise Clients',
  '$100K MRR',
  'Ready for Series A',
  'Planton DevOps AI Agents Used by Customers in Production',
];

// SAFE Explainer Modal Component
function SafeExplainerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Handle Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-5 w-full max-w-3xl max-h-[85vh] overflow-y-auto relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <h4 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center pr-6 sm:pr-8">
                SAFE = Simple Agreement for Future Equity
              </h4>
              
              {/* Two-column benefits - side by side even on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-2 sm:p-3">
                  <h5 className="text-emerald-400 font-semibold text-[10px] sm:text-sm mb-1 sm:mb-1.5">For Planton</h5>
                  <ul className="space-y-0.5 sm:space-y-1.5 text-[10px] sm:text-xs text-white/70">
                    <li className="flex items-start gap-1">
                      <span className="text-emerald-400 shrink-0">✓</span>
                      <span>$500K to accelerate</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-emerald-400 shrink-0">✓</span>
                      <span>No valuation delays</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-emerald-400 shrink-0">✓</span>
                      <span>Focus on building</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-2 sm:p-3">
                  <h5 className="text-violet-400 font-semibold text-[10px] sm:text-sm mb-1 sm:mb-1.5">For Investor</h5>
                  <ul className="space-y-0.5 sm:space-y-1.5 text-[10px] sm:text-xs text-white/70">
                    <li className="flex items-start gap-1">
                      <span className="text-violet-400 shrink-0">✓</span>
                      <span>Early discount</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-violet-400 shrink-0">✓</span>
                      <span>Equity at Series A</span>
                    </li>
                    <li className="flex items-start gap-1">
                      <span className="text-violet-400 shrink-0">✓</span>
                      <span>$7M cap protection</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conversion example - horizontal flow on mobile too */}
              <div className="bg-white/5 rounded-lg p-2 sm:p-3">
                <h5 className="text-white font-semibold text-[10px] sm:text-sm mb-1.5 sm:mb-2 text-center">How Your $500K Converts</h5>
                <div className="flex items-center justify-center gap-1 sm:gap-2.5 text-[10px] sm:text-xs">
                  <div className="text-center p-1.5 sm:p-2.5 bg-white/5 rounded-md flex-1 sm:flex-none sm:w-auto">
                    <div className="text-white/50 text-[8px] sm:text-xs">Invest</div>
                    <div className="text-sm sm:text-xl font-bold text-white">$500K</div>
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 shrink-0" />
                  <div className="text-center p-1.5 sm:p-2.5 bg-white/5 rounded-md flex-1 sm:flex-none sm:w-auto">
                    <div className="text-white/50 text-[8px] sm:text-xs">@$20M</div>
                    <div className="text-sm sm:text-xl font-bold text-pink-400">~7%</div>
                  </div>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white/30 shrink-0" />
                  <div className="text-center p-1.5 sm:p-2.5 bg-white/5 rounded-md flex-1 sm:flex-none sm:w-auto">
                    <div className="text-white/50 text-[8px] sm:text-xs">@$100M</div>
                    <div className="text-sm sm:text-xl font-bold text-emerald-400">14x</div>
                  </div>
                </div>
                <p className="text-[8px] sm:text-xs text-white/40 text-center mt-1.5 sm:mt-2">$7M Cap • Terms Negotiable</p>
              </div>

              {/* $1000 Investment Example - Desktop only */}
              <div className="hidden sm:block mt-3">
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-3.5">
                  <h5 className="text-amber-400 font-semibold text-sm mb-2.5 text-center">
                    What Could $1,000 Become?
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Scenario 1: Exit at Cap */}
                    <div className="bg-white/5 rounded-lg p-3 text-center">
                      <div className="text-white/50 text-xs mb-1">Exit at $7M (Cap)</div>
                      <div className="text-2xl font-bold text-white">$1,000</div>
                      <div className="text-xs text-white/40">1x (break even)</div>
                    </div>
                    {/* Scenario 2: Exit at 4x Cap */}
                    <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-lg p-3 text-center border border-emerald-500/20">
                      <div className="text-white/50 text-xs mb-1">Exit at $28M (4x Cap)</div>
                      <div className="text-2xl font-bold text-emerald-400">$4,000</div>
                      <div className="text-xs text-emerald-400/70">4x (+$3K profit)</div>
                    </div>
                  </div>
                  {/* Cap Protection Explanation */}
                  <div className="mt-3 bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-white/50 text-center mb-2">
                      <span className="text-amber-400 font-medium">How the $7M cap protects you</span> — Imagine 1M shares, Series A at $20M:
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="text-center p-2 bg-white/5 rounded-lg">
                        <div className="text-white/40">Without cap</div>
                        <div className="text-xl font-bold text-white/80 my-0.5">50 shares</div>
                        <div className="text-[10px] text-white/40">$20/share</div>
                      </div>
                      <div className="text-center p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="text-white/40">With $7M cap</div>
                        <div className="text-xl font-bold text-emerald-400 my-0.5">143 shares</div>
                        <div className="text-[10px] text-emerald-400/60">$7/share</div>
                      </div>
                    </div>
                    <p className="text-[10px] text-white/40 text-center mt-2">
                      Cap = <span className="text-emerald-400 font-medium">~3x more shares</span> for the same $1,000
                    </p>
                  </div>
                  {/* Market context reference */}
                  <p className="text-[10px] text-white/30 text-center mt-3 italic">
                    DevTools companies typically raise Series A at $15-25M valuations. Our $7M cap gives you seed-stage pricing.
                  </p>
                </div>
              </div>

              {/* Escape hint - desktop only */}
              <p className="hidden sm:block text-xs text-white/30 text-center mt-3">
                Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/50 text-[10px]">Esc</kbd> to close
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function SlideAsk() {
  const [showSafeExplainer, setShowSafeExplainer] = useState(false);

  return (
    <Slide variant="gradient">
      <SlideTitle>The Ask</SlideTitle>
      <SlideSubtitle className="mb-2 sm:mb-4 text-xs sm:text-sm">
        Seed Round to Reach Next Milestones
      </SlideSubtitle>

      {/* The Number - more compact on mobile */}
      <div className="bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-6 max-w-[200px] sm:max-w-xs mx-auto mb-1 sm:mb-3">
        <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-0.5 sm:mb-1">
          $500K
        </div>
        <div className="text-xs sm:text-sm text-white/60">SAFE Note</div>
        <div className="text-[10px] sm:text-xs text-white/40 mt-0.5 sm:mt-1">~18 months runway</div>
      </div>

      {/* SAFE Explainer Toggle */}
      <button
        onClick={() => setShowSafeExplainer(true)}
        className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-white/50 hover:text-white/80 transition-colors mb-2 sm:mb-4"
      >
        <HelpCircle className="w-3 h-3" />
        How does a SAFE work?
      </button>

      {/* SAFE Explainer Modal */}
      <SafeExplainerModal 
        isOpen={showSafeExplainer} 
        onClose={() => setShowSafeExplainer(false)} 
      />

      {/* Use of Funds - horizontal on mobile */}
      <Grid cols={3} gap="sm" className="mb-2 sm:mb-4">
        {useOfFunds.map((item) => (
          <FundsItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            percentage={item.percentage}
            description={item.description}
          />
        ))}
      </Grid>

      {/* 18-Month Milestones - 2x2 grid on mobile */}
      <Callout className="max-w-xl p-2 sm:p-4">
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-1 sm:mb-2">
          <Target className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
          <h3 className="text-[10px] sm:text-sm font-semibold text-white">18-Month Milestones</h3>
        </div>
        <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-0.5 sm:gap-y-1.5 text-left">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-white/60">
              <span className="text-emerald-400 shrink-0 mt-0.5">→</span>
              <span className="leading-tight">{milestone}</span>
            </div>
          ))}
        </div>
      </Callout>
    </Slide>
  );
}

