import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import {UsernameProvider} from "../UserinfoContext.tsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark"  storageKey="vite-ui-theme">
   <UsernameProvider>
    <App />
    </UsernameProvider>
    <Toaster />
    </ThemeProvider>
  </React.StrictMode>,
)
