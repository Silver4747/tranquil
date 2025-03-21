
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex flex-col relative bg-gray-50">
      {/* Simple Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-40"></div>
      <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-blue-50 rounded-full opacity-30"></div>
      
      <div className="py-6 px-4">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="font-medium text-lg">Tranquil</span>
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Continue your journey to mental wellness
            </p>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By continuing, you agree to our{" "}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-6 text-center">
        <p className="text-sm text-gray-500">
          Need immediate help? Call the National Suicide Prevention Lifeline at <a href="tel:988" className="text-blue-600 hover:underline">988</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
