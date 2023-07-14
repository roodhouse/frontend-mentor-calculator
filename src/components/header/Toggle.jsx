import React from 'react'

function Toggle() {
  return (
    <>
      <div id="toggleContainer" className='w-[71px]'>
        <div id="themeNumberContainer" className='flex justify-around mb-[5px]'>
          <div id="oneContainer" className='text-white text-center font-leagueSpartan text-xs font-bold'>
            <p>1</p>
          </div>
          <div id="twoContainer" className='text-white text-center font-leagueSpartan text-xs font-bold'>
            <p>2</p>
          </div>
          <div id="threeContainer" className='text-white text-center font-leagueSpartan text-xs font-bold'>
            <p>3</p>
          </div>
        </div>
        <div id="slideContainer" className='flex bg-backgroundToggleKeypadBlueBackgroundOne rounded-[13px] h-[26px] justify-start items-center'>
          <div id="slideOne" className='ball bg-[url("/src/images/ball.svg")] w-4 h-4 bg-no-repeat ml-[5px]'></div>
          <div id="slideTwo" className='ball hidden bg-[url("/src/images/ball.svg")] w-4 h-4 bg-no-repeat'></div>
          <div id="slideThree" className='ball hidden bg-[url("/src/images/ball.svg")] w-4 h-4 bg-no-repeat'></div>
        </div>
      </div>
    </>
  )
}

export default Toggle