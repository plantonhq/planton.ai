---
title: "Setting Up CI/CD Pipelines with Planton.ai"
date: "2024-11-30"
author:
  - name: "Planton Team"
    title: "DevOps Engineer"
    bio: "Specialist in CI/CD and automation"
tags:
  - "ci-cd"
  - "pipeline"
  - "automation"
  - "deployment"
category: "automation"
excerpt: "Learn how to create robust CI/CD pipelines that automatically build, test, and deploy your applications."
featuredImage: "/images/features/iac-workflows/flow-control.svg"
---

# Setting Up CI/CD Pipelines with Planton.ai

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development. Planton.ai provides powerful tools to create automated pipelines that streamline your development workflow. This tutorial will guide you through setting up a complete CI/CD pipeline.

## What You'll Learn

- Creating automated build pipelines
- Setting up testing stages
- Configuring deployment automation
- Implementing rollback strategies
- Monitoring pipeline health

## Prerequisites

- Planton.ai account with access to Service Hub
- Git repository with your application code
- Basic understanding of Git workflows
- Application ready for automated deployment

## Step 1: Configure Your Repository

First, ensure your repository is properly configured for CI/CD:

1. **Branch Strategy**: Set up main/master branch protection
2. **Webhooks**: Configure webhooks to trigger Planton.ai pipelines
3. **Environment Variables**: Store sensitive configuration securely

## Step 2: Create Your Pipeline Configuration

Define your CI/CD pipeline using Planton.ai's YAML configuration:

```yaml
apiVersion: planton.ai/v1
kind: Pipeline
metadata:
  name: production-deployment
spec:
  triggers:
    - type: git
      branch: main
      events: [push, pull_request]
  
  stages:
    - name: build
      type: build
      steps:
        - name: checkout
          action: git-checkout
        - name: build-app
          action: docker-build
          args:
            dockerfile: ./Dockerfile
            image: my-app:latest
        - name: test
          action: run-tests
          args:
            command: npm test
        - name: security-scan
          action: security-scan
          args:
            tool: trivy
    
    - name: deploy-staging
      type: deployment
      environment: staging
      steps:
        - name: deploy
          action: kubernetes-deploy
          args:
            manifest: ./k8s/staging.yaml
        - name: health-check
          action: health-check
          args:
            endpoint: /health
            timeout: 300
    
    - name: deploy-production
      type: deployment
      environment: production
      manualApproval: true
      steps:
        - name: deploy
          action: kubernetes-deploy
          args:
            manifest: ./k8s/production.yaml
        - name: smoke-tests
          action: run-tests
          args:
            command: npm run smoke-tests
```

## Step 3: Set Up Environments

Configure your deployment environments:

### Staging Environment
```yaml
apiVersion: planton.ai/v1
kind: Environment
metadata:
  name: staging
spec:
  type: kubernetes
  cluster: staging-cluster
  namespace: staging
  variables:
    - name: DATABASE_URL
      value: staging-db.example.com
    - name: LOG_LEVEL
      value: debug
```

### Production Environment
```yaml
apiVersion: planton.ai/v1
kind: Environment
metadata:
  name: production
spec:
  type: kubernetes
  cluster: production-cluster
  namespace: production
  variables:
    - name: DATABASE_URL
      value: production-db.example.com
    - name: LOG_LEVEL
      value: info
  approvals:
    - type: manual
      approvers: ["devops-team", "product-manager"]
```

## Step 4: Configure Automated Testing

Implement comprehensive testing in your pipeline:

```yaml
stages:
  - name: test
    type: testing
    steps:
      - name: unit-tests
        action: run-tests
        args:
          command: npm run test:unit
          coverage: true
      
      - name: integration-tests
        action: run-tests
        args:
          command: npm run test:integration
          environment: test-db
      
      - name: e2e-tests
        action: run-tests
        args:
          command: npm run test:e2e
          browser: chrome
      
      - name: performance-tests
        action: run-tests
        args:
          command: npm run test:performance
          threshold: 2000ms
```

## Step 5: Implement Deployment Strategies

Choose the right deployment strategy for your application:

### Rolling Update (Default)
```yaml
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
```

### Blue-Green Deployment
```yaml
spec:
  strategy:
    type: BlueGreen
    blueGreen:
      autoSwitchover: true
      switchoverDelay: 300
      prePromotionTests:
        - name: health-check
          action: health-check
          args:
            endpoint: /health
```

### Canary Deployment
```yaml
spec:
  strategy:
    type: Canary
    canary:
      steps:
        - name: 10-percent
          weight: 10
          duration: 300
        - name: 50-percent
          weight: 50
          duration: 600
        - name: 100-percent
          weight: 100
```

## Step 6: Set Up Monitoring and Alerting

Monitor your pipeline and deployments:

```yaml
spec:
  monitoring:
    metrics:
      - name: deployment-success-rate
        type: counter
        labels: [environment, service]
      - name: deployment-duration
        type: histogram
        buckets: [30, 60, 120, 300, 600]
    
    alerts:
      - name: deployment-failure
        condition: deployment-success-rate < 0.95
        severity: critical
        channels: [slack, email]
      
      - name: slow-deployment
        condition: deployment-duration > 300
        severity: warning
        channels: [slack]
```

## Step 7: Implement Rollback Strategy

Configure automatic rollback for failed deployments:

```yaml
spec:
  rollback:
    automatic: true
    triggers:
      - type: health-check-failure
        threshold: 3
        window: 300
      - type: error-rate
        threshold: 0.05
        window: 300
    
    strategy:
      type: automatic
      maxAttempts: 3
      delay: 60
```

## Best Practices

1. **Pipeline Design**
   - Keep pipelines simple and focused
   - Use parallel stages for independent operations
   - Implement proper error handling

2. **Security**
   - Scan for vulnerabilities in every build
   - Use secrets management for sensitive data
   - Implement least-privilege access

3. **Testing**
   - Run tests in parallel when possible
   - Use realistic test data
   - Implement flaky test detection

4. **Monitoring**
   - Track pipeline metrics over time
   - Set up alerts for critical failures
   - Monitor deployment success rates

## Troubleshooting Common Issues

### Pipeline Won't Trigger
- Check webhook configuration
- Verify branch protection rules
- Ensure repository permissions

### Build Failures
- Review build logs for errors
- Check dependency versions
- Verify build environment

### Deployment Failures
- Check cluster connectivity
- Verify resource quotas
- Review application logs

## Next Steps

After setting up your basic CI/CD pipeline:

1. **Advanced Features**
   - Implement feature flags
   - Set up A/B testing
   - Configure multi-region deployments

2. **Optimization**
   - Cache dependencies
   - Parallelize independent stages
   - Implement build optimization

3. **Security**
   - Add security scanning
   - Implement compliance checks
   - Set up audit logging

## Conclusion

Setting up CI/CD pipelines with Planton.ai automates your deployment process and reduces human error. The platform provides powerful tools for building, testing, and deploying applications with confidence.

Ready to scale? Explore our [advanced pipeline configurations](/docs/service-hub/pipelines) or learn about [infrastructure as code](/docs/iac-workflows) to take your automation to the next level.
