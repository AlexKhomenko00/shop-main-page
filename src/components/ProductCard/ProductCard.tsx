import { Product, ProductInCart } from "types/product";

type ProductCardTypes = {
  product: Product;
  toggleModal(product?: Product): void;
  addProductToCart(product: ProductInCart): void;
};

const ProductCard = ({
  product,
  toggleModal,
  addProductToCart,
}: ProductCardTypes): JSX.Element => {
  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    productToAd: ProductInCart
  ) => {
    e.stopPropagation();
    addProductToCart({ ...product, count: 1 });
  };

  return (
    <div
      onClick={() => toggleModal(product)}
      className="w-full  max-w-sm h-96 mx-auto rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-xl"
    >
      <div
        className="flex items-end justify-end h-3/5  w-full bg-cover"
        style={{
          backgroundImage: `url('${product.image}')`,
        }}
      >
        <button
          name="addToCart"
          onClick={(e) => handleAddToCart(e, { ...product, count: 0 })}
          className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
      <div className="px-5 py-3 flex flex-col justify-between h-2/5 ">
        <h3 className="text-gray-700 uppercase text-base">{product.title}</h3>
        <span className="text-gray-500 mt-2 bottom-0">{product.price}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
