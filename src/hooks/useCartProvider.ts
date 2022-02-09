import { useContext } from "react";
import { CartContext } from "../providers/cart";

export function useCartProvider() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Algum problema no cart provider');
  }

  return context;
}
