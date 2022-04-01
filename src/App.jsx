import React, {useState} from "react";
import './App.css';
import Display from './components/Display/Display'
import Keypad from './components/Keypad/Keypad';

function App() {

  const [buttonValue, setButtonValue] = useState()
  const [previousValue, setPreviousValue] = useState(null)
  const [currentValue, setCurrentValue] = useState('0')
  

  const handleClick = (keyValue) => {
    setButtonValue(keyValue)
    updateCurrentValue(currentValue, keyValue)
    console.log(keyValue)
  }

  const handleDoubleClick = () => {
    console.log("2 Clicks")
  }

  const updateCurrentValue = (currentValue, keyValue) => {
    currentValue === '0' ? setCurrentValue(keyValue) : setCurrentValue(currentValue + keyValue)
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
