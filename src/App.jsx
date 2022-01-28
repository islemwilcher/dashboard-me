
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'

//components
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

//pages
import Auth from './pages/auth/Auth'

//protected pages
import Dashboard from './pages/dashboard/Dashboard'
import Manage from './pages/manage/Manage'

const App = () => {
  return (
    <div title='app'>
      <Router>
        <Routes>
          {/* private route */}
          <Route path='/dashboard' element={<ProtectedRoute />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Route>
          
          <Route path='/dashboard/manage' element={<ProtectedRoute />}>
            <Route exact path='/dashboard/manage' element={<Manage />} />
          </Route>

          <Route path='/' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
