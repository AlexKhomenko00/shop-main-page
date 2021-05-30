import ProductCard from "components/ProductCard/ProductCard";
import { Product, ProductInCart } from "types/product";

type ProductsListProps = {
  products: Product[];
  toggleModal(product?: Product): void;
  onAddProductToCart(product: ProductInCart): void;
};

const ProductsList = ({
  products,
  toggleModal,
  onAddProductToCart,
}: ProductsListProps): JSX.Element => {
  return (
    <ul className="list-none grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            toggleModal={toggleModal}
            addProductToCart={onAddProductToCart}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
