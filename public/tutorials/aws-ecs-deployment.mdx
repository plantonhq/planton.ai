---
title: "Deploy to AWS ECS with Planton.ai"
date: "2024-12-10"
author:
  - name: "Planton Team"
    title: "Cloud Architect"
    bio: "Specialist in AWS and cloud infrastructure"
tags:
  - "aws"
  - "ecs"
  - "deployment"
  - "cloud"
category: "aws"
excerpt: "Deploy your containerized applications to AWS ECS using Planton.ai's streamlined deployment process."
featuredImage: "/images/features/iac-workflows/world-map.svg"
---

# Deploy to AWS ECS with Planton.ai

AWS ECS (Elastic Container Service) is a powerful container orchestration service, and Planton.ai makes it incredibly easy to deploy and manage your applications on ECS. This tutorial will guide you through the entire process.

## Prerequisites

- AWS account with appropriate permissions
- Planton.ai account
- Containerized application ready for deployment
- AWS CLI configured (optional, Planton.ai handles this)

## Step 1: Connect AWS Infrastructure

First, connect your AWS account to Planton.ai:

1. Go to **Infra Hub** in your Planton.ai dashboard
2. Click **Add Infrastructure**
3. Select **AWS** as your cloud provider
4. Choose **ECS** as your service type
5. Provide your AWS credentials

## Step 2: Configure ECS Cluster

Set up your ECS cluster configuration:

```yaml
apiVersion: planton.ai/v1
kind: ECSCluster
metadata:
  name: production-cluster
spec:
  region: us-west-2
  vpcId: vpc-12345678
  subnets:
    - subnet-12345678
    - subnet-87654321
  securityGroups:
    - sg-12345678
  capacityProviders:
    - FARGATE
    - FARGATE_SPOT
```

## Step 3: Define Your Service

Create an ECS service definition:

```yaml
apiVersion: planton.ai/v1
kind: ECSService
metadata:
  name: my-app-service
spec:
  cluster: production-cluster
  taskDefinition:
    family: my-app
    cpu: 256
    memory: 512
    networkMode: awsvpc
    requiresCompatibilities:
      - FARGATE
    executionRoleArn: arn:aws:iam::123456789012:role/ecsTaskExecutionRole
    taskRoleArn: arn:aws:iam::123456789012:role/ecsTaskRole
    containerDefinitions:
      - name: my-app
        image: my-app:latest
        portMappings:
          - containerPort: 8080
            protocol: tcp
        logConfiguration:
          logDriver: awslogs
          options:
            awslogs-group: /ecs/my-app
            awslogs-region: us-west-2
            awslogs-stream-prefix: ecs
```

## Step 4: Deploy Your Service

Deploy your ECS service through Planton.ai:

1. Navigate to **Service Hub**
2. Select your ECS cluster
3. Click **Deploy Service**
4. Upload your service configuration
5. Review and confirm deployment

## Step 5: Monitor and Scale

Once deployed, monitor your service:

- **Service Health**: Check running tasks and health status
- **Logs**: View application logs in real-time
- **Metrics**: Monitor CPU, memory, and network usage
- **Scaling**: Set up auto-scaling policies

## Advanced Configuration

### Load Balancer Integration

```yaml
spec:
  loadBalancers:
    - targetGroupArn: arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-app/1234567890123456
      containerName: my-app
      containerPort: 8080
```

### Auto Scaling

```yaml
spec:
  autoScalingPolicies:
    - name: cpu-based-scaling
      targetTrackingScalingPolicyConfiguration:
        targetValue: 70.0
        scaleInCooldown: 300
        scaleOutCooldown: 300
        predefinedMetricSpecification:
          predefinedMetricType: ECSServiceAverageCPUUtilization
```

## Best Practices

1. **Security**: Use IAM roles with minimal required permissions
2. **Networking**: Place services in private subnets with proper security groups
3. **Monitoring**: Set up CloudWatch alarms for critical metrics
4. **Cost Optimization**: Use Fargate Spot for non-critical workloads
5. **Deployment**: Implement blue-green deployments for zero downtime

## Troubleshooting

Common issues and solutions:

- **Service won't start**: Check task definition and IAM roles
- **High CPU/Memory**: Adjust resource allocation
- **Network issues**: Verify security group rules and VPC configuration
- **Logs not appearing**: Ensure CloudWatch log group exists

## Next Steps

After mastering ECS deployment, explore:

- Multi-region deployments
- Service mesh integration
- Advanced monitoring and alerting
- Cost optimization strategies

## Conclusion

Deploying to AWS ECS with Planton.ai simplifies the process while maintaining full control over your infrastructure. The platform handles the complexity of ECS management while providing powerful deployment and monitoring capabilities.

Ready to scale? Check out our [advanced ECS tutorials](/tutorials?category=aws) or explore [other cloud providers](/docs/infra-hub/cloud-providers) supported by Planton.ai.
