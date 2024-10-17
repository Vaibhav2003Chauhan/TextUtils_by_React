import React from 'react'

export default function Summary(props) {
    return (
      <div className='summaryBox'>
            <h2>Summary :</h2>
            <p>{props.text}</p>
      </div>
        
    )
}
