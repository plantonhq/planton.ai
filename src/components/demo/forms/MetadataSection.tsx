'use client';

import React, { useState, useEffect } from 'react';
import { FormField } from './FormField';

interface MetadataSectionProps {
  name: string;
  slug: string;
  onNameChange: (value: string) => void;
  onSlugChange: (value: string) => void;
  namePlaceholder?: string;
  slugPlaceholder?: string;
  nameHelpText?: string;
  slugHelpText?: string;
}

export const MetadataSection: React.FC<MetadataSectionProps> = ({
  name,
  slug,
  onNameChange,
  onSlugChange,
  namePlaceholder = "my-credential",
  slugPlaceholder = "my-credential",
  nameHelpText,
  slugHelpText,
}) => {
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

  // Auto-generate slug when name changes (only if slug hasn't been manually edited)
  useEffect(() => {
    if (!isSlugManuallyEdited && name) {
      const generatedSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '-') // Replace special characters with hyphens
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
      
      onSlugChange(generatedSlug);
    }
  }, [name, isSlugManuallyEdited, onSlugChange]);

  const handleNameChange = (value: string) => {
    onNameChange(value);
  };

  const handleSlugChange = (value: string) => {
    onSlugChange(value);
    
    // If user clears the slug (makes it blank), resume auto-generation
    if (value.trim() === '') {
      setIsSlugManuallyEdited(false);
    } else {
      // Mark slug as manually edited when user changes it to non-empty value
      setIsSlugManuallyEdited(true);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        label="Name"
        value={name}
        onChange={handleNameChange}
        placeholder={namePlaceholder}
        helpText={nameHelpText}
      />
      <FormField
        label="Slug"
        value={slug}
        onChange={handleSlugChange}
        placeholder={slugPlaceholder}
        helpText={slugHelpText}
      />
    </div>
  );
};
