import React, { Component } from 'react'
import HomeItem from './HomeItem'

export default class Polish extends Component {
  render() {
    return (
      <div>
        <HomeItem
          header="Oblicz Napiwek"
          bill="Suma Rachunku:"
          billPlaceholder="Wpisz Sume Rachunku"
          service="Procent napiwku: %"
          servicePlaceholder="Podaj % napiwku"
          partyS="Ilosc osob:"
          partyPlaceholder="Prosze podac ilosc osob"
          tip="Napiwek:"
          perperson="Na Osobe:"
          closeButton="Zamknij"
          submitButton="Oblicz"
          pageVisit="Strona została odwiedzona:"
          times="razy."
        />
      </div>
    );
  }
}

