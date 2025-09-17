'use client';

import { useEffect, useRef, useCallback } from 'react';

// Global state to survive component remounting (React Strict Mode)
// Using the same pattern as the working implementation

interface AutoModalAndFillOptions {
  /** Whether to enable auto modal open functionality */
  enabled?: boolean;
  /** Delay before auto-clicking the first item (in milliseconds) */
  autoClickDelay?: number;
  /** Function to call when auto-clicking (should open the modal) */
  onAutoClick: () => void;
  /** Debug prefix for console logs */
  debugPrefix?: string;
}

interface AutoModalAndFillReturn {
  /** Manual trigger function to test the auto-click */
  triggerAutoClick: () => void;
}

/**
 * Reusable hook for auto modal open functionality
 * This is a simplified version that only handles the auto-click part
 * to ensure we don't break the existing working auto-fill logic
 * 
 * @param options Configuration options for the hook
 * @returns Object with manual trigger function for testing
 * 
 * @example
 * ```tsx
 * const { triggerAutoClick } = useAutoModalAndFill({
 *   enabled: AUTO_CLICK_FIRST_CARD,
 *   autoClickDelay: 1500,
 *   onAutoClick: () => handleCardClick(providers[0]),
 *   debugPrefix: 'Cloud Connections'
 * });
 * ```
 */
export const useAutoModalAndFill = (options: AutoModalAndFillOptions): AutoModalAndFillReturn => {
  const {
    enabled = true,
    autoClickDelay = 1500,
    onAutoClick,
    debugPrefix = 'Auto Modal & Fill'
  } = options;

  // Global state to survive component remounting (React Strict Mode)
  // Using the same pattern as the working implementation
  const globalAutoClickTimer = useRef<NodeJS.Timeout | null>(null);
  const globalAutoClickExecuted = useRef(false);

  // Auto-click functionality - exact same logic as working implementation
  useEffect(() => {
    if (enabled && !globalAutoClickExecuted.current && !globalAutoClickTimer.current) {
      globalAutoClickExecuted.current = true; // Mark as triggered to prevent multiple timers
      
      globalAutoClickTimer.current = setTimeout(() => {
        try {
          onAutoClick();
        } catch (error) {
          console.error(`Error calling onAutoClick:`, error);
        }
        globalAutoClickTimer.current = null; // Clear the global timer
      }, autoClickDelay);
    }
  }, [enabled, autoClickDelay, onAutoClick, debugPrefix]);

  // Reset global state when component unmounts
  useEffect(() => {
    return () => {
      globalAutoClickExecuted.current = false;
      if (globalAutoClickTimer.current) {
        clearTimeout(globalAutoClickTimer.current);
        globalAutoClickTimer.current = null;
      }
    };
  }, [debugPrefix]);

  // Manual trigger function for testing
  const triggerAutoClick = useCallback(() => {
    try {
      onAutoClick();
    } catch (error) {
      console.error(`Error in manual onAutoClick:`, error);
    }
  }, [onAutoClick, debugPrefix]);

  return {
    triggerAutoClick
  };
};
