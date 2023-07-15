import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

function App() {

  const [themeChoice, setThemeChoice] = useState('themeOne')
  const [theOutput, setTheOutput] = useState(0)
  // const [values, setValues] = useState([])
  const [valueOne, setValueOne] = useState(0)
  const [theOperation, setTheOperation] = useState('')

  
  // set theme
  useEffect(() => {
    console.log(`the output at the top: ${theOutput}`)
    const themeOneSlide = document.getElementById('slideOne')
    const themeTwoSlide = document.getElementById('slideTwo')
    const themeThreeSlide = document.getElementById('slideThree')
    const themeElements = [themeOneSlide, themeTwoSlide, themeThreeSlide] 

    themeElements.forEach((element) => {
      element.addEventListener('click', function(){
        let elementNumber = element.id.split('slide').join('')
        let appTheme = document.getElementById('app')
        let theTheme = 'theme' + elementNumber
        
        if ( theTheme === 'themeOne' ) {
          appTheme.classList.add('themeOne')
          appTheme.classList.remove('themeTwo')
          appTheme.classList.remove('themeThree')
          themeOneSlide.classList.add('ball')
          themeTwoSlide.classList.remove('ball')
          themeThreeSlide.classList.remove('ball')
        } else if ( theTheme === 'themeTwo' ) {
          appTheme.classList.add('themeTwo')
          appTheme.classList.remove('themeOne')
          appTheme.classList.remove('themeThree')
          themeTwoSlide.classList.add('ball')
          themeOneSlide.classList.remove('ball')
          themeThreeSlide.classList.remove('ball')
        } else if ( theTheme === 'themeThree') {
          appTheme.classList.add('themeThree')
          appTheme.classList.remove('themeOne')
          appTheme.classList.remove('themeTwo')
          themeThreeSlide.classList.add('ball')
          themeOneSlide.classList.remove('ball')
          themeTwoSlide.classList.remove('ball')
        }
      })
    })

  },[])

  // calc logic
  useEffect(() => {
    const btnArray = Array.from(document.querySelectorAll('.btn'))
    const operationArray = Array.from(document.querySelectorAll('.operation'))
    const equal = document.getElementById('equal')
    console.log(equal)
    let values = []    

    btnArray.forEach((btn) => {
      
      btn.addEventListener('click', function() {

        let btnValue = btn.firstChild.innerHTML

        values.push(btnValue)
        let strValues = values.toString('').replaceAll(',', '')
        console.log(values, strValues)
        setTheOutput(strValues)
        
        console.log(values)
        console.log(values.length)


        }
      )
    })

    operationArray.forEach((op) => {
      op.addEventListener('click', function() {
        let operationValue = op.firstChild.innerHTML
        console.log(operationValue)
        setTheOperation(operationValue)
        if (values.length === 0) {
          setTheOutput('ERROR')
        } else if ( values.length > 0 ) {
          values.push(operationValue)
          let strValues = values.toString('').replaceAll(',', '')
          setTheOutput(strValues)
        }
      })
    })

    equal.addEventListener('click', () => {
      let operation;
      values.forEach((item) => {
        if (isNaN(item)) {
          operation = item
          return operation
        }
        function splitNumbers(values, operation) {
          const firstNumbers = []
          const lastNumbers = []
          let index = 0;
          for ( index = 0; index < values.length; index++) {
            if ( values[index] === operation ) {
              break;
            }
            firstNumbers.push(values[index]);
          }
          for ( index = index + 1; index < values.length; index++) {
            lastNumbers.push(values[index]);
          }
          return [firstNumbers, lastNumbers]
        }
        let theNumbs = splitNumbers(values, operation)
        let firstNumbs = theNumbs[0]
        let lastNumbs = theNumbs[1]
        firstNumbs = parseInt(firstNumbs)
        lastNumbs = parseInt(lastNumbs)
        
        let total = () => {
          const operator = operation
          switch (operator) {
            case "+":
              return firstNumbs + lastNumbs;
            case "-":
              return firstNumbs - lastNumbs;
            case "*":
              return firstNumbs * lastNumbs;
            case "/":
              return firstNumbs / lastNumbs;
            default:
              return NaN;
          }
        }
        console.log(total())
        setTheOutput(total())
      })
    })
  },[])

  
  
  return (
    <div id='app' className="App themeOne">
    <div id='mainWrapper'>
      <div id='mainContainer' className='h-screen px-6 py-8'>
        <div id='headerWrapper' className='mb-8'>
          <Header />
        </div>
        <div id='outputWrapper' className='mb-6'>
          <Output theOutput={theOutput} />
        </div>
        <div id='calcWrapper'>
          <Calc  />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
