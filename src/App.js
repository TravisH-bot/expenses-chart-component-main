import "./App.css";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import Balance from "./components/Balance";

function App() {
  return (
    <>
      <div className="App">
        <Balance />
        <MainContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
