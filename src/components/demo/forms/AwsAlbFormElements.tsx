'use client';

import React, { useState } from 'react';
import { AwsAlb } from '../interfaces';
import { FormField } from './FormField';
import { TabNavigation } from './TabNavigation';

interface AwsAlbFormElementsProps {
  formData: AwsAlb;
  onInputChange: (field: string, value: any) => void;
  helpTextMapping?: { [key: string]: string };
  section?: 'subnets' | 'securityGroups' | 'loadBalancer' | 'dns' | 'ssl';
}

export const AwsAlbFormElements: React.FC<AwsAlbFormElementsProps> = ({
  formData,
  onInputChange,
  helpTextMapping,
  section,
}) => {
  const [subnetTab, setSubnetTab] = useState<'direct' | 'reference'>('direct');
  const [securityGroupTab, setSecurityGroupTab] = useState<'direct' | 'reference'>('direct');

  const handleSubnetChange = (index: number, value: string) => {
    const newSubnets = [...(formData.spec?.subnets || [])];
    newSubnets[index] = { value };
    onInputChange('spec.subnets', newSubnets);
  };

  const handleSecurityGroupChange = (index: number, value: string) => {
    const newSecurityGroups = [...(formData.spec?.securityGroups || [])];
    newSecurityGroups[index] = { value };
    onInputChange('spec.securityGroups', newSecurityGroups);
  };

  const addSubnet = () => {
    const newSubnets = [...(formData.spec?.subnets || []), { value: '' }];
    onInputChange('spec.subnets', newSubnets);
  };

  const removeSubnet = (index: number) => {
    const newSubnets = (formData.spec?.subnets || []).filter((_, i) => i !== index);
    onInputChange('spec.subnets', newSubnets);
  };

  const addSecurityGroup = () => {
    const newSecurityGroups = [...(formData.spec?.securityGroups || []), { value: '' }];
    onInputChange('spec.securityGroups', newSecurityGroups);
  };

  const removeSecurityGroup = (index: number) => {
    const newSecurityGroups = (formData.spec?.securityGroups || []).filter((_, i) => i !== index);
    onInputChange('spec.securityGroups', newSecurityGroups);
  };

  // Render specific section based on section prop
  if (section === 'subnets') {
    return (
      <TabNavigation
        tabs={[
          {
            id: 'direct',
            label: 'Direct Value',
            icon: (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            ),
            content: (
              <div className="space-y-3">
                {(formData.spec?.subnets || []).map((subnet, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FormField
                      label=""
                      value={subnet.value || ''}
                      onChange={(value) => handleSubnetChange(index, value)}
                      placeholder="subnet-xxxxxxxxx"
                      helpText={index === 0 ? helpTextMapping?.['spec.subnets'] : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => removeSubnet(index)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSubnet}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Another
                </button>
              </div>
            ),
          },
          {
            id: 'reference',
            label: 'Reference',
            icon: (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            ),
            content: (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Reference existing subnets from your AWS account.
                </p>
                <div className="space-y-2">
                  {(formData.spec?.subnets || []).map((subnet, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FormField
                        label=""
                        value={subnet.value || ''}
                        onChange={(value) => handleSubnetChange(index, value)}
                        placeholder="Select subnet reference"
                        helpText={index === 0 ? helpTextMapping?.['spec.subnets'] : undefined}
                      />
                      <button
                        type="button"
                        onClick={() => removeSubnet(index)}
                        className="p-1 text-red-600 hover:text-red-800"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSubnet}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Another
                  </button>
                </div>
              </div>
            ),
          },
        ]}
        activeTab={subnetTab}
        onTabChange={(tabId) => setSubnetTab(tabId as 'direct' | 'reference')}
      />
    );
  }

  if (section === 'securityGroups') {
    return (
      <TabNavigation
        tabs={[
          {
            id: 'direct',
            label: 'Direct Value',
            icon: (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            ),
            content: (
              <div className="space-y-3">
                {(formData.spec?.securityGroups || []).map((sg, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FormField
                      label=""
                      value={sg.value || ''}
                      onChange={(value) => handleSecurityGroupChange(index, value)}
                      placeholder="sg-xxxxxxxxx"
                      helpText={index === 0 ? helpTextMapping?.['spec.securityGroups'] : undefined}
                    />
                    <button
                      type="button"
                      onClick={() => removeSecurityGroup(index)}
                      className="p-1 text-red-600 hover:text-red-800"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSecurityGroup}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Another
                </button>
              </div>
            ),
          },
          {
            id: 'reference',
            label: 'Reference',
            icon: (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            ),
            content: (
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  Reference existing security groups from your AWS account.
                </p>
                <div className="space-y-2">
                  {(formData.spec?.securityGroups || []).map((sg, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FormField
                        label=""
                        value={sg.value || ''}
                        onChange={(value) => handleSecurityGroupChange(index, value)}
                        placeholder="Select security group reference"
                        helpText={
                          index === 0 ? helpTextMapping?.['spec.securityGroups'] : undefined
                        }
                      />
                      <button
                        type="button"
                        onClick={() => removeSecurityGroup(index)}
                        className="p-1 text-red-600 hover:text-red-800"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSecurityGroup}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Another
                  </button>
                </div>
              </div>
            ),
          },
        ]}
        activeTab={securityGroupTab}
        onTabChange={(tabId) => setSecurityGroupTab(tabId as 'direct' | 'reference')}
      />
    );
  }

  if (section === 'loadBalancer') {
    return (
      <div>
        <FormField
          label="Idle Timeout (seconds)"
          value={formData.spec?.idleTimeoutSeconds?.toString() || '60'}
          onChange={(value) => onInputChange('spec.idleTimeoutSeconds', parseInt(value) || 60)}
          placeholder="60"
          type="number"
          helpText={helpTextMapping?.['spec.idleTimeoutSeconds']}
        />

        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.spec?.internal || false}
              onChange={(e) => onInputChange('spec.internal', e.target.checked)}
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
                borderRadius: '2px',
              }}
            />
            <label className="text-sm font-medium text-gray-900">Internal Load Balancer</label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={formData.spec?.deleteProtectionEnabled || false}
              onChange={(e) => onInputChange('spec.deleteProtectionEnabled', e.target.checked)}
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
                borderRadius: '2px',
              }}
            />
            <label className="text-sm font-medium text-gray-900">Deletion Protection</label>
          </div>
        </div>
      </div>
    );
  }

  if (section === 'dns') {
    return (
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.spec?.dns?.enabled || false}
          onChange={(e) => onInputChange('spec.dns.enabled', e.target.checked)}
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
            borderRadius: '2px',
          }}
        />
        <label className="text-sm font-medium text-gray-900">Enable</label>
      </div>
    );
  }

  if (section === 'ssl') {
    return (
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.spec?.ssl?.enabled || false}
          onChange={(e) => onInputChange('spec.ssl.enabled', e.target.checked)}
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
            borderRadius: '2px',
          }}
        />
        <label className="text-sm font-medium text-gray-900">Enable</label>
      </div>
    );
  }

  // Default: render all sections (for backward compatibility)
  return <div className="space-y-6">{/* All sections as before */}</div>;
};
