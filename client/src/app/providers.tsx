'use client';

import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/lib/redux/store';
import { queryClient } from '@/lib/react-query/queryClient';
import React from 'react';

// Why: Wrap the application with necessary context providers.
// This ensures Redux and React Query are available throughout the component tree.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}
