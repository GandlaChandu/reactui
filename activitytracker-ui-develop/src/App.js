import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/app/dashboard';
import Logout from './components/app/logout/logout';
import ActivityBoard from './components/app/activityboard/activityboard';
import './App.scss';
import ViewActivityBoard from './components/app/viewactivityboard';
import Login from './components/app/login';
import CreateActivity from './components/app/createactivity';

function App() {
  return (
    
    <Routes>
      <Route
        path='/login'
        element={<Login/>}
      />
      <Route
        path='/dashboard'
        element={<Dashboard />}
      />
      <Route
        path='/activityboard'
        element={<ActivityBoard />}
      />
      <Route
        path='/viewactivityboard'
        element={<ViewActivityBoard />}
      />
      <Route
        path='/'
        element={<Dashboard />}

      />
       <Route
        path='/logout'
        element={<Logout />}
      />

      <Route 
      path='/createactivity'
      element={<CreateActivity />}
      />

    </Routes>
    
  );
}

export default App;
