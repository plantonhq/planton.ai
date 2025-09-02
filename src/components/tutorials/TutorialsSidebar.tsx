'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

interface TutorialsSidebarProps {
  className?: string;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onTagClick: (tag: string) => void;
  onNavigate?: () => void;
}

// Category to icon mapping
const categoryIcons: Record<string, string> = {
  'aws': '☁️',
  'kubernetes': '⚓',
  'containers': '📦',
  'deployment': '🚀',
  'automation': '⚙️',
  'monitoring': '📊',
  'infrastructure': '🏗️',
  'architecture': '🏛️',
  'cloud': '☁️',
  'devops': '🔄',
  'security': '🔒',
  'database': '🗄️',
  'all': '📚'
};

export default function TutorialsSidebar({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  onNavigate
}: TutorialsSidebarProps) {

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    if (onNavigate) {
      onNavigate();
    }
  };

  const getCategoryIcon = (category: string): string => {
    return categoryIcons[category] || '📄';
  };

  return (
    <Box className="h-full overflow-y-auto">
      <Box className="p-4 border-b border-gray-700">
        <Typography variant="h6" className="text-white font-semibold">
          Tutorials
        </Typography>
      </Box>
      <Box className="py-2">
        <Box className="px-4">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
            aria-label="View all tutorials"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg" role="img" aria-label="All Tutorials">
                {getCategoryIcon('all')}
              </span>
              All Tutorials
            </span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
              aria-label={`View ${category} tutorials`}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg" role="img" aria-label={`${category} category`}>
                  {getCategoryIcon(category)}
                </span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
