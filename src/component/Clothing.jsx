import React from 'react'
import {  useProducts } from './context';
import { Link } from 'react-router-dom';
// import { cartReducer } from './context';


function Clothing() {
  
  
  // const [state, dispatch] = useReducer(cartReducer,initialState);
    const { state} = useProducts();

  const { state: { products } } = useProducts();
  const{state:{items},dispatch}=useProducts()
  // console.log(state.items);

  const handleAddToCart = (state) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...state, quantity: 1 } // Default quantity is 1
      
    });
    console.log(`added to cart`);
    // alert('added to cart')
    // console.log()
   
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id }
    });
    console.log('removed form cart',);
    // console.log(product.name)
    
  };

  const handleIncreaseQuantity = (id) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: { id }
    });
  };

  const handleDecreaseQuantity = (id) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { id }
    });
  };


  const handleClearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  

  return (
    <>
      

      <h1 className='text-3xl text-center uppercase mt-32 font-thin'>
        Clothing
      </h1>



      <div className='flex text-center mt-8 justify-center m-auto'>
        {/* <h1 className='text-center text-5xl'>Products</h1> */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.map(product => (
            <div className='border m-auto mt-5 font-thin bg-gray-100' key={product.id}>
              <img className='max-h-lvh max-w-sm ' src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h2 className='pt-5'>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              {/* <h3>Total Amount: ${items.totalAmount}</h3> */}

              {/* { state.items.length==0?<button onClick={() => handleAddToCart(product)} className='text-black  py-3 px-8 '>Add to Cart</button>:<button onClick={() => handleRemoveFromCart(product.id)}>Remove</button> } */}
              <button onClick={() => handleAddToCart(product)} className='text-white border mt-2 hover:text-black py-3 mb-2 px-8 bg-pink-300'>Add to Cart</button>
              {/* <p>${item.price} x {item.quantity}</p> */}
              {/* <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button> */}

            </div>))}
        </div>
      </div>
 
</>)
}
  
  export default Clothing




