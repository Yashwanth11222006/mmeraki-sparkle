import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  role?: 'user' | 'admin';
  loyaltyPoints?: number;
  totalSpent?: number;
  isAdmin?: boolean;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    location?: string;
  }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Check for stored user data in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setState({
          user: userData,
          isLoading: false,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    }
  }, []);

  // Mock user data for demo purposes
  const mockUsers = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      location: 'New York',
      role: 'user' as const,
      loyaltyPoints: 150,
      totalSpent: 2500,
      isAdmin: false
    },
    {
      id: '2',
      name: 'Admin User',
      email: 'admin@example.com',
      phone: '+1234567891',
      location: 'New York',
      role: 'admin' as const,
      loyaltyPoints: 500,
      totalSpent: 5000,
      isAdmin: true
    }
  ];

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Find user in mock data
      const user = mockUsers.find(u => u.email === email);
      
      if (!user) {
        throw new Error('User not found');
      }
      
      // For demo purposes, accept any password
      if (password.length < 3) {
        throw new Error('Password too short');
      }
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', 'mock-token-' + Date.now());
      
      setState({
        user: user,
        isLoading: false,
        isAuthenticated: true,
      });
      
      toast({
        title: "Welcome back!",
        description: `Successfully logged in as ${user.name}`,
      });
    } catch (error: any) {
      setState(prev => ({ ...prev, isLoading: false }));
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    phone: string;
    password: string;
    location?: string;
  }) => {
    setState(prev => ({ ...prev, isLoading: true }));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Check if user already exists
      const existingUser = mockUsers.find(u => u.email === userData.email);
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      
      // Create new user
      const newUser: User = {
        id: (mockUsers.length + 1).toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        location: userData.location || 'Unknown',
        role: 'user',
        loyaltyPoints: 0,
        totalSpent: 0,
        isAdmin: false
      };
      
      // Add to mock users (in real app, this would be sent to backend)
      mockUsers.push(newUser as any);
      
      // Store user data
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', 'mock-token-' + Date.now());
      
      setState({
        user: newUser,
        isLoading: false,
        isAuthenticated: true,
      });
      
      toast({
        title: "Account created!",
        description: `Welcome to Mmeraki, ${newUser.name}!`,
      });
    } catch (error: any) {
      setState(prev => ({ ...prev, isLoading: false }));
      toast({
        title: "Registration failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const updateProfile = async (data: Partial<User>) => {
    if (state.user) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      try {
        // Update user data
        const updatedUser = { ...state.user, ...data };
        
        // Update in mock users array
        const userIndex = mockUsers.findIndex(u => u.id === state.user!.id);
        if (userIndex !== -1) {
          mockUsers[userIndex] = updatedUser as any;
        }
        
        // Update localStorage
        localStorage.setItem('user', JSON.stringify(updatedUser));
        
        setState(prev => ({
          ...prev,
          user: updatedUser
        }));
        
        toast({
          title: "Profile updated",
          description: "Your profile has been successfully updated.",
        });
      } catch (error: any) {
        toast({
          title: "Update failed",
          description: error.message || "Failed to update profile.",
          variant: "destructive",
        });
        throw error;
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};