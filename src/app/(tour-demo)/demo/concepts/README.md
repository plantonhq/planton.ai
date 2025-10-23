# Demo Concepts

This directory contains focused concept documents that explain the core ideas behind Planton Cloud and how they're presented in the demo.

## Why Micro-Documents?

Instead of one large README, we break concepts into smaller, focused documents that:
- Are easier to read and reference
- Can be updated independently
- Allow deep dives into specific topics
- Can be cross-referenced and linked
- Grow organically as the demo evolves

## Available Concepts

### 1. [Why Web Technologies for Demos](./why-web.md)
**Topic**: Our philosophy and approach to demo creation

**Key Points**:
- Why we chose web app over presentation tools
- Benefits for engineers in GTM phase
- Continuous iteration philosophy
- Full control vs learning new tools

**When to reference**: Explaining our demo approach to team members or when considering tools for other demos

---

### 2. [Pareto's Principle Applied to Cloud](./paretos-principle.md)
**Topic**: The 80/20 rule in cloud infrastructure

**Key Points**:
- Two dimensions: Services usage & Configuration complexity
- 20% of services used 80% of time
- 20% of configurations used 80% of time
- How this shapes our product

**When to reference**: Explaining why we focus on specific components, justifying feature prioritization

---

### 3. [Deployment Component Store](./deployment-store.md)
**Topic**: Infrastructure Lego Blocks concept

**Key Points**:
- What Lego Blocks are
- Popular components & configuration knobs
- Form-based self-service
- Pre-written Terraform/Pulumi modules
- Open source via Project Planton
- Multi-cloud support

**When to reference**: Explaining the core product concept, onboarding new team members, creating marketing content

---

### 4. [Infra Charts](./infra-charts.md)
**Topic**: Orchestrated infrastructure bundles

**Key Points**:
- Problem: Real environments need many interconnected resources
- Inspiration: Kubernetes Helm Charts
- How charts work: Templates + Values + DAG
- ECS chart example with 9 resources
- Customer impact: weeks → 20 minutes

**When to reference**: Explaining the difference between individual components and complete environments, demonstrating orchestration capabilities

---

### 5. [Demo Narrative Structure](./demo-narrative.md)
**Topic**: Storytelling and flow design for effective demos

**Key Points**:
- Three-act structure: Problem → Infrastructure → Services
- Purpose of milestone screens (Infrastructure Ready)
- Chunking information for cognitive processing
- Creating "aha!" moments
- Pacing and rhythm in demos
- When to use transition screens

**When to reference**: Designing new demo flows, improving engagement, understanding why screens are ordered as they are, adding new sections to demo

---

## How These Concepts Relate

**Product Concepts** (What we built):
```
Pareto's Principle
        ↓
    (Insight: Focus on the 20%)
        ↓
Deployment Component Store
        ↓
    (Individual Lego Blocks)
        ↓
Infra Charts
        ↓
    (Multiple Blocks Combined)
```

**Demo Concepts** (How we present):
```
Why Web Technologies
        ↓
    (Philosophy: Demo as web app)
        ↓
Demo Narrative Structure
        ↓
    (Storytelling: 3 acts + milestones)
```

## Using These Documents

### For Demo Preparation
1. Read [why-web.md](./why-web.md) to understand our approach
2. Read [paretos-principle.md](./paretos-principle.md) for foundational insight
3. Read [deployment-store.md](./deployment-store.md) before showing Lego Catalog
4. Read [infra-charts.md](./infra-charts.md) before showing charts section

### For Team Onboarding
- Start with [why-web.md](./why-web.md) to understand the philosophy
- Then [deployment-store.md](./deployment-store.md) for product overview
- Finally [infra-charts.md](./infra-charts.md) for advanced concepts

### For Content Creation
- Reference specific concepts when writing marketing materials
- Link to these docs in blog posts or documentation
- Use examples and stats from these docs

### For Demo Evolution
- Update relevant concept doc when making changes
- Add new concept docs as new features are added
- Keep cross-references updated

## Contributing

When adding new concept documents:

1. **Keep them focused**: One concept per document
2. **Make them standalone**: Should be understandable on its own
3. **Cross-reference**: Link to related concepts
4. **Include examples**: Real-world use cases and impact
5. **Update this README**: Add to the list above

## Future Concepts to Document

As we expand the demo, we may add:

**Product Concepts**:
- Service Hub (Vercel for backend)
- BuildPacks technology
- StackJobs execution model
- State management options
- Multi-cloud strategy
- Governance and compliance features
- Self-service platform patterns
- DAG orchestration deep dive

**Demo Design Concepts**:
- Personalization strategies
- Animation and visual design principles
- Educational content design
- Interactive elements best practices
- Branching flow patterns

Each concept deserves its own focused document.

