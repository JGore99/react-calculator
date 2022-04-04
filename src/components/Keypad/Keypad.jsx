import React, {useState} from "react";
import styles from "./Keypad.module.css"
import Button from "../Button/Button";

const Keypad = (props) => {

  const handleClick = (keyValue) => {
    props.handleClick(keyValue)
  }

  const handleDoubleClick = () => {
    props.handleDoubleClick()
  }


  return(
    <div className="keypad-container">
      <Button id={'clear'} cName={'large'} keyValue={'C/CE'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'del'} cName={'dark-sm'} keyValue={'DEL'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'divide'} cName={'dark-sm'} keyValue={'÷'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'seven'} cName={'light-sm'} keyValue={'7'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'eight'} cName={'light-sm'} keyValue={'8'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'nine'} cName={'light-sm'} keyValue={'9'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'multiply'} cName={'dark-sm'} keyValue={'X'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'four'} cName={'light-sm'} keyValue={'4'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'five'} cName={'light-sm'} keyValue={'5'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'six'} cName={'light-sm'} keyValue={'6'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'subtract'} cName={'dark-sm'} keyValue={'-'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'one'} cName={'light-sm'} keyValue={'1'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'two'} cName={'light-sm'} keyValue={'2'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'three'} cName={'light-sm'} keyValue={'3'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'add'} cName={'dark-sm'} keyValue={'+'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'decimal'} cName={'light-sm'} keyValue={'.'} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'zero'} cName={'light-sm'} keyValue={0} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      <Button id={'equals'} cName={'large'} keyValue={'='} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
    </div>
  )   
}

export default Keypad