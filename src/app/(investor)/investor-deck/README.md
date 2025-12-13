# Planton Cloud Investor Deck

An interactive web-based investor pitch deck built with Next.js, React, and Framer Motion.

**Live at:** [planton.ai/investor-deck](https://planton.ai/investor-deck)

---

## Overview

This investor deck tells the Planton Cloud fundraising story through an interactive, web-based presentation. It follows the proven architecture from our product demo at `planton.ai/demo` but is optimized specifically for investor presentations and fundraising.

## Deck Structure

The deck consists of **34 screens** organized into **8 acts**:

### Act 1: The Hook (4 screens)
- Welcome Screen
- Founder Story
- Postman Parallel
- Vision Statement

**Goal:** Capture attention and establish the big vision

### Act 2: The Problem (4 screens)
- DevOps Chaos
- Pain Points (3 personas)
- Market Size
- Why Now

**Goal:** Establish the problem, market opportunity, and timing

### Act 3: The Solution (5 screens)
- Product Overview
- InfraHub Explainer
- Project Planton Foundation
- Demo Video
- Customer Stories

**Goal:** Show the product, open source foundation, and early validation

### Act 4: Traction (4 screens)
- Revenue Metrics
- Product Progress
- Open Source Growth
- Design Partners

**Goal:** Demonstrate early traction and product maturity

### Act 5: The Big Vision (5 screens)
- Cursor for DevOps
- Agent Fleet Explainer
- Cloud Provider Strategy
- Two Year Roadmap
- Postman Comparison

**Goal:** Paint the audacious future (AI agents + cloud provider)

### Act 6: The Team (4 screens)
- Founder Background
- Co-founder Intro
- Team Showcase
- Commitment Proof

**Goal:** Show the team strength and extreme commitment

### Act 7: Market & GTM (4 screens)
- TAM Calculation
- GTM Strategy
- Customer Segments
- Competitive Position

**Goal:** Demonstrate market understanding and GTM clarity

### Act 8: The Ask (4 screens)
- Funding Overview
- Use of Funds
- Milestones
- Call to Action

**Goal:** Make the ask clearly with justification and next steps

---

## Key Features

**Navigation:**
- Keyboard shortcuts: `→` (Next), `←` (Previous), `ESC` (Home)
- Click navigation via Next/Previous buttons
- Progress bar showing position in deck
- Home button to restart

**Design:**
- Dark background aesthetic (matches product demo)
- Card-based content layout
- Smooth Framer Motion animations
- Professional typography and spacing
- Responsive (desktop-first, tablet-readable)

**Content:**
- Data-driven with specific metrics
- Honest about early-stage status
- Balances ambition with credibility
- Addresses investor concerns proactively
- Includes actionable next steps

---

## Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **UI:** React 18+
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Shared components + deck-specific screens

---

## File Structure

```
src/app/(investor)/investor-deck/
├── page.tsx                 # Route entry point
├── layout.tsx               # Metadata and CSS import
├── investor-deck.css        # Deck-specific styles
└── README.md               # This file

src/components/investor-deck/
├── InvestorDeckPage.tsx    # Main orchestrator (navigation, state)
├── flows.ts                # Screen type definitions and flow
│
├── opening/                # Act 1 components
├── problem/                # Act 2 components
├── solution/               # Act 3 components
├── traction/               # Act 4 components
├── vision/                 # Act 5 components
├── team/                   # Act 6 components
├── market/                 # Act 7 components
├── ask/                    # Act 8 components
│
└── shared/                 # Reusable components
    ├── MetricCard.tsx
    ├── QuoteCard.tsx
    ├── TeamMemberCard.tsx
    └── TimelineVisualization.tsx
```

---

## Usage

### Presenting Live

1. Navigate to `planton.ai/investor-deck`
2. Use keyboard shortcuts (→/←) or click Next/Previous
3. Walk through all 34 screens in sequence (15-20 minutes)
4. Press ESC anytime to restart

### Sending to Investors

Share the URL: `planton.ai/investor-deck`

Investors can:
- Navigate at their own pace
- Review specific sections
- Experience the interactive format
- See product quality demonstrated

### Customizing Content

Edit screen components in `src/components/investor-deck/[act-folder]/`

Each screen is self-contained and can be updated independently.

---

## Key Messages

**The Narrative Arc:**

1. **Hook:** "We're building India's next Postman" (ambitious but proven precedent)
2. **Problem:** DevOps fragmentation affects everyone (relatable pain)
3. **Solution:** Working product with 150+ components (proof of execution)
4. **Traction:** $800 MRR, paying customers, 2+ years invested (validation)
5. **Vision:** AI agents + cloud provider (Postman-scale potential)
6. **Team:** Co-founder + team, $500k invested (de-risks execution)
7. **Market:** $10B+ opportunity, clear GTM (venture-scale outcome)
8. **Ask:** $500k SAFE at $6-8M cap for 18 months (clear and justified)

**What Makes This Compelling:**

- Not a typical pre-seed: Real team, real product, real customers
- Two audacious goals that reinforce each other
- Open source foundation builds trust (no vendor lock-in)
- Postman parallel creates aspirational but achievable benchmark
- Honest about what's working and what's still uncertain
- Clear plan for capital deployment and milestones

---

## Best Practices for Presenting

### Before the Meeting

1. **Practice the full walkthrough** (aim for 15-20 minutes)
2. **Know your numbers cold** (be ready to expand on any metric)
3. **Have backup materials ready** (financials, customer testimonials, technical docs)
4. **Test the site** (ensure it loads fast, animations smooth)

### During the Meeting

1. **Start strong:** The welcome and founder story screens hook them
2. **Read the room:** Slow down or speed up based on engagement
3. **Be ready to jump:** Use keyboard shortcuts to skip or revisit screens
4. **Tell stories:** Personal anecdotes make data memorable
5. **Show conviction:** This is your life's work - let that passion show

### After the Meeting

1. **Send follow-up email** with deck link
2. **Offer technical deep dive** if they want product details
3. **Connect with design partners** for references
4. **Answer questions promptly** (shows execution speed)

---

## Addressing Common Objections

**"You're pre-revenue"**
- Response: Many successful dev tools raised seed at this stage. We're validating PMF, not optimizing revenue yet.
- Evidence: Temporal, Pulumi, others raised with &lt;$1k MRR

**"Solo founder risk"**
- Response: Not solo - I have a co-founder + full team paid for 2 years
- Evidence: Team showcase screen, commitment proof

**"Two different initiatives seems unfocused"**
- Response: Both build on the same foundation. AI agents enhance our platform. Cloud provider enhances our margins and DX.
- Evidence: Two-year roadmap shows phased approach

**"Open source cannibalization"**
- Response: Project Planton drives awareness. Enterprises pay for SaaS features (UI, CI/CD, RBAC, support).
- Evidence: Clear separation between OSS and commercial features

**"Why will you win?"**
- Response: 4 moats - open source trust, 150+ battle-tested modules, superior DX, multi-cloud knowledge graph
- Evidence: Competitive position screen

**"India-based for US market"**
- Response: Postman proved this works. Cost-efficient building, high-value market targeting.
- Evidence: Postman parallel, geographic strategy

---

## Metrics to Update Regularly

As traction grows, update these numbers in the appropriate screens:

**Traction Metrics:**
- Monthly Recurring Revenue (currently ~$800)
- Number of paying customers (currently 1-5)
- GitHub stars (currently &lt;100)
- Design partner count
- Pipeline conversations

**Product Metrics:**
- Deployment component count (currently 150+)
- Active deployments
- Usage statistics

**Team:**
- New hires as they join
- Advisory board additions

---

## Version History

**v1.0** (December 2024)
- Initial investor deck creation
- 34 screens across 8 acts
- Interactive web-based presentation
- Aligned with seed fundraising research

---

## Related Resources

- **Product Demo:** [planton.ai/demo](https://planton.ai/demo)
- **Main Site:** [planton.ai](https://planton.ai)
- **Platform:** [planton.cloud](https://planton.cloud)
- **Open Source:** [github.com/project-planton/project-planton](https://github.com/project-planton/project-planton)
- **Research Report:** `planton-cloud/business/fund-raise/2025-12-13-pitch-deck/research.report.md`

---

**Remember:** This deck is a living document. Update it as you gain traction, refine messaging, and learn what resonates with investors. The interactivity makes it memorable and demonstrates product quality.
