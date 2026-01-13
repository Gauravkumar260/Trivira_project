import React from 'react';

const ShippingPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-trivira-primary mb-8">Shipping Policy</h1>
      <div className="prose prose-green max-w-none text-gray-600">
        <h3>Processing Time</h3>
        <p>All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.</p>
        
        <h3>Shipping Rates & Delivery Estimates</h3>
        <p>Shipping charges for your order will be calculated and displayed at checkout. We offer free shipping on orders over ₹999.</p>
        
        <h3>Shipment Confirmation & Order Tracking</h3>
        <p>You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s).</p>
      </div>
    </div>
  );
};

export default ShippingPage;
