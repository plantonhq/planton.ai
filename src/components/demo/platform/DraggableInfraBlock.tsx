'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

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

interface DraggableInfraBlockProps {
  block: InfraBlock;
  isSelected: boolean;
  isDragging: boolean;
  onDragStart: () => void;
  onDragEnd: (e: any, info: any) => void;
  onClick: () => void;
  onRemove: (blockId: string) => void;
}

export default function DraggableInfraBlock({
  block,
  isSelected,
  isDragging,
  onDragStart,
  onDragEnd,
  onClick,
  onRemove,
}: DraggableInfraBlockProps) {
  const Icon = block.icon;

  return (
    <motion.div
      key={block.id}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      style={{
        position: 'absolute',
        left: block.x,
        top: block.y,
      }}
      className="cursor-move"
      drag
      dragMomentum={false}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={() => !isDragging && onClick()}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`relative group ${
          isSelected
            ? 'ring-4 ring-violet-500 ring-offset-2 rounded-xl'
            : 'rounded-lg'
        }`}
      >
        <div className={`bg-white border border-gray-200 shadow-sm p-3 min-w-[200px] ${
          isSelected ? 'rounded-xl' : 'rounded-lg'
        }`}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove(block.id);
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <X className="w-3 h-3 text-white" />
          </button>
          <div className="flex items-center gap-3">
            <Icon className="w-10 h-10 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-900">
                {block.name}
              </span>
              <span className="text-xs text-gray-500">
                {block.id}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
