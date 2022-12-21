import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "DogShauw",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Mirringo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "CatShauw",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Productos Naturales",
    },
    
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Ofertas </h1>
          <h1>Tienda </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Ver todas las ofertas</button>
        </div>
      </div>
    </>
  )
}

export default Catg
