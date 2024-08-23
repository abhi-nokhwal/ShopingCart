import React from 'react'
// import { useShoe } from './shoesContext'
import { useProducts } from './context'

function Shoes() {
  const { state: { Shoes } } = useProducts();
    const { state } = useProducts();
    const{state:{items},dispatch}=useProducts()

  // console.log(Shoes)

  // console.log(Sho)
   const handleAddToCart = (state) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...state, quantity: 1 } // Default quantity is 1
      
    });
   
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
        Shoes
      </h1>
       <div className='flex text-center mt-8 justify-center m-auto'>
        {/* <h1 className='text-center text-5xl'>Products</h1> */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {Shoes.map(Shoe => (
            <div className='border m-auto mt-5 font-thin bg-gray-100' key={Shoe.id}>
              <img className='max-h-sm max-w-sm ' src={Shoe.image} alt={Shoe.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h2 className='mt-5'>{Shoe.name}</h2>
              <p>{Shoe.description}</p>
              <p>${Shoe.price.toFixed(2)}</p>
              {/* <h3>Total Amount: ${items.totalAmount}</h3> */}

              {/* { state.items.length==0?<button onClick={() => handleAddToCart(Shoe)} className='text-black  py-3 px-8 '>Add to Cart</button>:<button onClick={() => handleRemoveFromCart(Shoe.id)}>Remove</button> } */}
              <button onClick={() => handleAddToCart(Shoe)} className='hover:text-black text-white bg-pink-300 mt-2 mb-2 py-3 px-8 '>Add to Cart</button>
              {/* <p>${item.price} x {item.quantity}</p> */}
              {/* <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button> */}

            </div>))}
        </div>
      </div>
      

    </>
      
  )
}

export default Shoes
