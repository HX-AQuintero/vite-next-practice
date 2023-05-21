import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetailOpen = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow, handlerShowContent, indexImage, changeImage } = useContext(ShoppingCartContext);

  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 border bg-blue-300 border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">{productToShow.title}</h2>
        <button onClick={() => closeProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
        </button>
      </div>
      <figure className="px-6">
        <img className="w-full h-full rounded-lg" src={productToShow.images[indexImage]} alt={productToShow.title}/>
          <button 
            className="absolute top-1/3 left-4 ml-4 transform -translate-y-1/6 bg-white py-2 px-2 border-none cursor-pointer rounded-full m-2 font-sm"
            onClick={() => changeImage(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            className="absolute top-1/3 right-4 mr-4 transform -translate-y-1/6 bg-white py-2 px-2 border-none cursor-pointer rounded-full m-2 font-sm" 
            onClick={() => changeImage(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
      </figure>
      <p className="flex flex-col p-4">
        <span className="font-medium text-2xl mb-2">${productToShow.price}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
      <button onClick={handlerShowContent} 
        className="flex flex-col items-center cursor-pointer mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
        </svg>
      </button>
    </aside>
  )
}

export default ProductDetailOpen;