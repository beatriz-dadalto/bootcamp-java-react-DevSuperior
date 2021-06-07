import ProductCard from './component/ProductCard';

import './styles.scss';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de Produtos</h1>
      <div className="catalog-products">
        <ProductCard />
      </div>
    </div>
  )
}

export default Catalog;
