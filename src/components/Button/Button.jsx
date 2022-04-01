import React, {useState} from "react";
import "./Button.css"

const Button = (props) => {
  
  return(
    <button 
      id={props.id}  
      className={props.cName}
      onClick={() => 
        props.onClick(props.keyValue)
      }
      onDoubleClick={() => 
        props.onDoubleClick()
      }
    >
      {props.keyValue}
    </button>
  )
}

export default Button