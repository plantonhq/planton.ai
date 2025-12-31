---
title: "Deployment Environments"
description: "Control which environments your services deploy to with granular configuration"
icon: deployment
order: 40
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi
---

# Deployment Environments

Not every service needs to be everywhere. Sometimes your API should only deploy to production and staging, skipping the QA environment. Or maybe your experimental service should stay in development until it's ready. Planton Cloud gives you precise control over where your services deploy, while keeping your repository structure clean and conflict-free.

https://customer-2qlxy8sdsbupfhfx.cloudflarestream.com/30b8891cadfa41002933be0c1f6a5900/iframe

## What You'll Learn

In this guide, you'll discover how to:
- Configure services to deploy to specific environments only
- Understand the relationship between _kustomize overlays and deployment environments
- Handle branch-based deployments without merge conflicts
- Use deployment environments for complex multi-environment setups

## The Challenge: One Repo, Many Environments

Modern organizations often have multiple environments—dev, staging, UAT, production, and more. When using branch-based deployments, you might have:
- Different branches for different environments
- A need to keep all environment configurations in the repository
- Regular branch synchronization that creates merge conflicts

This creates a dilemma: How do you maintain configurations for all environments without deploying to all of them?

## How Deployment Environments Work

Planton Cloud solves this with the `deployment_environments` field in your service specification. This field acts as a filter on your _kustomize overlay directories.

### The Default Behavior

When `deployment_environments` is empty (the default), your service deploys to **all** environments found in your _kustomize overlays:

```yaml
# Service spec - deploys to ALL overlays
spec:
  deployment_environments: []  # or omit entirely
```

With this configuration, if your _kustomize directory has dev, stage, and uat overlays, the service deploys to all three.

### Selective Deployment

To deploy only to specific environments, list them explicitly:

```yaml
# Service spec - deploys ONLY to dev and stage
spec:
  deployment_environments:
    - dev
    - stage
```

Now, even if your repository has dev, stage, and uat overlays, the service only deploys to dev and stage.

![Service showing deployment environments configuration](https://assets.planton.ai/site/images/docs/service-hub/deployment-environments/service-showing-deployment-environments.png)

## Git Branch Label: Repository-Level Control

For even more granular control, you can configure branch-based deployments directly in your _kustomize overlay manifests using the `planton.ai/git-branch` label. When present, this label takes precedence over the service-level `deployment_environments` configuration.

### How It Works

Add the `planton.ai/git-branch` label to your overlay's service.yaml `metadata.labels` section:

```yaml
# _kustomize/overlays/dev/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: KubernetesDeployment
metadata:
  name: my-service
  env: dev
  labels:
    planton.ai/git-branch: dev-*  # Matches dev, dev-feature, dev-hotfix
spec:
  # ... configuration
```

### Precedence Order

When determining which overlays to deploy:

1. **Branch Label First**: If `planton.ai/git-branch` exists in an overlay, it must match the commit's branch (using glob pattern matching)
2. **Fallback to Service Config**: If the label is absent, the overlay is subject to `deployment_environments` filtering
3. **Default Behavior**: If neither is configured, the overlay deploys

This means you can mix and match: some overlays can use branch labels while others rely on `deployment_environments`.

### Pattern Matching

The label supports glob patterns for flexible branch matching:

**Exact Match**:
```yaml
labels:
  planton.ai/git-branch: main  # Only matches "main"
```

**Wildcard Suffix**:
```yaml
labels:
  planton.ai/git-branch: dev-*  # Matches dev-feature, dev-hotfix, dev-123
```

**Wildcard Prefix**:
```yaml
labels:
  planton.ai/git-branch: feature/*  # Matches feature/login, feature/checkout
```

**Any Branch**:
```yaml
labels:
  planton.ai/git-branch: "*"  # Matches all branches
```

**Multiple Wildcards**:
```yaml
labels:
  planton.ai/git-branch: release-*-hotfix  # Matches release-1.0-hotfix, release-2.1-hotfix
```

Matching is **case-sensitive**: `dev` does not match `Dev`.

### Real-World Example

Here's how a microservice might configure different overlays:

```yaml
# _kustomize/overlays/dev/service.yaml
metadata:
  env: dev
  labels:
    planton.ai/git-branch: dev-*  # Deploys for any dev-* branch

---
# _kustomize/overlays/staging/service.yaml
metadata:
  env: staging
  labels:
    planton.ai/git-branch: main  # Only deploys from main branch

---
# _kustomize/overlays/prod/service.yaml
metadata:
  env: prod
  labels:
    planton.ai/git-branch: release-*  # Only deploys from release branches
```

With this setup:
- Commit to `dev-feature` → deploys only to dev
- Commit to `main` → deploys only to staging
- Commit to `release-1.0` → deploys only to prod

### Troubleshooting

**Overlay not deploying despite matching branch?**
- Check the label value matches exactly (case-sensitive)
- Verify the pattern uses valid glob syntax (`*` for any characters, `?` for single character)
- Ensure there are no extra spaces in the label value

**Need to test pattern matching?**
The matching follows standard glob conventions:
- `*` matches zero or more characters
- `?` matches exactly one character
- Literal characters must match exactly

## Understanding the Directory Structure

Let's look at a typical _kustomize structure with multiple environments:

```bash
_kustomize/
├── base/
│   ├── kustomization.yaml
│   └── service.yaml
└── overlays/
    ├── dev/
    │   ├── kustomization.yaml
    │   └── service.yaml
    ├── stage/
    │   ├── kustomization.yaml
    │   └── service.yaml
    └── uat/
        ├── kustomization.yaml
        └── service.yaml
```

Each overlay directory represents a potential deployment environment. The `deployment_environments` field determines which of these actually get deployed.

### Base Configuration

The base contains common configuration shared across all environments:

```yaml
# _kustomize/base/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: KubernetesDeployment
metadata:
  name: retail-hub-checkout-service
  org: acmecorp
```

### Environment Overlays

Each overlay patches the base with environment-specific settings:

```yaml
# _kustomize/overlays/dev/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: KubernetesDeployment
metadata:
  env: dev
  name: retail-hub-checkout-service
spec:
  availability:
    minReplicas: 1
  container:
    app:
      ports:
      - appProtocol: http
        containerPort: 3000
        name: rest
        networkProtocol: TCP
        servicePort: 80
      resources:
        limits:
          cpu: 500m
          memory: 500Mi
        requests:
          cpu: 50m
          memory: 100Mi
  version: main
```

## Real-World Use Cases

### Branch-Based Deployments

When using branch-based deployments, teams often face merge conflicts in _kustomize directories. The deployment environments feature solves this elegantly:

**Scenario**: You have branches for dev, staging, and UAT, each deploying to its respective environment.

**Solution**: 
1. Keep all overlay directories in all branches
2. Create separate services for each branch-environment combination
3. Configure each service to deploy only to its target environment

```yaml
# checkout-service-dev (from dev branch)
spec:
  deployment_environments:
    - dev

# checkout-service-stage (from staging branch)  
spec:
  deployment_environments:
    - stage

# checkout-service-uat (from uat branch)
spec:
  deployment_environments:
    - uat
```

This way, when branches merge, the _kustomize directories don't conflict, and each service still deploys only where intended.

### Progressive Rollouts

Start with limited environments and expand as your service matures:

```yaml
# Initial: Dev only
deployment_environments:
  - dev

# After testing: Add staging
deployment_environments:
  - dev
  - stage

# Production ready: Full rollout
deployment_environments:
  - dev
  - stage
  - prod
```

### Environment-Specific Services

Some services should never deploy everywhere:

```yaml
# Debug tool - dev only
deployment_environments:
  - dev

# Canary service - staging first
deployment_environments:
  - stage

# Legacy migration - specific environments
deployment_environments:
  - legacy-prod
  - legacy-dr
```

## How It Works in Pipelines

When a pipeline runs, it respects your deployment environment configuration:

1. **Build Stage**: Completes normally, building your container image
2. **Deployment Task Creation**: Only creates tasks for configured environments
3. **Selective Deployment**: Skips environments not in the list

![Pipeline showing deployment tasks](https://assets.planton.ai/site/images/docs/service-hub/deployment-environments/pipeline-detail-showing-the-deployment-task.png)

In this example, even though the repository has dev, stage, and uat overlays, the pipeline only creates deployment tasks for the configured environments.

## Configuring Deployment Environments

### Through the Web Console

1. Navigate to your service
2. Click on the deployment environments selector
3. Choose which environments to deploy to
4. Save your changes

![Deployment environment selector](https://assets.planton.ai/site/images/docs/service-hub/deployment-environments/deployment-environment-selector-model-with-dev-and-stage-selected.png)

### Through the CLI

Update your service YAML:

```yaml
apiVersion: service-hub.planton.cloud/v1
kind: Service
metadata:
  name: checkout-service
spec:
  deployment_environments:
    - dev
    - stage
    # uat is omitted - won't deploy there
```

Apply the configuration:

```bash
planton apply -f service.yaml
```

### Through API

The deployment_environments field is part of the ServiceSpec protobuf:

```protobuf
// From cloud/planton/apis/servicehub/service/v1/spec.proto
message ServiceSpec {
  // ... other fields ...
  
  // optional list of environments to which this service is configured to be deployed to.
  // if this list is empty, service is deployed to all environments identified from _kustomize directory in the service repo.
  // if this list is non-empty, pipeline orchestration will only deploy to the environments from _kustomize directory in the service repo matching this list.
  repeated string deployment_environments = 6;
}
```

## Best Practices

### 1. **Start Permissive, Tighten Later**

Begin with empty `deployment_environments` (deploy everywhere), then restrict as needed:

```yaml
# Initial: Deploy to all overlays
deployment_environments: []

# Later: Restrict to specific environments
deployment_environments: ["prod", "stage"]
```

### 2. **Document Your Strategy**

Add comments explaining why certain environments are excluded:

```yaml
deployment_environments:
  - prod
  - stage
  # UAT excluded - separate service handles UAT deployments
  # Dev excluded - using local development instead
```

### 3. **Consistent Naming**

Use consistent environment names across your organization:
- ✅ Good: `dev`, `stage`, `prod`
- ❌ Avoid: `development`, `dev-env`, `develop`

### 4. **Branch Strategy Alignment**

If using branch-based deployments:
- Keep all overlay directories in all branches
- Use deployment_environments to control where each branch deploys
- Document the branch-to-environment mapping

## Common Patterns

### Single Environment Services

For branch-specific deployments:

```yaml
# Service from 'develop' branch
deployment_environments:
  - dev

# Service from 'release' branch
deployment_environments:
  - stage
  - uat

# Service from 'main' branch
deployment_environments:
  - prod
```

### Gradual Rollout

For new features or services:

```yaml
# Week 1: Dev only
deployment_environments: ["dev"]

# Week 2: Add staging
deployment_environments: ["dev", "stage"]

# Week 3: Add UAT
deployment_environments: ["dev", "stage", "uat"]

# Week 4: Full rollout
deployment_environments: []  # All environments
```

### Environment Groups

For services that deploy to related environments:

```yaml
# API Gateway - all customer-facing environments
deployment_environments:
  - prod-us
  - prod-eu
  - prod-asia

# Internal Tools - non-production only
deployment_environments:
  - dev
  - stage
  - uat
```

## Troubleshooting

### Service Not Deploying to Expected Environment

1. **Check the overlay exists**: Ensure the environment has a corresponding overlay directory
2. **Verify the environment name**: Names must match exactly (case-sensitive)
3. **Review pipeline logs**: Check if deployment tasks were created

### All Environments Deploying Despite Configuration

- Ensure `deployment_environments` is not empty in your service spec
- Verify the configuration was applied successfully
- Check that you're looking at the right service

### Pipeline Shows Different Environments Than Expected

Remember that deployment happens in stages:
1. First, the build completes
2. Then, deployment tasks are created based on your configuration
3. The pipeline UI shows which tasks were actually created

![Pipeline with selective deployment](https://assets.planton.ai/site/images/docs/service-hub/deployment-environments/pipeline-detail-showing-dev-and-stage-deployment-tasks.png)

## Next Steps

- [Learn about multi-environment strategies](/docs/platform/environments)
- [Configure environment-specific settings with Kustomize](/docs/service-hub/deployment-stage)
- [Set up branch-based deployments](/docs/service-hub/branch-deployments)

## See Also

- [Service Hub Overview](/docs/service-hub)
- [Understanding Services](/docs/service-hub/what-is-a-service)
- [Deployment Stage Documentation](/docs/service-hub/deployment-stage)

---

*Based on: `planton.ai/workspace/transcripts/service-hub/service-environments.transcript.md`*
*Source: `planton-cloud/apis/cloud/planton/apis/servicehub/service/v1/spec.proto`*
