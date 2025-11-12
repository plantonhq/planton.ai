---
title: "Documentation Overview"
description: "Welcome to Planton Cloud documentation - your guide to modern cloud infrastructure and application deployment"
icon: book
order: 1
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi

tags:
  - Overview
  - Documentation
  - Getting Started
---

# Planton Cloud Documentation

## Your Guide to Modern Cloud Operations

Welcome to Planton Cloud documentation! Whether you're deploying your first resource or managing enterprise infrastructure, this documentation will guide you through every step of your journey.

> **New to Planton Cloud?** Start with our [Platform Overview](/docs/platform) to understand the big picture, then follow our [Getting Started Guide](/docs/platform/getting-started) to deploy your first resource in under 10 minutes.

## Documentation Structure

Our documentation is organized into logical sections that match your journey:

### 🏢 [Platform](/docs/platform)
**Start here to understand Planton Cloud**
- Core concepts and architecture
- Step-by-step getting started guide
- Resource hierarchy and organization
- Team collaboration and access control
- Billing and subscriptions

### 🏗️ [InfraHub](/docs/infra-hub)
**Deploy cloud infrastructure with ease**
- Browse deployment components (Lego blocks)
- Understand Stack Jobs and automation
- Configure deployment workflows
- Manage credentials and environments

### 🚀 [ServiceHub](/docs/service-hub)
**Build and deploy applications**
- Connect Git repositories
- Automatic CI/CD pipelines
- Monorepo support
- Preview environments

## Quick Start Paths

Choose your path based on your goals:

### "I want to deploy infrastructure"
1. [Create an account](/docs/platform/getting-started#step-1-sign-up-for-planton-cloud)
2. [Connect your cloud provider](/docs/platform/getting-started#step-4-connect-your-cloud-account)
3. [Deploy your first resource](/docs/platform/getting-started#step-5-deploy-your-first-resource)
4. [Explore more components](/docs/infra-hub/deployment-components)

### "I want to deploy applications"
1. [Set up your platform account](/docs/platform/getting-started)
2. [Connect GitHub or GitLab](/docs/service-hub/getting-started#step-1-connect-your-git-provider)
3. [Create your first service](/docs/service-hub/getting-started#step-2-create-your-first-service)
4. [Push code and watch it deploy](/docs/service-hub/getting-started#step-4-push-code-and-see-it-deploy)

### "I want to understand the platform"
1. [Platform Overview](/docs/platform) - The big picture
2. [Platform Tour](/docs/platform/platform-tour) - Navigate the console
3. [Core Concepts](/docs/platform/core-concepts) - Key terminology
4. [Resource Hierarchy](/docs/platform/resource-hierarchy) - How things are organized

## Key Concepts at a Glance

### Platform Concepts
- **Organizations**: Your company/team container
- **Environments**: Separate dev, staging, and production
- **Connections**: Integrations with cloud providers and Git
- **Teams**: Organize members with shared permissions

### Infrastructure Concepts
- **Lego Blocks**: Individual cloud resources (VPC, RDS, EKS)
- **Infra Charts**: Collections of resources that work together
- **Stack Jobs**: Automated workflows that deploy infrastructure
- **Flow Control**: Policies governing deployment behavior

### Application Concepts
- **Services**: Your applications from Git repositories
- **Pipelines**: Automated build and deploy workflows
- **Build Methods**: Buildpacks (auto-detect) or Dockerfile
- **Deployments**: Where your applications run

## Platform Highlights

### 🎯 One-Click Infrastructure
Browse our catalog of 50+ pre-configured cloud resources. Deploy databases, Kubernetes clusters, and more without writing any code.

### 🔄 Git-Push Deployments
Connect your repository and push code. We handle the build, containerization, and deployment automatically.

### 🔐 Enterprise Security
Your cloud accounts, your control. We never store credentials in plain text and follow security best practices.

### 💰 Transparent Pricing
Pay per developer seat with generous automation minutes included. No hidden fees or surprise bills.

## Getting Help

### In Documentation
- Use the search bar to find specific topics
- Check "Common Questions" sections
- Review troubleshooting guides

### In Platform
- Ask Copilot for deployment help
- View real-time logs for debugging
- Check audit trails for history

### Community
- Join our community forum
- Share feedback and feature requests
- Learn from other users

## Source References

For developers interested in the implementation details:

### Platform APIs and Services
- **InfraHub Backend**: `planton-cloud/backend/services/infra-hub`
- **ServiceHub Backend**: `planton-cloud/backend/services/service-hub`
- **API Definitions**: `planton-cloud/apis/cloud/planton/**`

### Infrastructure Modules
- **Lego Blocks**: `project-planton/provider/<provider>/<legoblock>/`
- **Terraform Modules**: Available for each Lego block
- **Pulumi Modules**: Go-based infrastructure as code

### Client Applications
- **Web Console**: `planton-cloud/client-apps/web-console`
- **CLI (coming soon)**: `planton-cloud/client-apps/cli`

## What's Next?

Ready to dive in? Here are your next steps:

1. **[Start with Platform Overview](/docs/platform)** - Understand the system
2. **[Follow Getting Started](/docs/platform/getting-started)** - Deploy your first resource
3. **[Explore Components](/docs/infra-hub/deployment-components)** - See what you can build
4. **[Invite Your Team](/docs/platform/teams-and-access)** - Collaborate effectively

---

> **Welcome to Planton Cloud!** We're excited to be part of your cloud journey. This platform is in beta, and your feedback helps us improve. Let's build something amazing together! 🚀
