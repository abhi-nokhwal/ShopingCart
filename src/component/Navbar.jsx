import React,{useState} from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useProducts } from './context';




const Navlinks = [
    {
        lable: 'clothing',
        Link:'/Clothing'
    },
    {
        lable: 'shoes',
        Link:'/Shoes'
    },
    {
        lable: 'about',
        Link:'/AboutUs'
    },
    {
        lable: 'contect',
        Link:'/Contect'
    }
]

const Navbar = () => {
    const [show, setshow] = useState(false);
      const{state:{items},dispatch}=useProducts()

    // const handleClick = () => {
    //     show(setshow(true));
        
    // }


  return (
          
      <main>
             <nav className=' fixed top-8 border bg-dark bg-white w-full z-50 flex justify-between text-2xl items-baseline px-2 py-2 font-thin '>
            
              {/* firt section */}
              <div className=''>
              <section className='flex items-center px-2 gap-4 text-center'>
                  {/* menu bar */}
                  <RiMenu2Fill className='text-2xl cursor-pointer lg:hidden font-light' onClick={()=>setshow(true)} />
                  {/* list items  */}
                  <li className='list-none text-4xl  text-center'>
                      <Link to='./'>DressUp</Link>
                      </li>
                       {Navlinks.map((b, i) => (
                           <li to={ b.Link} className='text-gray-500 list-none text-xl pt-3 px-5 m-auto  uppercase lg:block hidden ' key={i}><Link to={b.Link}>{b.lable}</Link></li>
                      ))}

              </section>
                  
              </div>
  
          
              {/* slide bar only show on moile screen */}

              { show ? <div className='fixed h-full w-screen lg:hidden left-0 top-0 right-0 bg-black/50
              backdrop-blur-sm transition-all' >
                  
                  <section className='text-black bg-white absolute left-0 top-0 h-screen p-8 px-5 z-50 flex-col'>
                      
                      <MdOutlineClear onClick={() => setshow(false)} className='text-3xl text-black cursor-pointer mt-10' />


                      {Navlinks.map((b, i) => (
                          <ul className=''>
                              <li className='text-black list-none text-xl py-3 uppercase' key={i}><Link to={b.Link}>{b.lable}</Link></li>
                              </ul>
                      ))}

                  </section>
                  
              </div>:null}

              {/* last section  */}

              <section className='flex items-center gap-3 md:gap-5 lg:gap-5 px-2'>
                  {/* <CiSearch className='sm:text-4xl text-3xl cursor-pointer' /> */}

                   {/* cart  */}
                  {/* <IoCartOutline className='text-3xl cursor-pointer'>
                  </IoCartOutline> */}
                  {
                      
                    items.length!=0 ? <div className=" absolute mt-3 mx-5 lg:mt-4 inline-flex justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{ items.length}</div>:null
                  }
                  <Link to='./Cart'> <IoCartOutline className='text-3xl cursor-pointer relative inline-flex'>
                      <span></span>
                  </IoCartOutline>
                  
                  </Link>
                  
                  

                  {/* Random account image  */}
                  <img  src='https://i.pravatar.cc/150?img=60' alt='avtar' className='h-8 w-8 lg:h-10 lg:w-10 rounded-3xl cursor-pointer' >
                  </img>
                  
              </section>
              
        
          </nav>
          <hr/>
       </main>
  )
}

export default Navbar
