'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  tenure?: string;
  initials: string;
  description?: string;
}

export default function TeamMemberCard({
  name,
  role,
  tenure,
  initials,
  description,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="team-member-card"
    >
      <div className="team-member-avatar">{initials}</div>
      <div className="team-member-name">{name}</div>
      <div className="team-member-role">{role}</div>
      {tenure && <div className="team-member-tenure">{tenure}</div>}
      {description && (
        <p className="text-sm text-gray-600 mt-3">{description}</p>
      )}
    </motion.div>
  );
}
