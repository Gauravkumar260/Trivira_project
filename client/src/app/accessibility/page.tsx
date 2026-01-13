import React from 'react';

const AccessibilityPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-trivira-primary mb-8">Accessibility Statement</h1>
      <div className="prose prose-green max-w-none text-gray-600">
        <p>Trivira is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
        
        <h3>Feedback</h3>
        <p>We welcome your feedback on the accessibility of Trivira. Please let us know if you encounter accessibility barriers on Trivira:</p>
        <ul>
          <li>E-mail: support@trivira.com</li>
        </ul>
      </div>
    </div>
  );
};

export default AccessibilityPage;
