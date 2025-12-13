'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  value: string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export default function MetricCard({
  value,
  label,
  trend,
  trendValue,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="metric-card"
    >
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      {trend && trendValue && (
        <div
          className={`text-sm mt-2 ${
            trend === 'up'
              ? 'text-green-600'
              : trend === 'down'
              ? 'text-red-600'
              : 'text-gray-600'
          }`}
        >
          {trend === 'up' && '↑ '}
          {trend === 'down' && '↓ '}
          {trendValue}
        </div>
      )}
    </motion.div>
  );
}
