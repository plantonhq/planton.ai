# Deployment Component Store: Infrastructure as Lego Blocks

## What is the Deployment Component Store?

The Deployment Component Store is a curated library of pre-built, production-ready infrastructure components—what we call **"Lego Blocks"**—representing the most commonly deployed infrastructure across all major cloud providers.

## The Core Problem It Solves

**The repetitive grunt work problem**: Teams repeatedly build the same infrastructure components, writing similar Terraform code, dealing with the same configurations, and solving identical problems over and over again.

This prevents DevOps engineers from focusing on high-value work and creates barriers for developers who need infrastructure but shouldn't need to become infrastructure experts.

## Key Characteristics

### 1. Popular Components from 80/20 Analysis

Each Lego Block represents infrastructure identified through the Pareto Principle:
- Most commonly deployed across organizations
- Production-ready configurations
- Battle-tested patterns
- Multi-cloud support

**Examples**:
- AWS ALB (Application Load Balancer)
- AWS RDS (Managed Database)
- AWS EKS (Kubernetes Cluster)
- GCP GKE (Google Kubernetes Engine)
- Azure AKS (Azure Kubernetes Service)

### 2. Popular Configuration Knobs

Instead of requiring users to understand all possible configurations, we identified the 20% that matter:

**For AWS ALB**:
- Subnets (where to deploy)
- Security groups (what traffic to allow)
- Internal vs internet-facing
- SSL/TLS settings
- DNS configuration
- Idle timeout

The remaining 80% of configurations use sensible defaults.

### 3. Form-Based Self-Service

Each Lego Block is exposed through an intuitive form interface:

**Instead of this** (Terraform):
```hcl
resource "aws_lb" "main" {
  name               = "my-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lb_sg.id]
  subnets            = [aws_subnet.public_1.id, aws_subnet.public_2.id]
  # ... 50 more lines of config
}
```

**Users do this** (Form):
- Fill out a visual form with labeled fields
- See help text for each field
- Get validation in real-time
- Submit and watch deployment happen

### 4. Pre-Written Infrastructure as Code

Every Lego Block comes with:
- **Pre-written Terraform modules**
- **Pre-written Pulumi modules**
- Organizations choose their IaC tool during onboarding
- All modules maintained and updated by us

### 5. Open Source Foundation

All Lego Blocks are part of **Project Planton**, an open-source multi-cloud infrastructure framework:

**GitHub Repository**: [github.com/project-planton/project-planton](https://github.com/project-planton/project-planton)

**This means**:
- Complete transparency—see exactly what code gets executed
- Community-driven improvements
- No vendor lock-in to proprietary code
- Ability to fork and customize any module
- Contribute back to help others

### 6. Multi-Cloud Support

The same conceptual Lego Block has implementations across clouds:

| Concept | AWS | GCP | Azure |
|---------|-----|-----|-------|
| Kubernetes | EKS | GKE | AKS |
| Load Balancer | ALB/NLB | Cloud Load Balancing | Azure Load Balancer |
| Database | RDS | Cloud SQL | Azure Database |
| Object Storage | S3 | GCS | Blob Storage |

## How It Works in Practice

### Step 1: Browse Components
Visual interface organized by:
- Cloud provider (AWS, GCP, Azure)
- Service category (compute, database, networking, storage, security)
- Use case

### Step 2: Select & Configure
1. Click a Lego Block (e.g., "AWS ALB")
2. Form appears with popular configuration knobs
3. Fill in your specific values
4. Advanced users can access additional options
5. Submit

### Step 3: Live Deployment
- Platform downloads the Terraform/Pulumi module from Project Planton
- Your inputs are injected as variables
- IaC execution begins
- **Live progress displayed** (like Terraform Cloud)
- Real-time logs and status updates

### Step 4: Outputs & State
- Deployment state stored in your chosen backend
- Module outputs captured (IDs, ARNs, URLs)
- Made available for connecting to other components
- Full configuration history with git-diff style versioning

### Step 5: Ongoing Management
- Edit configurations through the same form
- Changes trigger new deployment with live progress
- Complete audit trail: who changed what, when
- Visualization of deployed infrastructure

## The Technology Flow

```
Developer fills form
        ↓
Form inputs captured
        ↓
Converted to variables
        ↓
Fed into Terraform/Pulumi module
        ↓
Infrastructure provisioned
        ↓
Outputs captured and stored
```

This is the bridge between **developer-friendly forms** and **production-grade infrastructure code**.

## Value Proposition by Persona

### For Developers (Small Product Companies)
- **Self-service infrastructure** without learning Terraform
- Focus on building products, not fighting infrastructure
- Immediate feedback with live deployment progress
- No need to write or maintain CI/CD for infrastructure

### For DevOps Engineers (All Companies)
- **Eliminate repetitive grunt work** of writing the same Terraform repeatedly
- Enable developer autonomy while maintaining control
- Customize any block by forking Project Planton modules
- Focus on high-value work: architecture, security, optimization

### For IT Consulting Agencies
- **Rapid client onboarding** with pre-built components
- Standardize infrastructure across client projects
- Deploy production-ready environments in minutes
- More time for billable work, less on boilerplate

### For Established Product Companies
- **Standardization** via golden paths
- Governance and compliance built-in
- Visibility into all deployed infrastructure
- Audit trails for security teams

## Customization Without Losing Benefits

A critical feature: if pre-built Lego Blocks don't meet your specific needs:

1. **Fork the module** from Project Planton's GitHub
2. **Modify** the Terraform/Pulumi code
3. **Register** your custom module in Planton's registry
4. **Maintain** the self-service experience

DevOps teams retain full control while still providing developers with form-based deployments, live progress, versioning, and visualization.

## Real-World Impact

**IT Consulting Company** (actual customer):
- Deployed ECS infrastructure for 3 different clients
- Same chart, different parameters per client
- 20 minutes to complete infrastructure (was: 3+ weeks)
- Less than 1 hour from code to live URL in client's domain
- **"Every single time they need to duplicate terraform code" → solved**

## The Foundation: Pareto Principle

The Deployment Component Store exists because of a simple insight: most infrastructure work follows patterns. By identifying and packaging those patterns as Lego Blocks, we eliminate 80% of repetitive work.

See: [Pareto's Principle](./paretos-principle.md)

## Beyond Individual Components

For complete environments, see: [Infra Charts](./infra-charts.md)

