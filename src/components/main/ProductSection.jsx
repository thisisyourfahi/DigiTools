import React, { Suspense, useState } from 'react';
import ProductSectionTop from './ProductSectionTop';
import Products from './Products/Products';
import Cart from './Cart/Cart';

const ProductSection = () => {
    // tab toggle
    const [productTab, setProductTab] = useState(true);

    // data fetch
    const productPromise = fetch('/data.json').then(res => res.json());

    return (
        <div className='mt-10 space-y-8'>
            <ProductSectionTop productTab={productTab} setProductTab={setProductTab}></ProductSectionTop>

            <Suspense fallback={<h1 className='text-4xl text-center'>Loading...</h1>}>
                {
                    productTab ?
                        <Products productPromise={productPromise}></Products>
                        :
                        <Cart></Cart>
                }
            </Suspense>
        </div>
    );
};

export default ProductSection;