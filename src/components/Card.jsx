import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Button from './Button'

export default function Card({title, image, text}) {

  // console.log(img)

  return (
    // <div className={`card ${color}`} style={{width: "18rem"}}>
    //   <img src={img} className="card-img-top" alt="..."/>
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    //       <Link className="btn btn-primary"></Link>
    //     </div>
    // </div>
    <>
      <div className='card'>
        <img src={image} alt="" />
        <p>{title}</p>
        <p>{text}</p>
        <Button title='Read More' color='btn btn-primary'/>
      </div>
    </>
  )
}
