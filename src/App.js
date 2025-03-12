import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import Registration from './pages/Registration';
import AIAnalysis from './pages/AIAnalysis';
import EmailConfirmation from './pages/EmailConfirmation';
import Mentorship from './pages/Mentorship';
import Activities from './pages/Activities';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
          <Route path="/email-confirmation" element={<EmailConfirmation />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
