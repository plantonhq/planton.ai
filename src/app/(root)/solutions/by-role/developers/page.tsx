import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  BuildFasterDeploySmarter,
  FocusOnBuilding,
  YourAIDevOpsCopilot,
  FamiliarKubernetes,
  VersionControl,
  VersionControl2,
  DeployFromAnywhere,
  PodAccess,
  SeamlessCICDIntegration,
  CookiecutterTemplates,
  AIGeneratedDeployment,
  BgDots,
  ExtensiveDocumentation,
  BuiltByDevelopers,
  ReadyToElevate,
} from '@/components';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Build Faster, Deploy Smarter ',
};

export default function startupFoundersPage() {
  return (
    <Box>
      <BgDots />
      <BuildFasterDeploySmarter />
      <FocusOnBuilding />
      <YourAIDevOpsCopilot />
      <FamiliarKubernetes />
      <VersionControl />
      <VersionControl2 />
      <DeployFromAnywhere />
      <PodAccess />
      <SeamlessCICDIntegration />
      <CookiecutterTemplates />
      <AIGeneratedDeployment
        title="AI-Generated Deployment Summaries"
        subTitle="Cut through the noise of verbose deployment logs with AI-generated summaries. Planton
          Cloud translates complex Pulumi outputs into clear, concise insights in natural language,
          helping you understand deployment outcomes at a glance."
      />
      <ExtensiveDocumentation />
      <BuiltByDevelopers />
      <ReadyToElevate />
    </Box>
  );
}
