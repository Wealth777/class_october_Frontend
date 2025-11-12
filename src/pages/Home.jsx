import React from 'react'
import Card from '../components/Card.jsx'
import img1 from '../assets/unnamed.jpg'
import Button from '../components/Button.jsx'

export default function Home() {
  return (
    <>
      Home
    <div className="card-container">
      <Card
        image={img1}
        title="For Home" 
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, vitae consectetur culpa est cumque voluptatibus consequatur dolores pariatur odit rerum!"
      />
    </div>
    </>
  )
}
