'use client';

import React from 'react';
import { AwsCredential } from '../interfaces';
import { FormField } from './FormField';

interface AwsCredentialFormElementsProps {
  formData: AwsCredential;
  onInputChange: (field: string, value: string) => void;
  helpTextMapping?: { [key: string]: string };
}

export const AwsCredentialFormElements: React.FC<AwsCredentialFormElementsProps> = ({
  formData,
  onInputChange,
  helpTextMapping,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Account ID */}
      <FormField
        label="Account ID"
        value={formData.spec.accountId}
        onChange={(value) => onInputChange('spec.accountId', value)}
        placeholder="123456789012"
        helpText={helpTextMapping?.['spec.accountId']}
      />

      {/* Default Region */}
      <FormField
        label="Default Region"
        value={formData.spec.region}
        onChange={(value) => onInputChange('spec.region', value)}
        placeholder="us-east-1"
        helpText={helpTextMapping?.['spec.region']}
      />

      {/* Access Key ID */}
      <FormField
        label="Access Key ID"
        value={formData.spec.accessKeyId}
        onChange={(value) => onInputChange('spec.accessKeyId', value)}
        placeholder="AKIA..."
        helpText={helpTextMapping?.['spec.accessKeyId']}
      />

      {/* Secret Access Key */}
      <FormField
        label="Secret Access Key"
        value={formData.spec.secretAccessKey}
        onChange={(value) => onInputChange('spec.secretAccessKey', value)}
        placeholder="Enter your secret access key"
        type="password"
        helpText={helpTextMapping?.['spec.secretAccessKey']}
      />
    </div>
  );
};
