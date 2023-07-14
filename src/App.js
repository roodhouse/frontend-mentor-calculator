import './App.css';
import Header from './components/Header'
import Output from './components/Output'
import Calc from './components/Calc'

function App() {
  return (
    <div className="App">
    <div id='mainWrapper'>
      <div id='mainContainer' className='h-screen px-6 py-8 bg-backgroundMainOne'>
        <div id='headerWrapper'>
          <Header />
        </div>
        <div id='outputWrapper'>
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
