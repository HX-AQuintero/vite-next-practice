import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import ProductDetailOpen from "../ProductDetailOpen";
import ProductDetailClosed from "../ProductDetailClosed";

const ProductDetail = () => {
  const { showContent } = useContext(ShoppingCartContext);

  return (
    showContent ? <ProductDetailOpen/> : <ProductDetailClosed/>
  )
}

export default ProductDetail;