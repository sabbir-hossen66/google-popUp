import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
  const [user, setUser] = useState(null)
  console.log(user);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedInUser = result.user
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch(error => {
        console.log('error', error.message);
      })
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result);
        setUser(null)
      })
      .catch(error => {
        console.log('error', error.message);
      })
  }

  return (
    <div>
      {user ?
        <button onClick={handleLogOut} className="btn btn-active btn-primary">Click Out</button> :
        <button onClick={handleLogin} className="btn btn-active btn-secondary">Click In</button>}
      {user &&
        <div>
          <h2>user:{user.displayName} </h2>
          <p>user:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>


      }

    </div>
  );
};

export default Login;