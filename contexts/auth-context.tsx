"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { storage } from "@/lib/storage";
import { AuthState, AuthContextType, User, SignupData, LoginData } from "@/types/auth";

interface AuthAction {
  type: "SET_LOADING" | "LOGIN_SUCCESS" | "LOGOUT" | "SET_ERROR" | "CLEAR_ERROR";
  payload?: any;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };

    case "SET_ERROR":
      return { ...state, isLoading: false };

    case "CLEAR_ERROR":
      return { ...state };

    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing auth data on mount
  useEffect(() => {
    const token = storage.getToken();
    const userData = storage.getUser();

    if (token && userData) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user: userData, token },
      });
    } else {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, []);

  const signup = async (data: SignupData): Promise<void> => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API call - in a real app, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        createdAt: new Date(),
      };

      const token = Math.random().toString(36).substr(2);

      // Store data in localStorage
      storage.setToken(token);
      storage.setUser(user);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token },
      });

      toast({
        title: "Account created successfully!",
        description: "Welcome to our casino platform!",
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
      toast({
        title: "Signup failed",
        description: "Please try again later.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const login = async (data: LoginData): Promise<void> => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      // Simulate API call - in a real app, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demo purposes, we'll create a mock user
      // In a real app, this would come from your backend
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        firstName: "Demo",
        lastName: "User",
        email: data.email,
        createdAt: new Date(),
      };

      const token = Math.random().toString(36).substr(2);

      // Store data in localStorage
      storage.setToken(token);
      storage.setUser(user);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token },
      });

      toast({
        title: "Login successful!",
        description: "Welcome back!",
      });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
      throw error;
    }
  };

  const logout = (): void => {
    storage.clearAuthData();
    dispatch({ type: "LOGOUT" });
    toast({
      title: "Logged out successfully",
      description: "See you soon!",
    });
  };

  const clearError = (): void => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const value: AuthContextType = {
    ...state,
    signup,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
