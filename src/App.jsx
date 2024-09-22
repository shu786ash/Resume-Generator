import './App.css';
import Home from './Home';
import {Resumeform} from './Resumeform'
import Login from './component/Login';
import Signup from './component/Signup';
import Template from './component/Template';
import { AuthProvider } from './Authentication/AuthContext';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Template1 from './ResumeTemplate.jsx/Template1';
function App() {
  return (
    <>
      <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/template' element={<Template/>}/>
              <Route path='/resumeform' element={<Resumeform/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/template1' element={<Template1/>}/>
            </Routes>
          </Router>
      </AuthProvider>
    </>
  )
}

export default App;
