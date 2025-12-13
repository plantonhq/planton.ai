'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Home, Play, Pause } from 'lucide-react';
import { Button } from '@/components/tour/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Import slide components
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import HowItWorksSlide from './slides/HowItWorksSlide';
import MarketSlide from './slides/MarketSlide';
import TractionSlide from './slides/TractionSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import TeamSlide from './slides/TeamSlide';
import TheAskSlide from './slides/TheAskSlide';
import ClosingSlide from './slides/ClosingSlide';

type Slide = 
  | 'title'
  | 'problem'
  | 'solution'
  | 'how-it-works'
  | 'market'
  | 'traction'
  | 'roadmap'
  | 'team'
  | 'the-ask'
  | 'closing';

const slides: Slide[] = [
  'title',
  'problem',
  'solution',
  'how-it-works',
  'market',
  'traction',
  'roadmap',
  'team',
  'the-ask',
  'closing',
];

export default function InvestorDeck() {
  const [currentSlide, setCurrentSlide] = useState<Slide>('title');
  const [autoPlay, setAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0);

  const slideIndex = slides.indexOf(currentSlide);
  const isFirst = slideIndex === 0;
  const isLast = slideIndex === slides.length - 1;

  const handleNext = useCallback(() => {
    if (!isLast) {
      setDirection(1);
      setCurrentSlide(slides[slideIndex + 1]);
    }
  }, [isLast, slideIndex]);

  const handlePrevious = useCallback(() => {
    if (!isFirst) {
      setDirection(-1);
      setCurrentSlide(slides[slideIndex - 1]);
    }
  }, [isFirst, slideIndex]);

  const handleReset = useCallback(() => {
    setDirection(-1);
    setCurrentSlide('title');
    setAutoPlay(false);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isLast) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 8000); // 8 seconds per slide

    return () => clearTimeout(timer);
  }, [autoPlay, currentSlide, isLast, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNext, handlePrevious, handleReset]);

  const renderSlide = () => {
    switch (currentSlide) {
      case 'title':
        return <TitleSlide />;
      case 'problem':
        return <ProblemSlide />;
      case 'solution':
        return <SolutionSlide />;
      case 'how-it-works':
        return <HowItWorksSlide />;
      case 'market':
        return <MarketSlide />;
      case 'traction':
        return <TractionSlide />;
      case 'roadmap':
        return <RoadmapSlide />;
      case 'team':
        return <TeamSlide />;
      case 'the-ask':
        return <TheAskSlide />;
      case 'closing':
        return <ClosingSlide />;
      default:
        return <TitleSlide />;
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
            }}
            className="absolute inset-0"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Progress */}
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-600">
              {slideIndex + 1} / {slides.length}
            </div>
            <div className="flex gap-1">
              {slides.map((slide, index) => (
                <button
                  key={slide}
                  onClick={() => {
                    setDirection(index > slideIndex ? 1 : -1);
                    setCurrentSlide(slide);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === slideIndex
                      ? 'w-8 bg-blue-600'
                      : index < slideIndex
                      ? 'w-2 bg-gray-400'
                      : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Center: Navigation Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleReset}
              variant="outline"
              size="sm"
              className="gap-2 text-gray-700"
            >
              <Home className="w-4 h-4" />
              <span>Reset</span>
            </Button>

            <Button
              onClick={() => setAutoPlay(!autoPlay)}
              variant="outline"
              size="sm"
              className="gap-2 text-gray-700"
            >
              {autoPlay ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Auto</span>
                </>
              )}
            </Button>

            <div className="flex gap-2">
              <Button
                onClick={handlePrevious}
                disabled={isFirst}
                variant="outline"
                size="sm"
                className="text-gray-700"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>

              <Button 
                onClick={handleNext} 
                disabled={isLast} 
                size="sm"
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Keyboard Hints */}
          <div className="text-xs text-gray-400 hidden md:block">
            <kbd className="px-2 py-1 bg-gray-100 rounded">←</kbd>{' '}
            <kbd className="px-2 py-1 bg-gray-100 rounded">→</kbd> to navigate
          </div>
        </div>
      </div>
    </div>
  );
}
