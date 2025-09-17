import { createCredentialModal } from './CredentialModalFactory';
import { AwsAlbForm } from '../forms';

export const AwsAlbModal = createCredentialModal(
  AwsAlbForm,
  'AWS ALB Configuration'
);
