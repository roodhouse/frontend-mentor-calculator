import React from 'react'

function Output({ theOutput}) {
  return (
    <>
      <div id="outputContainer" className='pr-6 pt-[29px] pb-[22px] text-right font-leagueSpartan text-[40px] font-bold tracking-[-0.667px] rounded-[10px]'>
        <p>{theOutput}</p>
      </div>
    </>
  )
}

export default Output