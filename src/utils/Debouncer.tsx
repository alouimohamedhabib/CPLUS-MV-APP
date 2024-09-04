  /**
   * Debounces a function, ensuring that it is only called after a specified delay has elapsed since the last time it was invoked.
   * 
   * @param func - The function to be debounced.
   * @param delay - The delay in milliseconds to wait before calling the function.
   * @returns A new function that, when invoked, will delay calling the original function until after the specified delay has elapsed.
   */
  const Debouncer = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

export default Debouncer;
