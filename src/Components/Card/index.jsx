import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
  const { count, setCount, openProductDetail, closeProductDetail, setProductToShow, setIndexImage, cartProducts, setCartProducts, openCheckoutSideMenu, closeCheckoutSideMenu } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
    setIndexImage(0);
    closeCheckoutSideMenu();
  }

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  }

  const renderIcon = (id) => {
    const isInCart = cartProducts.filter(item => item.id === id).length > 0;

    if(isInCart){
      return (
        <button 
        className="absolute top-0 right-0 flex justify-center items-center bg-blue-300 rounded-full m-2 font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      )
    }
    return (
      <button 
        className="absolute top-0 right-0 flex justify-center items-center bg-white rounded-full m-2 font-medium"
        onClick={(event) => addProductToCart(event, data.data)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    )
  }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name === 'Furniture' ? 'Furnitures' : data.data.category.name}</span>
        <img 
        className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title}
        onClick={() => showProduct(data.data)}/>
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card;