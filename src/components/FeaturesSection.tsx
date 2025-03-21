
import React from 'react';
import { Heart, BookOpen, MessageSquare, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <Heart className="h-6 w-6 text-blue-500" />,
    title: "Self-Care Resources",
    description: "Access a library of evidence-based techniques for managing depression and anxiety in your daily life."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-blue-500" />,
    title: "Educational Content",
    description: "Learn about mental health conditions, treatments, and coping strategies from trusted experts."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-500" />,
    title: "Community Support",
    description: "Connect with others who understand your experiences in a safe, moderated environment."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-blue-500" />,
    title: "Professional Guidance",
    description: "Find resources to connect with qualified mental health professionals who can provide personalized care."
  }
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              How We Help
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Support for Your Mental Health Journey
          </h2>
          <p className="text-gray-600">
            Our platform provides various resources and tools designed to support you at every step of your mental wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-white shadow-md border border-gray-100"
            >
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
