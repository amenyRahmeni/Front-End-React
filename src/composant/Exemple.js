import React from 'react'

export default function Exemple(props) {
  return (
    <div>
      <h1>Bonjour depuis un autre composanrt {props.name.nom} {props.prenom}</h1>
    </div>
  )
}