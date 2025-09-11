'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Globe,
  Shield,
  HardDrive,
  Cpu,
  Network,
  Lock,
  Plus,
  Check,
  Search,
  ExternalLink,
} from 'lucide-react';

interface LegoBlock {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  isAdded: boolean;
}

export default function LegoCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blocks, setBlocks] = useState<LegoBlock[]>([
    {
      id: 'postgres',
      name: 'Postgres Database',
      category: 'database',
      description: 'Scalable PostgreSQL database with automatic backups',
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      isAdded: false,
    },
    {
      id: 'eks',
      name: 'EKS Cluster',
      category: 'compute',
      description: 'Managed Kubernetes cluster on AWS',
      icon: Server,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      isAdded: false,
    },
    {
      id: 'r2-bucket',
      name: 'R2 Storage Bucket',
      category: 'storage',
      description: 'Cloudflare R2 object storage, S3-compatible',
      icon: HardDrive,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      isAdded: false,
    },
    {
      id: 'cdn',
      name: 'CDN Distribution',
      category: 'network',
      description: 'Global content delivery network',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      isAdded: false,
    },
    {
      id: 'waf',
      name: 'Web Application Firewall',
      category: 'security',
      description: 'Protect applications from common attacks',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      isAdded: false,
    },
    {
      id: 'redis',
      name: 'Redis Cache',
      category: 'database',
      description: 'In-memory data store for caching',
      icon: Cpu,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      isAdded: false,
    },
    {
      id: 'vpc',
      name: 'Virtual Private Cloud',
      category: 'network',
      description: 'Isolated network environment',
      icon: Network,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      isAdded: false,
    },
    {
      id: 'secrets',
      name: 'Secrets Manager',
      category: 'security',
      description: 'Secure storage for API keys and credentials',
      icon: Lock,
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50',
      isAdded: false,
    },
  ]);

  const categories = [
    { id: 'all', name: 'All', count: blocks.length },
    { id: 'compute', name: 'Compute', count: blocks.filter(b => b.category === 'compute').length },
    { id: 'database', name: 'Database', count: blocks.filter(b => b.category === 'database').length },
    { id: 'storage', name: 'Storage', count: blocks.filter(b => b.category === 'storage').length },
    { id: 'network', name: 'Network', count: blocks.filter(b => b.category === 'network').length },
    { id: 'security', name: 'Security', count: blocks.filter(b => b.category === 'security').length },
  ];

  const handleAddBlock = (blockId: string) => {
    setBlocks(prev =>
      prev.map(block =>
        block.id === blockId ? { ...block, isAdded: true } : block
      )
    );
  };

  const filteredBlocks = blocks.filter(block => {
    const matchesSearch = block.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         block.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || block.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addedCount = blocks.filter(b => b.isAdded).length;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Infrastructure Catalog</h2>
            <p className="text-gray-600 mt-1">
              Pre-built, production-ready infrastructure blocks
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Added to Environment</p>
              <p className="text-2xl font-bold text-gray-900">{addedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div className="px-8 py-4 border-b border-gray-200" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: '#545C66' }} />
            <input
              type="text"
              placeholder="Search blocks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 focus:outline-none"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #E0E0E0',
                borderRadius: '6px',
                minHeight: '34px',
                fontSize: '12px',
                fontWeight: 400,
                padding: '0px 8px',
                paddingLeft: '32px',
                transition: 'border-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#959595';
                e.target.style.boxShadow = '0 0 0 3px rgba(66, 89, 161, 0.34)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E0E0E0';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Categories Tabs */}
          <div className="flex gap-6" style={{ minHeight: '40px', alignItems: 'center' }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="relative transition-all duration-200"
                style={{
                  color: '#0E131E',
                  textTransform: 'none',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: selectedCategory === category.id ? '#E7EAED' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  minHeight: 'auto'
                }}
              >
                {selectedCategory === category.id && (
                  <div className="absolute left-0 right-0 h-0.5" style={{ backgroundColor: '#005DA0', bottom: '-12px' }}></div>
                )}
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blocks Grid */}
      <div className="flex-1 overflow-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl border ${
                  block.isAdded ? 'border-green-400' : 'border-gray-200'
                } demo-card-shadow hover:demo-card-hover transition-all duration-200 h-full`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Header with icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${block.color} rounded-lg flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    {block.isAdded && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-green-100 rounded-full p-2"
                      >
                        <Check className="w-4 h-4 text-green-600" />
                      </motion.div>
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="flex-1 mb-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {block.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  {/* Action button */}
                  {!block.isAdded ? (
                    <button
                      onClick={() => handleAddBlock(block.id)}
                      className="w-full demo-button"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add to Environment
                      </span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-center text-sm">
                      <span className="text-green-600 font-medium">
                        ✓ Added
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredBlocks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blocks found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
