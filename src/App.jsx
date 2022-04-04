import React, {useState} from "react";
import './App.css';
import Display from './components/Display/Display'
import Keypad from './components/Keypad/Keypad';

function App() {

  const [buttonValue, setButtonValue] = useState()
  const [previousValue, setPreviousValue] = useState(null)
  const [currentValue, setCurrentValue] = useState('0')
  const [hasDecimal, setHasDecimal] = useState(false)
  let tempCurrentTotal = '0'

  const handleClick = (keyValue) => {
    setButtonValue(keyValue)
    updateCurrentValue(keyValue)
  }

  const handleDoubleClick = (keyValue) => {
    // double clicking C/CE Clears ALL
    if (keyValue === 'C/CE') {
      clearALL()
    } else {
      return
    }
  }

  const updateCurrentValue = (keyValue) => {
    if (keyValue === 'C/CE'){
      // single clicking C/CE clears current value
      tempCurrentTotal = '0'
    } else if(currentValue === '0'  && keyValue !== '.'){
      // overwrite zero
      tempCurrentTotal = keyValue
      console.log(tempCurrentTotal, "temp current value")
    } else if (keyValue === '.' && /\./.test(currentValue)){
      // if decimal present, do nothing
      return
    } else if (keyValue === 'DEL'){
      // DEL works as backspace
      tempCurrentTotal = currentValue.slice(0, -1)
    } else {
      tempCurrentTotal = currentValue + keyValue
    }
    setCurrentValue(tempCurrentTotal)
    console.log(currentValue, "current value")
    console.log(tempCurrentTotal, "temp current value")
  }

  const clearALL = () => {
    tempCurrentTotal = '0'
    setPreviousValue(null)
    setCurrentValue(tempCurrentTotal)
    console.log(previousValue, "previous value")
    console.log(currentValue, "current value")
  }

  return (
    <main>
      <div className='calculator-body'>
        <Display previousValue={previousValue} currentValue={currentValue}/>
        <Keypad handleClick={handleClick} handleDoubleClick={handleDoubleClick}/>
      </div>
    </main>
  );
}

export default App;
