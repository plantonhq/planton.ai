import { base44 } from './base44Client';

// Type assertion to handle the dynamic nature of the entities
export const DemoStep = (base44.entities as any).DemoStep;

// auth sdk:
export const User = (base44 as any).auth;
