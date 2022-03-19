import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = ({addToCart,removeFromCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1 className="mt-3">All Products</h1>
            {
                products.map(product =>console.log(product))
            }
            <div className=" row container">
            
            {
                    products.map(product => <SingleProduct removeFromCart={ removeFromCart}
                        addToCart={addToCart} key={product.id} product={product}></SingleProduct>)
            }
            </div>
            
            
        </div>
    );
};

export default AllProducts;