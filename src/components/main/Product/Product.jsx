import React from 'react';
import Feature from './Feature';
import { toast } from 'react-toastify';

const Product = ({ product, cartProducts, setCartProducts }) => {
    // console.log(product);
    const exist = cartProducts.find(p => p.id === product.id);

    const handleClick = () => {
        if (!exist) {
            toast.success("Product Added!", {
                autoClose: 1000
            })
            const ar = [...cartProducts, product];
            setCartProducts(ar);
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">{product.tag}</span>
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <p>{product.description}</p>
                <p><span className='font-bold text-3xl'>
                    ${product.price}</span>/ <span>{product.period}</span>
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        (product.features).map((feature, ind) => <Feature key={ind} feature={feature}></Feature>)
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={handleClick}
                        className={`btn rounded-full w-full ${exist ? 'btn-success' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>
                            {
                                exist ? 
                                    "Added To Cart" : "Buy Now"
                            }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;