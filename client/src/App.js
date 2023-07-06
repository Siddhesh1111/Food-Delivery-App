import './App.css';
import Home from './screens/Home';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          
        </Routes>
      </div>
    </Router>
    
  );
}
export default App;
