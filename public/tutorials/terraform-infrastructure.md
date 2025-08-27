---
title: "Managing Infrastructure with Terraform on Planton.ai"
date: "2024-10-05"
author:
  - name: "Planton Team"
    title: "Infrastructure Engineer"
    bio: "Specialist in Infrastructure as Code and Terraform"
tags:
  - "terraform"
  - "iac"
  - "infrastructure"
  - "aws"
  - "kubernetes"
category: "infrastructure"
excerpt: "Learn how to manage your cloud infrastructure using Terraform with Planton.ai's powerful IaC workflows."
featuredImage: "/images/features/iac-workflows/flow-control.svg"
---

# Managing Infrastructure with Terraform on Planton.ai

Infrastructure as Code (IaC) is essential for modern DevOps practices. This tutorial will show you how to use Terraform with Planton.ai to manage your cloud infrastructure efficiently and consistently.

## What You'll Learn

- Setting up Terraform with Planton.ai
- Creating infrastructure modules
- Managing state and collaboration
- Implementing best practices
- Automating deployments

## Prerequisites

- Planton.ai account with IaC workflows access
- Terraform installed locally (optional, Planton.ai handles this)
- Basic understanding of cloud infrastructure
- Access to cloud provider (AWS, GCP, Azure)

## Step 1: Initialize Terraform Project

Start by creating a new Terraform project structure:

```bash
mkdir terraform-project
cd terraform-project
touch main.tf
touch variables.tf
touch outputs.tf
touch versions.tf
```

## Step 2: Configure Terraform Backend

Set up remote state management using Planton.ai:

```hcl
# versions.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
  
  backend "planton" {
    organization = "your-org"
    workspace    = "production"
  }
}
```

## Step 3: Define Infrastructure

Create your main infrastructure configuration:

```hcl
# main.tf
provider "aws" {
  region = var.aws_region
}

# VPC Configuration
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true
  
  tags = {
    Name        = "${var.project_name}-vpc"
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}

# Subnets
resource "aws_subnet" "public" {
  count             = length(var.public_subnets)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.public_subnets[count.index]
  availability_zone = var.availability_zones[count.index]
  
  tags = {
    Name        = "${var.project_name}-public-${count.index + 1}"
    Environment = var.environment
  }
}

resource "aws_subnet" "private" {
  count             = length(var.private_subnets)
  vpc_id            = aws_vpc.main.id
  cidr_block        = var.private_subnets[count.index]
  availability_zone = var.availability_zones[count.index]
  
  tags = {
    Name        = "${var.project_name}-private-${count.index + 1}"
    Environment = var.environment
  }
}

# EKS Cluster
resource "aws_eks_cluster" "main" {
  name     = "${var.project_name}-cluster"
  role_arn = aws_iam_role.eks_cluster.arn
  
  vpc_config {
    subnet_ids = concat(aws_subnet.public[*].id, aws_subnet.private[*].id)
  }
  
  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
    aws_iam_role_policy_attachment.eks_vpc_resource_controller,
  ]
}
```

## Step 4: Define Variables

Set up configurable parameters:

```hcl
# variables.tf
variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "planton-demo"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "vpc_cidr" {
  description = "CIDR block for VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnets" {
  description = "CIDR blocks for public subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_subnets" {
  description = "CIDR blocks for private subnets"
  type        = list(string)
  default     = ["10.0.10.0/24", "10.0.11.0/24"]
}

variable "availability_zones" {
  description = "Availability zones"
  type        = list(string)
  default     = ["us-west-2a", "us-west-2b"]
}
```

## Step 5: Create Outputs

Define what information to expose:

```hcl
# outputs.tf
output "vpc_id" {
  description = "ID of the VPC"
  value       = aws_vpc.main.id
}

output "cluster_endpoint" {
  description = "Endpoint for EKS cluster"
  value       = aws_eks_cluster.main.endpoint
}

output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = aws_eks_cluster.main.name
}

output "public_subnet_ids" {
  description = "IDs of public subnets"
  value       = aws_subnet.public[*].id
}

output "private_subnet_ids" {
  description = "IDs of private subnets"
  value       = aws_subnet.private[*].id
}
```

## Step 6: Set Up Planton.ai Workflow

Configure your IaC workflow in Planton.ai:

```yaml
apiVersion: planton.ai/v1
kind: IaCWorkflow
metadata:
  name: terraform-deployment
spec:
  terraform:
    version: "1.5.0"
    backend:
      type: planton
      organization: your-org
      workspace: production
    
    variables:
      - name: environment
        value: production
      - name: aws_region
        value: us-west-2
    
    stages:
      - name: plan
        action: terraform-plan
        args:
          detailedExitCode: true
      
      - name: apply
        action: terraform-apply
        manualApproval: true
        args:
          autoApprove: false
      
      - name: destroy
        action: terraform-destroy
        manualApproval: true
        args:
          autoApprove: false
```

## Step 7: Implement Best Practices

Follow these guidelines for production use:

### Module Structure
```
modules/
├── networking/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
├── compute/
│   ├── main.tf
│   ├── variables.tf
│   └── outputs.tf
└── security/
    ├── main.tf
    ├── variables.tf
    └── outputs.tf
```

### State Management
- Use remote state storage
- Implement state locking
- Separate state by environment
- Use workspaces for different environments

### Security
- Use IAM roles with minimal permissions
- Encrypt sensitive data
- Implement network security groups
- Use private subnets for sensitive resources

## Step 8: Automate Deployments

Set up CI/CD for your infrastructure:

```yaml
# .github/workflows/terraform.yml
name: 'Terraform Deploy'
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.5.0
      
      - name: Terraform Init
        run: terraform init
      
      - name: Terraform Plan
        run: terraform plan
        if: github.event_name == 'pull_request'
      
      - name: Terraform Apply
        run: terraform apply -auto-approve
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
```

## Troubleshooting

Common issues and solutions:

- **State conflicts**: Use remote state and state locking
- **Permission errors**: Verify IAM roles and policies
- **Resource conflicts**: Use unique naming conventions
- **Dependency issues**: Use explicit depends_on blocks

## Next Steps

After mastering basic Terraform:

1. **Advanced Modules**: Create reusable infrastructure modules
2. **Multi-Environment**: Set up staging and production environments
3. **Policy as Code**: Implement Open Policy Agent (OPA)
4. **Cost Optimization**: Use Terraform cost estimation tools

## Conclusion

Terraform with Planton.ai provides a powerful combination for managing infrastructure as code. The platform handles the complexity of Terraform execution while giving you full control over your infrastructure definitions.

Ready to scale? Explore our [advanced IaC workflows](/docs/iac-workflows) or learn about [multi-cloud deployments](/tutorials/multi-cloud-terraform) to take your infrastructure management to the next level.
