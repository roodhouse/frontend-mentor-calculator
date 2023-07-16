import React from 'react'

function Output({ theOutput}) {
  return (
    <>
      <div id="outputContainer" className='pr-6 pt-[29px] pb-[22px] text-right font-leagueSpartan text-[40px] font-bold tracking-[-0.667px] rounded-[10px] sm:text-[56px] sm:tracking-[-0.993px] sm:h-[128px]'>
        <p>{theOutput}</p>
      </div>
    </>
  )
}

export default Output