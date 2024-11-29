import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
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
import HomeLayout from './layouts/HomeLayout';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute.js';
import Profile from './components/almuni/Profile.js';
import { UserProvider } from './context/UserContext.js';

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
      <AuthProvider>
        <UserProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Protected route for Dashboard */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
               <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/almuni-profile/:id"
            element={
              // <PrivateRoute>
               <AlmuniProfile />
              // </PrivateRoute>
            }
          />
          <Route
            path="/student-profile/:id"
            element={
              // <PrivateRoute>
               <StudentProfile />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
        </UserProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
