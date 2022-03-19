import React from 'react';
import Modal from '../Modal/Modal';
import './SingleProduct.css'

const SingleProduct = (props) => {
    const {title, image} = props.product;
    const { addToCart,removeFromCart } = props;
    return (
        <div className="col-md-4">
            <div className="card p-5 border">
                <h1>{ title.slice(0,10) }</h1>
                <img className="w-75 p-4" src={image} alt="" />
                <div className="d-flex ps-2  justify-content-between">
                <button onClick={addToCart} className="btn-primary w-25">Add</button>
                <button onClick={removeFromCart} className="btn-danger w-25">Remove</button>
                <Modal>Details</Modal>
                </div> 
                
            </div>
            
        </div>
    );
};

export default SingleProduct;