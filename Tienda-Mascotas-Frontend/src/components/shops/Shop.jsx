import React,{useEffect,useState} from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart,shopItems}) => {
  const [products,setProducts,setDiscounts]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/products").then((res)=>res.json()).
    then((data)=>setProducts(data))
  },[])
  useEffect(()=>{
    fetch("http://localhost:4000/discounts").then((res)=>res.json()).
    then((data)=>setDiscounts(data))
  },[])
  
  
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Alimentos</h2>
              </div>
              <div className='heading-right row '>
                <span>Ver todo</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={products} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
