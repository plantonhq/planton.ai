import { createClient } from '@base44/sdk';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68b10362b87a2272a1d01cca", 
  requiresAuth: false
});
