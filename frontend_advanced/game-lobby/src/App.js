import './App.css';
import Containers from "./Components/game_loby";
import Helloworld from "./Components/Helloworld"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Containers/>}/>
          <Route path='/helloworld'  element={<Helloworld/>}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
