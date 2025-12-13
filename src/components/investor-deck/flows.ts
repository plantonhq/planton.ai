// Investor Deck Flow Definitions

export type DeckScreen =
  // Act 1: The Hook
  | 'welcome'
  | 'founder-story'
  | 'postman-parallel'
  | 'vision-statement'
  // Act 2: The Problem
  | 'devops-chaos'
  | 'pain-points'
  | 'market-size'
  | 'why-now'
  // Act 3: The Solution
  | 'product-overview'
  | 'infrahub-explainer'
  | 'project-planton-foundation'
  | 'demo-video'
  | 'customer-stories'
  // Act 4: Traction
  | 'revenue-metrics'
  | 'product-progress'
  | 'opensource-growth'
  | 'design-partners'
  // Act 5: The Big Vision
  | 'cursor-for-devops'
  | 'agent-fleet-explainer'
  | 'cloud-provider-strategy'
  | 'two-year-roadmap'
  | 'postman-comparison'
  // Act 6: The Team
  | 'founder-background'
  | 'cofounder-intro'
  | 'team-showcase'
  | 'commitment-proof'
  // Act 7: Market & GTM
  | 'tam-calculation'
  | 'gtm-strategy'
  | 'customer-segments'
  | 'competitive-position'
  // Act 8: The Ask
  | 'funding-overview'
  | 'use-of-funds'
  | 'milestones'
  | 'call-to-action';

// Main investor deck flow
export const investorDeckFlow: DeckScreen[] = [
  // Act 1: The Hook (4 screens)
  'welcome',
  'founder-story',
  'postman-parallel',
  'vision-statement',
  
  // Act 2: The Problem (4 screens)
  'devops-chaos',
  'pain-points',
  'market-size',
  'why-now',
  
  // Act 3: The Solution (5 screens)
  'product-overview',
  'infrahub-explainer',
  'project-planton-foundation',
  'demo-video',
  'customer-stories',
  
  // Act 4: Traction (4 screens)
  'revenue-metrics',
  'product-progress',
  'opensource-growth',
  'design-partners',
  
  // Act 5: The Big Vision (5 screens)
  'cursor-for-devops',
  'agent-fleet-explainer',
  'cloud-provider-strategy',
  'two-year-roadmap',
  'postman-comparison',
  
  // Act 6: The Team (4 screens)
  'founder-background',
  'cofounder-intro',
  'team-showcase',
  'commitment-proof',
  
  // Act 7: Market & GTM (4 screens)
  'tam-calculation',
  'gtm-strategy',
  'customer-segments',
  'competitive-position',
  
  // Act 8: The Ask (4 screens)
  'funding-overview',
  'use-of-funds',
  'milestones',
  'call-to-action',
];

// Helper function to get screen index
export function getScreenIndex(screen: DeckScreen): number {
  return investorDeckFlow.indexOf(screen);
}

// Helper function to get total screens
export function getTotalScreens(): number {
  return investorDeckFlow.length;
}

// Helper function to get next screen
export function getNextScreen(current: DeckScreen): DeckScreen | null {
  const currentIndex = getScreenIndex(current);
  if (currentIndex === -1 || currentIndex === investorDeckFlow.length - 1) {
    return null;
  }
  return investorDeckFlow[currentIndex + 1];
}

// Helper function to get previous screen
export function getPreviousScreen(current: DeckScreen): DeckScreen | null {
  const currentIndex = getScreenIndex(current);
  if (currentIndex <= 0) {
    return null;
  }
  return investorDeckFlow[currentIndex - 1];
}
