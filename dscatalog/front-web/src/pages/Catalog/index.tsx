import { Link } from 'react-router-dom';
import ProductCard from './component/ProductCard';

import './styles.scss';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catálogo de Produtos</h1>
      <div className="catalog-products">
        <Link to="/products/1">
          <ProductCard />
        </Link>
        <Link to="/products/2">
          <ProductCard />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
