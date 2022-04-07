import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '30px' }}>{location.state.message}</h1>
    </div>
  );
};
export default Success;
