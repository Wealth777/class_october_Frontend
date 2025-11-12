import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import img from '../assets/react.svg'

export default function Props() {
  return (
    <>
        <Button title='Change'/> 
        <Card
            title='For Props'
            image={img}
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis porro, totam maiores pariatur molestias ex? Consequatur saepe quasi nam eligendi?'
        />
    </>
    
  )
}
