'use client'

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Cloud, Server, Layers, Home, CheckCircle, Play } from "lucide-react";
import { Button } from "@/app/components/tour/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { DemoStep } from "@/lib/entities";



const PathTile = ({ icon: Icon, title, description, iconColor, onClick }: {
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
      <div className={`w-16 h-16 ${iconColor} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

export default function DemoPage() {
  const [currentPath, setCurrentPath] = useState<string>("welcome");
  const [currentStep, setCurrentStep] = useState(0);
  const [demoSteps, setDemoSteps] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadDemoData = useCallback(async () => {
    if (currentPath === "welcome" || currentPath === "home") return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      console.log(`🔄 Fetching demo data for path: ${currentPath}`);
      // Fetch demo steps from the live API
      const steps = await DemoStep.list("-step_number");
      console.log(`✅ API response received:`, steps);
      const filteredSteps = steps.filter((step: any) => step.path === currentPath);
      console.log(`📊 Filtered steps for ${currentPath}:`, filteredSteps);
      setDemoSteps(filteredSteps.reverse());
    } catch (error) {
      console.error('❌ Failed to load demo data:', error);
      setError('Failed to load demo data from the API. Please try again later.');
      setDemoSteps([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPath]);

  useEffect(() => { 
    if (currentPath !== "welcome" && currentPath !== "home") {
      loadDemoData(); 
    }
  }, [loadDemoData, currentPath]);

  const resetDemo = useCallback(() => {
    setCurrentPath("welcome");
    setCurrentStep(0);
  }, []);

  const goToHome = useCallback(() => {
    setCurrentPath("home");
    setCurrentStep(0);
  }, []);

  const navigateNext = useCallback(() => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, demoSteps]);

  const navigatePrev = useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
    else goToHome();
  }, [currentStep, goToHome]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight": e.preventDefault(); navigateNext(); break;
      case "ArrowLeft": e.preventDefault(); navigatePrev(); break;
      case "Escape": e.preventDefault(); goToHome(); break;
    }
  }, [navigateNext, navigatePrev, goToHome]);
  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const startDemo = (path: string) => {
    setCurrentPath(path);
    setCurrentStep(0);
  };

  const getCurrentStepData = () => demoSteps[currentStep];

  // Welcome Screen
  if (currentPath === "welcome") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-lg mx-auto text-center">
          <Card className="bg-white rounded-3xl shadow-2xl">
            <CardContent className="p-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Welcome to Platform Demo</h1>
              <p className="text-gray-600 mb-8">
                Discover how our DevOps platform simplifies infrastructure management, deployment, and monitoring with powerful visual tools and integrations.
              </p>
              <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold" onClick={() => setCurrentPath('home')}>
                Start Interactive Demo
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Home Screen with Path Selection
  if (currentPath === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center p-8">
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
              An interactive walkthrough of our DevOps in a Box solution. Choose a path below to begin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <PathTile 
              icon={Cloud} 
              title="AWS Path" 
              description="For teams deploying on Amazon Web Services." 
              iconColor="bg-gradient-to-br from-orange-500 to-orange-600" 
              onClick={() => startDemo("aws")} 
            />
            <PathTile 
              icon={Cloud} 
              title="Google Cloud Path" 
              description="For teams deploying on Google Cloud Platform." 
              iconColor="bg-gradient-to-br from-green-500 to-green-600" 
              onClick={() => startDemo("gcp")} 
            />
            <PathTile 
              icon={Server} 
              title="InfraHub" 
              description="A deep-dive into infrastructure provisioning." 
              iconColor="bg-gradient-to-br from-purple-500 to-purple-600" 
              onClick={() => startDemo("infrahub")} 
            />
            <PathTile 
              icon={Layers} 
              title="ServiceHub" 
              description="A deep-dive into application deployment." 
              iconColor="bg-gradient-to-br from-cyan-500 to-cyan-600" 
              onClick={() => startDemo("servicehub")} 
            />
          </div>

          <div className="text-white/60 text-sm">
            <div className="flex items-center justify-center gap-6">
              <span className="font-medium text-white/80">Keyboard Navigation:</span>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">←</kbd> 
                / 
                <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">→</kbd>
                <span>Steps</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md font-mono text-white/90">ESC</kbd>
                <span>Home</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const stepData = getCurrentStepData();
  const pathSteps = demoSteps;
  const isLastStep = currentStep === pathSteps.length - 1;

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 mb-4">Loading demo content...</p>
          <p className="text-sm text-gray-500">Fetching data from the live API</p>
        </Card>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <p className="text-xl text-gray-600 mb-4">Demo content unavailable</p>
          <p className="text-sm text-gray-500 mb-4">{error}</p>
          <Button onClick={goToHome} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Home className="w-4 h-4 mr-2" />Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  if (!stepData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex items-center justify-center text-center p-8">
        <Card className="bg-white rounded-3xl shadow-2xl p-8">
          <p className="text-xl text-gray-600 mb-4">No demo content available for this path.</p>
          <Button onClick={goToHome} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Home className="w-4 h-4 mr-2" />Back to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
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
          className="w-full max-w-6xl"
        >
          <Card className="bg-white rounded-3xl shadow-2xl w-full overflow-hidden">
            <div className="p-8">
              <main className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    {stepData.title}
                  </h1>
                  <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: stepData.content }} />

                  {stepData.key_points && stepData.key_points.length > 0 && (
                    <div className="bg-slate-50 border border-gray-200 p-6 rounded-2xl">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Key Talking Points</h3>
                      <ul className="space-y-3">
                        {stepData.key_points.map((point: string, i: number) => 
                          <li key={i} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {stepData.demo_url && (
                    <div className="bg-violet-50 border-2 border-violet-200 p-6 rounded-2xl flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-violet-800">Switch to Live App</h3>
                        <p className="text-sm text-violet-600 mt-1">Click here to demonstrate this feature in Planton Cloud.</p>
                      </div>
                      <a href={stepData.demo_url} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold flex-shrink-0">
                          <ExternalLink className="w-4 h-4 mr-2" />Open App
                        </Button>
                      </a>
                    </div>
                  )}

                  {/* Next Options Section */}
                  <div className="text-center">
                    <p className="text-xs text-slate-400 mb-2">Want to explore another area?</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => startDemo("infrahub")} 
                        className="text-slate-500 hover:text-violet-600 hover:bg-violet-100"
                      >
                        Explore InfraHub
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => startDemo("servicehub")} 
                        className="text-slate-500 hover:text-violet-600 hover:bg-violet-100"
                      >
                        Explore ServiceHub
                      </Button>
                    </div>
                  </div>
                </div>
                
                <aside className="space-y-6">
                  <div className="bg-slate-50 border border-gray-200 p-4 rounded-2xl space-y-1">
                    {demoSteps.length === 0 ? (
                      <div className="text-center py-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-2"></div>
                        <p className="text-xs text-slate-500">Loading steps...</p>
                      </div>
                    ) : (
                      demoSteps.map((step: any, index: number) => (
                        <div 
                          key={step.id} 
                          onClick={() => setCurrentStep(index)} 
                          className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors duration-200 ${
                            index === currentStep 
                              ? 'bg-violet-100 text-violet-700' 
                              : 'text-slate-500 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`w-1.5 h-6 rounded-full ${
                            index === currentStep 
                              ? 'bg-gradient-to-b from-pink-500 to-violet-500' 
                              : 'bg-transparent'
                          }`}/>
                          <span className="text-sm font-semibold">{step.title}</span>
                        </div>
                      ))
                    )}
                  </div>
                </aside>
              </main>
            </div>

            <footer className="bg-slate-50/50 border-t border-gray-200 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-500">Step {currentStep + 1} of {demoSteps.length}</span>
                <div className="w-48 bg-slate-200 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-violet-500 h-1.5 rounded-full transition-all duration-500" 
                    style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={navigatePrev} 
                  className="bg-white border-gray-200 text-slate-600 hover:border-slate-300 hover:text-slate-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />Previous
                </Button>
                <Button 
                  onClick={navigateNext} 
                  disabled={isLastStep} 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold disabled:opacity-50"
                >
                  Next<ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </footer>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
