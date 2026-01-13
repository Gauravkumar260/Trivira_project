import React from 'react';

const TermsPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-trivira-primary mb-8">Terms of Service</h1>
      <div className="prose prose-green max-w-none text-gray-600">
        <p>Please read these terms and conditions carefully before using Our Service.</p>
        
        <h3>Acknowledgment</h3>
        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.</p>
        
        <h3>Termination</h3>
        <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms.</p>
      </div>
    </div>
  );
};

export default TermsPage;
