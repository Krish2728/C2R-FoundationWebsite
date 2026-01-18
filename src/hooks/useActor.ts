// Simplified version - returns empty actor for standalone React app
export function useActor() {
  return { 
    actor: null, 
    isFetching: false 
  };
}
