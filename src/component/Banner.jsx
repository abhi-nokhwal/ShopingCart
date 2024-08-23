import React,{useEffect, useState} from 'react'

function Banner() {

    
    const ImgArray = ["https://shopdressup.com/cdn/shop/files/2047.webp?v=1723557800&width=1920",
       "./src/assets/landing3.jpg"];
    
    let [index, setindex] = useState("");
    useEffect(() => {
        // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
        const timeoutId = setInterval(() => {
             index=setindex(ImgArray[Math.floor(Math.random()*ImgArray.length)])
            //  console.log(index);
        
        }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
     return () => clearInterval(timeoutId);
  }); // Empty dependency array ensures the effect runs only once

    


  return (
      <>
          <div className='mt-12 h-full  w-full'>
              <img  className='object-cover bg-no-repeat overflow-hidden lg:w-full max-w-screen min-h-screen  lg:h-full' src={ index ? index:ImgArray[0]} alt='not recgnised'></img>
          </div>
         
     </>
  )
}

export default Banner
