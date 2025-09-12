import { createCredentialModal } from './CredentialModalFactory';
import { AwsAlbForm } from '../forms';
import { AwsAlb } from '../interfaces';

export const AwsAlbModal = createCredentialModal<AwsAlb>(
  AwsAlbForm,
  'AWS ALB Configuration'
);
