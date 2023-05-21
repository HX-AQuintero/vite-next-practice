import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  //Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
  const openProductDetail = () => setisProductDetailOpen(true);
  const closeProductDetail = () => setisProductDetailOpen(false);

  //Product Detail - Show Product/Hide Detail/Carousel index
  const [showContent, setShowContent] = useState(true);
  const [productToShow, setProductToShow] = useState({
    title: "",
    price: "",
    description: "",
    images: []
  });
  const [indexImage, setIndexImage] = useState(0);
  const handlerShowContent = () => setShowContent(!showContent);
  const changeImage = (direction) => {
    let index = indexImage + direction;

    if(index < 0){
      index = productToShow.images.length - 1
    } else if(index >= productToShow.images.length){
      index = 0
    }
    setIndexImage(index);
  }
  
  //Shopping cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Checkout Side Menu - Order Serial
  const [orderSerial, setOrderSerial] = useState(null);

  //Shopping cart - Order
  const [order, setOrder] = useState([]);

  //Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const url = 'https://api.escuelajs.co/api/v1/products';
  
  
  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  
  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if(searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if(searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if(searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if(!searchType) {
      return items
    }
  }

  useEffect(() => {
    if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if(!searchByCategory && searchByTitle) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      showContent,
      handlerShowContent,
      indexImage,
      setIndexImage,
      changeImage,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      order,
      setOrder,
      orderSerial,
      setOrderSerial,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      filteredItemsByTitle,
      searchByCategory,
      setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

