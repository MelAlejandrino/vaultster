import React from 'react';
import ProductBox from './ProductBox';
import { Data } from '../Data/Data';
import { Link } from 'react-router-dom';

function ProductContainer(props) {
  const tag = props.tag;
  const search = props.search;

  const filteredData = Data.filter((item) => {
    const hasMatchingTag = tag === 'All' || item.tag === tag;
    const hasMatchingSearchQuery =
      search.trim() === '' ||
      item.name.toLowerCase().includes(search.toLowerCase());

    return hasMatchingTag && hasMatchingSearchQuery;
  });

  return (
    <div className="product-container">
      {filteredData.map((item) => (
        <Link key={item.id} to={`/Dashboard/Vault/${item.id}`}>
          <ProductBox
            name={item.name}
            tag={item.tag}
            background={item.background}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductContainer;
