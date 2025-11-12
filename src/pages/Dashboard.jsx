import React from 'react'
import img1 from '../assets/react.svg'
import Card from '../components/Card'

export default function Dashboard() {
  return (
    <div>
      Dashboard
          <div className="card-container">
            <Card
              image={img1}
              title="For Home" 
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, vitae consectetur culpa est cumque voluptatibus consequatur dolores pariatur odit rerum!"
            />
          </div>
    </div>
  )
}
