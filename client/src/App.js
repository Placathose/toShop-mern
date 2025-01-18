import './App.css';
// import Item from './components/Items/Item';
import Items from './components/Items/Items';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
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
