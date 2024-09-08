import style from './css/ItemsPage.module.css';
import BestProducts from '../components/BestProducts';
import ProductsOnSale from '../components/ProductsOnSale';

function ItemsPage() {
  return (
    <main id={`${style.itemsPage}`}>
      <div id={`${style.bestProductWrapper}`}>
        <BestProducts />
      </div>
      <ProductsOnSale />
    </main>
  );
}

export default ItemsPage;
