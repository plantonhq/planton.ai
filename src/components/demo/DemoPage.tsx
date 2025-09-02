'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Cloud,
  Server,
  Layers,
  Home,
  CheckCircle,
  Play,
} from 'lucide-react';
import { Button } from '@/components/tour/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

// Static demo data from demo.planton.ai
const demoSteps = [
  // AWS path (mirrors live site)
  {
    id: 1001,
    path: 'aws',
    step_number: 1,
    title: 'Welcome & The Problem',
    content:
      "<p>In this path, we show how Planton Cloud streamlines DevOps on AWS. Teams often wrestle with scattered IaC, complex pipelines, and hard‑to‑trace changes. We'll walk through provisioning infra and deploying an app with a clear, guided workflow.</p>",
  },
  {
    id: 1002,
    path: 'aws',
    step_number: 2,
    title: 'Introducing InfraHub for AWS',
    content:
      "<p>InfraHub is our infrastructure‑as‑code management center. Instead of piecing together individual 'Lego blocks' like VPCs and security groups, developers can deploy entire, opinionated stacks with one click.</p><p>For AWS, we provide pre‑configured, production‑ready modules for everything you need.</p>",
    key_points: [
      'Deploy curated infrastructure stacks, not single components.',
      'Based on open‑source Terraform and Pulumi modules.',
      'Ensures consistency and best practices across environments.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 1003,
    path: 'aws',
    step_number: 3,
    title: 'Deploying a VPC on AWS',
    content:
      "<p>Let's see it in action. A foundational step is creating a Virtual Private Cloud (VPC). With InfraHub, this is a simple, form‑based process. We'll select the 'AWS VPC' module, configure a few parameters like region and CIDR block, and hit deploy. Planton Cloud handles all the underlying resource creation and dependency management.</p>",
    key_points: [
      'Show the simplicity of the InfraHub UI.',
      'Contrast this with writing complex Terraform/CloudFormation.',
      'Highlight the built‑in auditability: we know who deployed what, and when.',
    ],
  },
  {
    id: 1004,
    path: 'aws',
    step_number: 4,
    title: 'Introducing ServiceHub for AWS',
    content:
      '<p>Once infrastructure is ready, ServiceHub takes over for application deployment. It automates CI/CD pipelines and simplifies managing services, especially on Kubernetes.</p><p>Developers connect their Git repository, and ServiceHub handles the rest: building the container, pushing it to a registry, and deploying it to an EKS cluster.</p>',
    key_points: [
      'Automates CI/CD without writing pipeline code.',
      'Provides a service‑centric view of Kubernetes.',
      'Simplifies Day‑2 operations like logging and debugging.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 1005,
    path: 'aws',
    step_number: 5,
    title: 'Deploying a Microservice to EKS',
    content:
      "<p>Now, let's deploy an application. In ServiceHub, we create a new 'Service', link it to our code repository, and specify the target environment and the EKS cluster we provisioned earlier. Planton Cloud automatically detects the language, builds a Docker image, and deploys it. The developer never has to write a single line of YAML.</p>",
    key_points: [
      'Zero‑config CI/CD pipeline.',
      'Live visualization of deployment status and resources.',
      'Seamless integration between InfraHub and ServiceHub.',
    ],
  },
  {
    id: 1006,
    path: 'aws',
    step_number: 6,
    title: 'Conclusion (AWS Path)',
    content:
      "<p>You've seen how InfraHub and ServiceHub simplify provisioning and deployments on AWS—faster onboarding, fewer errors, and strong governance out of the box.</p><p>Explore other paths or open the live app to dive deeper.</p>",
    next_options: [{ label: 'ServiceHub', path: 'servicehub' }],
  },
  {
    id: 3,
    path: 'gcp',
    step_number: 1,
    title: 'GCP Overview',
    content: '<p>Intro to GCP path.</p>',
    key_points: ['GKE', 'Cloud SQL'],
    demo_url: 'https://cloud.google.com',
  },

  // InfraHub path (multi-step)
  {
    id: 2001,
    path: 'infrahub',
    step_number: 1,
    title: 'Welcome & The Problem',
    content:
      '<p>Infrastructure provisioning is often slow and inconsistent. Teams hand‑craft Terraform or CloudFormation, copy‑paste modules, and fight drift. InfraHub solves this with opinionated, production‑ready blueprints and a visual control plane.</p>',
  },
  {
    id: 2002,
    path: 'infrahub',
    step_number: 2,
    title: 'Introducing InfraHub',
    content:
      '<p>InfraHub is our infrastructure‑as‑code management center. It standardizes how infrastructure is defined, deployed, and governed across environments.</p>',
    key_points: [
      'Blueprints for complete stacks, not single resources.',
      'Open‑source Terraform/Pulumi under the hood.',
      'Built‑in guardrails, auditability, and repeatability.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 2003,
    path: 'infrahub',
    step_number: 3,
    title: 'Provisioning a VPC',
    content:
      "<p>Let's provision networking with a few inputs. Choose the 'AWS VPC' blueprint, set region and CIDR ranges, and deploy. InfraHub takes care of modules, dependencies, and tagging policies automatically.</p>",
    key_points: [
      'Form‑based inputs; no YAML or HCL editing.',
      'Dependency management and outputs handled for you.',
      'Consistent tagging, naming, and security defaults.',
    ],
  },
  {
    id: 2004,
    path: 'infrahub',
    step_number: 4,
    title: 'Provisioning EKS & Datastores',
    content:
      "<p>Next, add compute and data. Select 'EKS Cluster' and, if needed, 'RDS' or 'Aurora'. InfraHub wires these components together using best practices—subnets, security groups, and IAM included.</p>",
    key_points: [
      'Composable blueprints for clusters and databases.',
      'Automatic wiring across VPC, subnets, and security.',
      'One‑click deploys to dev, stage, and prod.',
    ],
  },
  {
    id: 2005,
    path: 'infrahub',
    step_number: 5,
    title: 'Operations & Governance',
    content:
      "<p>Use InfraHub's activity timeline, drift detection, and policy checks to understand who changed what and when. Export plans, review diffs, and roll back safely.</p>",
    key_points: [
      'Change history and audit trails.',
      'Drift detection and policy enforcement.',
      'Repeatable, environment‑aware deployments.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 2006,
    path: 'infrahub',
    step_number: 6,
    title: 'Conclusion (InfraHub Path)',
    content:
      '<p>InfraHub turns infrastructure into reusable products. Teams ship faster with consistent guardrails and less toil.</p>',
    next_options: [
      { label: 'ServiceHub', path: 'servicehub' },
      { label: 'AWS Path', path: 'aws' },
    ],
  },

  // ServiceHub path (multi-step)
  {
    id: 3001,
    path: 'servicehub',
    step_number: 1,
    title: 'Welcome & The Problem',
    content:
      '<p>Application delivery is slowed down by bespoke pipelines, fragile YAML, and unclear runtime visibility. ServiceHub streamlines CI/CD and Day‑2 for Kubernetes‑based services.</p>',
  },
  {
    id: 3002,
    path: 'servicehub',
    step_number: 2,
    title: 'Introducing ServiceHub',
    content:
      '<p>ServiceHub automates build and deploy pipelines without writing pipeline code. Connect a repository, pick an environment, and ship.</p>',
    key_points: [
      'Zero‑config pipelines for common languages.',
      'Service‑centric view of Kubernetes resources.',
      'Built‑in observability for rollouts and health.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 3003,
    path: 'servicehub',
    step_number: 3,
    title: 'Connect Your Repository',
    content:
      '<p>Point ServiceHub at your Git repository. It detects language frameworks and sets up a secure build: build the container, push to registry, and keep SBOMs for provenance.</p>',
    key_points: [
      'Auto‑detect buildpacks and frameworks.',
      'Image stored in your chosen registry.',
      'Security and provenance built‑in.',
    ],
  },
  {
    id: 3004,
    path: 'servicehub',
    step_number: 4,
    title: 'Deploy to Kubernetes',
    content:
      '<p>Choose an environment and target cluster (e.g., EKS). ServiceHub handles manifests and progressive rollouts—no raw YAML needed.</p>',
    key_points: [
      'Declarative deploys to dev/stage/prod.',
      'Progressive delivery and automatic rollbacks.',
      'Tight integration with InfraHub‑provisioned clusters.',
    ],
  },
  {
    id: 3005,
    path: 'servicehub',
    step_number: 5,
    title: 'Day‑2: Logs & Debugging',
    content:
      '<p>Investigate issues with live status, logs, and events in one place. Restart pods, roll back versions, and compare deploys.</p>',
    key_points: [
      'Centralized status and logs.',
      'Easy rollbacks and restarts.',
      'Operational insights by service.',
    ],
    demo_url: 'https://console.planton.cloud',
  },
  {
    id: 3006,
    path: 'servicehub',
    step_number: 6,
    title: 'Conclusion (ServiceHub Path)',
    content:
      '<p>ServiceHub accelerates delivery from commit to cluster with clear, reliable automation. Explore InfraHub to see how the infra side fits in.</p>',
    next_options: [
      { label: 'InfraHub', path: 'infrahub' },
      { label: 'AWS Path', path: 'aws' },
    ],
  },
];

const PathTile = ({
  icon: Icon,
  title,
  description,
  iconColor,
  onClick,
}: {
  icon: any;
  title: string;
  description: string;
  iconColor: string;
  onClick: () => void;
}) => (
  <Card
    className="bg-white hover:bg-white/95 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group rounded-xl shadow-lg hover:shadow-xl"
    onClick={onClick}
  >
    <CardContent className="p-8 text-center">
      <div
        className={`w-16 h-16 ${iconColor} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function DemoPage() {
  const [currentPath, setCurrentPath] = useState<string>('welcome');
  const [currentStep, setCurrentStep] = useState(0);
  const [currentPathSteps, setCurrentPathSteps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDemoData = useCallback(() => {
    if (currentPath === 'welcome' || currentPath === 'home') return;

    setIsLoading(true);
    setError(null);

    try {
      // Use static demo data (the constant defined at the top)
      const filteredSteps = demoSteps.filter((step: any) => step.path === currentPath);

      if (filteredSteps.length === 0) {
        setError('No demo steps found for this path.');
        setCurrentPathSteps([]);
        return;
      }

      const sortedSteps = filteredSteps.sort((a: any, b: any) => a.step_number - b.step_number);
      setCurrentPathSteps(sortedSteps);
    } catch (_error) {
      setError('Failed to load demo data. Please try again later.');
      setCurrentPathSteps([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPath]);

  useEffect(() => {
    if (currentPath !== 'welcome' && currentPath !== 'home') {
      loadDemoData();
    }
  }, [loadDemoData, currentPath]);



  const goToHome = useCallback(() => {
    setCurrentPath('home');
    setCurrentStep(0);
  }, []);

  const navigateNext = useCallback(() => {
    if (currentStep < currentPathSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, currentPathSteps]);

  const navigatePrev = useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else goToHome();
  }, [currentStep, goToHome]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          navigateNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigatePrev();
          break;
        case 'Escape':
          e.preventDefault();
          goToHome();
          break;
      }
    },
    [navigateNext, navigatePrev, goToHome]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const startDemo = (path: string) => {
    setCurrentPath(path);
    setCurrentStep(0);
  };

  const pathSteps = currentPathSteps;
  const getCurrentStepData = () => pathSteps[currentStep];

  // Welcome Screen
  if (currentPath === 'welcome') {
    return (
      <div className="min-h-screen font-sans bg-[#110D1F] flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-lg mx-auto text-center"
        >
          <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card">
            <CardContent className="p-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 btn-gradient">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
                Welcome to Platform Demo
              </h1>
              <p className="text-gray-600 mb-8">
                Discover how our DevOps platform simplifies infrastructure management, deployment,
                and monitoring with powerful visual tools and integrations.
              </p>
              <Button
                size="lg"
                className="w-full btn-gradient text-white font-bold"
                onClick={() => setCurrentPath('home')}
              >
                Start Interactive Demo
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Home Screen with Path Selection
  if (currentPath === 'home') {
    return (
      <div className="min-h-screen font-sans bg-[#110D1F] flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto text-center"
          >
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
                Planton Cloud Demo
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                An interactive walkthrough of our DevOps in a Box solution. Choose a path below to
                begin.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <PathTile
                icon={Cloud}
                title="AWS Path"
                description="For teams deploying on Amazon Web Services."
                iconColor="bg-gradient-to-br from-orange-500 to-orange-600"
                onClick={() => startDemo('aws')}
              />
              <PathTile
                icon={Cloud}
                title="Google Cloud Path"
                description="For teams deploying on Google Cloud Platform."
                iconColor="bg-gradient-to-br from-green-500 to-green-600"
                onClick={() => startDemo('gcp')}
              />
              <PathTile
                icon={Server}
                title="InfraHub"
                description="A deep-dive into infrastructure provisioning."
                iconColor="bg-gradient-to-br from-purple-500 to-purple-600"
                onClick={() => startDemo('infrahub')}
              />
              <PathTile
                icon={Layers}
                title="ServiceHub"
                description="A deep-dive into application deployment."
                iconColor="bg-gradient-to-br from-cyan-500 to-cyan-600"
                onClick={() => startDemo('servicehub')}
              />
            </div>

            <div className="text-white/60 text-sm">
              <div className="flex items-center justify-center gap-6">
                <span className="font-medium text-white/80">Keyboard Navigation:</span>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">
                    ←
                  </kbd>
                  /
                  <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">
                    →
                  </kbd>
                  <span>Steps</span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">
                    ESC
                  </kbd>
                  <span>Home</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const stepData = getCurrentStepData();
  const isLastStep = currentStep === pathSteps.length - 1;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen font-sans bg-[#110D1F] flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-violet-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 mb-4">Loading demo content...</p>
          <p className="text-sm text-gray-500">Loading demo content</p>
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen font-sans bg-[#110D1F] flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card p-8">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <p className="text-xl text-gray-600 mb-4">Demo content unavailable</p>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <Button onClick={goToHome} className="btn-gradient text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  if (!stepData) {
    return (
      <div className="min-h-screen font-sans bg-[#110D1F] flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card p-8">
          <p className="text-xl text-gray-600 mb-4">No demo content available for this path.</p>
          <Button onClick={goToHome} className="btn-gradient text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-[#110D1F] flex items-center justify-center relative">
      {/* Small Home Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToHome}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm"
      >
        <Home className="w-4 h-4" />
      </Button>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentPath}-${currentStep}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8"
        >
          <Card className="bg-white rounded-[var(--radius-2xl)] shadow-card w-full overflow-hidden">
            <div className="p-8">
              <main className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {stepData.title}
                  </h1>
                  <div
                    className="prose-custom prose-lg"
                    dangerouslySetInnerHTML={{ __html: stepData.content }}
                  />

                  {stepData.key_points && stepData.key_points.length > 0 && (
                    <div className="bg-slate-50 border p-6 rounded-xl">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                        Key Talking Points
                      </h3>
                      <ul className="space-y-3">
                        {stepData.key_points.map((point: string, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {stepData.demo_url && (
                    <div className="bg-violet-50 border-2 border-violet-200 p-6 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-violet-800">Switch to Live App</h3>
                        <p className="text-sm text-violet-600 mt-1">
                          Click here to demonstrate this feature in Planton Cloud.
                        </p>
                      </div>
                      <a href={stepData.demo_url} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-gradient text-white font-bold flex-shrink-0">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open App
                        </Button>
                      </a>
                    </div>
                  )}
                </div>

                <aside className="space-y-6">
                  <div className="bg-slate-50 border p-4 rounded-xl space-y-1">
                    {demoSteps.length === 0 ? (
                      <div className="text-center py-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-violet-600 mx-auto mb-2"></div>
                        <p className="text-xs text-slate-500">Loading steps...</p>
                      </div>
                    ) : (
                      pathSteps.map((step: any, index: number) => (
                        <div
                          key={step.id}
                          onClick={() => setCurrentStep(index)}
                          className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-200 ${
                            index === currentStep
                              ? 'bg-violet-100 text-violet-700'
                              : 'text-slate-500 hover:bg-slate-100'
                          }`}
                        >
                          <div
                            className={`w-1.5 h-6 rounded-full ${
                              index === currentStep
                                ? 'bg-gradient-to-b from-pink-500 to-violet-500'
                                : 'bg-transparent'
                            }`}
                          />
                          <span className="text-sm font-semibold">{step.title}</span>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Next Options Section - positioned inside sidebar like demo.planton.ai */}
                  {stepData.next_options && stepData.next_options.length > 0 && (
                    <div className="text-center">
                      <p className="text-xs text-slate-400 mb-2">Want to explore another area?</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {stepData.next_options.map((opt: any, i: number) => (
                          <Button
                            key={i}
                            variant="ghost"
                            size="sm"
                            onClick={() => startDemo(opt.path)}
                            className="text-slate-500 hover:text-violet-600 hover:bg-violet-100"
                          >
                            {opt.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </aside>
              </main>
            </div>

            <footer className="bg-slate-50/50 border-t px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-500">
                  Step {currentStep + 1} of {pathSteps.length}
                </span>
                <div className="w-48 bg-slate-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-violet-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / pathSteps.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={navigatePrev}
                  className="bg-white text-slate-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={navigateNext}
                  disabled={isLastStep && !stepData.next_options?.length}
                  className="btn-gradient text-white font-bold disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </footer>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
