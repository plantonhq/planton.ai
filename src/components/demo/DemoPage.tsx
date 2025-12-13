'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Play,
} from 'lucide-react';
import { Button } from '@/components/tour/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

// Import intro components
import CompanyTypeSelection, { type CompanyType } from './intro/CompanyTypeSelection';
import IntroProblem from './intro/IntroProblem';
import IntroProblemITConsulting from './intro/IntroProblemITConsulting';
import IntroProblemSmallProduct from './intro/IntroProblemSmallProduct';
import IntroProblemEstablished from './intro/IntroProblemEstablished';
import IntroStakes from './intro/IntroStakes';
import IntroPromise from './intro/IntroPromise';

// Import platform components
import CloudConnections from './platform/CloudConnections';
import LegoCatalog from './platform/LegoCatalog';
import ComponentConfiguration from './platform/ComponentConfiguration';

// Deployment Component Store Journey
import DeploymentStoreProviders from './platform/DeploymentStoreProviders';
import DeploymentStoreAWS from './platform/DeploymentStoreAWS';
import DeploymentStoreMultiCloud from './platform/DeploymentStoreMultiCloud';
import DeploymentStoreForm from './platform/DeploymentStoreForm';

// Project Planton Journey
import ProjectPlantonIntro from './platform/ProjectPlantonIntro';
import ProjectPlantonComponents from './platform/ProjectPlantonComponents';
import ProjectPlantonTerraform from './platform/ProjectPlantonTerraform';
import ProjectPlantonCLI from './platform/ProjectPlantonCLI';

// Infra Charts Journey
import InfraChartsIntro from './platform/InfraChartsIntro';
import InfraChartsChallenge from './platform/InfraChartsChallenge';
import InfraChartsDAG from './platform/InfraChartsDAG';
import InfraChartsConcept from './platform/InfraChartsConcept';
import InfraChartsImpact from './platform/InfraChartsImpact';
import InfraChartDeployment from './platform/InfraChartDeployment';
import InfrastructureReady from './platform/InfrastructureReady';
import DeploySummary from './platform/DeploySummary';
import DeployLogs from './platform/DeployLogs';
import InfraVersionHistory from './platform/InfraVersionHistory';
import InfraVisualization from './platform/InfraVisualization';
import InfraEditFlow from './platform/InfraEditFlow';

// Import service components
import ServiceHubIntro from './service/ServiceHubIntro';
import GitHubConnection from './service/GitHubConnection';
import NoDockerfileRequired from './service/NoDockerfileRequired';
import ServiceConfiguration from './service/ServiceConfiguration';
import ServiceDeployment from './service/ServiceDeployment';
import ServiceLiveExample from './service/ServiceLiveExample';
import ServiceSuccessStory from './service/ServiceSuccessStory';
import './demo.css';

type DemoScreen = 'welcome' | 'company-selection' | 'intro-problem' | 'intro-stakes' | 'intro-promise' | 
  'cloud-connections' | 'lego-catalog' | 'component-config' | 
  // Deployment Store Journey
  'deployment-store-providers' | 'deployment-store-aws' | 'deployment-store-multi-cloud' | 'deployment-store-form' |
  // Project Planton Journey
  'project-planton-intro' | 'project-planton-components' | 'project-planton-terraform' | 'project-planton-cli' |
  // Infra Charts Journey
  'infra-charts-intro' | 'infra-charts-challenge' | 'infra-charts-dag' | 'infra-charts-concept' | 'infra-charts-impact' |
  'infra-chart-deploy' | 'infrastructure-ready' | 
  'deploy-summary' | 'deploy-logs' | 'infra-version-history' | 'infra-visualization' | 'infra-edit-flow' |
  'service-hub-intro' | 'github-connection' | 'no-dockerfile-required' | 
  'service-configuration' | 'service-deployment' | 'service-live-example' | 'service-success-story';

// Define demo flows for each company type
const itConsultingFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  'intro-stakes',
  'intro-promise',
  'cloud-connections',
  // Deployment Component Store Journey (4 screens)
  'deployment-store-providers',  // Multi-cloud/provider breadth
  'deployment-store-aws',        // AWS components deep dive
  'deployment-store-multi-cloud', // Unified API across clouds
  'deployment-store-form',        // Form-based deployment + YAML
  'component-config',             // User configures selected component
  'deploy-logs',                  // Watch deployment
  // Project Planton Journey (4 screens)
  'project-planton-intro',        // Open-source framework intro
  'project-planton-components',   // 500+ components catalog
  'project-planton-terraform',    // Terraform modules
  'project-planton-cli',          // CLI + YAML deployment
  // Infra Charts Journey (4 focused screens)
  'infra-charts-challenge',       // The problem: production needs many resources
  'infra-charts-dag',             // Visual: ECS DAG with 9 resources
  'infra-charts-concept',         // Explain: What Infra Charts are (Helm inspiration)
  'infra-charts-impact',          // Proof: Real customer success story
  'infra-chart-deploy',           // Deploy complete chart with DAG
  'infrastructure-ready',         // Infrastructure complete, segue to services
  'service-hub-intro',
  'github-connection',
  'no-dockerfile-required',       // BuildPacks - automatic containerization
  'service-deployment',
  'service-success-story'
];

const smallProductFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  'intro-stakes',
  'intro-promise',
  // Deployment Component Store Journey (4 screens)
  'deployment-store-providers',
  'deployment-store-aws',
  'deployment-store-multi-cloud',
  'deployment-store-form',
  'component-config',
  'deploy-logs',
  // Project Planton Journey (4 screens)
  'project-planton-intro',
  'project-planton-components',
  'project-planton-terraform',
  'project-planton-cli',
  // Infra Charts Journey (4 focused screens)
  'infra-charts-challenge',
  'infra-charts-dag',
  'infra-charts-concept',
  'infra-charts-impact',
  'infra-chart-deploy',
  'infrastructure-ready',
  'deploy-summary',
  'service-hub-intro',
  'service-configuration',
  'service-deployment',
  'service-live-example',
  'service-success-story'
];

const establishedProductFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  'intro-stakes',
  'intro-promise',
  'cloud-connections',
  // Deployment Component Store Journey (4 screens)
  'deployment-store-providers',
  'deployment-store-aws',
  'deployment-store-multi-cloud',
  'deployment-store-form',
  'component-config',
  'deploy-logs',
  // Project Planton Journey (4 screens)
  'project-planton-intro',
  'project-planton-components',
  'project-planton-terraform',
  'project-planton-cli',
  // Infra Charts Journey (4 focused screens)
  'infra-charts-challenge',
  'infra-charts-dag',
  'infra-charts-concept',
  'infra-charts-impact',
  'infra-chart-deploy',
  'infrastructure-ready',
  'infra-visualization',
  'infra-version-history',
  'infra-edit-flow',
  'deploy-summary',
  'service-hub-intro',
  'service-live-example',
  'service-success-story'
];

// Default flow if no company type selected
const defaultDemoScreens: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  'intro-stakes',
  'intro-promise',
  'cloud-connections',
  // Deployment Component Store Journey (4 screens)
  'deployment-store-providers',
  'deployment-store-aws',
  'deployment-store-multi-cloud',
  'deployment-store-form',
  'component-config',
  'deploy-logs',
  // Project Planton Journey (4 screens)
  'project-planton-intro',
  'project-planton-components',
  'project-planton-terraform',
  'project-planton-cli',
  // Infra Charts Journey (4 focused screens)
  'infra-charts-challenge',
  'infra-charts-dag',
  'infra-charts-concept',
  'infra-charts-impact',
  'infra-chart-deploy',
  'infrastructure-ready',
  'deploy-summary',
  'infra-version-history',
  'infra-visualization',
  'infra-edit-flow',
  'service-hub-intro',
  'github-connection',
  'no-dockerfile-required',
  'service-configuration',
  'service-deployment',
  'service-live-example',
  'service-success-story'
];

export default function DemoPage() {
  const [currentScreen, setCurrentScreen] = useState<DemoScreen>('welcome');
  const [companyType, setCompanyType] = useState<CompanyType | null>(null);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  // Get the appropriate demo flow based on company type
  const getDemoScreens = useCallback((): DemoScreen[] => {
    if (!companyType) return defaultDemoScreens;
    
    switch (companyType) {
      case 'it-consulting':
        return itConsultingFlow;
      case 'small-product':
        return smallProductFlow;
      case 'established-product':
        return establishedProductFlow;
      default:
        return defaultDemoScreens;
    }
  }, [companyType]);

  const demoScreens = getDemoScreens();
  const currentScreenIndex = demoScreens.indexOf(currentScreen);
  const isFirstScreen = currentScreenIndex === 0;
  const isLastScreen = currentScreenIndex === demoScreens.length - 1;

  const goToHome = useCallback(() => {
    setCurrentScreen('welcome');
    setCompanyType(null); // Reset company type when going home
    setSelectedComponent(null); // Reset selected component
  }, []);

  const navigateNext = useCallback(() => {
    if (!isLastScreen) {
      setCurrentScreen(demoScreens[currentScreenIndex + 1]);
    }
  }, [currentScreenIndex, isLastScreen, demoScreens]);

  const navigatePrev = useCallback(() => {
    if (!isFirstScreen) {
      setCurrentScreen(demoScreens[currentScreenIndex - 1]);
    }
  }, [currentScreenIndex, isFirstScreen, demoScreens]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          navigateNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigatePrev();
          break;
        case 'Escape':
          e.preventDefault();
          goToHome();
          break;
      }
    },
    [navigateNext, navigatePrev, goToHome]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleCompanyTypeSelect = useCallback((type: CompanyType) => {
    setCompanyType(type);
    navigateNext();
  }, [navigateNext]);

  const handleComponentSelect = useCallback((componentId: string) => {
    setSelectedComponent(componentId);
    navigateNext();
  }, [navigateNext]);

  const handleDeploy = useCallback(() => {
    navigateNext();
  }, [navigateNext]);

  // Render current screen component
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <div className="min-h-screen bg-[#110D1F] flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-lg mx-auto text-center"
            >
              <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card">
                <CardContent className="p-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 btn-gradient">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
                    Welcome to Planton Cloud Demo
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Experience DevOps-in-a-Box: Deploy infrastructure and services across any cloud with zero DevOps expertise needed.
                  </p>
                  <Button
                    size="lg"
                    className="w-full btn-gradient text-white font-bold"
                    onClick={navigateNext}
                  >
                    Start Personalized Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        );

      case 'company-selection':
        return <CompanyTypeSelection onCompanyTypeSelect={handleCompanyTypeSelect} />;

      case 'intro-problem':
        // Render different problem screens based on company type
        if (companyType === 'it-consulting') {
          return <IntroProblemITConsulting />;
        } else if (companyType === 'small-product') {
          return <IntroProblemSmallProduct />;
        } else if (companyType === 'established-product') {
          return <IntroProblemEstablished />;
        }
        return <IntroProblem />;
      
      case 'intro-stakes':
        return <IntroStakes />;
      
      case 'intro-promise':
        return <IntroPromise />;
      
      case 'cloud-connections':
        return <CloudConnections />;
      
      case 'lego-catalog':
        return <LegoCatalog onComponentSelect={handleComponentSelect} />;
      
      case 'component-config':
        return <ComponentConfiguration selectedComponent={selectedComponent} onDeploy={handleDeploy} />;
      
      // Deployment Component Store Journey
      case 'deployment-store-providers':
        return <DeploymentStoreProviders />;
      
      case 'deployment-store-aws':
        return <DeploymentStoreAWS />;
      
      case 'deployment-store-multi-cloud':
        return <DeploymentStoreMultiCloud />;
      
      case 'deployment-store-form':
        return <DeploymentStoreForm />;
      
      // Project Planton Journey
      case 'project-planton-intro':
        return <ProjectPlantonIntro />;
      
      case 'project-planton-components':
        return <ProjectPlantonComponents />;
      
      case 'project-planton-terraform':
        return <ProjectPlantonTerraform />;
      
      case 'project-planton-cli':
        return <ProjectPlantonCLI />;
      
      // Infra Charts Journey
      case 'infra-charts-intro':
        // Legacy screen - kept for backward compatibility
        return <InfraChartsIntro />;
      
      case 'infra-charts-challenge':
        return <InfraChartsChallenge />;
      
      case 'infra-charts-dag':
        return <InfraChartsDAG />;
      
      case 'infra-charts-concept':
        return <InfraChartsConcept />;
      
      case 'infra-charts-impact':
        return <InfraChartsImpact />;
      
      case 'infra-chart-deploy':
        return <InfraChartDeployment />;
      
      case 'infrastructure-ready':
        return <InfrastructureReady />;
      
      case 'deploy-summary':
        return <DeploySummary onDeploy={handleDeploy} />;
      
      case 'deploy-logs':
        return <DeployLogs />;
      
      case 'infra-version-history':
        return <InfraVersionHistory />;
      
      case 'infra-visualization':
        return <InfraVisualization />;
      
      case 'infra-edit-flow':
        return <InfraEditFlow />;
      
      case 'service-hub-intro':
        return <ServiceHubIntro />;
      
      case 'github-connection':
        return <GitHubConnection />;
      
      case 'no-dockerfile-required':
        return <NoDockerfileRequired />;
      
      case 'service-configuration':
        return <ServiceConfiguration />;
      
      case 'service-deployment':
        return <ServiceDeployment />;
      
      case 'service-live-example':
        return <ServiceLiveExample />;
      
      case 'service-success-story':
        return <ServiceSuccessStory />;
      
      default:
        return null;
    }
  };

  // For screens that need a different layout (like welcome and company-selection), render them directly
  if (currentScreen === 'welcome' || currentScreen === 'company-selection') {
    return renderCurrentScreen();
  }

  // Main layout for demo screens
  return (
    <div className="min-h-screen bg-[#110D1F] flex flex-col">
      {/* Header with Home button */}
      <div className="absolute top-4 right-4 z-10">
      <Button
        variant="ghost"
        size="sm"
        onClick={goToHome}
          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm"
      >
        <Home className="w-4 h-4" />
      </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
            key={currentScreen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            {/* For platform screens, wrap in a card */}
            {currentScreen.startsWith('intro-') ? (
              <div className="h-full flex items-center justify-center p-8">
                <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card w-full max-w-7xl">
                  <div className="h-[80vh] overflow-hidden">
                    {renderCurrentScreen()}
                  </div>
                </Card>
                      </div>
            ) : (
              <div className="h-screen flex flex-col">
                <Card className="bg-white flex-1 m-8 rounded-[var(--radius-2xl)] shadow-card overflow-hidden">
                  {renderCurrentScreen()}
                </Card>
                    </div>
                  )}
          </motion.div>
        </AnimatePresence>
            </div>

      {/* Navigation footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#110D1F] to-transparent pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-white/60">
                Step {currentScreenIndex} of {demoScreens.length - 1}
                </span>
              <div className="w-48 bg-white/20 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-violet-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${(currentScreenIndex / (demoScreens.length - 1)) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={navigatePrev}
                disabled={isFirstScreen}
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 hover:border-white/40 disabled:opacity-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={navigateNext}
                disabled={isLastScreen}
                  className="btn-gradient text-white font-bold disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="text-center mt-4">
            <p className="text-xs text-white/40">
              Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">←</kbd> / <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">→</kbd> to navigate, <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">ESC</kbd> to go home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
