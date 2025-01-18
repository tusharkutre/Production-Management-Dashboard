import React, { useState } from 'react';
import Details from './Details';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: '5mm rod',
      stages: [
        {
          name: 'Cutting',
          machine: 'Cutter A',
          dieSchedule: [
            { size: '5mm', id: 'D1' },
            { size: '5.5mm', id: 'D2' },
          ],
        },
        {
          name: 'Shaping',
          machine: 'Shaper B',
          dieSchedule: [
            { size: '5mm', id: 'D3' },
            { size: '5.5mm', id: 'D4' },
          ],
        },
      ],
    },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} onClick={() => setSelectedProduct(product)}>
            {product.name}
          </li>
        ))}
      </ul>
      <Details product={selectedProduct} />
    </div>
  );
};

export default Products;