import React from 'react'
import Logo from './header/Logo'
import Theme from './header/Theme'
import Toggle from './header/Toggle'

function Header() {
  return (
    <>
      <div id="headerContainer" className='flex'>
        <div id="logoWrapper" className='mr-[130px] mt-[10px]'>
          <Logo />
        </div>
        <div id="themeWrapper" className='mr-[26px] mt-[26px]'>
          <Theme />
        </div>
        <div id="toggleWrapper">
          <Toggle />
        </div>
      </div>
    </>
  )
}

export default Header