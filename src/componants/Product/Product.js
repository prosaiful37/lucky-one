import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, name, price, picture} = props.product;
    return (
        <div className='Products'>
            <img src={picture} alt=""></img>
            <div className='products-title'>
                <h4 className='Product-name'>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cartBtn'>
                <p>Add To Cart</p> 
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>

        </div>
    );
};

export default Product;