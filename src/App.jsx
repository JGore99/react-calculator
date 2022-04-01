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
    updateCurrentValue(currentValue, keyValue)
  }

  const handleDoubleClick = () => {
    clearALL()
  }

  const updateCurrentValue = (currentValue, keyValue) => {
    if(currentValue === '0'  && keyValue !== '.'){
      tempCurrentTotal = keyValue
      console.log(tempCurrentTotal, "temp current value")
    } else if (keyValue === '.' && /\./.test(currentValue)){
      return
    } else if (currentValue === '0'  && keyValue === '.'){
      tempCurrentTotal = currentValue + keyValue
      console.log(tempCurrentTotal, "temp current value")
    } else {
      tempCurrentTotal = currentValue + keyValue
      console.log(tempCurrentTotal, "temp current value")
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
