
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center pt-20">
      {/* Simple background styling */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-40"></div>
        <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-blue-50 rounded-full opacity-30"></div>
      </div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block mb-4">
            <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              Mental Health Support Platform
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Path to<br />
            <span className="text-blue-500">Inner Peace</span> and Healing
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            A supportive community where you can learn, grow, and find the resources you need on your journey to mental wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="rounded-full px-8 bg-blue-500 hover:bg-blue-600">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-green-500 hover:bg-green-600 flex items-center"
            >
              <Play className="mr-2 h-4 w-4" /> Start Assessment
            </Button>
          </div>
        </div>
        
        {/* Statistics with simpler styling */}
        <div className="mt-10 sm:mt-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6 sm:p-8 bg-white/70 rounded-xl border border-gray-200 shadow-md">
            <div className="text-center py-6">
              <p className="text-3xl md:text-4xl font-bold text-blue-500">5,000+</p>
              <p className="text-sm text-gray-500 mt-2">Community Members</p>
            </div>
            <div className="text-center py-6 border-t md:border-t-0 md:border-l md:border-r border-gray-200">
              <p className="text-3xl md:text-4xl font-bold text-blue-500">200+</p>
              <p className="text-sm text-gray-500 mt-2">Expert Resources</p>
            </div>
            <div className="text-center py-6 border-t md:border-t-0">
              <p className="text-3xl md:text-4xl font-bold text-blue-500">96%</p>
              <p className="text-sm text-gray-500 mt-2">User Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
