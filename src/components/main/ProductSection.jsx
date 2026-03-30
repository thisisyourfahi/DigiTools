import React, { Suspense, useState } from 'react';
import ProductSectionTop from './ProductSectionTop';
import Products from './Products/Products';

const ProductSection = () => {
    // tab toggle
    const [productTab, setProductTab] = useState(true);

    // data fetch
    const productPromise = fetch('/data.json').then(res => res.json());

    return (
        <div className='mt-10 space-y-8'>
            <ProductSectionTop productTab={productTab} setProductTab={setProductTab}></ProductSectionTop>

            <Suspense fallback={<h1 className='text-4xl text-center'>Loading...</h1>}>
                <Products productPromise={productPromise}></Products>
            </Suspense>
        </div>
    );
};

export default ProductSection;