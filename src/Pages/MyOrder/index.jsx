import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Link, useNavigate, useParams } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  let { id } = useParams();
  const navigate = useNavigate();
  if(!id) id = order?.length - 1;
  if(typeof id !== 'number') navigate('/');

  return (
      <Layout>
       <div className="flex items-center justify-center relative w-80 mb-6">
          <Link to='/my-orders' className="absolute left-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
          </Link>
          <h1 className="font-medium text-xl">My Order</h1>
        </div>
        <div className="flex flex-col w-80">
        {
          order?.[id]?.products.map(item => (
            <OrderCard 
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.images}
            price={item.price}
            />
          ))
        }
      </div>
      </Layout>
  )
}

export default MyOrder
