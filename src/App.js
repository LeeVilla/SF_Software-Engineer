import Navbar from "./Navbar";
import Dog1 from "./routes/Dog1";
import Dog2 from "./routes/Dog2";
import Dog3 from "./routes/Dog3";
import Home from "./routes/Home";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Dog1":
      component = <Dog1 />;
      break;
    case "/Dog2":
      component = <Dog2 />;
      break;
    case "/Dog3":
      component = <Dog3 />;
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}
export default App;
