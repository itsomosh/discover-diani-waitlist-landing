import React from 'react';
import { MapPin, Users, Tag, Brain } from 'lucide-react';

const features = [
  { 
    icon: <MapPin className="w-8 h-8" />, 
    title: "Find Hidden Gems", 
    desc: "Discover secret spots and local favorites that make Diani special" 
  },
  { 
    icon: <Users className="w-8 h-8" />, 
    title: "Connect with Locals", 
    desc: "Build authentic connections with local guides and business owners" 
  },
  { 
    icon: <Tag className="w-8 h-8" />, 
    title: "Exclusive Deals", 
    desc: "Access special offers and unique experiences available only through our platform" 
  },
  { 
    icon: <Brain className="w-8 h-8" />, 
    title: "AI-Powered Search", 
    desc: "Find exactly what you're looking for with our intelligent search system" 
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}