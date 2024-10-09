import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login'  element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
