import React from 'react';
import { InfoPage } from '@/components/ui';

const ShippingPage = () => {
  return (
    <InfoPage title="Shipping Policy">
      <h3>Processing Time</h3>
      <p>
        All orders are processed within 1-2 business days. Orders are not shipped or
        delivered on weekends or holidays.
      </p>

      <h3>Shipping Rates & Delivery Estimates</h3>
      <p>
        Shipping charges for your order will be calculated and displayed at checkout.
        We offer free shipping on orders over ₹999.
      </p>

      <h3>Shipment Confirmation & Order Tracking</h3>
      <p>
        You will receive a Shipment Confirmation email once your order has shipped
        containing your tracking number(s).
      </p>
    </InfoPage>
  );
};

export default ShippingPage;