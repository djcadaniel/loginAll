import { useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useAuth } from '../auth/AuthProvider';
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');

  const onHandleName = ({target}) => setName(target.value);
  const onHandleUserName = ({target}) => setUserName(target.value);
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to='/dashboard'/>
  }

  return (
    <DefaultLayout>
      <form>
      <div className="mb-3">
          <label className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={onHandleName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={username} 
            onChange={onHandleUserName}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </DefaultLayout>
  )
}

export default Login
