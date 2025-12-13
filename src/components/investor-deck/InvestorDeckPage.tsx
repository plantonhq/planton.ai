'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  DeckScreen,
  investorDeckFlow,
  getScreenIndex,
  getTotalScreens,
  getNextScreen,
  getPreviousScreen,
} from './flows';

// Act 1: Opening
import WelcomeScreen from './opening/WelcomeScreen';
import FounderStory from './opening/FounderStory';
import PostmanParallel from './opening/PostmanParallel';
import VisionStatement from './opening/VisionStatement';

// Act 2: Problem
import DevOpsChaos from './problem/DevOpsChaos';
import PainPoints from './problem/PainPoints';
import MarketSize from './problem/MarketSize';
import WhyNow from './problem/WhyNow';

// Act 3: Solution
import ProductOverview from './solution/ProductOverview';
import InfraHubExplainer from './solution/InfraHubExplainer';
import ProjectPlantonFoundation from './solution/ProjectPlantonFoundation';
import DemoVideo from './solution/DemoVideo';
import CustomerStories from './solution/CustomerStories';

// Act 4: Traction
import RevenueMetrics from './traction/RevenueMetrics';
import ProductProgress from './traction/ProductProgress';
import OpenSourceGrowth from './traction/OpenSourceGrowth';
import DesignPartners from './traction/DesignPartners';

// Act 5: Vision
import CursorForDevOps from './vision/CursorForDevOps';
import AgentFleetExplainer from './vision/AgentFleetExplainer';
import CloudProviderStrategy from './vision/CloudProviderStrategy';
import TwoYearRoadmap from './vision/TwoYearRoadmap';
import PostmanComparison from './vision/PostmanComparison';

// Act 6: Team
import FounderBackground from './team/FounderBackground';
import CofounderIntro from './team/CofounderIntro';
import TeamShowcase from './team/TeamShowcase';
import CommitmentProof from './team/CommitmentProof';

// Act 7: Market
import TAMCalculation from './market/TAMCalculation';
import GTMStrategy from './market/GTMStrategy';
import CustomerSegments from './market/CustomerSegments';
import CompetitivePosition from './market/CompetitivePosition';

// Act 8: Ask
import FundingOverview from './ask/FundingOverview';
import UseOfFunds from './ask/UseOfFunds';
import Milestones from './ask/Milestones';
import CallToAction from './ask/CallToAction';

export default function InvestorDeckPage() {
  const [currentScreen, setCurrentScreen] = useState<DeckScreen>('welcome');

  // Navigation handlers
  const goToNext = useCallback(() => {
    const next = getNextScreen(currentScreen);
    if (next) {
      setCurrentScreen(next);
    }
  }, [currentScreen]);

  const goToPrevious = useCallback(() => {
    const previous = getPreviousScreen(currentScreen);
    if (previous) {
      setCurrentScreen(previous);
    }
  }, [currentScreen]);

  const goToHome = useCallback(() => {
    setCurrentScreen('welcome');
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        goToHome();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, goToHome]);

  // Calculate progress
  const currentIndex = getScreenIndex(currentScreen);
  const totalScreens = getTotalScreens();
  const progress = ((currentIndex + 1) / totalScreens) * 100;

  // Render current screen
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      // Act 1
      case 'welcome':
        return <WelcomeScreen />;
      case 'founder-story':
        return <FounderStory />;
      case 'postman-parallel':
        return <PostmanParallel />;
      case 'vision-statement':
        return <VisionStatement />;
      
      // Act 2
      case 'devops-chaos':
        return <DevOpsChaos />;
      case 'pain-points':
        return <PainPoints />;
      case 'market-size':
        return <MarketSize />;
      case 'why-now':
        return <WhyNow />;
      
      // Act 3
      case 'product-overview':
        return <ProductOverview />;
      case 'infrahub-explainer':
        return <InfraHubExplainer />;
      case 'project-planton-foundation':
        return <ProjectPlantonFoundation />;
      case 'demo-video':
        return <DemoVideo />;
      case 'customer-stories':
        return <CustomerStories />;
      
      // Act 4
      case 'revenue-metrics':
        return <RevenueMetrics />;
      case 'product-progress':
        return <ProductProgress />;
      case 'opensource-growth':
        return <OpenSourceGrowth />;
      case 'design-partners':
        return <DesignPartners />;
      
      // Act 5
      case 'cursor-for-devops':
        return <CursorForDevOps />;
      case 'agent-fleet-explainer':
        return <AgentFleetExplainer />;
      case 'cloud-provider-strategy':
        return <CloudProviderStrategy />;
      case 'two-year-roadmap':
        return <TwoYearRoadmap />;
      case 'postman-comparison':
        return <PostmanComparison />;
      
      // Act 6
      case 'founder-background':
        return <FounderBackground />;
      case 'cofounder-intro':
        return <CofounderIntro />;
      case 'team-showcase':
        return <TeamShowcase />;
      case 'commitment-proof':
        return <CommitmentProof />;
      
      // Act 7
      case 'tam-calculation':
        return <TAMCalculation />;
      case 'gtm-strategy':
        return <GTMStrategy />;
      case 'customer-segments':
        return <CustomerSegments />;
      case 'competitive-position':
        return <CompetitivePosition />;
      
      // Act 8
      case 'funding-overview':
        return <FundingOverview />;
      case 'use-of-funds':
        return <UseOfFunds />;
      case 'milestones':
        return <Milestones />;
      case 'call-to-action':
        return <CallToAction />;
      
      default:
        return <WelcomeScreen />;
    }
  };

  const hasNext = getNextScreen(currentScreen) !== null;
  const hasPrevious = getPreviousScreen(currentScreen) !== null;

  return (
    <div className="investor-deck-container">
      {/* Progress Bar */}
      <div className="investor-progress-bar">
        <div
          className="investor-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Home Button */}
      {currentScreen !== 'welcome' && (
        <button onClick={goToHome} className="home-button">
          <Home className="w-4 h-4 inline mr-2" />
          Home
        </button>
      )}

      {/* Screen Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="h-screen w-full"
        >
          {renderCurrentScreen()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <button
          onClick={goToPrevious}
          disabled={!hasPrevious}
          className="nav-button"
        >
          <ChevronLeft className="w-5 h-5 inline mr-1" />
          Previous
        </button>

        <div className="text-white text-sm px-4">
          {currentIndex + 1} / {totalScreens}
        </div>

        <button
          onClick={goToNext}
          disabled={!hasNext}
          className="nav-button"
        >
          Next
          <ChevronRight className="w-5 h-5 inline ml-1" />
        </button>
      </div>
    </div>
  );
}
