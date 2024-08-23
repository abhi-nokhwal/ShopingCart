// import React, { createContext, useState, useContext } from 'react';

// //Context of shoes
// const ShoeContext = createContext();

// //data in usestate 
// export const ShoeProvider = ({ children }) => {
//     const [Shoe, setShoe] = useState([
//         {
//             id: 1,
//             name: "Classic Black Pumps",
//             category: "Shoes",
//             price: 89.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_tan_platform_heels-3_584f5756-c90c-45b4-b4b7-5229ec3441b8.jpg?v=1720535168&width=1800",
//             description: "Elegant black pumps with a sleek design,"
//         },
//         {
//             id: 2,
//             name: "Brown Ankle Boots",
//             category: "Shoes",
//             price: 109.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_beaded_sandals-8.jpg?v=1715275024&width=1800",
//             description: "Stylish brown ankle boots with a comfortable."
//         },
//         {
//             id: 3,
//             name: "White Sneakers",
//             category: "Shoes",
//             price: 74.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_platform_double_strap_sandals-12.jpg?v=1723675092&width=1800",
//             description: "Versatile white sneakers perfect for casual."
//         },
//         {
//             id: 4,
//             name: "Red High Heels",
//             category: "Shoes",
//             price: 129.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_tan_straw_heels-3.jpg?v=1712414386&width=1800",
//             description: "Bold red high heels with a pointed toe "
//         },
//         {
//             id: 5,
//             name: "Beige Loafers",
//             category: "Shoes",
//             price: 64.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_espadrille_heels-3.jpg?v=1716484977&width=1800",
//             description: "Comfortable beige loafers."
//         },
//         {
//             id: 6,
//             name: "Gray Sandals",
//             category: "Shoes",
//             price: 49.99,
//             image: "https://shopdressup.com/cdn/shop/files/shopdressup_white_sneakers-10.jpg?v=1723675220&width=1800",
//             description: "Casual gray sandals with adjustable straps"
//         }
//     ]
//     )

//     return (
//         <ShoeContext.Provider value={{ Shoe }}>
//             {children}
//         </ShoeContext.Provider>
//     )
// };

// export const useShoe = () => {
//     return useContext(ShoeContext);
// };
