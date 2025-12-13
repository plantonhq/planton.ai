'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface QuoteCardProps {
  quote: string;
  author: string;
  role?: string;
}

export default function QuoteCard({ quote, author, role }: QuoteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="quote-card"
    >
      <div className="quote-text">"{quote}"</div>
      <div className="quote-author">
        — {author}
        {role && <span className="text-gray-500"> • {role}</span>}
      </div>
    </motion.div>
  );
}
