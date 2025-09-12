'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { AwsAlb } from '../interfaces';
import { AwsAlbFormElements } from './AwsAlbFormElements';
import { AccordionSection } from './AccordionSection';
import { MetadataSection } from './MetadataSection';
import { useAwsAlbData } from '../../../hooks/useAwsAlbData';

interface AwsAlbFormProps {
  onSubmit: (data: AwsAlb) => void;
  onCancel: () => void;
  initialData?: Partial<AwsAlb>;
}

export const AwsAlbForm: React.FC<AwsAlbFormProps> = ({
  onSubmit,
  onCancel,
  initialData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: jsonData, refetch, loading: dataLoading } = useAwsAlbData();

  const [formData, setFormData] = useState<AwsAlb>({
    apiVersion: 'aws.project-planton.org/v1',
    kind: 'AwsAlb',
    metadata: {
      name: initialData?.metadata?.name || '',
      slug: initialData?.metadata?.slug || '',
      id: initialData?.metadata?.id || '',
      org: initialData?.metadata?.org || '',
      env: initialData?.metadata?.env || '',
      labels: initialData?.metadata?.labels || {},
      annotations: initialData?.metadata?.annotations || {},
      tags: initialData?.metadata?.tags || [],
      version: initialData?.metadata?.version,
    },
    spec: {
      subnets: initialData?.spec?.subnets || [],
      securityGroups: initialData?.spec?.securityGroups || [],
      internal: initialData?.spec?.internal || false,
      deleteProtectionEnabled: initialData?.spec?.deleteProtectionEnabled || false,
      idleTimeoutSeconds: initialData?.spec?.idleTimeoutSeconds || 60,
      dns: initialData?.spec?.dns,
      ssl: initialData?.spec?.ssl,
    },
  });

  // Set default values from JSON data when available
  useEffect(() => {
    if (jsonData) {
      setFormData(prev => ({
        ...prev,
        metadata: {
          name: jsonData.metadata?.name || prev.metadata.name,
          slug: jsonData.metadata?.slug || prev.metadata.slug,
          id: jsonData.metadata?.id || prev.metadata.id,
          org: jsonData.metadata?.org || prev.metadata.org,
          env: jsonData.metadata?.env || prev.metadata.env,
          labels: jsonData.metadata?.labels || prev.metadata.labels,
          annotations: jsonData.metadata?.annotations || prev.metadata.annotations,
          tags: jsonData.metadata?.tags || prev.metadata.tags,
          version: jsonData.metadata?.version || prev.metadata.version,
        },
        spec: {
          subnets: jsonData.spec?.subnets || prev.spec.subnets,
          securityGroups: jsonData.spec?.securityGroups || prev.spec.securityGroups,
          internal: jsonData.spec?.internal ?? prev.spec.internal,
          deleteProtectionEnabled: jsonData.spec?.deleteProtectionEnabled ?? prev.spec.deleteProtectionEnabled,
          idleTimeoutSeconds: jsonData.spec?.idleTimeoutSeconds || prev.spec.idleTimeoutSeconds,
          dns: jsonData.spec?.dns || prev.spec.dns,
          ssl: jsonData.spec?.ssl || prev.spec.ssl,
        },
      }));
    }
  }, [jsonData]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => {
      const newData = { ...prev };
      const keys = field.split('.');
      
      if (keys.length === 2) {
        // Handle nested fields like 'metadata.name' or 'spec.internal'
        const [parent, child] = keys;
        if (parent === 'metadata') {
          newData.metadata = {
            name: newData.metadata.name,
            slug: newData.metadata.slug,
            id: newData.metadata.id,
            org: newData.metadata.org,
            env: newData.metadata.env,
            labels: newData.metadata.labels,
            annotations: newData.metadata.annotations,
            tags: newData.metadata.tags,
            version: newData.metadata.version,
            [child]: value,
          };
        } else if (parent === 'spec') {
          newData.spec = {
            subnets: newData.spec.subnets,
            securityGroups: newData.spec.securityGroups,
            internal: newData.spec.internal,
            deleteProtectionEnabled: newData.spec.deleteProtectionEnabled,
            idleTimeoutSeconds: newData.spec.idleTimeoutSeconds,
            dns: newData.spec.dns,
            ssl: newData.spec.ssl,
            [child]: value,
          };
        }
      } else if (keys.length === 3) {
        // Handle deeply nested fields like 'spec.dns.enabled'
        const [parent, child, grandchild] = keys;
        if (parent === 'spec' && child === 'dns') {
          newData.spec = {
            ...newData.spec,
            dns: {
              enabled: newData.spec.dns?.enabled || false,
              route53ZoneId: newData.spec.dns?.route53ZoneId,
              hostnames: newData.spec.dns?.hostnames || [],
              [grandchild]: value,
            },
          };
        } else if (parent === 'spec' && child === 'ssl') {
          newData.spec = {
            ...newData.spec,
            ssl: {
              enabled: newData.spec.ssl?.enabled || false,
              certificateArn: newData.spec.ssl?.certificateArn,
              [grandchild]: value,
            },
          };
        }
      } else if (keys.length === 4) {
        // Handle very deeply nested fields like 'spec.dns.route53ZoneId.value'
        const [parent, child, grandchild, greatGrandchild] = keys;
        if (parent === 'spec' && child === 'dns' && grandchild === 'route53ZoneId') {
          newData.spec = {
            ...newData.spec,
            dns: {
              enabled: newData.spec.dns?.enabled || false,
              route53ZoneId: {
                ...newData.spec?.dns?.route53ZoneId,
                [greatGrandchild]: value,
              },
              hostnames: newData.spec.dns?.hostnames || [],
            },
          };
        } else if (parent === 'spec' && child === 'ssl' && grandchild === 'certificateArn') {
          newData.spec = {
            ...newData.spec,
            ssl: {
              enabled: newData.spec.ssl?.enabled || false,
              certificateArn: {
                ...newData.spec?.ssl?.certificateArn,
                [greatGrandchild]: value,
              },
            },
          };
        }
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefreshData = async () => {
    await refetch();
  };

  const helpTextMapping = {
    'metadata.name': 'Enter a unique name for your AWS ALB',
    'spec.subnets': 'List of subnet IDs where the ALB will be deployed (minimum 2 required)',
    'spec.securityGroups': 'Security groups to attach to the ALB',
    'spec.internal': 'Whether the ALB should be internal (not internet-facing)',
    'spec.deleteProtectionEnabled': 'Enable deletion protection to prevent accidental deletion',
    'spec.idleTimeoutSeconds': 'Connection idle timeout in seconds (default: 60)',
    'spec.dns.enabled': 'Enable Route53 DNS configuration',
    'spec.dns.route53ZoneId': 'Route53 hosted zone ID for DNS records',
    'spec.dns.hostnames': 'Domain names that will point to this ALB',
    'spec.ssl.enabled': 'Enable SSL/TLS termination',
    'spec.ssl.certificateArn': 'ARN of the SSL certificate from AWS Certificate Manager',
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
              <h1 className="text-xl font-semibold text-gray-900">Deploy AWS ALB</h1>
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
                  'Deploy ALB'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 pb-12">
            {/* Accordion Sections */}
            <div className="space-y-6">
            {/* Metadata Section */}
            <AccordionSection title="Metadata">
              <div className="space-y-4">
                {/* Environment Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Environment
                  </label>
                  <select
                    value={formData.metadata?.env || 'dev'}
                    onChange={(e) => handleInputChange('metadata.env', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                  >
                    <option value="dev">dev</option>
                    <option value="staging">staging</option>
                    <option value="prod">prod</option>
                  </select>
                </div>
                
                {/* Name and Slug using MetadataSection */}
                <MetadataSection
                  name={formData.metadata?.name || ''}
                  slug={formData.metadata?.slug || ''}
                  onNameChange={handleMetadataNameChange}
                  onSlugChange={handleMetadataSlugChange}
                  namePlaceholder="my-aws-alb"
                  slugPlaceholder="my-aws-alb"
                  nameHelpText={helpTextMapping['metadata.name']}
                />
              </div>
            </AccordionSection>

            {/* Subnets Section */}
            <AccordionSection title="Subnets">
              <AwsAlbFormElements
                formData={formData}
                onInputChange={handleInputChange}
                helpTextMapping={helpTextMapping}
                section="subnets"
              />
            </AccordionSection>

            {/* Security Groups Section */}
            <AccordionSection title="Security Groups">
              <AwsAlbFormElements
                formData={formData}
                onInputChange={handleInputChange}
                helpTextMapping={helpTextMapping}
                section="securityGroups"
              />
            </AccordionSection>

            {/* Load Balancer Settings Section */}
            <AccordionSection title="Load Balancer Settings">
              <AwsAlbFormElements
                formData={formData}
                onInputChange={handleInputChange}
                helpTextMapping={helpTextMapping}
                section="loadBalancer"
              />
            </AccordionSection>

            {/* DNS Section */}
            <AccordionSection title="DNS">
              <AwsAlbFormElements
                formData={formData}
                onInputChange={handleInputChange}
                helpTextMapping={helpTextMapping}
                section="dns"
              />
            </AccordionSection>

            {/* SSL Section */}
            <AccordionSection title="SSL">
              <AwsAlbFormElements
                formData={formData}
                onInputChange={handleInputChange}
                helpTextMapping={helpTextMapping}
                section="ssl"
              />
            </AccordionSection>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
