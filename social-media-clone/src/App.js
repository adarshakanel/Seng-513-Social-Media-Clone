import './css/App.css';
import './css/SignUp.css';
import './css/Login.css';
import AllRoutes from './Routes/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import AppState from './context/AppState';

function App() {
  return (
    <>
      <AppState>
        <Navbar />
        <Router>
          <AllRoutes />
        </Router>
      </AppState>

    </>
  );
}

export default App;
