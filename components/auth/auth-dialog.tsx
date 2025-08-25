"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignupForm } from "./signup-form";
import { LoginForm } from "./login-form";

type AuthMode = "login" | "signup";

interface AuthDialogProps {
  trigger?: React.ReactNode;
  defaultMode?: AuthMode;
  onSuccess?: () => void;
}

export function AuthDialog({ trigger, defaultMode = "login", onSuccess }: AuthDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>(defaultMode);

  const handleSuccess = () => {
    setIsOpen(false);
    onSuccess?.();
  };

  const switchToSignup = () => setMode("signup");
  const switchToLogin = () => setMode("login");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            {defaultMode === "login" ? "Login" : "Sign Up"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === "login" ? "Sign In to Your Account" : "Create Your Account"}
          </DialogTitle>
        </DialogHeader>
        
        {mode === "login" ? (
          <LoginForm onSuccess={handleSuccess} switchToSignup={switchToSignup} />
        ) : (
          <SignupForm onSuccess={handleSuccess} switchToLogin={switchToLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
}
