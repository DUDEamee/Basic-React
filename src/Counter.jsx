import React from 'react'

function Counter(props) {
const {title,count} = props
  return (
    <div>
      <h1>{props.title}:{props.Count} </h1>
    </div>
  )
}

export default Counter
