import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Onboarding from './components/Onboarding/Onboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import Recommended from './pages/Dashboard/Recommended'
import ResumeBuilder from './pages/ResumeBuilder/ResumeBuilder'
import Login from './components/Log In/Login'
import AuthContextProvider from './context/AuthContext'
import Recommendation from './pages/Recommendation/Recommendation'
import Salary from './pages/Recommendation/Salary'

function App() {
  return (
  
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/ob" element={<Onboarding />} />
          <Route path="/resumebuilder" element={<ResumeBuilder />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/db" element={<><Navbar /><Dashboard /></>} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/recommended" element={<><Navbar /><Recommended /></>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
