import Home from './components/Home'
import AddGame from "./components/AddGame";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EditGame from './components/EditGame';
import ViewUser from './components/ViewGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addgame' element={<AddGame />} />
          <Route path="/editgame/:id" element={<EditGame />} />
          <Route path="/viewgame/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
