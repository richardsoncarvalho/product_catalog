import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

type CacheProps = {
  children: JSX.Element
}

export function CacheProvider({children}: CacheProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
