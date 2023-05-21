import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../utils"
import "./styles.css"

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, setSearchByTitle, setOrderSerial, cartProducts, setCartProducts, order, setOrder } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(item => item.id !== id);
    setCartProducts(filteredProducts);
  }

  const handleCheckout = () => {
    const date = new Date();
    const orderToAdd = {
      date: date.toLocaleString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrderSerial(orderToAdd.date);
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle(null)
  }

  return (
    <aside className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"} flex-col top-20 fixed right-0 border bg-blue-300 border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={() => closeCheckoutSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round"  strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
        </button>
      </div>
      <div className="scrollable-cards px-6 flex-1 relative overflow-y-scroll max-h-screen">
        {
          cartProducts.map(item => (
            <OrderCard 
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.images}
            price={item.price}
            handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-4">
        <p className="flex justify-between items-center mb-2">
          <span className="font-medium">Total: </span>
          <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;