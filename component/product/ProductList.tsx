import React from 'react';
import ProductCard from './ProductCard';
const arr = [1, 2, 34, 5, 6]
const ProductList = () => {
    return <>
        <div className="d-flex m-5" style={{ flexWrap: 'wrap',justifyContent:"space-around",alignItems:'center' }}>
            {
                arr.map(value => <><ProductCard values={value} key={value} /></>)
            }

        </div>
    </>
}

export default ProductList