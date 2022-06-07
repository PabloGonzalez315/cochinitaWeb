import React from 'react'
import Container from '@mui/material/Container'
import './ImgMedio.css'

const ImgMedio = () => {
  return (
    <div>
        <Container maxWidth="xl" className= "imgMed">
        <div className="rectangleGreen">
          <p className="textGreen"></p>
              <ul> 
                <li>PANUCHO</li>
                <li>TAMALES</li>
                <li>EMPANADAS</li>
                <li>TACOS</li>
                <li>TORTA</li>
                <li>BURRITO</li>
                <li>SOPA DE LIMA</li>
                <li>MIXIOTE PIBIL</li>
                <li>COMIDA BELICEÑA</li>
                <li>POLLO ESCABECHE</li>
                <li>TACOS DORADOS</li>
              </ul>

        </div>
        </Container>
    </div>
  )
}

export default ImgMedio