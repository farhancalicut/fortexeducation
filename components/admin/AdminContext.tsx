'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { signInAnonymously, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AdminContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if admin is already authenticated
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (password: string): Promise<boolean> => {
    // Simple password-based check first (client-side only for this demo)
    // In a real app, you'd use Firebase Auth email/password or a backend verification
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

    if (password === adminPassword) {
      try {
        // Sign in anonymously to get a valid Firebase token for Firestore rules
        await signInAnonymously(auth);
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_auth', 'true');
        return true;
      } catch (error) {
        console.error("Firebase auth error:", error);
        return false;
      }
    }
    return false;
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
