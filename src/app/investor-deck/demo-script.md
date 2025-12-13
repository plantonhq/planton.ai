# 5-Minute Demo Script - Planton Cloud

## Overview
Demonstrate multi-cloud deployment showing the same experience across different cloud providers.

---

## Demo Flow (5 minutes total)

### Setup (30 seconds)
**What to say:**
"Let me show you how Planton Cloud works in practice. I'm going to deploy the same PostgreSQL database to three different clouds - AWS, GCP, and Kubernetes - using the exact same workflow."

**What to show:**
- Terminal with project-planton CLI ready
- Three YAML manifests side by side in editor

---

### Part 1: Deploy to AWS RDS (1 minute 30 seconds)

**What to say:**
"First, let's deploy to AWS RDS. Here's the manifest - notice the Kubernetes Resource Model structure with apiVersion, kind, metadata, and spec. The spec contains AWS-specific configuration like instance_class and storage."

**What to show:**
```yaml
apiVersion: aws.project-planton.org/v1
kind: AwsRdsInstance
metadata:
  name: demo-database
  org: planton-demo
  env: dev
spec:
  engine: postgres
  instance_class: db.t3.micro
  allocated_storage_gb: 20
```

**Run command:**
```bash
project-planton pulumi up --manifest aws-rds.yaml --stack demo/dev
```

**What to say while running:**
"The CLI validates the manifest, identifies it's an AWS RDS resource, pulls the corresponding Pulumi module from our open-source repo, and executes it. You can see the validation passing, infrastructure being created..."

**Point out:**
- Validation happening before deployment
- Clear progress output
- Outputs captured (endpoint, port)

---

### Part 2: Deploy to GCP Cloud SQL (1 minute 30 seconds)

**What to say:**
"Now let's deploy the same database to Google Cloud SQL. Look at the manifest - same structure, different provider-specific fields like 'tier' instead of 'instance_class'. But the workflow is identical."

**What to show:**
```yaml
apiVersion: gcp.project-planton.org/v1
kind: GcpCloudSql
metadata:
  name: demo-database
  org: planton-demo
  env: dev
spec:
  database_engine: POSTGRESQL
  tier: db-f1-micro
  storage_gb: 20
```

**Run command:**
```bash
project-planton pulumi up --manifest gcp-cloudsql.yaml --stack demo/dev
```

**What to say:**
"Same command, different manifest. The platform knows this is GCP Cloud SQL, pulls the right module, deploys it. Notice I didn't have to learn gcloud CLI or write Terraform - just YAML following our standard structure."

---

### Part 3: Deploy to Kubernetes (1 minute)

**What to say:**
"Finally, let's deploy to Kubernetes. This could be EKS, GKE, any Kubernetes cluster. Again, same structure, same command."

**What to show:**
```yaml
apiVersion: kubernetes.project-planton.org/v1
kind: PostgresKubernetes
metadata:
  name: demo-database
  org: planton-demo
  env: dev
spec:
  container:
    replicas: 1
    resources:
      limits:
        cpu: 500m
        memory: 1Gi
  persistence:
    storageSize: 20Gi
```

**Run command:**
```bash
project-planton pulumi up --manifest k8s-postgres.yaml --stack demo/dev
```

**What to say:**
"Same consistent experience. And this is the key insight of Planton - we're not abstracting away the clouds, we're making the *experience* consistent. Each manifest is provider-specific, but the structure, validation, and workflow are identical."

---

### Part 4: ServiceHub CI/CD Demo (1 minute)

**What to say:**
"Now let me show ServiceHub - our Vercel for backend. I'll connect a GitHub repo and show how git push becomes automatic deployment."

**What to show (screen recording or live):**
1. Navigate to Planton Cloud UI
2. Click "Connect Repository"
3. Select GitHub repo with containerized app
4. Show it auto-detecting Dockerfile
5. Configure deployment (select environments)
6. Push commit to repo
7. Show pipeline automatically triggered
8. Show live logs streaming
9. Show successful deployment with URL

**What to say:**
"That's it - git push to production. No YAML files for CI/CD, no configuring GitHub Actions, no wrestling with Docker registries. The platform handles everything. And this works for services deployed to Kubernetes, ECS, Cloud Run - any container target."

---

### Closing (30 seconds)

**What to say:**
"So that's Planton Cloud: consistent multi-cloud infrastructure automation plus git-to-production CI/CD. The same experience whether you're on AWS, GCP, or Kubernetes. The same workflow whether you're deploying databases, Kafka, Redis, or containerized applications.

And remember, this is all built on our open-source foundation Project Planton - everything you saw is transparent, auditable, and extensible. No black boxes."

---

## Demo Tips

### Preparation
- [ ] Have 3 pre-written manifests ready
- [ ] Ensure CLI is installed and authenticated
- [ ] Have cloud accounts configured
- [ ] Pre-create Pulumi stacks to avoid setup delays
- [ ] Have backup screen recording if live demo fails

### During Demo
- **Speak confidently**: You've done this hundreds of times
- **Pause for emphasis**: Let key points land
- **Point as you go**: Use cursor to highlight important lines
- **Show errors**: If validation catches something, that's a feature!
- **Have fun**: Your enthusiasm is contagious

### Technical Gotchas
- Network issues: Have screen recording backup
- Slow deployments: Use `--skip-preview` for speed
- Authentication: Pre-auth before demo
- Terminal font size: Make it LARGE for visibility

### Questions to Anticipate

**Q: What if I want to customize the Pulumi module?**
A: Fork it! Everything is open source. Or write your own in Python/TypeScript and just reuse our API schemas.

**Q: What about drift detection?**
A: Built-in. Pulumi tracks state, we can show you when reality diverges from config.

**Q: Can I use Terraform instead of Pulumi?**
A: Yes! We maintain Terraform modules too. Just use `project-planton tofu apply` instead.

**Q: How do you handle secrets?**
A: We integrate with existing secret managers - AWS Secrets Manager, GCP Secret Manager, etc. No reinventing the wheel.

**Q: What about cost?**
A: You pay cloud provider costs directly (we don't mark up infrastructure). Our platform is usage-based pricing for the automation layer.

---

## Demo Variations

### Short version (2 minutes)
- Show only one cloud (AWS or K8s)
- Show ServiceHub git-push only
- Focus on "same structure, same command"

### Technical audience (10 minutes)
- Show under-the-hood: CLI pulling modules from GitHub
- Show Pulumi state file
- Show customizing a module
- Show validation rules in proto files

### Executive audience (3 minutes)
- Focus on outcomes: "deployed in 30 seconds vs 2 hours"
- Show UI more, terminal less
- Emphasize cost savings and productivity gains

---

## Post-Demo
Always offer: "Happy to deploy something specific to your use case right now - what cloud resource would be most valuable for you to see?"

This shows confidence and creates engagement.
