import './App.css';
// import Item from './components/Items/Item';
import Items from './components/Items/Items';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import { dummyProducts } from './dummyProducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Items/>
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
