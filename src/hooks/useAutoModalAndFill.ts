'use client';

import { useEffect, useRef, useCallback } from 'react';

// Global state to survive component remounting (React Strict Mode)
// Using actual global variables, not useRef, to persist across remounts
let globalAutoClickTimer: NodeJS.Timeout | null = null;
let globalAutoClickExecuted = false;

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

  // Auto-click functionality with comprehensive iOS debugging
  useEffect(() => {
    console.log('🍎 iOS DEBUG - useAutoModalAndFill: useEffect triggered');
    console.log('🍎 iOS DEBUG - enabled:', enabled);
    console.log('🍎 iOS DEBUG - globalAutoClickExecuted:', globalAutoClickExecuted);
    console.log('🍎 iOS DEBUG - globalAutoClickTimer exists:', !!globalAutoClickTimer);
    console.log('🍎 iOS DEBUG - debugPrefix:', debugPrefix);
    console.log('🍎 iOS DEBUG - User Agent:', navigator.userAgent);
    console.log('🍎 iOS DEBUG - isIOS:', /iPad|iPhone|iPod/.test(navigator.userAgent));
    
    if (enabled && !globalAutoClickExecuted && !globalAutoClickTimer) {
      console.log('🍎 iOS DEBUG - Setting up auto-click timer with delay:', autoClickDelay, 'ms');
      globalAutoClickExecuted = true; // Mark as triggered to prevent multiple timers
      
      globalAutoClickTimer = setTimeout(() => {
        console.log('🍎 iOS DEBUG - Auto-click timer fired!');
        console.log('🍎 iOS DEBUG - Timer fired at:', new Date().toISOString());
        try {
          onAutoClick();
          console.log('🍎 iOS DEBUG - onAutoClick called successfully');
        } catch (error) {
          console.error('🍎 iOS DEBUG - Error calling onAutoClick:', error);
          console.error('🍎 iOS DEBUG - Error stack:', error instanceof Error ? error.stack : 'No stack trace');
        }
        globalAutoClickTimer = null; // Clear the global timer
      }, autoClickDelay);
    } else {
      console.log('🍎 iOS DEBUG - Auto-click conditions not met');
      console.log('🍎 iOS DEBUG - enabled:', enabled, 'executed:', globalAutoClickExecuted, 'timer exists:', !!globalAutoClickTimer);
    }
  }, [enabled, autoClickDelay, onAutoClick, debugPrefix]);

  // Reset global state when component unmounts
  useEffect(() => {
    return () => {
      console.log('🍎 iOS DEBUG - useAutoModalAndFill: Component unmounting, resetting global state');
      globalAutoClickExecuted = false;
      if (globalAutoClickTimer) {
        clearTimeout(globalAutoClickTimer);
        globalAutoClickTimer = null;
      }
    };
  }, [debugPrefix]);

  // Manual trigger function for testing
  const triggerAutoClick = useCallback(() => {
    console.log('🍎 iOS DEBUG - Manual triggerAutoClick called');
    console.log('🍎 iOS DEBUG - User Agent:', navigator.userAgent);
    console.log('🍎 iOS DEBUG - isIOS:', /iPad|iPhone|iPod/.test(navigator.userAgent));
    try {
      onAutoClick();
      console.log('🍎 iOS DEBUG - Manual onAutoClick called successfully');
    } catch (error) {
      console.error('🍎 iOS DEBUG - Error in manual onAutoClick:', error);
      console.error('🍎 iOS DEBUG - Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    }
  }, [onAutoClick, debugPrefix]);

  return {
    triggerAutoClick
  };
};
