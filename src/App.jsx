import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import Onboarding from './components/Onboarding/Onboarding'
import Dashboard from './pages/Dashboard/Dashboard'
import Recommended from './pages/Dashboard/Recommended'
import ResumeBuilder from './pages/ResumeBuilder/ResumeBuilder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/resumebuilder" element={<ResumeBuilder />} />
        <Route path="/db" element={<><Navbar /><Dashboard /></>} />
        <Route path="/recommended" element={<><Navbar /><Recommended /></>} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
