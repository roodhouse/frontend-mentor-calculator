import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

function App() {

  const [themeChoice, setThemeChoice] = useState('themeOne')
  const [theOutput, setTheOutput] = useState(0)
  const [values, setValues] = useState([])
  const [valueOne, setValueOne] = useState(0)
  const [theOperation, setTheOperation] = useState('')

  console.log(values)
  
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
    

    btnArray.forEach((btn) => {
      
      btn.addEventListener('click', function() {

        let btnValue = btn.firstChild.innerHTML


        
        console.log(values)

        if ( btnValue === 'RESET') {
          setTheOutput(0)
        } 
        else if ( values.length === 0) {
          setTheOutput('')
          setTheOutput(btnValue)
          values.push(btnValue)
        }  
        // else if ( values.length >= 1 ) {
        //     setTheOutput(theOutput + btnValue)
        //     console.log('in else if')
        //     values.push(btnValue)
        //   }
        }
      )
    })

    // operationArray.forEach((op) => {
    //   op.addEventListener('click', function() {
    //     let operationValue = op.firstChild.innerHTML
    //     console.log(operationValue)
    //     setTheOperation(operationValue)
    //     if (values.length === 0) {
    //       setTheOutput('ERROR')
    //     } else if ( values.length > 0 ) {
    //       values.push(operationValue)
    //       setTheOutput(operationValue)
    //     }
    //   })
    // })
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
