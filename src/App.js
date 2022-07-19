import './App.css';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';

function App() {

  const HandleOnSearchChange = (searchData) => {
    console.log(searchData)
  }
  return (
    <div className="container">
      <Search onSearchChange={HandleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
