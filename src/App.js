import './App.css';
import Header from './components/Header/Header';
import SwapButtons from './components/SwapButtons/SwapButtons';
import SwapCards from './components/SwapCards/SwapCards';

function App() {
  return (
    <div className="app">
      <Header />
      <SwapCards />
      <SwapButtons />
    </div>
  );
}

export default App;

