import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Tienda De Mascotas DOGANDCAT</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            
          </div>

          <div className='box'>
            <h2>¡Conocenos!</h2>
            <ul>
              <li>Ubicacion</li>
              <li>Nuestras tiendas</li>
              <li>nuestros servicios</li>
              <li>Productos</li>
          
            </ul>
          </div>

          <div className='box'>
            <h2>Atencion al cliente</h2>
            <ul>
              <li>centro de ayuda </li>
              <li>como comprar </li>
              <li>revisar tu orden</li>
              
            </ul>
          </div>
          <div className='box'>
            <h2>Contactanos</h2>
            <ul>
              <li>Carrera 36 #10-67, 50021, Medellín </li>
              <li>Email: DOGANDCAT.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
