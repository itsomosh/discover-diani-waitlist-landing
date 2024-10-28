import React from 'react';

type HeroProps = {
  onUserTypeChange: (type: 'user' | 'business') => void;
};

export function Hero({ onUserTypeChange }: HeroProps) {
  const handleClick = (type: 'user' | 'business') => {
    onUserTypeChange(type);
    const formElement = document.getElementById('signup-section');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505881502353-a1986add3762?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Diani Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Experience Diani Like Never Before
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            Discover the best that Diani has to offer—effortlessly, all in one place
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => handleClick('user')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              Join the Waitlist
            </button>
            <button
              onClick={() => handleClick('business')}
              className="px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-lg font-semibold transition-all hover:scale-105"
            >
              List Your Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}