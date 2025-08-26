---
title: "What is a Stack Job?"
description: "Understanding Stack Jobs - the core execution unit that powers infrastructure deployments in Planton Cloud"
icon: guide
order: 10
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi

tags:
  - Concepts
  - Stack Jobs
  - InfraHub
---

# What is a Stack Job?

## Think of Stack Jobs Like Your Infrastructure's CI/CD Pipeline

Remember how CI/CD pipelines transformed code deployment? Stack Jobs do the same for infrastructure. They're the automated workflows that take your infrastructure configurations and make them real—safely, reliably, and with full visibility.

A Stack Job in Planton Cloud is the execution unit that orchestrates all the steps needed to provision, update, or destroy cloud resources. It's like having a smart assistant that knows exactly how to run Terraform or Pulumi commands in the right order, with the right credentials, and with proper safety checks.

> **In a nutshell:** A Stack Job is an automated, multi-step workflow that executes infrastructure changes. Push configuration, get infrastructure—with every step tracked and auditable.

## Why Stack Jobs Matter

Let's be honest—running infrastructure automation manually is where good intentions go to die. You start with a simple `terraform apply`, then add a plan step for safety, then refresh to catch drift, then add approval gates... Before you know it, you're maintaining complex CI/CD pipelines just to deploy a database.

Stack Jobs eliminate that complexity:

### 🎯 Automated Orchestration
We run the right commands in the right order, every time. No more forgetting to run `terraform plan` first.

### 🔒 Built-in Safety
Preview changes before applying, automatic rollback on failures, and configurable approval gates.

### 📊 Complete Visibility
Every step is logged, every change is tracked, and every execution is preserved for audit.

### ⚡ Consistent Execution
Whether it's Terraform or Pulumi, development or production, the workflow remains consistent.

## How Stack Jobs Work

When you create or update a cloud resource configuration, here's what happens behind the scenes:

1. **Configuration Change Detected**: You update an AWS ALB configuration
2. **Stack Job Created**: The system creates a job with all necessary information
3. **Pre-flight Checks**: Validates credentials, permissions, and dependencies
4. **Multi-step Execution**: Runs refresh → plan → apply (configurable)
5. **Status Updates**: Real-time progress streamed to your console
6. **Completion**: Resource deployed, state updated, audit logged

### The Anatomy of a Stack Job

```yaml
# What a Stack Job contains (simplified view)
apiVersion: infra-hub.planton.cloud/v1
kind: StackJob
metadata:
  id: sj_01jsrnmwpnnc6n62h06xafcgxv
  name: Deploy AWS ALB
  org: acmecorp
  env: production
spec:
  # What resource is being deployed
  apiResourceInfo:
    kind: aws_alb
    id: alb_01jq5xe4z7farkgenqsh47c1h0
    name: api-loadbalancer
    operation: update
  
  # Everything needed to execute
  essentials:
    provisioner: terraform              # or pulumi
    iacModule: aws-alb-terraform-v1.2.0
    backendCredential: s3-terraform-state
    providerCredential: aws-prod-account
    stackJobRunner: platform-runner
    flowControlPolicy: production-policy
  
  # Execution steps
  operations:
    - refresh    # Update state from cloud
    - plan       # Show what will change
    - apply      # Make the changes
status:
  progress: succeeded
  duration: 3m 42s
```

## Stack Job Lifecycle

Stack Jobs follow a predictable lifecycle:

### 1. Creation Phase
- Triggered by configuration changes
- Gathers all required information (credentials, modules, policies)
- Validates everything is ready
- Queues for execution

### 2. Execution Phase
- Picked up by a Stack Job Runner
- Executes steps sequentially
- Streams logs in real-time
- Updates status after each step

### 3. Completion Phase
- Records final status
- Updates resource state
- Preserves logs and outputs
- Triggers any dependent workflows

## What Triggers Stack Jobs?

Stack Jobs are created automatically when:

### Direct Configuration Changes
```yaml
# You update a resource configuration
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: orders-db
spec:
  replicas: 3  # Changed from 1
```
**Result:** Stack Job created to scale the database

### Service Deployments
When ServiceHub deploys applications, it may need infrastructure:
- New microservice needs a database → Stack Job provisions it
- Service needs load balancer → Stack Job creates it
- Application needs message queue → Stack Job sets it up

### Manual Triggers
Sometimes you need explicit control:
```bash
# Refresh infrastructure state
planton infra refresh orders-db

# Destroy test environment
planton infra destroy test-cluster
```

### Scheduled Operations
For maintenance and compliance:
- Nightly state refresh to detect drift
- Weekly backup validation
- Monthly certificate renewal

## Stack Job Operations

Each Stack Job can include different operations:

### Core Operations

**Init** (Always runs)
- Initializes the IaC provider
- Downloads required modules
- Sets up the workspace

**Refresh** (Optional but recommended)
- Syncs state with actual cloud resources
- Detects manual changes (drift)
- Updates state file

**Plan/Preview** (Highly recommended)
- Shows what will change
- Validates configuration
- Catches errors early

**Apply/Update** (The main event)
- Makes the actual changes
- Creates/updates/modifies resources
- Updates state

**Destroy** (When needed)
- Removes resources cleanly
- Updates dependencies
- Cleans up state

### Operation Flow Control

You can control how operations execute:

```yaml
# Flow control policy example
flowControl:
  skipRefresh: false                    # Always sync state first
  previewBeforeUpdate: true             # Require plan step
  pauseBetweenPreviewAndUpdate: true    # Manual approval needed
  isManual: false                       # Auto-start execution
  disableOnLifecycleEvents: false       # Auto-trigger on changes
```

## Real-World Stack Job Patterns

### The Simple Update
Developer changes database storage size:
```
1. Init (2s)
2. Refresh (5s) 
3. Plan (8s) - Shows: "Will resize volume from 100GB to 200GB"
4. Apply (45s) - Resizes storage
Total: 1m 0s
```

### The Production Deployment
Critical infrastructure change with approvals:
```
1. Init (2s)
2. Refresh (5s)
3. Plan (10s) - Shows all changes
4. ⏸️ Wait for approval (manual gate)
5. Apply (2m 30s) - Executes changes
Total: 2m 47s + approval time
```

### The Drift Detection
Scheduled refresh finds manual changes:
```
1. Init (2s)
2. Refresh (5s) - Detects: "Security group rule added manually"
3. Plan (8s) - Shows: "Will remove unauthorized rule"
4. Apply (15s) - Restores desired state
Total: 30s
```

## Stack Job Intelligence

Stack Jobs aren't just dumb execution—they're smart about:

### Credential Selection
- Automatically picks the right AWS/GCP/Azure credentials
- Uses environment-specific credentials
- Validates permissions before starting

### Module Resolution  
- Selects Terraform or Pulumi based on preferences
- Uses custom modules when configured
- Falls back to platform defaults

### State Management
- Configures backend automatically
- Handles state locking
- Manages workspace isolation

### Error Handling
- Retries transient failures
- Rolls back on critical errors  
- Preserves detailed error logs

## Monitoring Stack Jobs

Stay informed about your infrastructure changes:

### Real-Time Progress
```bash
# Watch a job execute
planton stack-job logs sj_01jsrnmwpnnc6n62h06xafcgxv --follow

# Output
[INIT] Initializing Terraform...
[INIT] ✓ Provider plugins downloaded
[REFRESH] Reading current state...
[REFRESH] ✓ State synchronized
[PLAN] Calculating changes...
[PLAN] ~ aws_alb.main
[PLAN]   ~ idle_timeout: 60 → 120
[PLAN] ✓ Plan complete: 1 to change
[APPLY] Applying changes...
[APPLY] ✓ Apply complete! Resources: 0 added, 1 changed, 0 destroyed
```

### Status Overview
- **Pending**: Waiting to start
- **Running**: Currently executing
- **Succeeded**: Completed successfully
- **Failed**: Encountered errors
- **Cancelled**: Manually stopped

## Common Questions

### Why not just use Terraform/Pulumi directly?
Stack Jobs add value beyond raw IaC tools:
- Automated credential injection
- Consistent workflow across teams
- Audit trail and compliance
- Integration with service deployments
- No local setup required

### Can I customize the execution flow?
Absolutely! Use Flow Control Policies to:
- Skip certain steps
- Add approval gates
- Change operation order
- Disable automatic triggers

### What happens if a Stack Job fails?
- Detailed error logs are preserved
- State is safely maintained
- You can retry or rollback
- Notifications alert the team

### How fast are Stack Jobs?
Most jobs complete in 1-5 minutes:
- Simple updates: 30-60 seconds
- Complex provisioning: 3-5 minutes
- Large infrastructure: 10-15 minutes

## What's Next?

Now that you understand Stack Jobs, explore:

- **[Getting Started](/docs/infra-hub/getting-started)** - Deploy your first resource
- **[Stack Jobs Deep Dive](/docs/infra-hub/stack-jobs)** - Advanced features and optimization
- **[Flow Control](/docs/infra-hub/flow-control)** - Customize execution workflows
- **[Troubleshooting](/docs/infra-hub/troubleshooting)** - Debug failed jobs

Remember, Stack Jobs are designed to be boring—predictable, reliable, and forgettable. Let them handle the complexity while you focus on building.
