import React from 'react';

const ProductSectionTop = ({productTab, setProductTab, cartProducts}) => {
    return (
        <div className='text-center space-y-4'>
            <h3 className="text-4xl font-semibold">Premium Digital Tools</h3>
            <p className='text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className='space-x-2'>
                <button
                    onClick={() => setProductTab(true)}
                    className={`btn rounded-full ${productTab && 'gradient'}`}
                >Products
                </button>
                <button
                    onClick={() => setProductTab(false)}
                    className={`btn rounded-full ${productTab || 'gradient'}`}
                >Cart({cartProducts.length})
                </button>
            </div>
        </div>
    );
};

export default ProductSectionTop;