import React from 'react';
import { InfoPage } from '@/components/ui';

const AccessibilityPage = () => {
  return (
    <InfoPage title="Accessibility Statement">
      <p>
        Trivira is committed to ensuring digital accessibility for people with disabilities.
        We are continually improving the user experience for everyone, and applying the
        relevant accessibility standards.
      </p>

      <h3>Feedback</h3>
      <p>
        We welcome your feedback on the accessibility of Trivira. Please let us know if
        you encounter accessibility barriers on Trivira:
      </p>
      <ul>
        <li>E-mail: support@trivira.com</li>
      </ul>
    </InfoPage>
  );
};

export default AccessibilityPage;