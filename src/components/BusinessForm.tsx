import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Building2, MapPin, Phone, Mail, Camera } from 'lucide-react';

// Previous type definitions and steps array remain the same...

export function BusinessForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    address: '',
    location: '',
    phone: '',
    email: '',
    website: '',
    images: [] as string[],
    ownershipProof: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.eu1.make.com/d84f45p9dvjib7ztigrb4g4tni6s73xm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        businessName: '',
        businessType: '',
        description: '',
        address: '',
        location: '',
        phone: '',
        email: '',
        website: '',
        images: [],
        ownershipProof: '',
      });
      setCurrentStep(0);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of the component remains the same...
  // Only update the submit button in the last step:

  if (currentStep === steps.length - 1) {
    return (
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Listing'}
        <Check className="w-4 h-4" />
      </button>
    );
  }

  // Add success/error messages in the review step:
  if (currentStep === 3) {
    return (
      <div className="space-y-6">
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 text-green-700 rounded-lg">
            Thank you for your submission! We'll review your listing and contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg">
            Something went wrong. Please try again later.
          </div>
        )}
        
        {/* Rest of the review step content... */}
      </div>
    );
  }
}