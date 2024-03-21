import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { createContext } from 'react'


export const Context = createContext<{
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isAuthenticated: false, setIsAuthenticated: () => {} });


const AppWrapper = () => {

 const [isAuthenticated,setIsAuthenticated] = useState(false);

return (
    <Context.Provider value={{isAuthenticated,setIsAuthenticated}}>
<App />
    </Context.Provider>
);
};






ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark"  storageKey="vite-ui-theme">
  
<AppWrapper />
   
    <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
