import './App.css';
import Router from './router';
import AppProvider from './context/provider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}

export default App;
