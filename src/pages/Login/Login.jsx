import './Login.scss';
import { FcGoogle } from 'react-icons/fc';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { loginFailure, loginStart, loginSuccess } from '../../authContext/AuthActions';
import { AuthContext } from '../../authContext/AuthContext';

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const signIn = () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then(res => {
        var user = res.user;
        dispatch(loginSuccess(user));
        console.log(res.user);
      })
      .catch(err => {
        dispatch(loginFailure());
      });
  };
  return (
    <div className='app__login'>
      <button onClick={signIn}>
        <FcGoogle /> Sign in With Google
      </button>
    </div>
  );
};
export default Login;
