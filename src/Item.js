import React from 'react'

const Item = (props) => {
  return (
    // <li style="color: red;"></li>
    <li style={{color: props.cor}}>
      {props.nome}
    </li>
  )
}

export default Item