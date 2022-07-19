import './App.css';
import Search from './components/search/Search';

function App() {

  const HandleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={HandleOnSearchChange} />
    </div>
  );
}

export default App;
