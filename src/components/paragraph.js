import React from 'react'

const Paragraph = (props) => {
  return (
    <p className={props.class}>
        {props.children}
        {props.text}
    </p>
  )
}
export default Paragraph;