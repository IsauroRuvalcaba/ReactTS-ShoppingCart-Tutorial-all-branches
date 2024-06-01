import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartcontextType } from "../context/CartProvider";

const useCart = (): UseCartcontextType => {
  return useContext(CartContext);
};

export default useCart;
