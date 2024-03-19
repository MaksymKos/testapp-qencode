import {
  HashRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import HomePage from './pages/HomePage';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LoginPage />} />
          <Route path='login' element={<Navigate to="/" replace />} />
          <Route path='home' element={<HomePage/>} />
          <Route path='reset' element={<ForgotPassword />} />
          <Route path='newpass' element={<NewPassword />} />
        </Route>
      </Routes >
    </Router>
  );
};

export default Root;