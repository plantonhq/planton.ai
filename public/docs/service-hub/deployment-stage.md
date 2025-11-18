---
title: "Service Deployment Stage"
description: "How Planton Cloud deploys your services to Kubernetes and ECS using Kustomize overlays"
icon: deployment
order: 30
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi
---

# Service Deployment Stage

Remember pushing to Vercel and watching your app magically appear online? Planton Cloud brings that same delightful experience to backend services, but with enterprise-grade flexibility. After your code builds, the deployment stage takes over—transforming your container images into live services across multiple environments.

## What You'll Learn

In this guide, you'll discover how Planton Cloud:
- Uses Kustomize to manage environment-specific configurations
- Deploys services to Kubernetes clusters and AWS ECS
- Handles multi-environment deployments from a single codebase
- Integrates deployments seamlessly with the build pipeline

## How Deployment Works

The deployment stage kicks in automatically after your build completes. Here's the journey your service takes:

1. **Build Completion**: Once your container image is pushed to the registry, Tekton runs a `kustomize build` step
2. **Configuration Discovery**: The system looks for a `_kustomize` folder in your repository
3. **Manifest Generation**: Kustomize generates environment-specific manifests from your overlays
4. **Deployment Orchestration**: Each environment overlay becomes a deployment task
5. **Infrastructure Application**: Stack jobs apply the infrastructure changes

## Setting Up Kustomize

The easiest way to get started is using the Planton CLI:

```bash
# Initialize a new _kustomize directory for a new service
planton service kustomize init --new

# Or initialize based on an existing resource
planton service kustomize init <resource-kind> <resource-id>
```

The CLI will:
1. Prompt you to choose a deployment platform (Kubernetes or AWS ECS)
2. Ask which environment to configure
3. Generate the complete _kustomize structure with starter configurations

## The _kustomize Structure

Think of Kustomize as your deployment blueprint. Here's what a typical structure looks like:

```bash
_kustomize/
├── base/
│   ├── kustomization.yaml
│   └── service.yaml
└── overlays/
    ├── local/           # Special: Used for .env generation only, NOT deployed
    │   ├── kustomization.yaml
    │   └── service.yaml
    └── prod/            # Directory name "prod" (metadata.env in service.yaml defines actual environment)
        ├── kustomization.yaml
        └── service.yaml
```

### Base Configuration

The base layer defines your service's core configuration—the settings that stay consistent across all environments:

```yaml
# _kustomize/base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - service.yaml
```

```yaml
# _kustomize/base/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: MicroserviceKubernetes
metadata:
  name: my-service
  org: my-org
spec:
  container:
    app:
      env:
        variables:
          PORT: "8080"
          LOG_LEVEL: info
      resources:
        limits:
          cpu: 500m
          memory: 500Mi
        requests:
          cpu: 50m
          memory: 100Mi
      ports:
        - name: grpc-api
          appProtocol: grpc
          networkProtocol: TCP
          servicePort: 80
          containerPort: 8080
          isIngressPort: true
  ingress:
    enabled: true
    dnsDomain: example.com
  availability:
    minReplicas: 1
  version: main
```

### Environment Overlays

Each overlay represents a deployment environment. Overlays inherit from the base and apply environment-specific modifications:

> **Note:** The `local` overlay directory is special - it's completely ignored during deployment. This overlay exists solely for developers to override environment variables and secrets when generating `.env` files for local development. No deployment task is created for the `local` overlay.

> **Important:** The overlay directory name (e.g., `prod`, `staging`) doesn't have to match the Planton Cloud environment name. The actual environment is determined by the `metadata.env` field in your service.yaml file, not by the directory name. This gives you flexibility in organizing your overlays.

```yaml
# _kustomize/overlays/prod/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - ../../base

patches:
  - path: service.yaml
```

```yaml
# _kustomize/overlays/prod/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: MicroserviceKubernetes
metadata:
  name: my-service
  env: app-prod  # This is the actual Planton Cloud environment name
spec:
  container:
    app:
      resources:
        limits:
          cpu: "2"
          memory: 2Gi
        requests:
          cpu: 200m
          memory: 500Mi
      env:
        variables:
          LOG_LEVEL: warn
          DATABASE_POOL_SIZE: "20"
        secrets:
          DATABASE_PASSWORD: $secrets-group/database/password
  availability:
    minReplicas: 3
    horizontalPodAutoscaling:
      isEnabled: true
      maxReplicas: 10
```

### Branch-Based Deployment Control

For more granular control over when overlays deploy, you can add the `planton.ai/git-branch` label to your overlay manifests. This label uses glob pattern matching to determine if the overlay should deploy based on the Git commit's branch:

```yaml
# _kustomize/overlays/dev/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: MicroserviceKubernetes
metadata:
  name: my-service
  env: dev
  labels:
    planton.ai/git-branch: dev-*  # Only deploys for dev-* branches
spec:
  # ... configuration
```

The label supports patterns like:
- `main` - exact match only
- `dev-*` - matches dev-feature, dev-hotfix, etc.
- `feature/*` - matches feature/login, feature/checkout, etc.

When present, this label takes precedence over the service-level `deployment_environments` configuration. See [Deployment Environments](/docs/service-hub/deployment-environments#git-branch-label-repository-level-control) for full details and examples.

## Supported Deployment Targets

Currently, Planton Cloud supports deploying services to:

### MicroserviceKubernetes
Deploy containerized services to Kubernetes clusters with full control over:
- Resource limits and requests
- Environment variables and secrets
- Ingress configuration
- Horizontal pod autoscaling
- Service ports and protocols

### AwsEcsService
Deploy to AWS ECS for managed container orchestration:
- Fargate or EC2 launch types
- Task definitions with container specifications
- Service auto-scaling
- Load balancer integration

## Deployment Process Deep Dive

When you push code, here's what happens behind the scenes:

### 1. Kustomize Build
After your container image is built and pushed, Tekton executes:
```bash
kustomize build _kustomize/overlays/prod
```

This generates a complete manifest for each environment by merging the base with overlay-specific patches.

### 2. ConfigMap Storage
The generated manifests are stored as a ConfigMap in Kubernetes. This creates a mapping between:
- Environment name (from overlay directory)
- Generated cloud resource manifest

### 3. Deployment Task Creation
The orchestration system creates one deployment task for each overlay directory, **except for the `local` overlay which is skipped**. The deployment task name comes from the directory, but the actual Planton Cloud environment is determined by `metadata.env` in the service.yaml:

- `local/` overlay → No deployment task (used for .env generation only)
- `prod/` overlay → Creates deployment task named "prod" (deploys to environment specified in metadata.env, e.g., "app-prod")
- `staging/` overlay → Creates deployment task named "staging" (deploys to environment in metadata.env, e.g., "app-staging")

**Selective Environment Deployment**: If your service has configured `deployment_environments`, only matching overlays get deployment tasks. For example, if `deployment_environments: ["dev", "stage"]`, then:
- `dev/` overlay → Creates deployment task
- `stage/` overlay → Creates deployment task  
- `uat/` overlay → Skipped (not in deployment_environments list)
- `prod/` overlay → Skipped (not in deployment_environments list)

This gives you precise control over where your services deploy. See [Deployment Environments](/docs/service-hub/deployment-environments) for detailed configuration.

### 4. Stack Job Execution
Each deployment task triggers a Stack Job that:
- Takes the generated manifest
- Runs Pulumi or Terraform to apply the infrastructure
- Creates or updates your service in the target environment

## Environment Variables and Secrets

Planton Cloud uses a powerful variable substitution system. Reference variables and secrets using:

```yaml
env:
  variables:
    DATABASE_HOST: $variables-group/database/host
    REDIS_PORT: $variables-group/redis/port
  secrets:
    DATABASE_PASSWORD: $secrets-group/database/password
    API_KEY: $secrets-group/external-api/key
```

These references are resolved at deployment time, keeping sensitive data secure.

## Local Development with the `local` Overlay

The `local` overlay serves a unique purpose - it's never deployed but used exclusively for local development:

### Purpose
- Generate `.env` files for running services locally
- Override production values with local development settings
- Keep local configuration separate from deployable environments

### Example Local Overlay
```yaml
# _kustomize/overlays/local/service.yaml
apiVersion: kubernetes.project-planton.org/v1
kind: MicroserviceKubernetes
metadata:
  name: my-service
spec:
  container:
    app:
      env:
        variables:
          DATABASE_HOST: localhost
          DATABASE_PORT: "5432"
          REDIS_HOST: localhost
          API_ENDPOINT: http://localhost:8080
        secrets:
          DATABASE_PASSWORD: local-dev-password
```

### Generating .env Files
Developers can use the local overlay to generate `.env` files:
```bash
# Generate .env and .env_export files from the local overlay
planton service dot-env --env local

# You can also override specific variables
planton service dot-env --env local --set API_KEY=test-key --set DEBUG=true
```

This command creates:
- `.env` - Standard environment variable file
- `.env_export` - Export format for shell sourcing

This keeps local development configuration version-controlled while ensuring it never accidentally deploys to production.

## Manual Approval Gates

For production deployments, you might want manual approval. The deployment stage supports approval gates that pause the pipeline until authorized:

```yaml
# In your pipeline configuration
requiresManualGate: true
```

When a manual gate is encountered:
1. The deployment pauses and awaits approval
2. Authorized users can approve or reject through the UI
3. Approved deployments continue; rejected ones fail the pipeline

## Deployment Status and Monitoring

Track your deployments through:
- **Pipeline UI**: Real-time status of each deployment task
- **Stack Job Logs**: Detailed infrastructure provisioning output
- **Service Status**: Live service health and metrics

## Common Patterns

### Flexible Environment Naming
Your overlay directories can follow any naming convention - the actual environment is set in the YAML:
```
overlays/
├── prod/           # metadata.env: "app-prod"
├── staging/        # metadata.env: "app-staging"
├── qa/             # metadata.env: "testing-qa-1"
└── preview/        # metadata.env: "feature-xyz"
```

### Multi-Region Deployments
Create overlays for each region:
```
overlays/
├── us-east-1/      # metadata.env: "prod-us-east-1"
├── us-west-2/      # metadata.env: "prod-us-west-2"
└── eu-west-1/      # metadata.env: "prod-eu-west-1"
```

### Feature Branch Deployments
Use branch-based overlays for preview environments:
```
overlays/
├── main/                    # metadata.env: "production"
├── staging/                 # metadata.env: "staging"
└── feature-auth-refactor/   # metadata.env: "preview-auth-refactor"
```

## Troubleshooting

### Kustomize Build Failures
- Ensure `_kustomize/base/kustomization.yaml` lists all resources
- Verify YAML syntax in all service.yaml files
- Check that overlay patches reference valid fields

### Deployment Task Failures
- Review Stack Job logs for infrastructure errors
- Verify cloud provider credentials are configured
- Check resource quotas and limits

### Variable Resolution Issues
- Ensure variable groups exist and contain required keys
- Verify secret references are properly formatted
- Check access permissions for sensitive data

## Next Steps

- [Configure your first service deployment](/docs/service-hub/getting-started#deploy-your-service)
- [Learn about Stack Jobs](/docs/infra-hub/stack-jobs)
- [Explore Pipeline Configuration](/docs/service-hub/pipelines)

## See Also

- [Service Hub Overview](/docs/service-hub)
- [Build Stage Documentation](/docs/service-hub/build-stage)
- [Kustomize Official Documentation](https://kustomize.io/)

---

*Based on: `planton.ai/workspace/transcripts/service-hub/deployment-satge.transcript.md`*
*Implementation: `planton-cloud/backend/services/temporal-worker/.../deploy/`*
