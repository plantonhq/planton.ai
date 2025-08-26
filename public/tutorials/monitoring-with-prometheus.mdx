---
title: "Monitoring Your Applications with Prometheus and Planton.ai"
date: "2024-10-10"
author:
  - name: "Planton Team"
    title: "DevOps Engineer"
    bio: "Expert in monitoring and observability"
tags:
  - "monitoring"
  - "prometheus"
  - "observability"
  - "metrics"
category: "monitoring"
excerpt: "Set up comprehensive monitoring for your applications using Prometheus and Planton.ai's monitoring stack."
featuredImage: "/images/features/kubernetes-dashboard/dashboard.svg"
---

# Monitoring Your Applications with Prometheus and Planton.ai

Effective monitoring is crucial for maintaining healthy applications in production. This tutorial will guide you through setting up Prometheus monitoring with Planton.ai to gain deep insights into your application performance.

## What You'll Learn

- Installing and configuring Prometheus
- Setting up application metrics collection
- Creating custom dashboards
- Setting up alerting rules
- Integrating with Planton.ai's monitoring stack

## Prerequisites

- Planton.ai account with access to monitoring features
- Kubernetes cluster or application ready for monitoring
- Basic understanding of metrics and monitoring concepts

## Step 1: Install Prometheus

First, let's install Prometheus using Helm:

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/kube-prometheus-stack
```

## Step 2: Configure Service Discovery

Set up Prometheus to automatically discover your services:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
            action: keep
            regex: true
```

## Step 3: Instrument Your Applications

Add metrics endpoints to your applications:

```python
from prometheus_client import Counter, Histogram, generate_latest
from flask import Flask

app = Flask(__name__)

# Define metrics
REQUEST_COUNT = Counter('http_requests_total', 'Total HTTP requests', ['method', 'endpoint'])
REQUEST_DURATION = Histogram('http_request_duration_seconds', 'HTTP request duration')

@app.route('/metrics')
def metrics():
    return generate_latest()

@app.route('/api/data')
@REQUEST_DURATION.time()
def get_data():
    REQUEST_COUNT.labels(method='GET', endpoint='/api/data').inc()
    # Your application logic here
    return {"data": "sample"}
```

## Step 4: Create Custom Dashboards

Build Grafana dashboards for your applications:

```json
{
  "dashboard": {
    "title": "Application Metrics",
    "panels": [
      {
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{endpoint}}"
          }
        ]
      },
      {
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          }
        ]
      }
    ]
  }
}
```

## Step 5: Set Up Alerting

Configure alerting rules for critical issues:

```yaml
groups:
  - name: application_alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "High error rate detected"
          description: "Error rate is {{ $value }} errors per second"
      
      - alert: SlowResponseTime
        expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 2
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Slow response times detected"
          description: "95th percentile response time is {{ $value }} seconds"
```

## Step 6: Integrate with Planton.ai

Connect your monitoring to Planton.ai's centralized monitoring:

```yaml
apiVersion: planton.ai/v1
kind: MonitoringIntegration
metadata:
  name: prometheus-integration
spec:
  type: prometheus
  endpoint: http://prometheus:9090
  scrapeInterval: 30s
  metrics:
    - name: application_requests
      query: 'rate(http_requests_total[5m])'
    - name: application_errors
      query: 'rate(http_requests_total{status=~"5.."}[5m])'
    - name: response_time_p95
      query: 'histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))'
```

## Best Practices

1. **Metric Naming**: Use consistent naming conventions
2. **Labeling**: Add meaningful labels for better querying
3. **Cardinality**: Avoid high-cardinality labels
4. **Retention**: Set appropriate data retention policies
5. **Alerting**: Use meaningful thresholds and descriptions

## Troubleshooting

Common issues and solutions:

- **No metrics appearing**: Check service discovery configuration
- **High memory usage**: Adjust scrape intervals and retention
- **Missing targets**: Verify pod annotations and labels
- **Dashboard issues**: Check query syntax and data availability

## Next Steps

After setting up basic monitoring:

1. **Custom Metrics**: Add business-specific metrics
2. **Advanced Alerting**: Implement escalation policies
3. **Performance Tuning**: Optimize Prometheus configuration
4. **Integration**: Connect with other monitoring tools

## Conclusion

With Prometheus and Planton.ai, you now have a robust monitoring solution that provides deep insights into your application performance. The combination of automatic service discovery, custom metrics, and powerful alerting gives you the visibility needed to maintain high-quality applications.

Ready to scale your monitoring? Explore our [advanced monitoring features](/docs/monitoring) or learn about [distributed tracing](/tutorials/distributed-tracing) to get even deeper insights into your applications.
