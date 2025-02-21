import React from 'react'

interface props {
  title: string
  copy: string
  index: number
}

const Cards = ({ title, copy, index }: props) => {
  return (
    <div className='card' id={`card-${index + 1}`}>
      <div className='card-inner'>
        
        <div className='card-content'>
          <h2 className='text-6xl'>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className='card-img'>
            <img src={`/assets/card-${index + 1}.${index === 4 ? 'jpg' : 'JPG'}`} alt={title} />
        </div>

      </div>
    </div>
  )
}

export default Cards