import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const CartProduct = ({ product, total, setTotal, cartProducts, setCartProducts }) => {
    console.log('cart product el', product);
    const handleRemove = () => {
        const newCartProducts = cartProducts.filter(pr => pr.id !== product.id);
        setCartProducts([...newCartProducts]);
        setTotal((total - product.price));
    }
    return (
        <div className='bg-gray-100 rounded-md p-4 flex items-center justify-between'>
            <div>
                <p className='text-2xl font-semibold'>{product.name}</p>
                <p>${product.price}</p>
            </div>
            <button
                onClick={() => handleRemove()}
                className='btn btn-outline btn-circle btn-error'>
                <FaRegTrashAlt />
            </button>
        </div>
    );
};

export default CartProduct;