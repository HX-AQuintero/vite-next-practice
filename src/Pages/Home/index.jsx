import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const { filteredItems, setSearchByTitle } = useContext(ShoppingCartContext);

  const renderView = () => {
    if(filteredItems?.length > 0){
      return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {filteredItems?.map(item => (
            <Card key={item.id} data={item}/>
          ))}
      </div>
      )
    } else {
      return (
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">No results. Try again</h1>
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products!</h1>
      </div>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-blue-300 w-80 p-3 mb-4 focus: outline-black"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
        {renderView()}
      <ProductDetail />
    </Layout>
  )
}

export default Home
