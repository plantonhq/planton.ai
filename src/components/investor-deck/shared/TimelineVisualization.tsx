'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  milestone?: boolean;
}

interface TimelineVisualizationProps {
  items: TimelineItem[];
}

export default function TimelineVisualization({
  items,
}: TimelineVisualizationProps) {
  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="timeline-item"
        >
          <div className="timeline-marker" />
          <div className="timeline-content">
            <div className="text-sm text-violet-600 font-semibold mb-1">
              {item.date}
            </div>
            <div className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
              {item.milestone && (
                <span className="ml-2 text-xs bg-violet-100 text-violet-600 px-2 py-1 rounded-full">
                  Milestone
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
