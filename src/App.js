import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

// refactor colors

function App() {
  return (
    <div className="App themeOne">
    <div id='mainWrapper'>
      <div id='mainContainer' className='h-screen px-6 py-8'>
        <div id='headerWrapper' className='mb-8'>
          <Header />
        </div>
        <div id='outputWrapper' className='mb-6'>
          <Output />
        </div>
        <div id='calcWrapper'>
          <Calc />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
