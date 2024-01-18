import { useState } from "react"
import DefaultLayout from "../layout/DefaultLayout"
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onHandleName = ({target}) => setName(target.value);
  const onHandleUserName = ({target}) => setUserName(target.value);
  const onHandlePassword = ({target}) => setPassword(target.value);
  const auth = useAuth();

  if(auth.isAuthenticated){
    return <Navigate to='/dashboard' />
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
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={username} 
            onChange={onHandleUserName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={onHandlePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
    </DefaultLayout>
  )
}

export default Signup
