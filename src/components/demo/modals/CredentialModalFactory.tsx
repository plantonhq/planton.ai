'use client';

import React from 'react';
import { CredentialModal } from './CredentialModal';

interface CredentialFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  initialData?: any;
}

interface CredentialModalFactoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  providerName: string;
  providerDescription: string;
  providerIcon?: React.ReactNode;
  FormComponent: React.ComponentType<CredentialFormProps>;
  formProps?: any;
  title?: string;
  submitLabel?: string;
  cancelLabel?: string;
}

export const CredentialModalFactory: React.FC<CredentialModalFactoryProps> = ({
  isOpen,
  onClose,
  onSubmit,
  providerName,
  providerDescription,
  providerIcon,
  FormComponent,
  formProps = {},
  title,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
}) => {
  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    onClose();
  };

  const handleFormCancel = () => {
    onClose();
  };

  return (
    <CredentialModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <FormComponent
        {...formProps}
        onSubmit={handleFormSubmit}
        onCancel={handleFormCancel}
      />
    </CredentialModal>
  );
};

// Factory function that creates a modal component
export function createCredentialModal(
  FormComponent: React.ComponentType<CredentialFormProps>,
  modalTitle: string
): React.FC<Omit<CredentialModalFactoryProps, 'FormComponent' | 'title'>> {
  return (props) => (
    <CredentialModalFactory
      {...props}
      FormComponent={FormComponent}
      title={modalTitle}
    />
  );
}
