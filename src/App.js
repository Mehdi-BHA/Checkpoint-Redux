import './App.css';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Body from './components/Body';

function App(props) {
  return (
    <div className="App">
      <Navbar/>
      <Aside/>
      <Body/>
    </div>
  );
}

export default App;
