import React from 'react'

export default function Button({title, color}) {

  // console.log(props.title)

  return (
    <div>
      <button className={`${color}`}>
        {title}
      </button>
    </div>
  )
}
