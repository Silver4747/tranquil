
import React from 'react';
import { Heart, BookOpen, MessageSquare, HeartHandshake } from 'lucide-react';
import BlurContainer from './BlurContainer';

const features = [
  {
    icon: <Heart className="h-6 w-6 text-tranquil-500" />,
    title: "Self-Care Resources",
    description: "Access a library of evidence-based techniques for managing depression and anxiety in your daily life."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-tranquil-500" />,
    title: "Educational Content",
    description: "Learn about mental health conditions, treatments, and coping strategies from trusted experts."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-tranquil-500" />,
    title: "Community Support",
    description: "Connect with others who understand your experiences in a safe, moderated environment."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-tranquil-500" />,
    title: "Professional Guidance",
    description: "Find resources to connect with qualified mental health professionals who can provide personalized care."
  }
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-tranquil-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-tranquil-50 rounded-full blur-3xl opacity-40 animate-pulse-subtle"></div>
      
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 animate-fade-in">
            <div className="px-3 py-1 rounded-full bg-tranquil-100 text-tranquil-700 text-xs font-medium tracking-wide">
              How We Help
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4 animate-fade-up">
            Comprehensive Support for Your Mental Health Journey
          </h2>
          <p className="text-muted-foreground animate-fade-up [animation-delay:100ms]">
            Our platform provides various resources and tools designed to support you at every step of your mental wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <BlurContainer
              key={index}
              className="p-6 animate-fade-up"
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <div className="rounded-full bg-tranquil-100 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </BlurContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
