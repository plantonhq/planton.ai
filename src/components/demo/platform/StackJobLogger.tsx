'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import {
  StackJob,
  StackJobStatus,
  StackJobProgressIacOperationState,
  StackJobProgressIacOperationSnapshot,
  IacOperationResourceChangesSnapshotRow,
  IacOperationSummarySnapshot,
  WorkflowExecutionStatus,
  WorkflowExecutionResult,
  IacDiagnosticEventSeverityType,
} from '../interfaces';

interface StackJobLoggerProps {
  stackJobStatus: StackJobStatus;
  stackJob?: StackJob;
  loading?: boolean;
  onAnimationComplete?: () => void;
}

const StackJobLogger: React.FC<StackJobLoggerProps> = ({
  stackJobStatus,
  stackJob,
  loading = false,
  onAnimationComplete,
}) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: string }>({});
  const [visibleResources, setVisibleResources] = useState<{ [key: string]: number }>({});
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const setActiveTab = (sectionKey: string, tabKey: string) => {
    setActiveTabs((prev) => ({
      ...prev,
      [sectionKey]: tabKey,
    }));
  };

  const scrollToSection = (sectionTitle: string) => {
    if (containerRef.current) {
      // Find the section element by title
      const sectionElement = containerRef.current.querySelector(`[data-section="${sectionTitle}"]`);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  };

  // Initialize expanded sections and active tabs based on available operations
  useEffect(() => {
    if (!loading && stackJobStatus.iacOperations) {
      const newExpandedSections: { [key: string]: boolean } = {};
      const newActiveTabs: { [key: string]: string } = {};

      const operations = [
        {
          key: 'destroy',
          operation: stackJobStatus.iacOperations.destroy,
          title: 'pulumi destroy',
        },
        {
          key: 'destroyPreview',
          operation: stackJobStatus.iacOperations.destroyPreview,
          title: 'pulumi destroy preview',
        },
        { key: 'update', operation: stackJobStatus.iacOperations.update, title: 'pulumi update' },
        {
          key: 'updatePreview',
          operation: stackJobStatus.iacOperations.updatePreview,
          title: 'pulumi preview',
        },
        {
          key: 'refresh',
          operation: stackJobStatus.iacOperations.refresh,
          title: 'pulumi refresh',
        },
        { key: 'init', operation: stackJobStatus.iacOperations.init, title: 'pulumi init' },
      ].filter(({ operation }) => operation && operation.isRequired);

      operations.forEach(({ title, operation }) => {
        if (operation) {
          // Set section as expanded by default
          newExpandedSections[title] = true;

          // Determine the first available tab
          const snapshot = operation.snapshot;
          if (snapshot?.resourceRowMap) {
            newActiveTabs[title] = 'summary';
          } else if (snapshot?.resourceDiffs?.length) {
            newActiveTabs[title] = 'diff';
          } else if (snapshot?.outputs && Object.keys(snapshot.outputs).length) {
            newActiveTabs[title] = 'output';
          }
        }
      });

      setExpandedSections(newExpandedSections);
      setActiveTabs(newActiveTabs);
    }
  }, [stackJobStatus, loading]);

  // Animation effect for resources
  useEffect(() => {
    const animateResources = () => {
      // Animation order: from init (bottom) to destroy (top) - chronological order
      const operations = [
        {
          key: 'init',
          operation: stackJobStatus.iacOperations.init,
          title: 'pulumi init',
        },
        {
          key: 'refresh',
          operation: stackJobStatus.iacOperations.refresh,
          title: 'pulumi refresh',
        },
        {
          key: 'updatePreview',
          operation: stackJobStatus.iacOperations.updatePreview,
          title: 'pulumi preview',
        },
        {
          key: 'update',
          operation: stackJobStatus.iacOperations.update,
          title: 'pulumi update',
        },
        {
          key: 'destroyPreview',
          operation: stackJobStatus.iacOperations.destroyPreview,
          title: 'pulumi destroy preview',
        },
        {
          key: 'destroy',
          operation: stackJobStatus.iacOperations.destroy,
          title: 'pulumi destroy',
        },
      ].filter(({ operation }) => operation && operation.isRequired);

      let totalDelay = 0;

      operations.forEach(({ title, operation }) => {
        if (operation?.snapshot?.resourceRowMap) {
          const resources = Object.values(operation.snapshot.resourceRowMap);
          const sectionKey = title;

          // Reset visible count for this section
          setVisibleResources((prev) => ({ ...prev, [sectionKey]: 0 }));

          // Animate resources one by one with cumulative delay
          resources.forEach((_, index) => {
            setTimeout(() => {
              setVisibleResources((prev) => ({
                ...prev,
                [sectionKey]: Math.max(prev[sectionKey] || 0, index + 1),
              }));
              // Scroll to the current section being animated
              setTimeout(() => {
                scrollToSection(title);
              }, 100); // Small delay to ensure DOM is updated
            }, totalDelay + index * 200); // Cumulative delay + 200ms between each resource
          });

          // Add delay for the next operation (time for all resources in current operation to animate)
          totalDelay += resources.length * 200 + 500; // 500ms pause between operations
        }
      });

      // Call onAnimationComplete after all animations are done
      if (onAnimationComplete) {
        setTimeout(() => {
          onAnimationComplete();
        }, totalDelay + 1000); // Extra 1 second after last animation
      }
    };

    if (!loading) {
      // Start animation after a short delay
      animationTimeoutRef.current = setTimeout(animateResources, 500);
    }

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [stackJobStatus, loading]);

  const getStatusIcon = (status?: WorkflowExecutionStatus | string, result?: WorkflowExecutionResult | string) => {
    const statusStr = typeof status === 'string' ? status : WorkflowExecutionStatus[status as WorkflowExecutionStatus];
    const resultStr = typeof result === 'string' ? result : WorkflowExecutionResult[result as WorkflowExecutionResult];
    
    if (resultStr === 'succeeded' || statusStr === 'completed') {
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    }
    if (statusStr === 'running') {
      return <Clock className="w-4 h-4 text-blue-500 animate-spin" />;
    }
    if (resultStr === 'failed' || statusStr === 'failed') {
      return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
    return <Clock className="w-4 h-4 text-gray-500" />;
  };

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'update':
      case 'updating':
      case 'updated':
        return 'text-orange-400';
      case 'create':
      case 'creating':
      case 'created':
        return 'text-green-400';
      case 'delete':
      case 'deleting':
      case 'deleted':
        return 'text-red-400';
      case 'unchanged':
      case 'refreshed':
        return 'text-gray-400';
      case 'replace':
      case 'replacing':
      case 'replaced':
        return 'text-yellow-400';
      default:
        return 'text-gray-300';
    }
  };

  const getStatusSymbol = (status?: string) => {
    switch (status?.toLowerCase()) {
      case 'update':
      case 'updating':
      case 'updated':
        return '~';
      case 'create':
      case 'creating':
      case 'created':
        return '+';
      case 'delete':
      case 'deleting':
      case 'deleted':
        return '-';
      case 'replace':
      case 'replacing':
      case 'replaced':
        return '±';
      default:
        return '';
    }
  };

  const renderResourceTable = (
    resourceRowMap: { [key: string]: IacOperationResourceChangesSnapshotRow },
    sectionKey: string
  ) => {
    const resources = Object.values(resourceRowMap);
    const visibleCount = visibleResources[sectionKey] || 0;

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-3 text-gray-400">Type</th>
              <th className="text-left py-2 px-3 text-gray-400">Name</th>
              <th className="text-left py-2 px-3 text-gray-400">Status</th>
              <th className="text-left py-2 px-3 text-gray-400">Info</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence initial={false}>
              {resources.slice(0, visibleCount).map((resource, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-800"
                >
                  <td className="py-2 px-3">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${getStatusColor(resource.status || '')}`}>
                        {getStatusSymbol(resource.status || '')}
                      </span>
                      <span className="text-gray-300">{resource.resourceKind}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-gray-300">{resource.resourceName}</td>
                  <td className="py-2 px-3">
                    {resource.status && (
                      <span className={getStatusColor(resource.status)}>
                        {resource.status}{' '}
                        {resource.elapsedDurationSeconds && `(${resource.elapsedDurationSeconds}s)`}
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-gray-400">{resource.info || ''}</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    );
  };

  const renderSummary = (operation: StackJobProgressIacOperationState, sectionKey: string) => {
    if (!operation.snapshot?.resourceRowMap) return null;

    const resourceRowMap = operation.snapshot.resourceRowMap;
    const resources = Object.values(resourceRowMap);
    const unchangedCount = resources.filter((r) => !r.status || r.status === 'unchanged').length;
    const changedCount = resources.length - unchangedCount;

    return (
      <div className="space-y-4">
        {renderResourceTable(resourceRowMap, sectionKey)}
        <div className="pt-4 border-t border-gray-700">
          <div className="text-purple-400 font-medium mb-2">Resources:</div>
          <div className="text-gray-300">
            {changedCount > 0 && `${changedCount} changed. `}
            {unchangedCount} unchanged
          </div>
        </div>
      </div>
    );
  };

  const renderDiff = (operation: StackJobProgressIacOperationState) => {
    if (!operation.snapshot?.resourceDiffs) return null;

    return (
      <div className="space-y-2">
        {operation.snapshot.resourceDiffs.map((diff, index) => (
          <pre key={index} className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
            {diff}
          </pre>
        ))}
      </div>
    );
  };

  const renderOutput = (operation: StackJobProgressIacOperationState) => {
    if (!operation.snapshot?.outputs) return null;

    const outputs = operation.snapshot.outputs;
    const outputEntries = Object.entries(outputs);

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-2 px-3 text-gray-400">Name</th>
              <th className="text-left py-2 px-3 text-gray-400">Value</th>
            </tr>
          </thead>
          <tbody>
            {outputEntries.map(([key, value]) => (
              <tr key={key} className="border-b border-gray-800">
                <td className="py-2 px-3 text-gray-300 font-medium">{key}</td>
                <td className="py-2 px-3 text-gray-300 break-all">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderOperationSection = (operationKey: string, operation: StackJobProgressIacOperationState, title: string) => {
    if (!operation || !operation.isRequired) return null;

    const isExpanded = expandedSections[title];
    const activeTab = activeTabs[title];
    const snapshot = operation.snapshot;

    const tabs = [];
    if (snapshot?.resourceRowMap) tabs.push('summary');
    if (snapshot?.resourceDiffs?.length) tabs.push('diff');
    if (snapshot?.outputs && Object.keys(snapshot.outputs).length) tabs.push('output');

    return (
      <div
        key={operationKey}
        className="border border-gray-600 rounded-lg mb-4"
        data-section={title}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 cursor-pointer transition-colors"
          style={{ backgroundColor: '#242F5E' }}
          onClick={() => toggleSection(title)}
        >
          <div className="flex items-center gap-3">
            {getStatusIcon(operation.status, operation.result)}
            <span className="text-gray-200 font-medium">{title}</span>
          </div>
          <div className="flex items-center gap-4">
            {tabs.length > 0 && (
              <div className="flex gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(title, tab);
                    }}
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      activeTab === tab
                        ? 'text-gray-200'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                    style={activeTab === tab ? { backgroundColor: '#242C4B' } : {}}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            )}
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="p-4">
                {activeTab === 'summary' && renderSummary(operation, title)}
                {activeTab === 'diff' && renderDiff(operation)}
                {activeTab === 'output' && renderOutput(operation)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading stack job status...</p>
        </div>
      </div>
    );
  }

  const operations = [
    {
      key: 'destroy',
      operation: stackJobStatus.iacOperations.destroy,
      title: 'pulumi destroy',
    },
    {
      key: 'destroyPreview',
      operation: stackJobStatus.iacOperations.destroyPreview,
      title: 'pulumi destroy preview',
    },
    {
      key: 'update',
      operation: stackJobStatus.iacOperations.update,
      title: 'pulumi update',
    },
    {
      key: 'updatePreview',
      operation: stackJobStatus.iacOperations.updatePreview,
      title: 'pulumi preview',
    },
    {
      key: 'refresh',
      operation: stackJobStatus.iacOperations.refresh,
      title: 'pulumi refresh',
    },
    {
      key: 'init',
      operation: stackJobStatus.iacOperations.init,
      title: 'pulumi init',
    },
  ].filter(({ operation }) => operation && operation.isRequired);

  return (
    <div ref={containerRef} className="h-full text-white overflow-auto">
      <div className="p-6">
        <div className="max-w-6xl mx-auto" style={{ backgroundColor: '#1f1f43' }}>

          {/* Operations */}
          {operations.map(
            ({ key, operation, title }) =>
              operation && renderOperationSection(key, operation, title)
          )}
        </div>
      </div>
    </div>
  );
};

export default StackJobLogger;
