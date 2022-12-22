import Patrat from './components/Patrat'
import './App.css';

function App() {
  let dim = [100, 250, 300, 200];
  
  return (
    <div className="App">
        {dim.map(e=>(<Patrat width={String(e)+"vw"}/>))}
    </div>
  );
}

export default App;
