import React from 'react'

const Button = (props) => {
  return (
    <button
    className={`ml-6 mr-6 ${props}`}
    disabled={props.disabled}
    {...props}
  >
    {props.text}
  </button>
);
}

export default Button