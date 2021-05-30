import React, { useState } from "react";
import { useQuery } from "react-query";
import { Product, ProductInCart } from "types/product";

import { getAllProducts } from "api/products";

import ProductModal from "components/ProductModal/ProductModal";
import ProductsList from "components/ProductsList/ProductsList";
import ShoppingCart from "components/ShoppingCart/ShoppingCart";

const MainPage = () => {
  const { data, isLoading, error } = useQuery<Product[]>(
    "products",
    getAllProducts
  );

  const products = data!;

  const [productInModal, setProductInModal] = useState<Product | null>(null);

  const toggleModal = (product?: Product) =>
    productInModal ? setProductInModal(null) : setProductInModal(product!);

  const [productsInCart, setProductsInCart] = useState<ProductInCart[]>([]);

  const addProductToCart = (product: ProductInCart) => {
    const isInCart = productsInCart.find(
      (productInCart) => productInCart.id === product.id
    );

    if (isInCart) {
      setProductsInCart((prevProducts) =>
        prevProducts.map((productInCart) =>
          productInCart.id === product.id
            ? { ...productInCart, count: productInCart.count + product.count }
            : productInCart
        )
      );
      return;
    }

    setProductsInCart((prevProducts) => [...prevProducts, product]);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prevIsOpen) => !prevIsOpen);

  const removeProductFromCart = (productId: number) => {
    setProductsInCart((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  if (isLoading)
    return (
      <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <span className="text-blue-500 opacity-75 top-1/2 my-0 mx-auto block text-2xl relative w-0 h-0">
          Loading...
        </span>
      </div>
    );

  if (error) return <h2>Ooops...Something went wrong</h2>;

  return (
    <section className="main-page container mx-auto">
      <ProductsList
        products={products}
        toggleModal={toggleModal}
        onAddProductToCart={addProductToCart}
      />
      <ProductModal
        product={productInModal}
        addProductToCart={addProductToCart}
        toggleModal={toggleModal}
        toggleCart={toggleCart}
      />
      <ShoppingCart
        products={productsInCart}
        removeProductFromCart={removeProductFromCart}
        addProductToCart={addProductToCart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      />
    </section>
  );
};

export default MainPage;
