
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';
import BlurContainer from './BlurContainer';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Authentication in demo mode",
        description: "This is a demonstration. Full authentication would be implemented in a production environment.",
      });
    }, 1500);
  };
  
  return (
    <BlurContainer className="w-full max-w-md mx-auto p-6 md:p-8 animate-fade-up">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="login">Log In</TabsTrigger>
          <TabsTrigger value="register">Sign Up</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                autoComplete="email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-xs text-tranquil-600 hover:text-tranquil-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                autoComplete="current-password"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full rounded-full bg-tranquil-500 hover:bg-tranquil-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a 
                href="#" 
                className="text-tranquil-600 hover:text-tranquil-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-value="register"]')?.click();
                }}
              >
                Sign up
              </a>
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="register">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input 
                  id="first-name" 
                  placeholder="John" 
                  autoComplete="given-name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input 
                  id="last-name" 
                  placeholder="Doe" 
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email-register">Email</Label>
              <Input 
                id="email-register" 
                type="email" 
                placeholder="name@example.com" 
                autoComplete="email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-register">Password</Label>
              <Input 
                id="password-register" 
                type="password" 
                placeholder="••••••••" 
                autoComplete="new-password"
                required
              />
              <p className="text-xs text-muted-foreground">
                Password must be at least the 8 characters long
              </p>
            </div>
            
            <Button 
              type="submit" 
              className="w-full rounded-full bg-tranquil-500 hover:bg-tranquil-600"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a 
                href="#" 
                className="text-tranquil-600 hover:text-tranquil-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('[data-value="login"]')?.click();
                }}
              >
                Log in
              </a>
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </BlurContainer>
  );
};

export default LoginForm;
