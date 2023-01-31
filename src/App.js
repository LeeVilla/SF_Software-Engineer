import "./App.css";
import VendingMachine from "./components/VendingMachine";
import Snack from "./components/Snacks";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <VendingMachine />
      <Snack />
    </div>
  );
}

export default App;
