import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

// add commas every 3 digits

function App() {

  const [themeChoice, setThemeChoice] = useState('themeOne')
  const [theOutput, setTheOutput] = useState(0)
  const [theOperation, setTheOperation] = useState('')

  // set theme
  useEffect(() => {
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
    const reset = document.getElementById('reset')
    const del = document.getElementById('del')
    const point = document.getElementById('point')
    
    let values = []
    let firstSet = []
    let theOp;

    // add every digit to the values array on click
    btnArray.forEach((btn) => {
      btn.addEventListener('click', function() {
        let btnValue = btn.firstChild.innerHTML
        // check if there is value in the value array
        if (values[0]) {
          // if value is present then create a typeof var
          let valueType = typeof values[0]
          // if the type of is a number and the values array length is only one then that means the operation has run once before
          // clear the values array and push the new digit to it as a string
          if ( valueType === 'number' && values.length === 1 ) {
            values = []
            values.push(btnValue)
            let strValues = values.toString('').replaceAll(',', '')
            setTheOutput(strValues)
          } else {
            // else the value is a string and has not been run yet
            values.push(btnValue)
            let strValues = values.toString('').replaceAll(',', '')
            setTheOutput(strValues)
          }
        } else {
          // if the values array is empty then push the digit to the array
          values.push(btnValue)
          let strValues = values.toString('').replaceAll(',', '')
          setTheOutput(strValues)
        }
        }
      )
    })

    // add operation to the value array on click
    operationArray.forEach((op) => {
      op.addEventListener('click', function() {
        let operationValue = op.firstChild.innerHTML
        if (values.length === 0) {
          setTheOutput('ERROR')
        } else if ( values.length > 0 ) {
          if ( values.includes('.')) {
            let dotIndex = values.indexOf('.')
            let nextIndex = dotIndex + 1
            values[dotIndex] = values[dotIndex] + values[nextIndex]
            values.pop(values[nextIndex])
          } else {
            console.log('false')
          }
          firstSet = values
          values = []
          theOp = operationValue
          setTheOutput(theOp)
        }
      })
    })

    // onclick of the decimal button
    point.addEventListener('click', () => {
      if (values.length === 0 || !values.includes('.') ) {
        values.push(point.firstChild.innerHTML)
      } 
    })

    // onclick of delete button
    del.addEventListener('click', () => {
      // remove the last item of the array
      values.pop()
      // if the values array is now empty the reset the output to 0 / else set the output to the string value of the array
      if ( values.length === 0) {
        setTheOutput(0)
      } else {
        let strValues = values.toString('').replaceAll(',', '')
        setTheOutput(strValues)
      }
    })

    // onclick of equal button
    equal.addEventListener('click', () => {
      // if the last item in the values array is not a number then keep the output the same
      if ( isNaN(values.slice(-1)) ) {
        let strValues = values.toString('').replaceAll(',', '')
        setTheOutput(strValues)
      } else if ( firstSet.length === 0 ) {
        // if there is no firstSet then an operation has not been clicked
          let strValues = values.toString('').replaceAll(',', '')
          setTheOutput(strValues)
      } else if ( firstSet.length !== 0 && values.length !== 0 ) {
        // if both the firstSet and values array are contain values then run the operation
        let total;
        // convert any decimal points to numbers in the values array
        if ( values.includes('.')) {
          let dotIndex = values.indexOf('.')
          let nextIndex = dotIndex + 1
          values[dotIndex] = values[dotIndex] + values[nextIndex]
          values.pop(values[nextIndex])
        } 
        
          firstSet = firstSet.toString('').replaceAll(',', '')
          values = values.toString('').replaceAll(',', '')
          firstSet = parseFloat(firstSet)
          values = parseFloat(values)
          // Perform the operation 
           total = () => {
            const operator = theOp
            // based on the value of the operation change the equation that is run
            switch (operator) {
              case "+":
                return firstSet + values;
              case "-":
                return firstSet - values;
              case "*":
                return firstSet * values;
              case "/":
                return firstSet / values;
              default:
                return NaN;
            }
          }
          setTheOutput(total().toFixed(2))
          values = [total()]
          firstSet = []
      }
    })

    // on click of the reset button
    reset.addEventListener('click', () => {
      // clear out everything in the values array and leave it as an empty array
      values = []
      setTheOutput(0)
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
