import React from 'react'

function ProductBox(props) {
  const name = props.name;
  const tag = props.tag;
  const background = props.background
  return (
    <div className='productbox'>
      <div className="productbox-tag" style={{backgroundColor: background}}>
        <h1>{tag}</h1>
      </div>
      <div className="productbox-name">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default ProductBox