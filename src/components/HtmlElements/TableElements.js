import React from 'react'

export const Table = (props) => {
  return (
    <table className={props.class} style={props.style}>
        {props.children}
    </table>
  )
}

export const TBody = (props) => {
    return (
      <tbody className={props.class} style={props.style}>
          {props.children}
      </tbody>
    )
}

export const THead = (props) => {
    return (
      <thead className={props.class} style={props.style}>
          {props.children}
      </thead>
    )
}

export const Tr = (props) => {
    return (
        <tr className={props.class} style={props.style}>
            {props.children}
        </tr>
    )
}

export const Th = (props) => {
    return (
        <th className={props.class} style={props.style}>
            {props.text}
            {props.children}
        </th>
    )
}

export const Td = (props) => {
    return (
        <td className={props.class} style={props.style}>
            {props.text}
            {props.children}
        </td>
    )
}