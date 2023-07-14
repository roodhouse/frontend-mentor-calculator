import React from 'react'

function Calc() {
  return (
    <>
      <div id="calcContainer" className='p-6 rounded-[10px]'>
        <div id="rowOne" className='flex justify-between mb-[13px]'>
          <div id="seven" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>7</p>
          </div>
          <div id="eight" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>8</p>
          </div>
          <div id="nine" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>9</p>
          </div>
          <div id="del" className='del rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[20px] flex justify-center items-center'>
            <p>DEL</p>
          </div>
        </div>
        <div id="rowTwo" className='flex justify-between mb-[13px]'>
          <div id="four" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>4</p>
          </div>
          <div id="five" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>5</p>
          </div>
          <div id="six" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>6</p>
          </div>
          <div id="plus" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>+</p>
          </div>
        </div>
        <div id="rowThree" className='flex justify-between mb-[13px]'>
          <div id="one" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>1</p>
          </div>
          <div id="two" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>2</p>
          </div>
          <div id="three" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>3</p>
          </div>
          <div id="minus" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>-</p>
          </div>
        </div>
        <div id="rowFour" className='flex justify-between mb-[13px]'>
          <div id="point" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>.</p>
          </div>
          <div id="zero" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>0</p>
          </div>
          <div id="divide" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>/</p>
          </div>
          <div id="multi" className='key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center'>
            <p>*</p>
          </div>
        </div>
        <div id="rowFive" className='flex justify-between'>
          <div id="reset" className='reset rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] py-[12px] px-[22px] w-[133px] h-[64px] text-[20px] flex justify-center items-center'>
            <p>RESET</p>
          </div>
          <div id="equal" className='equal rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[133px] h-[64px] text-[20px] flex justify-center items-center'>
            <p>=</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calc