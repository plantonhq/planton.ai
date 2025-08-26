---
title: "Getting Started with InfraHub"
description: "Deploy your first cloud resource on Planton Cloud in under 5 minutes"
icon: guide
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
  - Getting Started
  - InfraHub
---

# Getting Started with InfraHub

## From Zero to Deployed Infrastructure in 5 Minutes

Let's get your first cloud resource running on Planton Cloud. By the end of this guide, you'll have:
- Connected your cloud provider account
- Browsed the deployment component catalog
- Deployed real infrastructure
- Watched it happen through Stack Jobs

> **Prerequisites**: You'll need a Planton Cloud account and access to an AWS, GCP, or Azure account where you want to deploy resources.

## Step 1: Connect Your Cloud Provider

First, let's add your cloud provider credentials so Planton Cloud can provision resources on your behalf.

### AWS
```yaml
# Create AWS credential
apiVersion: connect.planton.cloud/v1
kind: AwsCredential
metadata:
  name: aws-dev-account
  org: your-org
spec:
  accessKeyId: ${AWS_ACCESS_KEY_ID}
  secretAccessKey: ${AWS_SECRET_ACCESS_KEY}
  region: us-east-1
```

### GCP
```yaml
# Create GCP credential
apiVersion: connect.planton.cloud/v1
kind: GcpCredential
metadata:
  name: gcp-dev-project
  org: your-org
spec:
  projectId: my-project-123
  serviceAccountKeyBase64: ${GCP_SERVICE_ACCOUNT_KEY_BASE64}
```

### Azure
```yaml
# Create Azure credential
apiVersion: connect.planton.cloud/v1
kind: AzureCredential
metadata:
  name: azure-dev-subscription
  org: your-org
spec:
  subscriptionId: ${AZURE_SUBSCRIPTION_ID}
  tenantId: ${AZURE_TENANT_ID}
  clientId: ${AZURE_CLIENT_ID}
  clientSecret: ${AZURE_CLIENT_SECRET}
```

> **Security Note**: Credentials are encrypted at rest and in transit. Only authorized Stack Jobs can access them during execution.

## Step 2: Create an Environment

Environments organize your resources and control which credentials are used:

```yaml
apiVersion: resource-manager.planton.cloud/v1
kind: Environment
metadata:
  name: development
  org: your-org
spec:
  description: Development environment for testing
  environmentType: development
```

After creating the environment, the system automatically maps your credential to it if it's the first credential for that provider.

## Step 3: Browse the Deployment Component Catalog

Now for the fun part—let's explore what you can deploy! The Deployment Component catalog offers 50+ pre-configured infrastructure components.

### Popular Components by Provider

**AWS Components**
- **VPC**: Complete network setup with subnets and routing
- **EKS Cluster**: Managed Kubernetes with best practices
- **RDS Database**: PostgreSQL/MySQL with backups
- **S3 Bucket**: Object storage with versioning
- **ALB**: Application Load Balancer with SSL

**GCP Components**
- **GKE Cluster**: Google Kubernetes Engine
- **Cloud SQL**: Managed PostgreSQL/MySQL
- **GCS Bucket**: Cloud Storage bucket
- **Cloud Run**: Serverless containers

**Kubernetes Components**
- **PostgreSQL**: Production-ready database
- **Redis**: In-memory cache
- **Kafka**: Event streaming platform
- **Elasticsearch**: Search and analytics

## Step 4: Deploy Your First Resource

Let's deploy a PostgreSQL database—a common first resource that shows the power of InfraHub.

### Option A: Deploy to Kubernetes

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: my-first-db
  org: your-org
  env: development
spec:
  version: "15.3"
  resources:
    requests:
      cpu: 100m
      memory: 256Mi
    limits:
      cpu: 1000m
      memory: 1Gi
  storage:
    size: 10Gi
    class: gp3
  backup:
    enabled: true
    schedule: "0 2 * * *"  # 2 AM daily
```

### Option B: Deploy to AWS RDS

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsRds
metadata:
  name: my-first-rds
  org: your-org
  env: development
spec:
  engine: postgres
  engineVersion: "15.3"
  instanceClass: db.t3.micro
  allocatedStorage: 20
  multiAz: false
  publiclyAccessible: false
  backupRetentionPeriod: 7
```

## Step 5: Watch the Magic Happen

As soon as you submit the configuration, InfraHub springs into action:

1. **Stack Job Created**: A new job appears with status "Pending"
2. **Pre-flight Checks**: Validates credentials and permissions
3. **Execution Begins**: The Stack Job Runner picks up the job
4. **Real-time Progress**: Watch each step execute

```bash
# Follow the deployment
planton stack-job logs sj_<job-id> --follow

# You'll see:
[INIT] Downloading Terraform providers...
[INIT] ✓ Providers initialized
[REFRESH] Checking current state...
[REFRESH] ✓ No existing resources found
[PLAN] Planning infrastructure changes...
[PLAN] + aws_db_instance.main
[PLAN] + aws_db_subnet_group.main
[PLAN] + aws_security_group.rds
[PLAN] ✓ Plan: 3 to add, 0 to change, 0 to destroy
[APPLY] Creating resources...
[APPLY] ✓ aws_security_group.rds created
[APPLY] ✓ aws_db_subnet_group.main created
[APPLY] ✓ aws_db_instance.main created (5m 23s)
[COMPLETE] ✓ Deployment successful!
```

## Step 6: Access Your Resource

Once deployed, your resource details are available:

```yaml
# Resource status shows outputs
status:
  outputs:
    endpoint: my-first-rds.c9ak3.us-east-1.rds.amazonaws.com
    port: 5432
    username: postgres
    secretName: rds-my-first-rds-credentials
```

For Kubernetes resources, connection details are stored in secrets:
```bash
# Get connection details
kubectl get secret postgres-my-first-db-credentials -o yaml
```

## Common First Deployments

### Simple Web App Infrastructure

Deploy everything needed for a basic web application:

**1. Network Layer (AWS VPC)**
```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsVpc
metadata:
  name: app-network
spec:
  cidrBlock: "10.0.0.0/16"
  enableDnsHostnames: true
  enableNatGateway: true
  singleNatGateway: true  # Save costs in dev
```

**2. Kubernetes Cluster (EKS)**
```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsEksCluster
metadata:
  name: app-cluster
spec:
  version: "1.28"
  vpcId: ${vpc.app-network.id}
  nodeGroups:
    - name: general
      instanceTypes: ["t3.medium"]
      minSize: 2
      maxSize: 5
```

**3. Database (RDS)**
```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsRds
metadata:
  name: app-database
spec:
  engine: postgres
  instanceClass: db.t3.small
  vpcId: ${vpc.app-network.id}
```

**4. Load Balancer (ALB)**
```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsAlb
metadata:
  name: app-lb
spec:
  vpcId: ${vpc.app-network.id}
  certificateArn: ${acm.app-cert.arn}
```

### Development Database Stack

Quick PostgreSQL with Redis cache:

```yaml
# PostgreSQL for persistent data
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: dev-postgres
spec:
  version: "15"
  storage:
    size: 20Gi
---
# Redis for caching
apiVersion: infra-hub.planton.cloud/v1
kind: RedisKubernetes
metadata:
  name: dev-redis
spec:
  version: "7"
  persistence:
    enabled: false  # Cache only
```

## Understanding What Just Happened

When you deployed your first resource, InfraHub orchestrated a complex workflow:

### 1. Configuration Processing
- Validated your YAML against the resource schema
- Resolved any variable references
- Created a versioned configuration entry

### 2. Stack Job Creation
- Determined which IaC module to use (Terraform/Pulumi)
- Selected the appropriate credentials
- Configured the state backend
- Applied your organization's flow control policy

### 3. Execution
- Stack Job Runner received the job
- Downloaded the IaC module from the registry
- Injected your configuration as variables
- Executed the multi-step workflow
- Streamed logs back to you

### 4. State Management
- Stored Terraform/Pulumi state securely
- Recorded outputs for reference
- Updated resource status

## Customizing Your Deployment

### Choose Your IaC Tool

By default, your organization uses either Terraform or Pulumi. You can check:

```bash
# See your organization's default
planton org describe your-org

# Output includes:
iacProvisioner: terraform  # or pulumi
```

### Control the Flow

Want manual approvals for production? Configure a flow control policy:

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: FlowControlPolicy
metadata:
  name: production-careful
spec:
  selector:
    kind: environment
    id: production
  flowControl:
    previewBeforeUpdate: true
    pauseBetweenPreviewAndUpdate: true  # Manual approval
```

### Bring Your Own Modules

Not happy with the default PostgreSQL module? Bring your own:

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: IacModule
metadata:
  name: custom-postgres
  org: your-org
spec:
  provisioner: terraform
  cloudResourceKind: postgres_kubernetes
  gitRepo:
    cloneUrl: https://github.com/your-org/postgres-module
    branch: main
    projectDir: terraform
```

## Troubleshooting Your First Deployment

### Stack Job Fails with "Invalid credentials"

Check that your credential is properly authorized for the environment:
```bash
# List credential mappings
planton env describe development

# Re-authorize if needed
planton credential authorize aws-dev-account --env development
```

### "Resource already exists" Error

If you're retrying a deployment:
```yaml
# Option 1: Import existing resource
planton infra import my-first-db --resource-id i-1234567

# Option 2: Choose a different name
metadata:
  name: my-second-db
```

### Can't Find the Component I Need

The catalog is constantly growing. If you need something specific:
1. Check if a similar component exists
2. Use a generic component (like `KubernetesManifest`)
3. Create a custom IaC module
4. Request it in the community forum

## What's Next?

Congratulations! You've deployed your first infrastructure with InfraHub. Here's where to go next:

- **[Deployment Components](/docs/infra-hub/deployment-components)** - Explore the full catalog
- **[Stack Jobs Deep Dive](/docs/infra-hub/stack-jobs)** - Understand the execution model
- **[Flow Control](/docs/infra-hub/flow-control)** - Set up governance policies
- **[Multi-Environment Guide](/docs/infra-hub/multi-environment)** - Dev, staging, and production

> **Pro tip:** Start simple with one or two resources, then build up your infrastructure incrementally. InfraHub makes it easy to evolve your setup over time.

## Quick Reference

### Essential Commands
```bash
# List available components
planton component list

# Deploy a resource
planton apply -f resource.yaml

# Check deployment status
planton stack-job list --env development

# Get resource details
planton describe <kind> <name>

# Delete a resource
planton delete <kind> <name>
```

### Next Resource Ideas
After your database, consider:
- **Message Queue**: Kafka or RabbitMQ for async processing
- **Cache Layer**: Redis for performance
- **Object Storage**: S3/GCS for file storage
- **CDN**: CloudFront for static assets
- **Monitoring**: Prometheus and Grafana

Remember, InfraHub is designed to make infrastructure as easy as deploying code. Start small, experiment, and build confidence. You've got this! 🚀
