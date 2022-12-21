import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Entrega Inmediata",
      decs: "Ofrecemos servicio a domicilio a todo el area Antioqueña.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Metodo de pago seguro",
      decs: "Ofrecemos transacciones seguras con cualquier medio de pago.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Compra con eficiencia ",
      decs: "Ofrecemos gran variedad de productos a los mejores precios.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 atencion al cliente ",
      decs: "Ofrecemos servicio las 24 horas del día los 7 dias de la semana.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
