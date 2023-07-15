import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

// add commas every 3 digits
// period key

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
        setTheOperation(operationValue)
        if (values.length === 0) {
          setTheOutput('ERROR')
        } else if ( values.length > 0 ) {
          // find the value of the last item in the values array
          if ( isNaN(values.slice(-1)) ) {
            // if it is NaN then replace the value with the new operation pressed
            values.pop()
            let strValues = values.toString('').replaceAll(',', '')
            setTheOutput(strValues)
          }
          values.push(operationValue)
          let strValues = values.toString('').replaceAll(',', '')
          setTheOutput(strValues)
        }
      })
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
      } else if ( values.length === 1 ) {
        // if there is only one item in the array then leave the output the same
          let strValues = values.toString('').replaceAll(',', '')
          setTheOutput(strValues)
      } else if ( values.length === 0 ) {
        // it there are no items in the array then keep the output at 0
          setTheOutput(0)
      } else {
        // if the values array has more than 2 items then run the operation
        let total;
        // find and remove the operation 
        let operation;
        values.forEach((item) => {
          if (isNaN(item)) {
            operation = item
            return operation
          }
          // split the numbers into separate array's based on where the operation was in the array
          function splitNumbers(values, operation) {
            const firstNumbers = []
            const lastNumbers = []
            let index = 0;
            for ( index = 0; index < values.length; index++) {
              // if the value is the same as the operation we have found the operator and break
              if ( values[index] === operation ) {
                break;
              }
              // if the value is not found as the operator then add the number onto the firstNumbers array
              firstNumbers.push(values[index]);
            }
            for ( index = index + 1; index < values.length; index++) {
              // since the operation has been removed all add the remaining numbers to the lastNumbers array
              lastNumbers.push(values[index]);
            }
            return [firstNumbers, lastNumbers]
          }
          // Run the split function with operation as the separator 
          let theNumbs = splitNumbers(values, operation)
          // The return gives one array with 2 array values [[arrayOne], [arrayTwo]]
          let firstNumbs = theNumbs[0]
          let lastNumbs = theNumbs[1]

          firstNumbs = firstNumbs.toString('').replaceAll(',', '')
          lastNumbs = lastNumbs.toString('').replaceAll(',', '')
          // Change the 2 array's into numbers
          firstNumbs = parseInt(firstNumbs)
          lastNumbs = parseInt(lastNumbs)
  
          // Perform the operation 
           total = () => {
            const operator = operation
            // based on the value of the operation change the equation that is run
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
          // set the total as the output
          setTheOutput(total())
        })
        // clear the values array
        values = []
        // set the total as the number in the values array
        values.push(total())
      }
    })

    // on click of the reset button
    reset.addEventListener('click', () => {
      console.log(`values at reset click ${values}`)
      // clear out everything in the values array and leave it as an empty array
      values = []
      setTheOutput(0)
      console.log(`values after reset click ${values}`)
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
