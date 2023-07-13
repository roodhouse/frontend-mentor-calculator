/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: 'League_Spartan'
      }
    },
    colors: {
      white: '#fff',
      backgroundMainOne: '#3a4764',
      backgroundToggleKeypadBlueBackgroundOne: '#232c43',
      backgroundScreenOne: '#182034',
      keyBackgroundBlueOne: '#637097',
      keyShadowBlueOne: '#404e72',
      keyToggleBackgroundRedOne: '#d03f2f',
      keyShadowRedOne: '#93261a',
      keyBackgroundOrangeOne: '#eae3dc',
      keyShadowOrangeOne: '#b4a597',
      textGrayOne: '#444b5a',
      backgroundMainTwo: '#e6e6e6',
      backgroundToggleKeypadRedBackgroundTwo: '#d1cccc',
      backgroundScreenTwo: '#ededed',
      keyBackgroundCyanTwo: '#377f86',
      keyShadowCyanTwo: '#1b5f65',
      keyBackgroundToggleOrangeTwo: '#ca5502',
      keyShadowOrangeTwo: '#893901',
      keyBackgroundYellowTwo: '#e5e4e1',
      keyShadowDarkGrayOrangeTwo: '#a69d91',
      textGrayTwo: '#35352c',
      backgroundMainThree: '#160628',
      backgroundToggleKeypadScreenThree: '#1d0934',
      keyBackgroundVioletThree: '#58077d',
      keyShadowMagentaThree: '#bc15f4',
      keyBackgroundToggleCyanThree: '#00e0d1',
      keyShadowCyanThree: '#6cf9f2',
      keyBackgroundVeryDarkVioletThree: '#341c4f',
      keyShadowDarkMagentaThree: '#871c9c',
      textYellowThree: '#ffe53d',
      textDarkBlueThree: '#1b2428'
    }
  },
  plugins: [],
}