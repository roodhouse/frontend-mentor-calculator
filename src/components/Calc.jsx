import React from 'react'

function Calc() {
  return (
    <>
      <div id="calcContainer" className='bg-backgroundToggleKeypadBlueBackgroundOne p-6 rounded-[10px]'>
        <div id="rowOne" className='flex justify-between mb-[13px]'>
          <div id="seven" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>7</p>
          </div>
          <div id="eight" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>8</p>
          </div>
          <div id="nine" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>9</p>
          </div>
          <div id="del" className='rounded-[5px] bg-keyBackgroundBlueOne shadow-[0px_-4px_0px_0px_#414E73_inset] text-white text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[20px]'>
            <p>DEL</p>
          </div>
        </div>
        <div id="rowTwo" className='flex justify-between mb-[13px]'>
          <div id="four" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>4</p>
          </div>
          <div id="five" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>5</p>
          </div>
          <div id="six" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>6</p>
          </div>
          <div id="plus" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>+</p>
          </div>
        </div>
        <div id="rowThree" className='flex justify-between mb-[13px]'>
          <div id="one" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>1</p>
          </div>
          <div id="two" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>2</p>
          </div>
          <div id="three" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>3</p>
          </div>
          <div id="minus" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>-</p>
          </div>
        </div>
        <div id="rowFour" className='flex justify-between mb-[13px]'>
          <div id="point" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>.</p>
          </div>
          <div id="zero" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>0</p>
          </div>
          <div id="divide" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>/</p>
          </div>
          <div id="multi" className='rounded-[5px] bg-keyBackgroundOrangeOne shadow-[0px_-4px_0px_0px_#B3A497_inset] text-[#434A59] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>*</p>
          </div>
        </div>
        <div id="rowFive" className='flex justify-between'>
          <div id="reset" className='rounded-[5px] bg-keyBackgroundBlueOne shadow-[0px_-4px_0px_0px_#414E73_inset] text-white text-center font-leagueSpartan font-bold tracking-[-0.533px] py-[12px] px-[22px] w-[133px] h-[64px] text-[20px] flex justify-center items-center'>
            <p>RESET</p>
          </div>
          <div id="equal" className='rounded-[5px] bg-keyToggleBackgroundRedOne shadow-[0px_-4px_0px_0px_#93261A_inset] text-white text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[133px] h-[64px] text-[20px] flex justify-center items-center'>
            <p>=</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calc