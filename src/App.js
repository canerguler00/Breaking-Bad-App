import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css"
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";

function App() {  

  return (
    <div className="App"> 
    <nav className="nav">
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />    
          <Route exact path="/quotes" element={<Quotes />} />  
          <Route path="/quotes/:quote_id" element={<QuoteDetail />} />    
        </Route>
      </Routes>
    </div>
  );
}

export default App;





