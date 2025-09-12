'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AwsCredential } from '../interfaces';
import { AwsCredentialFormElements } from './AwsCredentialFormElements';
import { AccordionSection } from './AccordionSection';
import { MetadataSection } from './MetadataSection';
import { useAwsCredentialData } from '../../../hooks/useAwsCredentialData';

interface AwsCredentialFormProps {
  onSubmit: (data: AwsCredential) => void;
  onCancel: () => void;
  initialData?: Partial<AwsCredential>;
}

export const AwsCredentialForm: React.FC<AwsCredentialFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authorizedEnvironments, setAuthorizedEnvironments] = useState<string[]>([]);
  const { data: jsonData, refetch, loading: dataLoading } = useAwsCredentialData();

  const [formData, setFormData] = useState<AwsCredential>({
    metadata: {
      name: '',
      slug: '',
      id: '',
      org: '',
      env: '',
      labels: {},
      annotations: {},
      tags: [],
      ...initialData?.metadata,
    },
    spec: {
      accountId: '',
      region: '',
      accessKeyId: '',
      secretAccessKey: '',
      ...initialData?.spec,
    },
  });

  // Set default values from JSON data when available
  useEffect(() => {
    if (jsonData) {
      setFormData(prev => ({
        ...prev,
        metadata: {
          ...prev.metadata,
          name: jsonData.metadata.name || prev.metadata.name,
          slug: jsonData.metadata.slug || prev.metadata.slug,
        },
        spec: {
          ...prev.spec,
          accountId: jsonData.spec.accountId || prev.spec.accountId,
          region: jsonData.spec.region || prev.spec.region,
          accessKeyId: jsonData.spec.accessKeyId || prev.spec.accessKeyId,
          secretAccessKey: jsonData.spec.secretAccessKey || prev.spec.secretAccessKey,
        },
      }));
    }
  }, [jsonData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = field.split('.');
      
      if (keys.length === 2) {
        // Handle nested fields like 'metadata.name' or 'spec.accountId'
        const [parent, child] = keys;
        newData[parent as keyof AwsCredential] = {
          ...newData[parent as keyof AwsCredential],
          [child]: value,
        } as any;
      }
      
      return newData;
    });
  };

  const handleMetadataNameChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        name: value,
      },
    }));
  }, []);

  const handleMetadataSlugChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        slug: value,
      },
    }));
  }, []);

  const handleEnvironmentToggle = (environment: string) => {
    setAuthorizedEnvironments(prev => {
      if (prev.includes(environment)) {
        return prev.filter(env => env !== environment);
      } else {
        return [...prev, environment];
      }
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      // Include authorized environments in the form data
      const formDataWithEnvironments = {
        ...formData,
        authorizedEnvironments,
      };
      await onSubmit(formDataWithEnvironments as any);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefreshData = async () => {
    await refetch();
  };

  const helpTextMapping = {
    'metadata.name': 'Enter a unique name for your AWS credential',
    'spec.accountId': 'Your 12-digit AWS account ID',
    'spec.region': 'Default AWS region for deployments',
    'spec.accessKeyId': 'Your AWS access key ID (starts with AKIA)',
    'spec.secretAccessKey': 'Your AWS secret access key',
  };

  return (
    <div className="mx-auto bg-gray-50 min-h-screen">
      <form onSubmit={handleFormSubmit} className="h-screen flex flex-col">
        {/* Fixed Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                <img 
                  src="/images/resources/aws.svg" 
                  alt="AWS icon"
                  className="w-4 h-4"
                />
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Create AWS Credentials</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleRefreshData}
                disabled={dataLoading}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg 
                  className={`w-4 h-4 ${dataLoading ? 'animate-spin' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {dataLoading ? 'Refreshing...' : 'Refresh Data'}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pb-12 space-y-6">
              {/* Metadata Section */}
              <AccordionSection title="Metadata">
                <MetadataSection
                  name={formData.metadata.name}
                  slug={formData.metadata.slug}
                  onNameChange={handleMetadataNameChange}
                  onSlugChange={handleMetadataSlugChange}
                  namePlaceholder="my-aws-credential"
                  slugPlaceholder="my-aws-credential"
                  nameHelpText={helpTextMapping['metadata.name']}
                />
              </AccordionSection>

              {/* AWS Account Details Section */}
              <AccordionSection title="AWS Account Details">
                <AwsCredentialFormElements
                  formData={formData}
                  onInputChange={handleInputChange}
                  helpTextMapping={helpTextMapping}
                />
              </AccordionSection>

              {/* Authorized Environments Section */}
              <AccordionSection title="Authorized Environments">
                <div className="space-y-3">
                  {['app-dev', 'app-prod'].map((environment) => (
                    <label
                      key={environment}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={authorizedEnvironments.includes(environment)}
                        onChange={() => handleEnvironmentToggle(environment)}
                        style={{
                          appearance: 'auto',
                          WebkitAppearance: 'checkbox',
                          MozAppearance: 'checkbox',
                          width: '16px',
                          height: '16px',
                          margin: '0',
                          padding: '0',
                          border: '1px solid #ccc',
                          backgroundColor: 'white',
                          borderRadius: '2px'
                        }}
                      />
                      <span className="text-sm font-medium text-gray-900">{environment}</span>
                    </label>
                  ))}
                </div>
              </AccordionSection>
            </div>
          </div>
      </form>
    </div>
  );
};