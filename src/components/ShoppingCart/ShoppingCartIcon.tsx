import React from "react";

type ShoppingCartItemProps = {
  onClick(): void;
  itemsNumber?: number;
};

const ShoppingCartIcon = ({
  onClick,
  itemsNumber,
}: ShoppingCartItemProps): JSX.Element => (
  <button
    className="shoppingCart fixed top-5 right-8 text-center bg-white rounded-full border-black border-2 p-2 "
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="sm:h-8 sm:w-8 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <p className="bg-red-500 flex items-center justify-center text-white absolute -bottom-3 rounded-full w-7 h-7 -right-4 z-30 p-1">
      {itemsNumber}
    </p>
  </button>
);

export default ShoppingCartIcon;
