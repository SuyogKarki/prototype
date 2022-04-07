import { Home, Login, Success } from './pages';
import './App.scss';
import { Navbar } from './components';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='app'>
      {user && <Navbar />}
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/success' element={<Success />} />
      </Routes>
    </div>
  );
};
export default App;
