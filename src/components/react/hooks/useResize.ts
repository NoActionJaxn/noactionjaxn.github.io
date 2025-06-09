import { useEffect, useRef } from "react";
import debounce from "lodash.debounce";

/**
 * A custom React hook that handles window resize events with debouncing.
 * 
 * @param {() => void} callback - The function to be called when the window is resized.
 * @param {number} [delay=250] - The debounce delay in milliseconds. Defaults to 250ms.
 * 
 * @example
 * // Basic usage
 * useResize(() => {
 *   console.log('Window resized');
 * }, 300);
 * 
 * @example
 * // With a state update
 * const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
 * 
 * useResize(() => {
 *   setWindowSize({
 *     width: window.innerWidth,
 *     height: window.innerHeight
 *   });
 * });
 * 
 * @returns {void}
 */
export function useResize(callback: () => void, delay: number = 250): void {
  // Use a ref to store the latest callback
  const callbackRef = useRef(callback);

  // Update the callback ref when the callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the resize event listener with debouncing
  useEffect(() => {
    // Create a debounced version of the callback
    const debouncedResize = debounce(() => {
      callbackRef.current();
    }, delay);

    // Add event listener
    window.addEventListener("resize", debouncedResize);

    // Clean up function to remove the event listener and cancel any pending callbacks
    return () => {
      debouncedResize.cancel();
      window.removeEventListener("resize", debouncedResize);
    };
  }, [delay]);
}
