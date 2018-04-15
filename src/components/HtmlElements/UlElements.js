import React from 'react';

export const Ul = (props) => {
  return (
    <ul className={props.class} style={props.style}>
      {props.children}
    </ul>
  )
}

export const Li = (props) => {
    return (
      <li className={props.class} style={props.style} onClick={props.onClick}>
        {props.text}
        {props.children}
      </li>
    )
}

export const Ol = (props) => {
    return (
      <ol className={props.class} style={props.style}>
        {props.children}
      </ol>
    )
}