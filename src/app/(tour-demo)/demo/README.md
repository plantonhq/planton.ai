# Planton Cloud Interactive Demo

A web-based interactive demo platform for Planton Cloud, built entirely with modern web technologies to provide personalized, branching demonstrations based on company type and user needs.

## Philosophy: Why a Web App for Demos?

As engineers building Planton Cloud, we tried various presentation and demo tools but found them limiting. Traditional presentation software requires learning new tools and restricts customization. 

**Our approach**: Treat the demo itself as a full-blown web application.

### Benefits

- **Full control**: Use familiar React, TypeScript, and Tailwind instead of learning presentation tools
- **Complex branching**: Leverage web technologies for dynamic, personalized flows based on user context
- **Always accessible**: Hosted at [planton.ai/demo](https://planton.ai/demo) for easy sharing
- **Iterative improvement**: Update and refine continuously based on demo feedback
- **Engineering-friendly**: Remain in comfort zone of web development workflow

## Project Status

**Current State**: Super Alpha

This is a continuous work in progress. The platform is vast and broad - no single linear workflow can demonstrate all capabilities. We're constantly refining based on feedback from each demo session.

## Architecture

### Company Type Personas

The demo personalizes the experience based on three distinct company types, each with different pain points and value propositions:

#### 1. IT Consulting Agency

**Pain Points**:
- 3+ weeks per client project setup
- Lost deals due to slow delivery  
- Client onboarding delays

**Value Proposition**: 
- Quick infrastructure bootstrapping
- Rapid CI/CD setup
- Production-ready in minutes, not weeks

**Demo Flow Emphasis**:
- Cloud connections (quick setup)
- Lego catalog (pre-built modules)
- Infrastructure builder (rapid assembly)
- Deploy logs (live progress visibility)
- Service Hub (quick CI/CD)
- GitHub connection + BuildPacks + Deployment

#### 2. Small Product Company

**Pain Points**:
- Can't afford $150K+/year DevOps hire
- Developers spending 40% time on ops
- Infrastructure becomes scaling bottleneck

**Value Proposition**:
- Self-service platform for developers
- No DevOps expertise needed
- Like Vercel, but for backend in your cloud

**Demo Flow Emphasis**:
- Lego catalog (no expertise needed)
- Infrastructure builder (visual, no code)
- Service Hub (no CI/CD code to write)
- Service configuration (developer-friendly)
- Service deployment (one-click deploys)
- Live examples

#### 3. Established Product Company

**Pain Points**:
- 73% have compliance gaps
- 28 security incidents/year from misconfigurations
- Zero visibility into infrastructure state

**Value Proposition**:
- Governance and visibility
- Golden paths and guardrails
- Compliance and audit trails

**Demo Flow Emphasis**:
- Infrastructure visualization (complete visibility)
- Version history (audit trail and compliance)
- Edit flow (golden paths and standardization)
- Deploy summary (governance checks)
- Service Hub
- Live examples

### Demo Flow Structure

```
Welcome Screen
    ↓
Company Type Selection (IT Consulting | Small Product | Established Product)
    ↓
    ├─→ IT Consulting Flow (15 screens)
    ├─→ Small Product Flow (14 screens)  
    └─→ Established Product Flow (14 screens)
```

Each flow is defined as an array of screens in `DemoPage.tsx`:

```typescript
const itConsultingFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  'intro-stakes',
  'intro-promise',
  'intro-cta',
  'cloud-connections',
  'lego-catalog',
  'infra-builder',
  'deploy-logs',
  'service-hub-intro',
  'github-connection',
  'buildpacks-selection',
  'service-deployment',
  'service-success-story'
];
```

### State Management

The demo uses React state to manage:

1. **Current Screen**: Which screen is being displayed
2. **Company Type**: Selected company type that determines the flow
3. **Navigation State**: Current position in the flow

**Key Pattern**: When user clicks Home, both current screen AND company type are reset, allowing them to start fresh with a different company type.

```typescript
const goToHome = useCallback(() => {
  setCurrentScreen('welcome');
  setCompanyType(null); // Reset company type when going home
}, []);
```

## Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **UI Library**: React 18+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Custom UI components + shadcn/ui patterns

## File Structure

```
src/app/(tour-demo)/demo/
├── page.tsx              # Route entry point
├── layout.tsx            # Demo-specific layout and metadata
├── demo.css              # Custom CSS (card shadows, buttons)
└── README.md            # This file

src/components/demo/
├── DemoPage.tsx          # Main orchestrator (state, navigation, flows)
├── demo.css              # Shared styles
│
├── intro/                # Introduction screens
│   ├── CompanyTypeSelection.tsx      # Company type picker
│   ├── IntroProblem.tsx              # Generic problem statement
│   ├── IntroProblemITConsulting.tsx  # IT consulting-specific problem
│   ├── IntroProblemSmallProduct.tsx  # Small product-specific problem
│   ├── IntroProblemEstablished.tsx   # Established product-specific problem
│   ├── IntroStakes.tsx               # What's at stake
│   ├── IntroPromise.tsx              # Our promise/solution
│   └── IntroCTA.tsx                  # Cloud provider selection
│
├── platform/             # Platform/Infrastructure screens
│   ├── CloudConnections.tsx
│   ├── LegoCatalog.tsx
│   ├── InfraChartsBuilder.tsx
│   ├── DeploySummary.tsx
│   ├── DeployLogs.tsx
│   ├── InfraVersionHistory.tsx
│   ├── InfraVisualization.tsx
│   └── InfraEditFlow.tsx
│
├── service/              # Service deployment screens
│   ├── ServiceHubIntro.tsx
│   ├── GitHubConnection.tsx
│   ├── BuildPacksSelection.tsx
│   ├── ServiceConfiguration.tsx
│   ├── ServiceDeployment.tsx
│   ├── ServiceLiveExample.tsx
│   └── ServiceSuccessStory.tsx
│
├── modals/               # Modal components for forms
│   └── ...
│
├── forms/                # Form components and elements
│   └── ...
│
└── interfaces/           # TypeScript interfaces
    └── ...
```

## How to Add or Modify Demo Screens

### Adding a New Screen

1. **Create the screen component** in the appropriate directory (`intro/`, `platform/`, or `service/`)

```tsx
// src/components/demo/platform/NewFeature.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NewFeature() {
  return (
    <div className="h-full flex flex-col justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Your content */}
      </motion.div>
    </div>
  );
}
```

2. **Add screen type** to `DemoPage.tsx`:

```typescript
type DemoScreen = 'welcome' | 'company-selection' | ... | 'new-feature';
```

3. **Import the component** in `DemoPage.tsx`:

```typescript
import NewFeature from './platform/NewFeature';
```

4. **Add to appropriate flow(s)**:

```typescript
const itConsultingFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  // ... other screens
  'new-feature',
  'service-success-story'
];
```

5. **Add render case** in `renderCurrentScreen()`:

```typescript
case 'new-feature':
  return <NewFeature />;
```

### Modifying an Existing Flow

Simply reorder or add/remove screens from the flow arrays:

```typescript
const smallProductFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  // Remove a screen by deleting it
  // 'intro-stakes',  
  'intro-promise',
  'intro-cta',
  // Add a new screen
  'new-feature',
  'lego-catalog',
  // ... rest of flow
];
```

### Creating a New Company Type

1. Add the type to `CompanyTypeSelection.tsx`:

```typescript
export type CompanyType = 'it-consulting' | 'small-product' | 'established-product' | 'new-type';

const companyTypes = [
  // ... existing types
  {
    id: 'new-type' as CompanyType,
    name: 'New Company Type',
    icon: YourIcon,
    description: 'Value proposition',
    painPoints: ['Pain 1', 'Pain 2', 'Pain 3'],
    color: 'from-green-500 to-emerald-500',
  },
];
```

2. Create a problem screen for the new type:

```typescript
// src/components/demo/intro/IntroProblemNewType.tsx
export default function IntroProblemNewType() {
  // Customize for your persona
}
```

3. Create a flow in `DemoPage.tsx`:

```typescript
const newTypeFlow: DemoScreen[] = [
  'welcome',
  'company-selection',
  'intro-problem',
  // ... customize the journey
];
```

4. Update `getDemoScreens()` in `DemoPage.tsx`:

```typescript
const getDemoScreens = useCallback((): DemoScreen[] => {
  if (!companyType) return defaultDemoScreens;
  
  switch (companyType) {
    case 'new-type':
      return newTypeFlow;
    // ... other cases
  }
}, [companyType]);
```

5. Update problem screen rendering:

```typescript
case 'intro-problem':
  if (companyType === 'new-type') {
    return <IntroProblemNewType />;
  }
  // ... other cases
```

6. Update `IntroCTA.tsx` messaging:

```typescript
const getHeadline = () => {
  switch (companyType) {
    case 'new-type':
      return 'Your custom headline';
    // ... other cases
  }
};
```

## Navigation

### Keyboard Shortcuts

- `→` (Right Arrow): Next screen
- `←` (Left Arrow): Previous screen
- `Esc`: Return to home (resets demo)

### UI Controls

- **Next/Previous Buttons**: Navigate through flow
- **Home Button**: Top-right corner, resets demo and company selection
- **Progress Bar**: Shows position in current flow

## Styling Guidelines

### Color Palette

- **Background (Dark)**: `bg-[#110D1F]`
- **Card Background**: `bg-white`
- **Gradient (Primary)**: `from-violet-600 to-purple-600`
- **Gradient (Button)**: `btn-gradient` class
- **Text on Dark**: `text-white`, `text-gray-300`
- **Text on Light**: `text-gray-900`, `text-gray-600`

### Card Styling

Use consistent card patterns from `demo.css`:

```tsx
<div className="demo-card-shadow hover:demo-card-hover">
  {/* content */}
</div>
```

### Button Styling

```tsx
<button className="demo-button">
  {/* content */}
</button>
```

### Animations

Use Framer Motion for smooth transitions:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

## Development Workflow

### Running Locally

```bash
cd planton.ai
npm install
npm run dev
```

Navigate to `http://localhost:3000/demo`

### Testing a Flow

1. Start the demo
2. Select a company type
3. Navigate through the entire flow
4. Test keyboard shortcuts
5. Click Home and try a different company type
6. Verify all screens render correctly

### Gathering Feedback

After each demo session:

1. Note which screens resonated
2. Identify confusing or slow moments
3. Track questions that came up
4. Update flows or screens accordingly
5. Commit changes with descriptive messages

## Best Practices

### Screen Design

1. **Keep it focused**: One main concept per screen
2. **Visual hierarchy**: Clear headline → subheading → content → CTA
3. **Animations**: Use subtle motion to guide attention
4. **Consistency**: Maintain spacing, colors, and typography patterns

### Flow Design

1. **Tell a story**: Each flow should have a clear narrative arc
2. **8-12 screens**: Keep flows concise and engaging
3. **Persona-specific**: Emphasize features relevant to that company type
4. **Reuse components**: Share screens across flows when appropriate

### Content Guidelines

1. **Clear headlines**: Use strong, benefit-driven language
2. **Specific numbers**: "3+ weeks" is better than "a long time"
3. **Pain → Solution**: Lead with pain points, follow with solutions
4. **Real quotes**: Use actual customer feedback when possible

## Future Enhancements

### Short-term

- [ ] Add analytics to track screen engagement
- [ ] A/B test different messaging per persona
- [ ] Add video backgrounds for key screens
- [ ] Create shareable demo links with pre-selected company type
- [ ] Add "Try it yourself" interactive elements

### Medium-term

- [ ] Multi-language support
- [ ] Industry-specific sub-personas (FinTech, HealthTech, etc.)
- [ ] Custom demo paths for specific prospects
- [ ] Screen recording capability
- [ ] Email capture for follow-up

### Long-term

- [ ] Real-time collaboration (walk through demo with prospect)
- [ ] Integration with CRM to track demo engagement
- [ ] AI-driven flow recommendations based on prospect profile
- [ ] Interactive sandbox environments
- [ ] Customer success stories per persona

## Troubleshooting

### Screen not rendering

1. Check console for errors
2. Verify screen is imported in `DemoPage.tsx`
3. Ensure screen name is in `DemoScreen` type
4. Confirm case statement in `renderCurrentScreen()`

### Flow navigation broken

1. Verify screen names in flow array match type definitions
2. Check for typos in screen names
3. Ensure flow array is being returned from `getDemoScreens()`

### Styling issues

1. Check for conflicting Tailwind classes
2. Verify dark background screens use light text colors
3. Ensure card screens have proper padding and spacing
4. Test responsive breakpoints (sm, md, lg)

## Contributing

This demo is maintained by the Planton Cloud engineering team. When adding or modifying screens:

1. Test thoroughly on desktop and mobile
2. Ensure animations are smooth
3. Match existing design patterns
4. Update this README if adding new patterns
5. Get feedback from team before major changes

## Resources

- **Live Demo**: [planton.ai/demo](https://planton.ai/demo)
- **Main Site**: [planton.ai](https://planton.ai)
- **Product**: [planton.cloud](https://planton.cloud)
- **Framer Motion Docs**: [framer.com/motion](https://www.framer.com/motion/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)

---

**Remember**: This demo is a continuous work in progress. Every demo session is an opportunity to learn and improve. Don't hesitate to iterate rapidly based on feedback.
