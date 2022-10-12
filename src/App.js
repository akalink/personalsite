import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Art from './components/Art/Art'
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouters } from './router/AppRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <AppRouters></AppRouters>
      </Router>      
    </div>
  );
}

export default App;
