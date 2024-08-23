// ProductContext.js
import React, { createContext, useState, useContext ,useReducer} from 'react';
// import { ShoeProvider } from './shoesContext';

// Create context
const ProductContext = createContext();

// Reducer function to manage cart state
 export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if the item already exists in the cart
      // .findIndex(item => item.id === action.payload.id);
      const existingItemIndex = state.items.findIndex(item=>item.id===action.payload.id);
      let updatedItems;
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // Item does not exist, add it to the cart
        updatedItems = [...state.items, action.payload];
      }
      // Recalculate total amount
      const newTotalAmount = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { ...state, items: updatedItems, totalAmount: newTotalAmount };

    case 'REMOVE_ITEM':
      // Remove item from cart
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      // Recalculate total amount
      const updatedTotalAmount = filteredItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { ...state, items: filteredItems, totalAmount: updatedTotalAmount };
    case 'INCREASE_QUANTITY':
      const increasedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const increasedTotalAmount = increasedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { ...state, items: increasedItems, totalAmount: increasedTotalAmount };

    
      case 'DECREASE_QUANTITY':
      const decreasedItems = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );
      const decreasedTotalAmount = decreasedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return { ...state, items: decreasedItems, totalAmount: decreasedTotalAmount };
   
    case 'SET_SELECTED_PRODUCT':
      return { ...state, selectedProduct: action.payload };


    case 'CLEAR_CART':
      // Clear all items from cart
      return { ...state, items: [], totalAmount: 0 };

    default: 
      return state;
  }
};


  
export const ProductProvider = ({ children }) => {
  // Example product data
      //  const { Shoe } = useShoe();

  const [products, setProducts] = useState([
  
 {
      id: 1,
      name: "Elegant Evening Gown",
      category: "Dresses",
      price: 129.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_green_button_up_midi_dress-3.jpg?v=1724012272&width=900",
      description: "A stunning evening gown with intricate beading."
    },
    {
      id: 2,
      name: "Floral Print Sundress",
      category: "Dresses",
      price: 39.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_tennis_graphic_tee-2.jpg?v=1723484697&width=1800",
      description: "A light and breezy sundress with a vibrant floral print"
    },
    {
      id: 3,
      name: "Classic Little Black Dress",
      category: "Dresses",
      price: 79.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_golf_graphic_tee-2.jpg?v=1723484896&width=1800",
      description: "A timeless little black dress with a sleek "
    },
    {
      id: 4,
      name: "Bohemian Maxi Dress",
      category: "Dresses",
      price: 69.99,
      image: "https://shopdressup.com/cdn/shop/files/2P4A0588.jpg?v=1723902636&width=1800",
      description: "A flowing maxi dress with a bohemian print "
    },
    {
      id: 5,
      name: "Vintage Polka Dot Dress",
      category: "Dresses",
      price: 49.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_teal_graphic_tee-2.jpg?v=1723840108&width=1800",
      description: "A playful polka dot dress with a fitted waist "
    },
    {
      id: 6,
      name: "Chic Wrap Dress",
      category: "Dresses",
      price: 54.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_teal_rodeo_tee-3.jpg?v=1720464350&width=1800",
      description: "A sophisticated wrap dress with a cinched waist "
    },
    {
      id: 7,
      name: "Casual Shift Dress",
      category: "Dresses",
      price: 34.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_golf_club_sweatshirt-3.jpg?v=1723484526&width=1800",
      description: "A comfortable shift dress with a relaxed fit "
    },
    {
      id: 8,
      name: "Off-Shoulder Dress",
      category: "Dresses",
      price: 44.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_patchwork_maxi_dress-6.jpg?v=1723839131&width=1800",
      description: "A stylish off-shoulder dress with a fitted ."
    },
    {
      id: 9,
      name: "Formal A-Line Dress",
      category: "Dresses",
      price: 89.99,
      image: "https://shopdressup.com/cdn/shop/files/shopdressup_black_floral_maxi_dress-3_86ea8a0d-933e-420e-ba4d-1b710265aed5.jpg?v=1723833060&width=1800",
      description: "An elegant A-line dress with a flattering fit"
    }]
  
  
  )
  const [Shoe, setShoe] = useState([
        {
            id: 1,
            name: "Classic Black Pumps",
            category: "Shoes",
            price: 89.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_tan_platform_heels-3_584f5756-c90c-45b4-b4b7-5229ec3441b8.jpg?v=1720535168&width=1800",
            description: "Elegant black pumps with a sleek design,"
        },
        {
            id: 2,
            name: "Brown Ankle Boots",
            category: "Shoes",
            price: 109.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_beaded_sandals-8.jpg?v=1715275024&width=1800",
            description: "Stylish brown ankle boots with a comfortable."
        },
        {
            id: 3,
            name: "White Sneakers",
            category: "Shoes",
            price: 74.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_platform_double_strap_sandals-12.jpg?v=1723675092&width=1800",
            description: "Versatile white sneakers perfect for casual."
        },
        {
            id: 4,
            name: "Red High Heels",
            category: "Shoes",
            price: 129.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_tan_straw_heels-3.jpg?v=1712414386&width=1800",
            description: "Bold red high heels with a pointed toe "
        },
        {
            id: 5,
            name: "Beige Loafers",
            category: "Shoes",
            price: 64.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_espadrille_heels-3.jpg?v=1716484977&width=1800",
            description: "Comfortable beige loafers."
        },
        {
            id: 6,
            name: "Gray Sandals",
            category: "Shoes",
            price: 49.99,
            image: "https://shopdressup.com/cdn/shop/files/shopdressup_white_sneakers-10.jpg?v=1723675220&width=1800",
            description: "Casual gray sandals with adjustable straps"
        }
    ]
    )
  
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    Shoes:Shoe,
    items: [],
    totalAmount:0,
  });
  
  
  
  return (
      <ProductContext.Provider value={{state,dispatch}}>
            {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use product context
export const useProducts = () => {
    return useContext(ProductContext);
}






