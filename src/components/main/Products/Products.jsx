import React, { use } from 'react';
import Product from '../Product/Product';

const Products = ({productPromise, cartProducts, setCartProducts}) => {
    const data = use(productPromise);
    // console.log(data);
    return (
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 border border-gray-200 rounded-2xl'>
            {
                data.map((product, ind) => <Product key={ind} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}></Product>)
            }
        </div>
    );
};

export default Products;