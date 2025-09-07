'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle, XCircle, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LogLine {
  id: number;
  text: string;
  type: 'info' | 'success' | 'error' | 'warning';
  timestamp: string;
}

const mockLogMessages = [
    { text: 'Initializing deployment pipeline...', type: 'info' as const },
    { text: 'Authenticating with AWS...', type: 'info' as const },
    { text: '✓ AWS credentials validated', type: 'success' as const },
    { text: 'Creating VPC: planton-demo-vpc', type: 'info' as const },
    { text: '  → Creating Internet Gateway...', type: 'info' as const },
    { text: '  → Configuring route tables...', type: 'info' as const },
    { text: '  → Setting up NAT Gateway...', type: 'info' as const },
    { text: '✓ VPC created successfully', type: 'success' as const },
    { text: 'Provisioning EKS cluster: planton-demo-cluster', type: 'info' as const },
    { text: '  → Creating IAM roles...', type: 'info' as const },
    { text: '  → Launching control plane...', type: 'info' as const },
    { text: '  → Adding node group (3 nodes)...', type: 'info' as const },
    { text: '  → Installing core addons...', type: 'info' as const },
    { text: '✓ EKS cluster ready', type: 'success' as const },
    { text: 'Setting up RDS Postgres instance...', type: 'info' as const },
    { text: '  → Creating subnet group...', type: 'info' as const },
    { text: '  → Configuring security groups...', type: 'info' as const },
    { text: '  → Enabling encryption...', type: 'info' as const },
    { text: '  → Creating primary instance...', type: 'info' as const },
    { text: '  → Setting up read replica...', type: 'info' as const },
    { text: '✓ Postgres database deployed', type: 'success' as const },
    { text: 'Deploying Redis cache cluster...', type: 'info' as const },
    { text: '  → Creating ElastiCache subnet group...', type: 'info' as const },
    { text: '  → Launching Redis nodes...', type: 'info' as const },
    { text: '✓ Redis cache ready', type: 'success' as const },
    { text: 'Configuring R2 storage bucket...', type: 'info' as const },
    { text: '  → Setting CORS policies...', type: 'info' as const },
    { text: '  → Configuring lifecycle rules...', type: 'info' as const },
    { text: '✓ R2 bucket configured', type: 'success' as const },
    { text: 'Running final health checks...', type: 'info' as const },
    { text: '  → VPC connectivity: OK', type: 'success' as const },
    { text: '  → EKS API endpoint: OK', type: 'success' as const },
    { text: '  → Database connection: OK', type: 'success' as const },
    { text: '  → Redis connection: OK', type: 'success' as const },
    { text: '  → Storage access: OK', type: 'success' as const },
    { text: '✨ Deployment completed successfully!', type: 'success' as const },
  ];

export default function DeployLogs() {
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [isDeploying, setIsDeploying] = useState(true);
  const [deploymentComplete, setDeploymentComplete] = useState(false);
  const logsEndRef = useRef<null | HTMLDivElement>(null);
  const logIdRef = useRef(0);

  useEffect(() => {
    const scrollToBottom = () => {
      logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const addLog = (message: typeof mockLogMessages[0], delay: number) => {
      setTimeout(() => {
        const timestamp = new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        
        setLogs(prev => [
          ...prev,
          {
            id: logIdRef.current++,
            text: message.text,
            type: message.type,
            timestamp,
          },
        ]);
        scrollToBottom();
      }, delay);
    };

    // Schedule all logs
    let totalDelay = 0;
    mockLogMessages.forEach((message, index) => {
      const delay = index === 0 ? 500 : Math.random() * 800 + 300;
      totalDelay += delay;
      addLog(message, totalDelay);
    });

    // Mark deployment as complete
    setTimeout(() => {
      setIsDeploying(false);
      setDeploymentComplete(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, totalDelay + 1000);

    return () => {
      confetti.reset();
    };
  }, []);

  const getLogIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'warning':
        return <span className="text-amber-500">⚠</span>;
      default:
        return <span className="text-blue-500">→</span>;
    }
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      case 'warning':
        return 'text-amber-400';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-900">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-800 bg-gray-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-gray-400" />
            <h2 className="text-lg font-mono text-gray-200">Deployment Console</h2>
          </div>
          <div className="flex items-center gap-3">
            <AnimatePresence>
              {isDeploying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-blue-400"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm font-mono">Deploying...</span>
                </motion.div>
              )}
              {deploymentComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-400"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-mono">Deployment Complete!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 overflow-auto bg-gray-950 p-4 font-mono text-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence initial={false}>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 mb-2"
              >
                <span className="text-gray-600 text-xs">{log.timestamp}</span>
                <span className="flex-shrink-0">{getLogIcon(log.type)}</span>
                <span className={getLogColor(log.type)}>{log.text}</span>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={logsEndRef} />
        </div>
      </div>

      {/* Summary */}
      <AnimatePresence>
        {deploymentComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 py-4 border-t border-gray-800 bg-gray-900"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                    <p className="text-lg font-mono text-gray-200">4m 32s</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Resources</p>
                    <p className="text-lg font-mono text-gray-200">5 created</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Status</p>
                    <p className="text-lg font-mono text-green-400">Success</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg font-medium transition-colors duration-200">
                    View Resources
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-200">
                    Open Dashboard
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
