import { Header } from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {HeroBanner} from "./Components/HeroBanner/HeroBanner";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeroBanner />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
