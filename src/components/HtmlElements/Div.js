import React from 'react'

const Div = (props) => {
  return (
    <div 
      className={props.class} 
      id={props.id} data-backdrop={props.dataBackdrop} 
      role={props.role} style={props.style} 
      tabIndex={props.tabIndex}
      aria-labelledby={props.ariaLabelledby}
      aria-hidden={props.ariaHidden}
      onClick={props.onClickHandler}
      >
        {props.text}
        {props.children}
    </div>
  )
}
export default Div;