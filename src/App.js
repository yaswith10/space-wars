import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import {Game} from "./components/Game";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { Help } from "./components/Help";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/space-wars/" element = {
          <>
          <Home/>
          </>
        }></Route>
      </Routes>
      <Routes>
        <Route path="/space-wars/about" element = {
          <>
          <Help/>
          </>
        }></Route>
      </Routes>
      <Routes>
        <Route path="/space-wars/game" element = {
          <>
          <Game/>
          </>
        }></Route>
      </Routes>
      <Routes>
        <Route path="/space-wars/login" element = {
          <>
          </>
        }></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
