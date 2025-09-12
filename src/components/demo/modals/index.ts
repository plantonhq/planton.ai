/**
 * Demo modals index
 * Exports all modal components for demo
 */

// Core modal components
export { CredentialModal } from './CredentialModal';
export { CredentialModalFactory, createCredentialModal } from './CredentialModalFactory';
export { FormModalRegistry } from './FormModalRegistry';

// Higher-order component
export { withCredentialModal } from './withCredentialModal';

// Specific credential modals
export { AwsCredentialModal } from './AwsCredentialModal';
export { AwsAlbModal } from './AwsAlbModal';

// Legacy component (kept for backward compatibility)
export { CloudProviderModal } from './CloudProviderModal';
