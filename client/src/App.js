import './App.css';
// import Item from './components/Items/Item';
import Items from './components/Items/Items';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Items>
          {/* for (let index = 0; index < array.length; index++) {
            <Item/>
          } */}
        </Items>
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
