'use client';

import React, { useState } from 'react';
import { Target, Users, Bot, Rocket, HelpCircle, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slide, SlideTitle, SlideSubtitle, FundsItem, Grid, Callout } from '../shared';

const useOfFunds = [
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Engineering',
    percentage: '60%',
    description: 'Hire 2-3 engineers',
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
    description: 'Developer advocacy',
  },
];

const milestones = [
  '5-10 enterprise pilots',
  'Agent Fleet MVP launched',
  '$50K+ MRR target',
  'Ready for Series A',
];

export default function SlideAsk() {
  const [showSafeExplainer, setShowSafeExplainer] = useState(false);

  return (
    <Slide variant="gradient">
      <SlideTitle>The Ask</SlideTitle>
      <SlideSubtitle className="mb-3 sm:mb-4">
        Seed round to reach next milestones
      </SlideSubtitle>

      {/* The Number */}
      <div className="bg-gradient-to-br from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-2xl p-4 sm:p-6 max-w-xs mx-auto mb-2 sm:mb-3">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-1">
          $500K
        </div>
        <div className="text-sm text-white/60">SAFE Note</div>
        <div className="text-xs text-white/40 mt-1">~18 months runway</div>
      </div>

      {/* SAFE Explainer Toggle */}
      <button
        onClick={() => setShowSafeExplainer(!showSafeExplainer)}
        className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white/80 transition-colors mb-3 sm:mb-4"
      >
        {showSafeExplainer ? (
          <>
            <X className="w-3 h-3" />
            Hide SAFE info
          </>
        ) : (
          <>
            <HelpCircle className="w-3 h-3" />
            How does a SAFE work?
          </>
        )}
      </button>

      {/* SAFE Explainer Panel - Compact */}
      <AnimatePresence>
        {showSafeExplainer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-3 sm:mb-4"
          >
            <div className="bg-white/5 border border-white/20 rounded-xl p-3 sm:p-4 max-w-lg mx-auto text-left">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-white/50 text-xs mb-0.5">You invest</div>
                  <div className="text-base sm:text-lg font-bold text-white">$500K</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 rotate-90 sm:rotate-0" />
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-white/50 text-xs mb-0.5">At Series A ($20M)</div>
                  <div className="text-base sm:text-lg font-bold text-pink-400">~7% equity</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 rotate-90 sm:rotate-0" />
                <div className="text-center p-2 bg-white/5 rounded-lg">
                  <div className="text-white/50 text-xs mb-0.5">At $100M valuation</div>
                  <div className="text-base sm:text-lg font-bold text-emerald-400">$7M value</div>
                </div>
              </div>
              <p className="text-xs text-white/40 text-center mt-2">$7M cap • 14x potential return</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Use of Funds */}
      <Grid cols={3} gap="sm" className="mb-3 sm:mb-4">
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

      {/* 18-Month Milestones */}
      <Callout className="max-w-md">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Target className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs sm:text-sm font-semibold text-white">18-Month Milestones</h3>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-left">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-1.5 text-xs text-white/60">
              <span className="text-emerald-400">→</span>
              {milestone}
            </div>
          ))}
        </div>
      </Callout>
    </Slide>
  );
}

