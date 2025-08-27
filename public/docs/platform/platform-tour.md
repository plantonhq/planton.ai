---
title: "Platform Tour"
description: "Interactive walkthrough of Planton Cloud's console interface and key features"
icon: tour
order: 20
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi

tags:
  - Tutorial
  - Platform Tour
  - Console
---

# Platform Tour

## Your Guided Tour of Planton Cloud Console

Let's take a tour of the Planton Cloud console and explore each section. By the end, you'll know exactly where everything is and how to navigate like a pro. Think of this as your personal guided tour—we'll visit each area and explain what it does.

> **Pro tip**: Keep this page handy during your first week. It's your map to the platform.

## The Console Layout

When you first log into Planton Cloud, you'll see a clean, organized interface:

> **Screenshot Placeholder**: Full console view showing header, sidebar, and main content area

### Header Section

The header contains your most important navigation tools:

#### Context Selector (Top Left)
Right next to the Planton logo, you'll find the context selector—inspired by Google Cloud's organization/project selector. This shows:
- **Current Organization**: Where you are at the org level
- **Current Environment**: Which environment you're working in
- **Quick Switch**: Click to change context instantly

> **Screenshot Placeholder**: Context selector dropdown expanded showing organization and environment hierarchy

**How it works**: 
- Every node in the hierarchy is clickable
- Clicking sets that as your active context
- The UI updates to show resources for that context

#### Ask Copilot (Center Right)
Your AI assistant for cloud deployments:
- Describe what you want to build
- Get generated configurations
- Ask questions about your infrastructure

> **Note**: Copilot requires an organization to be created first

#### Deployment Component Store (Far Right)
Quick access to all deployable components:
- Browse Lego blocks (individual resources)
- Explore Infra Charts (resource collections)
- Filter by cloud provider
- Search for specific components

> **Screenshot**: Deployment Component Store (AWS filter)
![Deployment Component Store filtered to AWS components](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/deployment-component-store_aws.png)

### Sidebar Navigation

The left sidebar is your main navigation hub:

#### Dashboard
Your landing page that shows:
- Quick stats about your resources
- Recent deployments
- System notifications
- Getting started prompts (for new users)

> **Screenshot Placeholder**: Dashboard view for new users with "Create Organization" prompt

#### InfraHub
Your infrastructure command center with two main tabs:

**Cloud Resources Tab**:
- List of all deployed infrastructure
- Filter by type, environment, status
- Quick actions for each resource
- Real-time status updates

**Infra Projects Tab**:
- Collections deployed via Infra Charts
- DAG visualization of dependencies
- Deployment history and logs
- Version tracking

> **Screenshot Placeholder**: InfraHub with Cloud Resources and Infra Projects tabs

#### Connections
Manage all external integrations:
- **Cloud Providers**: AWS, GCP, Azure, and more
- **Git Providers**: GitHub and GitLab
- **Registries**: Docker Hub, ECR, GCR
- **State Backends**: Terraform and Pulumi backends

> **Screenshot Placeholder**: Connections page showing available providers with Connect buttons

#### ServiceHub  
Your application deployment center:
- Connected Git repositories
- Service configurations
- Build pipelines
- Deployment history

#### Billing
Subscription and usage management:
- Current plan (Free, Plus, or Pro)
- Automation minutes usage
- Billing history
- Payment methods

#### Members
Team collaboration features:
- Invite new members via email
- Manage roles and permissions
- View pending invitations
- Create and manage teams

#### Settings
Organization-wide configurations:
- Organization profile
- Default settings
- Security policies
- Audit logs

## Key Platform Sections Deep Dive

### Deployment Component Store

This is your infrastructure shopping mall. Click the icon in the header to open:

**Lego Blocks Tab**:
- Individual cloud resources
- Platform-provided and tested
- One-click deployment ready
- Consistent across providers

> **Screenshot**: Lego blocks filtered by AWS provider
![Lego blocks filtered by AWS provider showing popular components](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/deployment-component-store_aws.png)

**Infra Charts Tab**:
- Pre-composed infrastructure templates
- Multiple Lego blocks working together
- Complex deployments made simple
- Customizable via values

> **Screenshot Placeholder**: Infra Charts tab showing available charts

Each component shows:
- Name and description
- Cloud provider logo
- Quick deploy button
- Details link for documentation

### Creating Your First Organization

As a new user, you'll need to create an organization:

1. Click "Create Organization" on the dashboard
2. Enter organization details:
   - **Organization Name**: Free-form text (e.g., "Getting Started Inc")
   - **Organization ID**: Lowercase, alphanumeric with hyphens (e.g., "getting-started")

> **Screenshot Placeholder**: Create Organization form

Once created:
- You become the organization owner
- The org is set as your active context
- You can start inviting team members
- All platform features become available

### Environment Management

Environments organize your resources:

**Creating an Environment**:
1. With an org selected, create new environment
2. Choose a meaningful name (dev, staging, prod)
3. Requirements: lowercase, alphanumeric, hyphens only

> **Screenshot Placeholder**: Create Environment form

**Environment Context**:
- Infrastructure deploys TO environments
- Connections are authorized FOR environments  
- Each environment is isolated
- Switch between them via context selector

### The Connection Flow

Connecting external services follows a pattern:

1. **Navigate to Connections**
2. **Click "Connect" on a provider card**
3. **Fill in credentials or OAuth flow**
4. **Select authorized environments**
5. **Connection appears in "Existing Connections"**

> **Screenshot**: AWS connection form with environment authorization checkboxes
![AWS connection form with environment authorization](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/aws-credentials_123456789012_aws_dev-account.png)

**Important**: Without environment authorization, you can't deploy resources using that connection!

### Infrastructure Deployment Flow

Deploying infrastructure is visual and intuitive:

1. **Open Deployment Component Store**
2. **Search or browse for components**
3. **Click "Deploy" on your choice**
4. **Fill configuration form**
5. **Watch real-time deployment progress**

> **Screenshot**: Deploying VPC form with configuration options
![VPC deployment form with configuration options](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/deploy-aws-vpc_dev.png)

### The IAC Module Registry

For power users who want to see under the hood:

- Browse Terraform and Pulumi modules
- See exact implementation details
- Fork and customize modules
- Publish custom modules for your org

> **Screenshot**: IAC Module Registry showing module details
![IAC Module Registry showing module details](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/iac-module-registry_24-08-2025_planton-cloud.png)

## Navigation Patterns

### Context-Driven UI
The interface adapts based on your context:
- **Organization Level**: See org-wide resources
- **Environment Level**: See environment-specific resources
- **No Context**: Prompted to create/select organization

### Hierarchical Navigation
Resources follow the hierarchy:
```
Organization
└── Environment  
    └── Resources (via InfraHub)
    └── Services (via ServiceHub)
```

### Quick Actions
Most common tasks are one or two clicks away:
- Deploy button on components
- Create buttons in empty states
- Action menus on resource rows

## Platform Tour Checklist

During your first session, try to:

- [ ] Create your first organization
- [ ] Explore the context selector
- [ ] Browse the Deployment Component Store  
- [ ] Visit each sidebar section
- [ ] Check out Connections available
- [ ] Create your first environment
- [ ] Look at an Infra Chart
- [ ] Visit the IAC Module Registry

## Tips for New Users

### Start Small
1. Create one organization
2. Start with a development environment
3. Connect one cloud provider
4. Deploy one simple resource
5. Build from there

### Use the Visual Tools
- Component Store for discovery
- DAG views for understanding
- Canvas for relationships
- Real-time logs for debugging

### Follow the Breadcrumbs
The platform guides you:
- Empty states have "Create" buttons
- Forms show what's required
- Errors include helpful messages
- Success states show next steps

## Common Navigation Questions

### "Where do I create resources?"
**InfraHub** → **Cloud Resources** tab, or browse the **Deployment Component Store**

### "How do I switch environments?"
Click the **Context Selector** next to the logo and choose your environment

### "Where are my Git repositories?"
**ServiceHub** shows connected repositories and their services

### "How do I invite team members?"
**Members** section in the sidebar, then click "Invite Members"

### "Where do I see deployment logs?"
**InfraHub** for infrastructure, **ServiceHub** for applications—click on any deployment

## What's Next?

Now that you know your way around:

- **[Quick Start Guide](/docs/platform/getting-started)** - Deploy your first resource
- **[Resource Hierarchy](/docs/platform/resource-hierarchy)** - Understand organizations and environments
- **[Core Concepts](/docs/platform/core-concepts)** - Deep dive into platform concepts

> **Remember**: The best way to learn the platform is to use it. Start clicking around—you can't break anything!
