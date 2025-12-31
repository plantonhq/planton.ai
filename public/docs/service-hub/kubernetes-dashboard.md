---
title: "Kubernetes Dashboard"
description: "Explore and manage your deployed services with an intuitive Kubernetes dashboard"
icon: monitoring
order: 35
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi
---

# Kubernetes Dashboard

So you've deployed your service. Now what? Traditional Kubernetes operations often mean wrestling with kubectl, managing kubeconfig files, and navigating overwhelming cluster-wide views. Planton Cloud changes this with an intuitive dashboard that makes post-deployment operations as simple as the deployment itself.

## What You'll Learn

In this guide, you'll discover how to:
- Navigate the Kubernetes Dashboard for your deployed services
- View and edit Kubernetes resources directly from your browser
- Execute commands inside running pods without kubectl
- Understand resource relationships through visual DAG views

## The Developer-Friendly Kubernetes Experience

After your service deploys, you'll notice a Kubernetes icon in the details pane. This icon appears not just for services, but for any Planton Cloud resource (Lego block) deployed to Kubernetes. Click it, and welcome to a whole new way of interacting with your deployments.

![Kubernetes Icon in Service Details](https://assets.planton.ai/site/images/kubernetes-dashboard/Service-details-Kubernetes-icon.png)

### Service-Scoped Views

Unlike traditional Kubernetes dashboards that show everything in a cluster, Planton Cloud's dashboard is intelligently scoped:

> **The key insight**: Show developers only what matters to their service, not the entire cluster.

This approach:
- Reduces cognitive overload
- Makes relationships between resources clear
- Helps developers understand their service architecture
- Prevents accidental changes to unrelated resources

## The DAG Canvas

When you open the Kubernetes Dashboard, you're greeted with a directed acyclic graph (DAG) showing all Kubernetes resources created for your service. The interactive visual graph displays your resources and their relationships:

![Kubernetes Dashboard Tab](https://assets.planton.ai/site/images/kubernetes-dashboard/Dashboard-tag.png)

Each node in the graph represents a Kubernetes resource, with lines showing dependencies and relationships. This visual representation makes it immediately clear how your service is structured in Kubernetes. The actual dashboard provides an interactive experience where you can click on each node to explore and manage resources.

## Resource Actions

Click on any resource node to reveal available actions:

![Resource Action Icons](https://assets.planton.ai/site/images/kubernetes-dashboard/Object-View-Icon.png)

### For All Resources
- **View Details**: See `kubectl describe` output and full YAML
- **Edit**: Modify the resource YAML directly in your browser
- **Delete**: Remove the resource (with confirmation)

### Pod-Specific Actions
- **Exec Into Pod**: Open a shell inside the container
- **Stream Logs**: View real-time logs from the pod
- **View Container Details**: Inspect container-specific configuration

![Pod Exec Action](https://assets.planton.ai/site/images/kubernetes-dashboard/pod-exec-icon.png)

## Day 2 Operations Made Simple

### Viewing Resources

Click the "View" action on any resource to see:

1. **Describe Output**: The same information you'd get from `kubectl describe`
```yaml
Name:         my-service-deployment-abc123
Namespace:    production
Labels:       app=my-service
              version=v1.2.3
Annotations:  deployment.kubernetes.io/revision: 3
```

2. **Full YAML**: The complete resource definition in YAML format

![Deployment YAML View](https://assets.planton.ai/site/images/kubernetes-dashboard/Deployment-yaml.png)

### Editing Resources

Need to make a quick change? The edit feature lets you:
1. Modify the YAML directly in the browser
2. Validate changes before saving
3. Apply updates immediately
4. See the results in real-time

Common edits include:
- Adjusting resource limits
- Adding environment variables
- Updating labels or annotations
- Modifying replica counts

### Executing Commands in Pods

One of the most powerful features is browser-based pod access:

1. **Select a Pod**: Click on any pod node
2. **Choose "Exec"**: Opens the exec dialog
3. **Pick Container**: Select which container (if multiple)
4. **Select Shell**: Choose bash, sh, or another available shell
5. **Run Commands**: Full terminal access in your browser

![Pod Exec Shell](https://assets.planton.ai/site/images/kubernetes-dashboard/pod-Exec-Shell.png)

Example use cases:
```bash
# Check environment variables
env | grep DATABASE

# Verify file systems
ls -la /app/config

# Test internal connectivity
curl http://other-service:8080/health

# Debug application state
cat /tmp/debug.log
```

No kubectl required. No kubeconfig to manage. Just click and debug.

## Benefits for Developers

### 1. **Zero Setup Required**
- No kubectl installation
- No kubeconfig management
- No cluster access configuration
- Works from any browser

### 2. **Contextual Understanding**
- See only your service's resources
- Understand relationships visually
- Learn Kubernetes concepts gradually
- Make changes with confidence

### 3. **Rapid Debugging**
- Exec into pods instantly
- View logs in real-time
- Edit configurations on the fly
- See changes take effect immediately

## Security & Access Control

The Kubernetes Dashboard respects Planton Cloud's IAM policies:
- Users only see services they have access to
- Actions are limited by user permissions
- All changes are audited
- Dangerous operations require confirmation

## Common Workflows

### Debugging a Failing Pod
1. Open the Kubernetes Dashboard
2. Find the red/failing pod in the DAG
3. Click "Stream Logs" to see error messages
4. Use "Exec" to investigate further
5. Edit the Deployment to fix issues

### Scaling Your Service
1. Click on the Deployment node
2. Select "Edit"
3. Change `spec.replicas` value
4. Save and watch new pods appear

### Updating Configuration
1. Find the ConfigMap or Secret
2. Click "Edit"
3. Modify values as needed
4. Pods automatically restart with new config

## Coming Soon

Planton Cloud is extending this experience beyond Kubernetes:

### AWS ECS Dashboard
- Task and service visualization
- Container instance management
- Log streaming from CloudWatch
- Task definition editing

### GCP Cloud Run Dashboard
- Revision management
- Traffic splitting controls
- Metric visualization
- Direct log access

### Enhanced Observability
- Resource utilization metrics
- Cost transparency for deployed resources
- Health check monitoring
- Performance metrics and alerts
- Post-deployment cloud visualization

## Best Practices

### Use the Dashboard for:
- Quick debugging and troubleshooting
- Understanding service architecture
- Making temporary changes for testing
- Learning how Kubernetes works

### Continue Using Git for:
- Permanent configuration changes
- Environment promotions
- Audit trail and compliance
- Team collaboration

## Troubleshooting

### Dashboard Won't Load
- Verify you have access to the service
- Check that the service is deployed to Kubernetes
- Ensure your browser allows pop-ups

### Can't Exec Into Pod
- Confirm the pod is running
- Check that the container has a shell installed
- Verify your IAM permissions include exec access

### Edit Changes Don't Persist
- Remember that manual edits may be overwritten by deployments
- For permanent changes, update your `_kustomize` configuration
- Use Git-based workflows for production changes

## Next Steps

- [Learn about deployment configurations](/docs/service-hub/deployment-stage)
- [Explore IAM and access control](/docs/platform/iam)
- [Set up monitoring and alerts](/docs/platform/monitoring)

## See Also

- [Service Hub Overview](/docs/service-hub)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Troubleshooting Guide](/docs/service-hub/troubleshooting)

---

*Based on: `planton.ai/workspace/transcripts/service-hub/service-ops.transcript.md`*
