import React from 'react';
import { InfoPage } from '@/components/ui';

const TermsPage = () => {
  return (
    <InfoPage title="Terms of Service">
      <p>Please read these terms and conditions carefully before using Our Service.</p>

      <h3>Acknowledgment</h3>
      <p>
        These are the Terms and Conditions governing the use of this Service and the
        agreement that operates between You and the Company.
      </p>

      <h3>Termination</h3>
      <p>
        We may terminate or suspend Your access immediately, without prior notice or
        liability, for any reason whatsoever, including without limitation if You
        breach these Terms.
      </p>
    </InfoPage>
  );
};

export default TermsPage;