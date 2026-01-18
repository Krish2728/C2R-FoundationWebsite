// Simplified version without Internet Computer dependencies
import { createContext, useContext, ReactNode } from 'react';

interface InternetIdentityContextType {
  identity: null;
  loginStatus: 'logged-out' | 'logging-in';
  login: () => Promise<void>;
  clear: () => Promise<void>;
}

const InternetIdentityContext = createContext<InternetIdentityContextType>({
  identity: null,
  loginStatus: 'logged-out',
  login: async () => {},
  clear: async () => {},
});

export function InternetIdentityProvider({ children }: { children: ReactNode }) {
  return (
    <InternetIdentityContext.Provider value={{
      identity: null,
      loginStatus: 'logged-out',
      login: async () => {
        console.log('Login functionality not available in standalone version');
      },
      clear: async () => {},
    }}>
      {children}
    </InternetIdentityContext.Provider>
  );
}

export function useInternetIdentity() {
  return useContext(InternetIdentityContext);
}
