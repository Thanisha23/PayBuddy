// UsernameContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UsernameContextType {
  username: string;
  setUsername: (name: string) => void;
}

const UsernameContext = createContext<UsernameContextType | undefined>(undefined);

export const UserinfoContext = (): UsernameContextType => {
  const context = useContext(UsernameContext);
  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }
  return context;
};

interface UsernameProviderProps {
  children: ReactNode;
}

export const UsernameProvider: React.FC<UsernameProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};