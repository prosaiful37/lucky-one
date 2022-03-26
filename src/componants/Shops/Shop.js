import { faHourglass2 } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [carts, setCarts] = useState([])
    console.log(carts);
  
    const handleAddToCart = (product) => {
        const newCarts= [...carts, product];
        if(newCarts > 4){
            alert('enough your not select this item');
        }
     
        
        setCarts(newCarts);
       
    }
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
    return (
        <div className='shop'>
            
            <div className='shop-container'>
                {
                    products.map(product => <Product key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Selected Item</h2>
                {
                    carts.map(item => <h4 key={item.id}>{item.name} </h4>)
                }
                <button className='cartButton'>
                    Choose One For Me
                </button>
            </div>
            
        </div>
    );
};


export default Shop;