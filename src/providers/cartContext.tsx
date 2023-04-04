import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from '../services/axios';

interface ICartProviderProps {
  children: ReactNode;
}

export interface IProduct {
  category?: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface IcartContext {
  filteredProducts: IProduct[];
  products: IProduct[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addProductsCart: (newProduct: IProduct) => void;
  deleteProductCart: (id: number) => void;
  totalCart: ()=>number
}

export const CartContext = createContext({} as IcartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([] as IProduct[]);

  useEffect(() => {
    async function requestProducts() {
      try {
        const token = localStorage.getItem('@Token');
        const response = await api.get('products', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    requestProducts();
  }, []);

  function addProductsCart(newProduct: IProduct): void {
    const filterCard = filteredProducts.find(
      (element) => element.id === newProduct.id
    );
    if (!filterCard) {
      setFilteredProducts([...filteredProducts, newProduct]);
    }
  }

  function deleteProductCart(id: number) {
    const filterDelete = filteredProducts.filter(
      (list) => list.id !== id && list
    );
    setFilteredProducts(filterDelete);
  }

  function totalCart() {
    const total = filteredProducts.reduce(
      (sum, currentValue) => sum + currentValue.price,
      0);
      return total
  }

  return (
    <CartContext.Provider
      value={{
        openModal,
        setOpenModal,
        products,
        addProductsCart,
        filteredProducts,
        deleteProductCart,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
