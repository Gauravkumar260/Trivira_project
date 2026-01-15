import React from 'react';
import { InfoPage } from '@/components/ui';

const RefundPage = () => {
  return (
    <InfoPage title="Refund Policy">
      <p>
        At Trivira, we strive to ensure you are completely satisfied with your purchase.
        If you are not entirely happy, we are here to help.
      </p>

      <h3>Returns</h3>
      <p>
        You have 30 calendar days to return an item from the date you received it. To be
        eligible for a return, your item must be unused and in the same condition that
        you received it. Your item must be in the original packaging.
      </p>

      <h3>Refunds</h3>
      <p>
        Once we receive your item, we will inspect it and notify you that we have
        received your returned item. We will immediately notify you on the status of
        your refund after inspecting the item. If your return is approved, we will
        initiate a refund to your credit card (or original method of payment).
      </p>

      <h3>Contact Us</h3>
      <p>
        If you have any questions on how to return your item to us, contact us at{' '}
        <a href="mailto:support@trivira.com">support@trivira.com</a>.
      </p>
    </InfoPage>
  );
};

export default RefundPage;