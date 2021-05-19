import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <Weather />
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
