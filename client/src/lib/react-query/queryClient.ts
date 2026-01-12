import { QueryClient } from '@tanstack/react-query';

// Why: Configure React Query client for data fetching and caching.
// We can set default options here like staleTime.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});
