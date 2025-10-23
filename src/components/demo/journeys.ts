/**
 * Demo Journey System
 * 
 * Journeys are reusable sequences of focused screens that can be composed
 * into different demo flows. Each journey represents a cohesive narrative
 * or feature exploration that can be inserted into various company-type flows.
 */

// DemoScreen type - will be kept in sync with DemoPage.tsx
export type DemoScreen = 
  // Welcome and company selection
  | 'welcome' 
  | 'company-selection' 
  
  // Intro journey screens
  | 'intro-problem' 
  | 'intro-stakes' 
  | 'intro-promise' 
  | 'intro-cta' 
  
  // Platform screens
  | 'cloud-connections' 
  | 'lego-catalog' 
  | 'component-config' 
  
  // Deployment Component Store Journey screens
  | 'deployment-store-providers'
  | 'deployment-store-aws'
  | 'deployment-store-multi-cloud'
  | 'deployment-store-form'
  
  // Project Planton Journey screens
  | 'project-planton-intro'
  | 'project-planton-components'
  | 'project-planton-terraform'
  | 'project-planton-cli' 
  
  // Infra Charts Journey screens (NEW - focused)
  | 'infra-charts-challenge'
  | 'infra-charts-dag'
  | 'infra-charts-concept'
  | 'infra-charts-impact'
  
  // Infra deployment screens
  | 'infra-chart-deploy' 
  | 'infrastructure-ready' 
  | 'deploy-summary' 
  | 'deploy-logs' 
  | 'infra-version-history' 
  | 'infra-visualization' 
  | 'infra-edit-flow' 
  
  // Service deployment screens
  | 'service-hub-intro' 
  | 'github-connection' 
  | 'no-dockerfile-required' 
  | 'service-configuration' 
  | 'service-deployment' 
  | 'service-live-example' 
  | 'service-success-story'
  
  // Legacy screen (deprecated, kept for backward compatibility)
  | 'infra-charts-intro';

/**
 * Journey Definition
 * 
 * A journey is a named sequence of screens that tells a cohesive story
 * or explores a specific feature/concept.
 */
export type Journey = {
  /** Unique identifier for the journey */
  id: string;
  
  /** Display name for the journey */
  name: string;
  
  /** Description of what this journey covers */
  description: string;
  
  /** Ordered array of screens in this journey */
  screens: DemoScreen[];
  
  /** Optional tags for categorization */
  tags?: string[];
};

/**
 * Infra Charts Journey
 * 
 * A focused journey explaining Infra Charts from challenge to impact:
 * 1. The Challenge - Why production environments are complex
 * 2. The DAG - Visual demonstration of orchestration
 * 3. The Concept - What Infra Charts are and how they work
 * 4. The Impact - Real customer success story
 */
export const infraChartsJourney: Journey = {
  id: 'infra-charts',
  name: 'Infra Charts Journey',
  description: 'Explains Infra Charts concept through focused screens: challenge, DAG visualization, concept explanation, and customer impact',
  screens: [
    'infra-charts-challenge',
    'infra-charts-dag',
    'infra-charts-concept',
    'infra-charts-impact',
  ],
  tags: ['infrastructure', 'orchestration', 'core-product'],
};

/**
 * Deployment Component Store Journey
 * 
 * Shows multi-cloud component library and form-based deployment:
 * 1. Provider breadth (10+ providers)
 * 2. AWS components deep dive
 * 3. Multi-cloud comparison (same pattern, any cloud)
 * 4. Form-based deployment with YAML preview
 */
export const deploymentStoreJourney: Journey = {
  id: 'deployment-store',
  name: 'Deployment Component Store Journey',
  description: '10+ cloud providers, form-based deployment with live YAML preview',
  screens: [
    'deployment-store-providers',
    'deployment-store-aws',
    'deployment-store-multi-cloud',
    'deployment-store-form',
  ],
  tags: ['infrastructure', 'multi-cloud', 'components'],
};

/**
 * Project Planton Journey
 * 
 * Shows the open-source foundation powering Planton Cloud:
 * 1. Introduction to Project Planton (open source framework)
 * 2. Component catalog (500+ components across 10+ providers)
 * 3. Terraform modules (production-ready IaC)
 * 4. CLI and YAML deployment (GitOps workflow)
 */
export const projectPlantonJourney: Journey = {
  id: 'project-planton',
  name: 'Project Planton Journey',
  description: 'Open-source framework: 500+ components, Terraform modules, CLI deployment',
  screens: [
    'project-planton-intro',
    'project-planton-components',
    'project-planton-terraform',
    'project-planton-cli',
  ],
  tags: ['open-source', 'framework', 'cli', 'terraform'],
};

/**
 * Lego Blocks Journey (Legacy - will be deprecated)
 * 
 * Demonstrates individual component deployment:
 * 1. Browse the Lego Catalog
 * 2. Configure a component via form
 * 3. Watch live deployment logs
 */
export const legoBlocksJourney: Journey = {
  id: 'lego-blocks',
  name: 'Lego Blocks Journey',
  description: 'Shows how to deploy individual infrastructure components using form-based configuration',
  screens: [
    'lego-catalog',
    'component-config',
    'deploy-logs',
  ],
  tags: ['infrastructure', 'components', 'core-product', 'legacy'],
};

/**
 * Service Deployment Journey
 * 
 * Shows how to deploy applications to infrastructure:
 * 1. Service Hub introduction
 * 2. Connect GitHub repository
 * 3. BuildPacks (no Dockerfile required)
 * 4. Deploy and see live
 */
export const serviceDeploymentJourney: Journey = {
  id: 'service-deployment',
  name: 'Service Deployment Journey',
  description: 'Demonstrates deploying applications to infrastructure with GitHub integration and BuildPacks',
  screens: [
    'service-hub-intro',
    'github-connection',
    'no-dockerfile-required',
    'service-deployment',
  ],
  tags: ['services', 'deployment', 'core-product'],
};

/**
 * All available journeys
 */
export const allJourneys: Journey[] = [
  deploymentStoreJourney,
  projectPlantonJourney,
  infraChartsJourney,
  legoBlocksJourney,
  serviceDeploymentJourney,
];

/**
 * Helper Functions
 */

/**
 * Get a journey by its ID
 */
export function getJourneyById(id: string): Journey | undefined {
  return allJourneys.find(journey => journey.id === id);
}

/**
 * Compose screens from multiple journeys and standalone screens
 * 
 * @param items - Array of journey IDs, Journey objects, or individual DemoScreen values
 * @returns Flattened array of screens
 * 
 * @example
 * const flow = composeFlow([
 *   'welcome',
 *   'company-selection',
 *   infraChartsJourney,
 *   'infrastructure-ready',
 *   serviceDeploymentJourney,
 *   'service-success-story'
 * ]);
 */
export function composeFlow(items: (string | Journey | DemoScreen)[]): DemoScreen[] {
  const screens: DemoScreen[] = [];
  
  for (const item of items) {
    if (typeof item === 'string') {
      // It's either a journey ID or a screen name
      const journey = getJourneyById(item);
      if (journey) {
        // It's a journey ID - add all its screens
        screens.push(...journey.screens);
      } else {
        // It's a screen name - add it directly
        screens.push(item as DemoScreen);
      }
    } else if (typeof item === 'object' && 'screens' in item) {
      // It's a Journey object - add all its screens
      screens.push(...item.screens);
    }
  }
  
  return screens;
}

/**
 * Get journey metadata (useful for debugging or analytics)
 */
export function getJourneyInfo(journeyIdOrScreens: string | DemoScreen[]): {
  journey?: Journey;
  screenCount: number;
  screens: DemoScreen[];
} {
  if (typeof journeyIdOrScreens === 'string') {
    const journey = getJourneyById(journeyIdOrScreens);
    return {
      journey,
      screenCount: journey?.screens.length || 0,
      screens: journey?.screens || [],
    };
  }
  
  return {
    screenCount: journeyIdOrScreens.length,
    screens: journeyIdOrScreens,
  };
}

/**
 * Check if a screen is part of a specific journey
 */
export function isScreenInJourney(screen: DemoScreen, journeyId: string): boolean {
  const journey = getJourneyById(journeyId);
  return journey?.screens.includes(screen) || false;
}

/**
 * Get all screens from multiple journeys
 */
export function getScreensFromJourneys(...journeyIds: string[]): DemoScreen[] {
  const screens: DemoScreen[] = [];
  
  for (const id of journeyIds) {
    const journey = getJourneyById(id);
    if (journey) {
      screens.push(...journey.screens);
    }
  }
  
  return screens;
}

