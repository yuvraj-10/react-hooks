import './App.css';
import Prog12 from './Components.js/Prog12';
import Prog3 from './Components.js/Prog3';
import Prog4 from './Components.js/Prog4';
import Prog5 from './Components.js/Prog5';
import SixthComponent from './Components.js/Prog6';

function App() {
  return (<>
    <h1><Prog12 Siblings = {1} Age = {20}/></h1><hr></hr>
    <h1><Prog3 /></h1><hr></hr>
    <h1><Prog4 /></h1><hr></hr>
    <h1><Prog5 /></h1><hr></hr>
    <h1><SixthComponent /></h1>
    </>
  );
}

export default App;