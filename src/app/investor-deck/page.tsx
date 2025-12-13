'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Planton Cloud',
    subtitle: 'Vercel for Backend Infrastructure',
    content: (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-gray-900">Planton Cloud</h1>
          <p className="text-3xl text-gray-600">Vercel for Backend Infrastructure</p>
          <p className="text-xl text-gray-500 mt-8">Swarup Donepudi, Founder</p>
          <p className="text-lg text-gray-400">Seed Stage · December 2024</p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'The Problem',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">Dev teams waste 40% of time managing multi-cloud deployments</h2>
        <div className="space-y-8 text-2xl text-gray-700">
          <div>
            <p className="font-semibold text-gray-900">Multi-cloud fragmentation</p>
            <p className="text-gray-600">Different tools, APIs, mental models for the same task</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">No CI/CD for infrastructure</p>
            <p className="text-gray-600">Deploying code is easy, deploying infra is still manual</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">DevOps expertise is scarce and expensive</p>
            <p className="text-gray-600">Small teams can't afford dedicated DevOps engineers</p>
          </div>
        </div>
        <p className="text-xl text-gray-500 pt-8 border-t border-gray-200">Cloud spend is $200B+ and growing, but complexity is breaking teams</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'The Solution',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">Planton Cloud: Kubernetes-style consistency + git-push deployments</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">InfraHub</h3>
            <p className="text-xl text-gray-700">150+ deployment components across all major clouds</p>
          </div>
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">ServiceHub</h3>
            <p className="text-xl text-gray-700">Git-to-production CI/CD (like Vercel, but for backend)</p>
          </div>
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Open-Source Foundation</h3>
            <p className="text-xl text-gray-700">Project Planton (transparent, zero vendor lock-in)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'How It Works',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Same experience, any cloud</h2>
        <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
          <pre className="font-mono text-lg text-gray-800 leading-relaxed">
{`apiVersion: [provider].project-planton.org/v1
kind: [ResourceType]
metadata:
  name: production-database
spec:
  # Provider-specific config`}
          </pre>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="p-6 border-2 border-gray-300 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">AWS RDS</p>
          </div>
          <div className="p-6 border-2 border-gray-300 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">GCP Cloud SQL</p>
          </div>
          <div className="p-6 border-2 border-gray-300 rounded-lg">
            <p className="text-2xl font-bold text-gray-900">Kubernetes</p>
          </div>
        </div>
        <p className="text-2xl text-gray-700 text-center pt-8">Consistency of experience, not abstraction</p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Market Opportunity',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">$5B+ market, growing 25% yearly</h2>
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">The Numbers</h3>
            <ul className="space-y-3 text-2xl text-gray-700">
              <li>100K+ companies with DevOps teams globally</li>
              <li>Average spend: $50-200K/year on tooling</li>
              <li>Target: Mid-market SaaS companies</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Why Now</h3>
            <ul className="space-y-3 text-2xl text-gray-700">
              <li>Cloud complexity at breaking point</li>
              <li>Developer experience platforms winning</li>
              <li>Vercel, Railway, Render raised $100M+</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Traction',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Early validation: product works, developers pay</h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-3">
            <p className="text-6xl font-bold text-gray-900">$800</p>
            <p className="text-2xl text-gray-700">Monthly Recurring Revenue</p>
            <p className="text-lg text-gray-500">Validates willingness to pay</p>
          </div>
          <div className="space-y-3">
            <p className="text-6xl font-bold text-gray-900">150+</p>
            <p className="text-2xl text-gray-700">Deployment Components</p>
            <p className="text-lg text-gray-500">2+ years of engineering</p>
          </div>
          <div className="space-y-3">
            <p className="text-6xl font-bold text-gray-900">5-10</p>
            <p className="text-2xl text-gray-700">Production Customers</p>
            <p className="text-lg text-gray-500">Using platform daily</p>
          </div>
          <div className="space-y-3">
            <p className="text-6xl font-bold text-gray-900">Open</p>
            <p className="text-2xl text-gray-700">Source Foundation</p>
            <p className="text-lg text-gray-500">Project Planton community</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Vision: AI Agent Fleet',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Cursor for DevOps</h2>
        <p className="text-3xl text-gray-700">Specialized agents for high-stakes infrastructure</p>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold text-gray-900">Pipeline Troubleshooter</h3>
            <p className="text-xl text-gray-600">Debugs failing CI/CD, suggests fixes</p>
          </div>
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-2xl font-bold text-gray-900">AWS RDS Agent</h3>
            <p className="text-xl text-gray-600">Provisions databases securely</p>
          </div>
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-2xl font-bold text-gray-900">Cost Optimizer</h3>
            <p className="text-xl text-gray-600">Finds wasteful spend</p>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 pt-8">
          <p className="text-2xl text-gray-700"><span className="font-bold">Like having 10 expert DevOps engineers available 24/7</span></p>
          <p className="text-lg text-gray-500 mt-4">R&D phase · Proof-of-concept working · Launch 2025</p>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Vision: Cloud Provider',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">Why be delivery vehicle when you can be the hotel?</h2>
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">The Insight</h3>
            <p className="text-2xl text-gray-700">80% of apps need only 20% of AWS services</p>
            <p className="text-xl text-gray-600">Containers · Databases · Storage</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Our Approach</h3>
            <p className="text-2xl text-gray-700">Build control plane (our strength) · Rent infrastructure (Hetzner, OVH)</p>
            <p className="text-xl text-gray-600">40% cheaper than AWS · Essential services only</p>
          </div>
          <div className="border-t-2 border-gray-200 pt-8 space-y-3">
            <p className="text-xl text-gray-700">Precedents: Render ($50M Series B), Railway, Fly.io</p>
            <p className="text-xl font-bold text-gray-900">This round: Software and GTM, not infrastructure</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Go-to-Market',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Target: US tech companies (Series A/B startups)</h2>
        <div className="space-y-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">Product-Led Growth</h3>
              <p className="text-xl text-gray-600">Free tier → paid conversion</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">Open-Source Community</h3>
              <p className="text-xl text-gray-600">Project Planton drives awareness</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">IT Consulting Partners</h3>
              <p className="text-xl text-gray-600">Channel for enterprise</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">Developer Advocacy</h3>
              <p className="text-xl text-gray-600">Content, talks, community</p>
            </div>
          </div>
          <div className="border-t-2 border-gray-200 pt-8">
            <p className="text-2xl text-gray-700">Usage-based pricing · Aligns with customer growth</p>
            <p className="text-xl text-gray-500 mt-3">2 signed customers, 3 in active trials</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'Competition',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Compete on experience, not features</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-6 text-xl">
            <div className="font-semibold text-gray-900">Alternative</div>
            <div className="font-semibold text-gray-900">Limitation</div>
            <div className="font-semibold text-gray-900">Our Advantage</div>
            
            <div className="text-gray-700">Terraform, Pulumi</div>
            <div className="text-gray-600">Steep learning curve</div>
            <div className="text-gray-900 font-semibold">Consistent across clouds</div>
            
            <div className="text-gray-700">Heroku, Vercel</div>
            <div className="text-gray-600">Limited to containers</div>
            <div className="text-gray-900 font-semibold">Full infra automation</div>
            
            <div className="text-gray-700">AWS, GCP, Azure</div>
            <div className="text-gray-600">Complex, expensive</div>
            <div className="text-gray-900 font-semibold">Simple, integrated</div>
            
            <div className="text-gray-700">Render, Railway</div>
            <div className="text-gray-600">Locked to their infra</div>
            <div className="text-gray-900 font-semibold">Multi-cloud choice</div>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 pt-8">
          <p className="text-2xl font-bold text-gray-900 mb-3">Our Moat</p>
          <p className="text-xl text-gray-700">150+ components · Open-source foundation · Integrated experience</p>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: 'Team',
    content: (
      <div className="space-y-12">
        <h2 className="text-5xl font-bold text-gray-900">Solo founder, proven execution</h2>
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Founder-Market Fit</h3>
            <p className="text-2xl text-gray-700">DevOps engineer across 1-person startups to 500-dev orgs</p>
            <p className="text-xl text-gray-600">Lived the pain · Built Planton to make my job obsolete</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">Proof of Execution</h3>
            <p className="text-2xl text-gray-700">2+ years building · $500K personal investment</p>
            <p className="text-2xl text-gray-700">Shipped 150+ components · Generated first revenue</p>
          </div>
          <div className="border-t-2 border-gray-200 pt-8 space-y-4">
            <p className="text-3xl font-bold text-gray-900">Build the Postman of DevOps from India</p>
            <p className="text-xl text-gray-600">Postman: 98% of Fortune 500 use it · We aim for same in DevOps</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl text-gray-700">Post-funding: Hire ML engineer + DevRel lead + Senior devs</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: 'The Ask',
    content: (
      <div className="space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-6xl font-bold text-gray-900">$500K on SAFE</h2>
          <p className="text-4xl text-gray-600">$6-8M cap</p>
        </div>
        <div className="grid grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Use of Funds</h3>
            <div className="space-y-4 text-xl">
              <div className="flex justify-between">
                <span className="text-gray-700">Engineering</span>
                <span className="font-bold text-gray-900">60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">GTM</span>
                <span className="font-bold text-gray-900">20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Product</span>
                <span className="font-bold text-gray-900">15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Operations</span>
                <span className="font-bold text-gray-900">5%</span>
              </div>
            </div>
            <p className="text-lg text-gray-500 pt-4">12-18 months runway</p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">12-Month Goals</h3>
            <ul className="space-y-3 text-xl text-gray-700">
              <li>$50K MRR (60x growth)</li>
              <li>AI agent fleet beta</li>
              <li>10 enterprise pilots</li>
              <li>Prove platform value</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-200 pt-12 mt-12 text-center">
          <p className="text-3xl font-bold text-gray-900">The next Postman from India</p>
        </div>
      </div>
    ),
  },
];

export default function InvestorDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Slide container */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl">
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center py-2 text-xs text-gray-400">
        Use arrow keys or space to navigate
      </div>
    </div>
  );
}
