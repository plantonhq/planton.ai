'use client';

import React from 'react';
import { AwsCredential } from '../interfaces';
import { AwsCredentialForm } from '../forms';
import { CredentialModalFactory } from './CredentialModalFactory';

interface AwsCredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AwsCredential) => void;
  providerName?: string;
  providerDescription?: string;
  providerIcon?: React.ReactNode;
  initialData?: Partial<AwsCredential>;
}

export const AwsCredentialModal: React.FC<AwsCredentialModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  providerName = 'AWS',
  providerDescription = 'Amazon Web Services',
  providerIcon,
  initialData,
}) => {
  return (
    <CredentialModalFactory
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      providerName={providerName}
      providerDescription={providerDescription}
      providerIcon={providerIcon}
      FormComponent={AwsCredentialForm}
      formProps={{ initialData }}
      title="Create AWS Credentials"
    />
  );
};