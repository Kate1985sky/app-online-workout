import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
