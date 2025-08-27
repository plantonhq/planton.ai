---
title: "Deployment Components"
description: "Explore the catalog of pre-built cloud resources ready to deploy across AWS, GCP, Azure, and Kubernetes"
icon: guide
order: 40
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi

tags:
  - Catalog
  - Components
  - InfraHub
---

# Deployment Components

## Your Infrastructure Building Blocks

Think of Deployment Components as your infrastructure LEGO set—pre-built, tested, and production-ready pieces that snap together to create your cloud architecture. No more starting from scratch or copy-pasting Terraform modules. Just pick, configure, and deploy.

The Deployment Component catalog is Planton Cloud's answer to the question: "Why do we keep building the same infrastructure over and over?" We've captured the patterns, encoded the best practices, and made them one-click deployable.

> **Component Philosophy**: Every piece of infrastructure you commonly need, available as a declarative resource, with batteries included.

## The Component Catalog

Our catalog offers 50+ components across major cloud providers. Each component is:
- **Production-ready**: Built with security and scalability best practices
- **Highly configurable**: Sensible defaults with extensive customization options  
- **Multi-tool**: Available for both Terraform and Pulumi
- **Continuously updated**: Regular updates for new features and security patches

### Browse by Provider

#### AWS Components
Transform your AWS infrastructure with enterprise-grade components:

**Networking & Security**
- **VPC** - Complete network with subnets, routing, and NAT
- **Security Group** - Firewall rules with smart defaults
- **Route53 Zone** - DNS management with health checks

**Compute & Containers**
- **EKS Cluster** - Managed Kubernetes with addons
- **ECS Service** - Container orchestration simplified
- **Lambda Function** - Serverless compute with deployment

**Storage & Databases**
- **RDS Instance** - PostgreSQL/MySQL with backups
- **DynamoDB Table** - NoSQL with auto-scaling
- **S3 Bucket** - Object storage with lifecycle policies

**Load Balancing & CDN**
- **ALB** - Application Load Balancer with SSL
- **CloudFront** - CDN with custom origins
- **API Gateway** - REST/WebSocket APIs

#### GCP Components
Google Cloud infrastructure made simple:

**Core Infrastructure**
- **GKE Cluster** - Google Kubernetes Engine
- **Cloud SQL** - Managed PostgreSQL/MySQL
- **GCS Bucket** - Cloud Storage with versioning

**Serverless & Compute**
- **Cloud Run Service** - Serverless containers
- **Cloud Functions** - Event-driven compute
- **Compute Instance** - VMs with custom images

**Networking**
- **VPC Network** - Virtual network with peering
- **Cloud Load Balancer** - Global load balancing
- **Cloud CDN** - Content delivery network

#### Azure Components
Microsoft Azure resources simplified:

**Container & Compute**
- **AKS Cluster** - Azure Kubernetes Service
- **Container Instance** - Serverless containers
- **VM Scale Set** - Auto-scaling VMs

**Data & Storage**
- **Cosmos DB** - Globally distributed database
- **Blob Storage** - Object storage with tiers
- **SQL Database** - Managed SQL Server

#### Kubernetes Components
Platform-agnostic components for any Kubernetes cluster:

**Databases**
- **PostgreSQL** - HA database with backups
- **MySQL** - Replicated MySQL setup
- **MongoDB** - Document database cluster

**Messaging & Streaming**
- **Kafka** - Event streaming platform
- **RabbitMQ** - Message broker with management
- **NATS** - High-performance messaging

**Storage & Cache**
- **Redis** - In-memory cache/database
- **MinIO** - S3-compatible object storage
- **Elasticsearch** - Search and analytics

**Development Tools**
- **GitLab** - Complete DevOps platform
- **SonarQube** - Code quality analysis
- **Nexus** - Artifact repository

## Component Deep Dive

Let's explore what makes these components special by looking at a popular one—AWS EKS Cluster:

### Example: AWS EKS Cluster

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsEksCluster
metadata:
  name: prod-api-cluster
  org: acmecorp
  env: production
spec:
  # Kubernetes Configuration
  kubernetesVersion: "1.28"
  
  # Networking
  vpc:
    id: vpc-0123456789abcdef
    subnetIds:
      - subnet-private-1a
      - subnet-private-1b
      - subnet-private-1c
  
  # Node Groups
  nodeGroups:
    - name: general
      instanceTypes: ["t3.large", "t3a.large"]  # Spot-friendly
      minSize: 3
      maxSize: 10
      desiredSize: 5
      labels:
        workload: general
      taints: []
      
    - name: gpu
      instanceTypes: ["g4dn.xlarge"]
      minSize: 0
      maxSize: 5
      desiredSize: 0
      labels:
        workload: gpu
      taints:
        - key: nvidia.com/gpu
          value: "true"
          effect: NoSchedule
  
  # Addons (batteries included!)
  addons:
    - name: vpc-cni
      version: latest
    - name: coredns
      version: latest
    - name: kube-proxy
      version: latest
    - name: aws-ebs-csi-driver
      version: latest
      
  # Security
  encryption:
    enabled: true
    kmsKeyId: alias/eks-cluster
    
  logging:
    enabledTypes:
      - api
      - audit
      - authenticator
      
  # Access
  authentication:
    mapRoles:
      - rolearn: arn:aws:iam::123456789:role/developers
        username: developers
        groups: ["system:masters"]
```

What you get automatically:
- ✅ Control plane with high availability
- ✅ Managed node groups with auto-scaling
- ✅ IRSA (IAM Roles for Service Accounts) configured
- ✅ Security groups with least privilege
- ✅ CloudWatch logging enabled
- ✅ Cluster autoscaler ready
- ✅ AWS Load Balancer controller installed
- ✅ EBS CSI driver for persistent volumes

### Example: PostgreSQL on Kubernetes

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: orders-db
  org: acmecorp
  env: production
spec:
  # Version and Resources
  version: "15.3"
  replicas: 3  # HA configuration
  
  resources:
    requests:
      cpu: 1000m
      memory: 4Gi
    limits:
      cpu: 4000m
      memory: 16Gi
      
  # Storage
  storage:
    size: 100Gi
    class: fast-ssd
    
  # Configuration
  postgresql:
    parameters:
      max_connections: 200
      shared_buffers: 1GB
      effective_cache_size: 12GB
      
  # Backup
  backup:
    enabled: true
    schedule: "0 2 * * *"
    retention: 30  # days
    destination: s3://backups/postgres
    
  # Monitoring
  monitoring:
    enabled: true
    namespace: monitoring
    
  # Users and Databases
  users:
    - name: app_user
      databases: [orders]
      privileges: ["CREATE", "CONNECT"]
```

What you get automatically:
- ✅ Primary + read replicas with streaming replication
- ✅ Automatic failover with leader election
- ✅ Connection pooling with PgBouncer
- ✅ Automated backups to S3/GCS
- ✅ Prometheus metrics + Grafana dashboards
- ✅ SSL/TLS encryption enforced
- ✅ WAL archiving configured
- ✅ Point-in-time recovery capability

## How Components Work

### 1. Component Definition

Each component is defined as a Protocol Buffer (protobuf) API:

```protobuf
// Located in: project-planton/apis/project/planton/provider/aws/awseks/v1/spec.proto
message AwsEksClusterSpec {
  // Kubernetes version for the EKS cluster
  string kubernetes_version = 1;
  
  // VPC configuration for the cluster
  VpcConfig vpc = 2;
  
  // Node groups configuration
  repeated NodeGroup node_groups = 3;
  
  // Add-ons to install
  repeated Addon addons = 4;
  
  // ... more fields
}
```

### 2. IaC Modules

Each component has Terraform AND Pulumi modules:

```
project-planton/
└── apis/project/planton/provider/aws/awseks/v1/
    ├── spec.proto           # API definition
    ├── iac/
    │   ├── tf/             # Terraform module
    │   │   ├── main.tf
    │   │   ├── variables.tf
    │   │   └── outputs.tf
    │   └── pulumi/         # Pulumi module (Go)
    │       ├── main.go
    │       └── resources.go
    └── examples.md         # Usage examples
```

### 3. Module Features

Platform modules include standard features:

**Resource Naming**
```hcl
# Consistent naming across all resources
locals {
  name_prefix = "${var.metadata.org}-${var.metadata.env}-${var.metadata.name}"
}

resource "aws_eks_cluster" "main" {
  name = local.name_prefix
  # ...
}
```

**Tagging**
```hcl
# Standard tags plus custom ones
locals {
  common_tags = {
    Organization = var.metadata.org
    Environment  = var.metadata.env
    ManagedBy    = "planton-cloud"
    Component    = "aws-eks-cluster"
    StackJob     = var.stack_job_id
  }
  
  all_tags = merge(local.common_tags, var.spec.tags)
}
```

**Outputs**
```hcl
# Standardized outputs for service discovery
output "cluster_endpoint" {
  value = aws_eks_cluster.main.endpoint
}

output "cluster_certificate_authority_data" {
  value = aws_eks_cluster.main.certificate_authority[0].data
}

output "kubeconfig" {
  value = local.kubeconfig
  sensitive = true
}
```

## Using Deployment Components

### Step 1: Browse the Catalog

Explore available components:

```bash
# List all components
planton component list

# Filter by provider
planton component list --provider aws

# Search by keyword
planton component search database

# Get component details
planton component describe aws-rds
```

### Step 2: Generate Configuration

Get started with example configs:

```bash
# Generate example YAML
planton component example aws-eks-cluster > eks.yaml

# With custom values
planton component example aws-eks-cluster \
  --set name=my-cluster \
  --set nodeGroups[0].instanceTypes=t3.medium
```

### Step 3: Customize and Deploy

Edit the generated YAML and deploy:

```yaml
# eks.yaml (customized)
apiVersion: infra-hub.planton.cloud/v1
kind: AwsEksCluster
metadata:
  name: my-api-cluster
  org: mycompany
  env: staging
spec:
  kubernetesVersion: "1.28"
  nodeGroups:
    - name: general
      instanceTypes: ["t3.medium"]
      minSize: 2
      maxSize: 6
```

```bash
# Deploy
planton apply -f eks.yaml

# Watch deployment
planton stack-job logs --follow
```

## Component Composition

Components are designed to work together:

### Example: Complete Web Application Stack

```yaml
# 1. Network Foundation
apiVersion: infra-hub.planton.cloud/v1
kind: AwsVpc
metadata:
  name: app-network
spec:
  cidrBlock: "10.0.0.0/16"
  enableNatGateway: true
---
# 2. Kubernetes Cluster  
apiVersion: infra-hub.planton.cloud/v1
kind: AwsEksCluster
metadata:
  name: app-cluster
spec:
  vpc:
    id: ${outputs.app-network.vpc_id}
  kubernetesVersion: "1.28"
---
# 3. Database
apiVersion: infra-hub.planton.cloud/v1
kind: AwsRds
metadata:
  name: app-database
spec:
  engine: postgres
  engineVersion: "15"
  vpcId: ${outputs.app-network.vpc_id}
---
# 4. Cache Layer
apiVersion: infra-hub.planton.cloud/v1
kind: RedisKubernetes
metadata:
  name: app-cache
spec:
  cluster:
    provider: aws
    name: app-cluster
---
# 5. Object Storage
apiVersion: infra-hub.planton.cloud/v1
kind: AwsS3Bucket
metadata:
  name: app-assets
spec:
  versioning: true
  lifecycle:
    - id: archive-old
      status: Enabled
      transitions:
        - days: 90
          storageClass: GLACIER
```

## Custom Components

### Bring Your Own Modules

Not finding exactly what you need? Create custom components:

```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: IacModule
metadata:
  name: custom-redis-cluster
  org: mycompany
spec:
  provisioner: terraform
  cloudResourceKind: redis_kubernetes
  description: "Redis with Sentinel for HA"
  gitRepo:
    cloneUrl: https://github.com/mycompany/redis-module
    branch: main
    projectDir: terraform
```

### Extend Platform Components

Wrap platform components with your customizations:

```hcl
# your-module/main.tf
module "base_eks" {
  source = "github.com/project-planton/aws-eks//terraform"
  
  # Pass through standard inputs
  metadata = var.metadata
  spec     = var.spec
  
  # Your customizations
  providers = {
    aws = aws.assume_role
  }
}

# Add your custom resources
resource "aws_iam_policy" "custom_policy" {
  name = "${module.base_eks.cluster_name}-custom"
  # ...
}
```

## Component Best Practices

### 1. Start Simple

Begin with minimal configuration:
```yaml
# Minimal viable PostgreSQL
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: dev-db
spec:
  version: "15"
  storage:
    size: 10Gi
```

Then add features as needed:
- Replication
- Backups
- Monitoring
- Custom parameters

### 2. Use Component Outputs

Reference outputs from other components:
```yaml
spec:
  # Reference VPC from another component
  vpcId: ${outputs.my-vpc.vpc_id}
  
  # Reference secret created by database
  databaseUrl: ${secrets.my-db.connection_url}
```

### 3. Environment-Specific Configs

Use overlays for different environments:
```yaml
# base/postgres.yaml
apiVersion: infra-hub.planton.cloud/v1
kind: PostgresKubernetes
metadata:
  name: app-db
spec:
  version: "15"
---
# overlays/prod/postgres.yaml
spec:
  replicas: 3
  resources:
    requests:
      memory: 16Gi
  backup:
    enabled: true
```

### 4. Component Versioning

Pin component versions for stability:
```yaml
apiVersion: infra-hub.planton.cloud/v1
kind: AwsEksCluster
metadata:
  annotations:
    module-version: "v2.3.0"  # Pin module version
spec:
  kubernetesVersion: "1.28"  # Pin Kubernetes version
```

## Component Lifecycle

### Updates

Components can be updated safely:
```yaml
# Before
spec:
  kubernetesVersion: "1.27"
  
# After  
spec:
  kubernetesVersion: "1.28"
```

Stack Job shows the changes:
```
Plan: 0 to add, 1 to change, 0 to destroy

~ aws_eks_cluster.main
  ~ version: "1.27" -> "1.28"
```

### Deletion Protection

Critical components have deletion protection:
```yaml
metadata:
  annotations:
    prevent-destroy: "true"
spec:
  deletionProtection: true  # Provider-specific protection
```

### Migration

Migrate between components:
```bash
# From EC2 to containers
planton migrate compute \
  --from aws-ec2-fleet \
  --to aws-ecs-service \
  --strategy blue-green
```

## What's Next?

Now that you understand Deployment Components:

- **[Flow Control](/docs/infra-hub/flow-control)** - Manage how components deploy
- **[Credentials & Mappings](/docs/infra-hub/credentials-and-mappings)** - Connect components to cloud accounts
- **[Custom Modules](/docs/infra-hub/custom-modules)** - Build your own components
- **[Component Cookbook](/docs/infra-hub/cookbook)** - Common patterns and recipes

> **Remember**: Components are just the beginning. The real power comes from composing them into complete architectures that evolve with your needs.
