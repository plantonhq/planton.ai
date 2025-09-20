'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  X,
  Save,
  ChevronRight,
} from 'lucide-react';
import DraggableInfraBlock from './DraggableInfraBlock';
import AwsVpcIcon from '../../../assets/icons/aws-vpc.svg';
import AwsEksClusterIcon from '../../../assets/icons/aws-eks-cluster.svg';
import PostgresKubernetesIcon from '../../../assets/icons/postgres-kubernetes.svg';
import RedisKubernetesIcon from '../../../assets/icons/redis-kubernetes.svg';
import CloudflareR2BucketIcon from '../../../assets/icons/cloudflare-r2-bucket.svg';
import AwsCloudfrontIcon from '../../../assets/icons/aws-cloudfront.svg';

interface InfraBlock {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  x?: number;
  y?: number;
  config?: {
    region?: string;
    size?: string;
    replicas?: number;
  };
}

export default function InfraChartsBuilder() {
  const [canvasBlocks, setCanvasBlocks] = useState<InfraBlock[]>([]);
  const [selectedBlock, setSelectedBlock] = useState<InfraBlock | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const availableBlocks: InfraBlock[] = [
    {
      id: 'vpc-1',
      name: 'VPC',
      icon: AwsVpcIcon,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 'eks-1',
      name: 'EKS Cluster',
      icon: AwsEksClusterIcon,
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'postgres-1',
      name: 'Postgres',
      icon: PostgresKubernetesIcon,
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'redis-1',
      name: 'Redis',
      icon: RedisKubernetesIcon,
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'r2-1',
      name: 'R2 Bucket',
      icon: CloudflareR2BucketIcon,
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 'cdn-1',
      name: 'CDN',
      icon: AwsCloudfrontIcon,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const handleBlockClick = (block: InfraBlock) => {
    const newBlock: InfraBlock = {
      ...block,
      id: `${block.id}-${Date.now()}`,
      x: Math.random() * 300 + 50,
      y: Math.random() * 200 + 50,
      config: {
        region: 'us-east-1',
        size: 'medium',
        replicas: 1,
      },
    };
    setCanvasBlocks([...canvasBlocks, newBlock]);
  };

  const handleRemoveBlock = (blockId: string) => {
    setCanvasBlocks(canvasBlocks.filter(b => b.id !== blockId));
    if (selectedBlock?.id === blockId) {
      setSelectedBlock(null);
    }
  };

  const handleConfigChange = (blockId: string, config: any) => {
    setCanvasBlocks(blocks =>
      blocks.map(b =>
        b.id === blockId ? { ...b, config: { ...b.config, ...config } } : b
      )
    );
  };

  return (
    <div className="h-full flex">
      {/* Left Sidebar - Available Blocks */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
        <h3 className="font-bold text-gray-900 mb-4">Available Blocks</h3>
        <div className="space-y-2">
          {availableBlocks.map(block => {
            const Icon = block.icon;
            return (
              <motion.button
                key={block.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBlockClick(block)}
                className="w-full bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-8 h-8" />
                  <span className="font-medium text-gray-700">{block.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              </motion.button>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Click to add blocks to canvas
        </p>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">InfraCharts Builder</h2>
              <p className="text-sm text-gray-600">
                Design your infrastructure visually
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Chart
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {canvasBlocks.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">
                  Click blocks on the left to start building
                </p>
              </div>
            </div>
          )}

          <AnimatePresence>
            {canvasBlocks.map(block => (
              <DraggableInfraBlock
                key={block.id}
                block={block}
                isSelected={selectedBlock?.id === block.id}
                isDragging={isDragging}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false);
                  setCanvasBlocks(blocks =>
                    blocks.map(b =>
                      b.id === block.id
                        ? { ...b, x: (block.x || 0) + info.offset.x, y: (block.y || 0) + info.offset.y }
                        : b
                    )
                  );
                }}
                onClick={() => setSelectedBlock(block)}
                onRemove={handleRemoveBlock}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Sidebar - Config Panel */}
      <AnimatePresence>
        {selectedBlock && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            className="w-80 bg-white border-l border-gray-200 p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-gray-900">Configure {selectedBlock.name}</h3>
              <button
                onClick={() => setSelectedBlock(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select
                  value={selectedBlock.config?.region || 'us-east-1'}
                  onChange={(e) =>
                    handleConfigChange(selectedBlock.id, { region: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="us-east-1">US East (N. Virginia)</option>
                  <option value="us-west-2">US West (Oregon)</option>
                  <option value="eu-west-1">EU (Ireland)</option>
                  <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Size
                </label>
                <select
                  value={selectedBlock.config?.size || 'medium'}
                  onChange={(e) =>
                    handleConfigChange(selectedBlock.id, { size: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="xlarge">Extra Large</option>
                </select>
              </div>

              {(selectedBlock.name === 'EKS Cluster' || selectedBlock.name === 'Postgres') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Replicas
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={selectedBlock.config?.replicas || 1}
                    onChange={(e) =>
                      handleConfigChange(selectedBlock.id, {
                        replicas: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              )}

              <div className="pt-4 border-t border-gray-200">
                <button className="w-full py-2 px-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-200">
                  Apply Configuration
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
