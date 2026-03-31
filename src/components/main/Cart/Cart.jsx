import React, { useState } from 'react';
import CartProduct from './CartProduct';
import { toast } from 'react-toastify';

const Cart = ({ cartProducts, setCartProducts }) => {
    console.log('cart products', cartProducts)
    const temp = cartProducts.reduce((sum, p) => sum + p.price, 0);
    const [total, setTotal] = useState(temp);
    const handleCheckOut = () => {
        console.log('checkout');
        setCartProducts([]);
        toast.success('Check Out Successfull!')
    }

    return (
        <div className='container mx-auto p-4 shadow-md space-y-4 border border-gray-200 rounded-2xl'>
            <h1 className="text-3xl font-semibold">Your Cart</h1>
            <div className='space-y-2'>
                {
                    cartProducts.map((product, ind) => <CartProduct key={ind} product={product} total={total} setTotal={setTotal} cartProducts={cartProducts} setCartProducts={setCartProducts}></CartProduct>)
                }
            </div>
            {
                cartProducts.length > 0 ?
                    <div className='space-y-2'>
                        <div className='flex items-center justify-between text-2xl font-semibold'>
                            <p>Total</p>
                            <p>${total}</p>
                        </div>
                        <button onClick={handleCheckOut} className='btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Proceed To CheckOut</button>
                    </div> :
                    <p className='text-4xl md:text-7xl p-10 text-center bg-gray-200 rounded-2xl'>Empty Cart</p>
            }
        </div>
    );
};

export default Cart;