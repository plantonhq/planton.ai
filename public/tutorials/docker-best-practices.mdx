---
title: "Docker Best Practices for Production Deployments"
date: "2024-11-20"
author:
  - name: "Planton Team"
    title: "Container Specialist"
    bio: "Expert in Docker and containerization"
tags:
  - "docker"
  - "containers"
  - "best-practices"
  - "deployment"
  - "security"
category: "containers"
excerpt: "Learn the essential Docker best practices for building secure, efficient, and production-ready containers."
featuredImage: "/images/features/kubernetes-dashboard/k8-icon.svg"
---

# Docker Best Practices for Production Deployments

Docker has revolutionized how we package and deploy applications. This tutorial covers essential best practices for building production-ready Docker containers that are secure, efficient, and maintainable.

## What You'll Learn

- Writing efficient Dockerfiles
- Security best practices
- Multi-stage builds
- Image optimization
- Production deployment strategies

## Prerequisites

- Basic understanding of Docker
- Docker installed locally
- Planton.ai account for deployment
- Knowledge of your application stack

## Step 1: Optimize Your Dockerfile

Start with a well-structured Dockerfile:

```dockerfile
# Use specific base image versions
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY . .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Use exec form for CMD
CMD ["npm", "start"]
```

## Step 2: Implement Multi-Stage Builds

Use multi-stage builds to reduce final image size:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

EXPOSE 3000
CMD ["npm", "start"]
```

## Step 3: Security Best Practices

Implement security measures in your containers:

```dockerfile
# Use minimal base images
FROM alpine:3.18

# Install only necessary packages
RUN apk add --no-cache \
    curl \
    && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S appgroup
RUN adduser -S appuser -u 1001 -G appgroup

# Set proper file permissions
RUN chown -R appuser:appgroup /app
USER appuser

# Copy application with correct ownership
COPY --chown=appuser:appgroup . /app
```

## Step 4: Environment Configuration

Handle environment variables properly:

```dockerfile
# Use ARG for build-time variables
ARG NODE_ENV=production
ARG BUILD_VERSION=latest

# Use ENV for runtime variables
ENV NODE_ENV=${NODE_ENV}
ENV BUILD_VERSION=${BUILD_VERSION}
ENV PORT=3000

# Set default values
ENV LOG_LEVEL=info
ENV API_TIMEOUT=30000
```

## Step 5: Layer Optimization

Optimize Docker layers for better caching:

```dockerfile
# Bad: Multiple RUN commands create unnecessary layers
RUN apt-get update
RUN apt-get install -y package1
RUN apt-get install -y package2
RUN apt-get clean

# Good: Single RUN command with cleanup
RUN apt-get update && \
    apt-get install -y \
        package1 \
        package2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
```

## Step 6: Health Checks

Implement proper health checks:

```dockerfile
# Basic HTTP health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Custom health check script
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD /app/health-check.sh || exit 1
```

## Step 7: Resource Limits

Set appropriate resource constraints:

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
    ulimits:
      nofile:
        soft: 65536
        hard: 65536
```

## Step 8: Production Deployment

Deploy with Planton.ai using best practices:

```yaml
apiVersion: planton.ai/v1
kind: ContainerDeployment
metadata:
  name: production-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  
  template:
    spec:
      containers:
      - name: app
        image: your-registry/app:latest
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        
        # Security context
        securityContext:
          runAsNonRoot: true
          runAsUser: 1001
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
        
        # Liveness and readiness probes
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
        
        # Environment variables
        env:
        - name: NODE_ENV
          value: "production"
        - name: LOG_LEVEL
          value: "info"
        
        # Volume mounts for logs
        volumeMounts:
        - name: app-logs
          mountPath: /app/logs
      
      # Volumes
      volumes:
      - name: app-logs
        emptyDir: {}
```

## Step 9: Monitoring and Logging

Set up proper monitoring:

```dockerfile
# Add logging configuration
ENV NODE_OPTIONS="--max-old-space-size=512"

# Use structured logging
CMD ["npm", "start", "--", "--log-format=json"]
```

## Step 10: CI/CD Integration

Automate your Docker builds:

```yaml
# .github/workflows/docker.yml
name: Build and Deploy Docker Image
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2
      
      - name: Login to Container Registry
        uses: docker/login-action@v2
        with:
          registry: your-registry.com
          username: ${{ secrets.REGISTRY_USERNAME }}
          password: ${{ secrets.REGISTRY_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: |
            your-registry.com/app:latest
            your-registry.com/app:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

## Best Practices Summary

### Security
- Use non-root users
- Scan images for vulnerabilities
- Keep base images updated
- Minimize attack surface

### Performance
- Use multi-stage builds
- Optimize layer caching
- Set resource limits
- Use appropriate base images

### Maintainability
- Use specific image tags
- Document your Dockerfile
- Follow consistent patterns
- Use .dockerignore files

### Monitoring
- Implement health checks
- Use structured logging
- Set up metrics collection
- Monitor resource usage

## Troubleshooting

Common issues and solutions:

- **Large image sizes**: Use multi-stage builds and .dockerignore
- **Security vulnerabilities**: Regular base image updates and security scans
- **Build failures**: Check layer caching and dependency installation
- **Runtime issues**: Verify health checks and resource limits

## Next Steps

After mastering basic Docker practices:

1. **Advanced Patterns**: Implement sidecar containers and service mesh
2. **Security Scanning**: Integrate vulnerability scanning in CI/CD
3. **Performance Tuning**: Optimize for specific workloads
4. **Multi-Architecture**: Build for different CPU architectures

## Conclusion

Following these Docker best practices ensures your containers are production-ready, secure, and maintainable. Planton.ai makes it easy to deploy these optimized containers with proper resource management and monitoring.

Ready to scale? Explore our [container orchestration](/docs/kubernetes-dashboard) or learn about [microservices architecture](/tutorials/microservices-docker) to take your containerization to the next level.
