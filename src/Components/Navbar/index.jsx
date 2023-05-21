import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const { cartProducts, setSearchByCategory } = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4 text-blue-700 font-semibold";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-sm bg-blue-300">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            MyStore
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            onClick={() => setSearchByCategory()}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/electronics'
            onClick={() => setSearchByCategory('electronics')}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/furnitures'
            onClick={() => setSearchByCategory('furniture')}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/rings'
            onClick={() => setSearchByCategory('rings')}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Rings
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/shoes'
            onClick={() => setSearchByCategory('shoes')}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Shoes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/others'
            onClick={() => setSearchByCategory('others')}
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
            ¡Welcome to MyStore!
        </li>
        <li>
          <NavLink 
            to='/my-orders'
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/my-account'
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) => 
                isActive ? activeStyle : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        {cartProducts.length}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;


