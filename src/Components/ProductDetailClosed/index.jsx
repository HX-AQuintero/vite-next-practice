import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetailClosed = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow, handlerShowContent } = useContext(ShoppingCartContext);

  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden"} flex-col fixed right-0 border bg-blue-300 border-black rounded-lg w-[360px] h-[15vh]`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="font-medium text-xl">{productToShow.title}</h2>
        <button onClick={() => closeProductDetail()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <button 
        onClick={handlerShowContent}
        className="flex flex-col items-center cursor-pointer mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>
      </button>
    </aside>
  )
}

export default ProductDetailClosed;

