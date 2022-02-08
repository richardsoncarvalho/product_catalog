import { useContext } from 'react'
import { ProductContext } from '../providers/products';

export function useProductProvider() {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('component must be wrapped by ScheduleContextProvider');
  }

  return context;
}
