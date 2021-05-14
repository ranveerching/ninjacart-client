import './App.css';
import Portfolio from './containers/Portfolio';
import AppProvider from './context/provider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Portfolio />
      </AppProvider>
    </div>
  );
}

export default App;
