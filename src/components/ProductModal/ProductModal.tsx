import Counter from "components/Counter/Counter";
import React, { useState } from "react";
import { Product, ProductInCart } from "types/product";
import Modal from "./Modal";

type ModalProps = {
  product: Product | null;
  toggleModal(product?: Product): void;
  toggleCart(): void;
  addProductToCart(product: ProductInCart): void;
};

const ProductModal: React.FC<ModalProps> = ({
  product,
  toggleModal,
  toggleCart,
  addProductToCart,
}) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const handleCartClick = () => {
    if (product) {
      addProductToCart({ ...product, count: productQuantity });
    }
  };

  const handleOrderNowClick = () => {
    handleCartClick();
    toggleModal();

    toggleCart();
  };

  return (
    product && (
      <Modal open={!!product} onClose={toggleModal}>
        <div className="md:flex  px-7">
          <div className="w-full h-64 md:w-1/2 lg:h-full">
            <img
              className="h-full w-full rounded-md object-scale-down max-w-lg mx-auto"
              src={product.image}
              alt="Nike Air"
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-800 uppercase text-lg mb-5">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-3 text-sm">
              {product.description.slice(0, 1).toUpperCase() +
                product.description.slice(1)}
            </p>
            <span className="text-gray-500 ">{product.price}$</span>
            <hr className="my-3" />
            <Counter handleChange={setProductQuantity} />
            <div className="flex items-center mt-6">
              <button
                onClick={handleOrderNowClick}
                className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
              >
                Order Now
              </button>
              <button
                onClick={handleCartClick}
                className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default ProductModal;
