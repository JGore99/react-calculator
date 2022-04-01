import React, { useState } from "react"
import styles from "./Display.module.css"

const Display = ({previousValue, currentValue}) => {
  return(
    <div id="display">
        <div class="previous-value">{previousValue}</div>
        <div class="current-value">{currentValue}</div>
      </div>
  )
}

export default Display