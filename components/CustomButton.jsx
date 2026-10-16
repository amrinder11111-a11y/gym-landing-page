import React from 'react'

const CustomButton = ({props}) => {
  return (
  <button 
  style={{
    backgroundColor:props.color,
    color:'white',
    padding:"18px 20px",
    margin:"10px",
    cursor:"pointer",
  }}
  >
   <h1> {props.text}</h1>

  </button>
  );
};

export default CustomButton
