import React from 'react'
import { useProducts } from './context';
import { FaRegFaceSadTear } from "react-icons/fa6";

   

function Cart() {
  const { state } = useProducts();
  const { state: { Shoes }} = useProducts();
  const{state:{items},dispatch}=useProducts()
  // const { products } = useProducts();

   const handleAddToCart = (state) => {
    dispatch({
      type: 'ADD_ITEM',
       payload: { ...state, quantity:1 } // Default quantity is 1
      
    });
    //  console.log()
    // console.log(`added to cart`,state.category);
    
  };
  
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id }
    });
    // console.log('removed form cart',);
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

    <div className='mt-28'> 
        <h2 className='text-center text-4xl font-thin'>Cart</h2>
      <div>
        {state.items.length === 0 && <p className='text-center mt-2'>Your cart is empty
          <FaRegFaceSadTear className='m-auto text-2xl mt-2' /></p>}
        {items.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: 'auto', marginRight: '10px' }} />
            <div>
              <h4>{item.name}</h4>
              <h1>${item.price} x {item.quantity}</h1>
              <button className='text-4xl text-pink-500' onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              {/* <p>{ item.quantity}</p> */}
              <button className='text-4xl text-pink-500' onClick={() => handleDecreaseQuantity(item.id)}>-</button><br></br>
              <button  onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      { state.items.length===0?null:<h3 className='text-center'>Total Amount: ${state.totalAmount.toFixed(2)}</h3>}
      {state.items.length === 0 ? null : <button className='flex mx-auto' onClick={handleClearCart}>Clear Cart</button>}<br></br>
      { state.items.length===0?null:<button  className='text-white justify-center flex mx-auto border  hover:text-black py-3 px-8 bg-pink-300'>Cheakout</button>}



      
     </div>
  )
}

export default Cart
