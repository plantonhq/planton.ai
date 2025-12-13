# Planton Cloud Investor Deck

A Y-Combinator style seed stage investor presentation for Planton Cloud.

## Overview

This is a concise, visually appealing investor deck designed for seed-stage fundraising. The deck follows YC best practices:

- **Concise and to the point** - Each slide has minimal text, maximum impact
- **Clear narrative flow** - Tells the story like a play
- **Focused on Planton** - No distractions from competitors or unnecessary details
- **Crisp and clear** - Clarity beats fanciness

## Slide Structure

The deck contains 10 slides:

1. **Title Slide** - Company name, tagline, and round details
2. **Problem** - The pain points in DevOps today
3. **Solution** - DevOps in a Box - what Planton provides
4. **How It Works** - InfraHub + ServiceHub explained simply
5. **Market Opportunity** - TAM and market dynamics
6. **Traction** - Current state and validation
7. **Roadmap** - Future vision (Secrets Manager, AgentFleet, Cloud Provider)
8. **Team** - Founding team and core contributors
9. **The Ask** - $500K SAFE and use of funds
10. **Closing** - Contact information and call to action

## Key Features

- **Keyboard Navigation**: Use arrow keys (← →) or spacebar to navigate
- **Auto-Play Mode**: Automatically advances slides every 8 seconds
- **Progress Indicator**: Visual progress bar and slide counter
- **Smooth Animations**: Framer Motion powered slide transitions
- **Responsive Design**: Works on various screen sizes

## Access

The deck is available at: **planton.ai/investor-deck**

## Usage

### Navigation Controls

- **Arrow Keys** (← →): Navigate between slides
- **Spacebar**: Go to next slide
- **Home Key**: Return to title slide
- **Auto Button**: Enable/disable auto-play mode
- **Progress Dots**: Click to jump to any slide

### Presentation Mode

1. Open the deck at planton.ai/investor-deck
2. Press F11 (or your browser's fullscreen shortcut) for immersive presentation
3. Use arrow keys or auto-play for smooth transitions
4. Press Escape to exit fullscreen

## Design Philosophy

### Y-Combinator Style

The deck follows YC's seed-stage pitch deck guidelines:

- **Problem-Solution-Market** structure
- **Minimal text, maximum clarity**
- **Focus on what matters** (traction, team, vision)
- **Honest about current state** (pre-revenue but real product)
- **Bold vision** (AgentFleet, Cloud Provider) without overpromising

### Visual Design

- **Clean, modern aesthetic** with subtle gradients
- **Consistent color scheme**: Blue (primary), Purple/Green (accents)
- **Generous whitespace** for readability
- **Icon-driven** for visual interest
- **Framer Motion animations** for polish

## Technical Implementation

Built with:

- **Next.js 14** (App Router)
- **React** (Client components)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide Icons**

## Customization

To update the deck:

1. **Edit individual slides** in `src/components/investor-deck/slides/`
2. **Modify content** directly in each slide component
3. **Adjust timing** in `InvestorDeck.tsx` (currently 8s per slide)
4. **Change colors** via Tailwind classes

## Notes for Investors

This deck represents our seed-stage fundraising ask:

- **Amount**: $500K on a SAFE
- **Stage**: Pre-revenue ($800 MRR) with production platform built over 3+ years
- **Use of Funds**: Engineering (AgentFleet), Cloud Provider development, team expansion, GTM
- **Timeline**: 18-month runway to Series A milestones

## Contact

For questions about the deck or to discuss investment:

- **Email**: swarup@planton.ai
- **Website**: planton.ai
- **LinkedIn**: linkedin.com/in/swarupdonepudi

---

*Last Updated: December 13, 2025*
