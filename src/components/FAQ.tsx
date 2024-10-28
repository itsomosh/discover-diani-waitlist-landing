import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does Discover Diani work?",
    answer: "Discover Diani is your all-in-one platform for exploring and experiencing the best of Diani. Our AI-powered platform connects you with local businesses, activities, and hidden gems, making trip planning effortless."
  },
  {
    question: "Is it free to join the waitlist?",
    answer: "Yes, joining the waitlist is completely free! You'll be among the first to know when we launch and get access to exclusive early-bird offers."
  },
  {
    question: "What types of businesses can list on Discover Diani?",
    answer: "We welcome all legitimate businesses in Diani, including hotels, restaurants, tour operators, activity providers, transport services, and local artisans."
  }
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ${
                  openFaq === index ? 'max-h-48' : 'max-h-0'
                } overflow-hidden`}
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}