'use client';

import React from 'react';
import { CredentialModal } from './CredentialModal';

interface WithCredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  providerName: string;
  providerDescription: string;
  providerIcon?: React.ReactNode;
  title?: string;
  submitLabel?: string;
  cancelLabel?: string;
}

export function withCredentialModal<T extends object>(
  FormComponent: React.ComponentType<T>
) {
  return function CredentialModalWrapper(
    props: WithCredentialModalProps & Omit<T, 'onSubmit' | 'onCancel'>
  ) {
    const {
      isOpen,
      onClose,
      onSubmit,
      providerName,
      providerDescription,
      providerIcon,
      title,
      submitLabel,
      cancelLabel,
      ...formProps
    } = props;

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
        onSubmit={onSubmit}
        providerName={providerName}
        providerDescription={providerDescription}
        providerIcon={providerIcon}
        title={title}
        submitLabel={submitLabel}
        cancelLabel={cancelLabel}
      >
        <FormComponent
          {...(formProps as T)}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </CredentialModal>
    );
  };
}
