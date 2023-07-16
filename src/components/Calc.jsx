import React from 'react'

function Calc() {
  return (
    <>
      <div id="calcContainer" className='p-6 rounded-[10px] sm:p-8'>
        <div id="rowOne" className='flex justify-between mb-[13px]'>
          <div id="seven" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>7</p>
          </div>
          <div id="eight" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>8</p>
          </div>
          <div id="nine" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>9</p>
          </div>
          <div id="del" className='del rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[20px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>DEL</p>
          </div>
        </div>
        <div id="rowTwo" className='flex justify-between mb-[13px]'>
          <div id="four" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>4</p>
          </div>
          <div id="five" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>5</p>
          </div>
          <div id="six" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>6</p>
          </div>
          <div id="plus" className='operation key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>+</p>
          </div>
        </div>
        <div id="rowThree" className='flex justify-between mb-[13px]'>
          <div id="one" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>1</p>
          </div>
          <div id="two" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>2</p>
          </div>
          <div id="three" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>3</p>
          </div>
          <div id="minus" className='operation key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>-</p>
          </div>
        </div>
        <div id="rowFour" className='flex justify-between mb-[13px]'>
          <div id="point" className='point key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>.</p>
          </div>
          <div id="zero" className='btn key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>0</p>
          </div>
          <div id="divide" className='operation key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>/</p>
          </div>
          <div id="multi" className='operation key rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[60px] h-[64px] text-[32px] flex justify-center items-center sm:w-[101px] sm:h-[64px]'>
            <p>*</p>
          </div>
        </div>
        <div id="rowFive" className='flex justify-between'>
          <div id="reset" className='reset rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] py-[12px] px-[22px] w-[133px] h-[64px] text-[20px] flex justify-center items-center sm:w-[227px] sm:h-[64px]'>
            <p>RESET</p>
          </div>
          <div id="equal" className='equal rounded-[5px] text-center font-leagueSpartan font-bold tracking-[-0.533px] pt-[13px] px-[10px] pb-[11px] w-[133px] h-[64px] text-[20px] flex justify-center items-center sm:w-[227px] sm:h-[64px]'>
            <p>=</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calc