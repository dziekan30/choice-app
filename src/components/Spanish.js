import React, { Component } from 'react'
import HomeItem from './HomeItem'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeItem
          header="Calcule su propina"
          bill="Suma de cuenta:"
          billPlaceholder="Ingrese la suma de la factura"
          service="Porcentaje de propina: %"
          servicePlaceholder="Ingrese un porcentaje de propina"
          partyS="Número de personas:"
          partyPlaceholder="Ingrese el número de personas"
          tip="Propina:"
          perperson="Por persona:"
          closeButton="Cerrar"
          submitButton="Calcular"
          pageVisit="La página ha sido visitada:"
          times="veces."
        />
      </div>
    );
  }
}