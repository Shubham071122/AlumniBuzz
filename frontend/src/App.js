import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';
import AlmuniPage from './pages/almuni/AlmuniPage';
import Dashboard from './pages/dashboard/Dashboard';
import AlmuniProfile from './pages/profile/AlmuniProfile';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import StudentProfile from './pages/profile/StudentProfile';
import PageNotfound from './pages/404Page/PageNotfound';

function App() {
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000); 
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login'  element={<LoginPage/>}/>
        <Route path='/signup'  element={<SignUpPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/alumni' element={<AlmuniPage/>} />
        <Route path='/almuni-profile/:id' element={<AlmuniProfile/>}/>
        <Route path='/student-profile/:id' element={<StudentProfile/>}/>
        <Route path='*' element={<PageNotfound/>} />
      </Routes>
    </Router>
  )
}

export default App
