
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlurContainer from './BlurContainer';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-tranquil-100 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-tranquil-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-tranquil-50 rounded-full blur-3xl opacity-30 animate-float"></div>
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-block mb-4 animate-fade-in">
            <div className="px-3 py-1 rounded-full bg-tranquil-100 text-tranquil-700 text-xs font-medium tracking-wide">
              Mental Health Support Platform
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-up text-balance">
            Find Your Path to<br />
            <span className="text-tranquil-500">Inner Peace</span> and Healing
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up [animation-delay:100ms] text-balance">
            A supportive community where you can learn, grow, and find the resources you need on your journey to mental wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:200ms]">
            <Link to="/login">
              <Button size="lg" className="rounded-full px-8 bg-tranquil-500 hover:bg-tranquil-600 shadow-button">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-10 sm:mt-20">
          <BlurContainer className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6 sm:p-8 animate-fade-up [animation-delay:300ms]">
            <div className="text-center py-6">
              <p className="text-3xl md:text-4xl font-display font-semibold text-tranquil-500">5,000+</p>
              <p className="text-sm text-muted-foreground mt-2">Community Members</p>
            </div>
            <div className="text-center py-6 border-t md:border-t-0 md:border-l md:border-r border-border">
              <p className="text-3xl md:text-4xl font-display font-semibold text-tranquil-500">200+</p>
              <p className="text-sm text-muted-foreground mt-2">Expert Resources</p>
            </div>
            <div className="text-center py-6 border-t md:border-t-0">
              <p className="text-3xl md:text-4xl font-display font-semibold text-tranquil-500">96%</p>
              <p className="text-sm text-muted-foreground mt-2">User Satisfaction</p>
            </div>
          </BlurContainer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
