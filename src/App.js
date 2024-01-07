import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
