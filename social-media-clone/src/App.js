import './css/App.css';
import AllRoutes from './Routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbars } from './navbar/Navbar';
import AppState from './context/AppState';

function App() {
  return (
    <>
      <AppState>
        <Router>
          <Navbars />
          <AllRoutes />
        </Router>
      </AppState>
    </>
  );
}

export default App;
