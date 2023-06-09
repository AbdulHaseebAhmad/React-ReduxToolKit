import { useSelector, useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import {authenticateactions} from "../store/index.js";

const Auth = () => {

 
 const isAuthenticated = useSelector(state => state.auth.authentication);
 const dispatch = useDispatch();

 const authenticateUserHandle = (event) => {
    event.preventDefault();   
    dispatch(authenticateactions.signin());
 
 }

  return (
    <main className={classes.auth}>
      <section>
        {!isAuthenticated && <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={authenticateUserHandle}>Login</button>
        </form>}
      </section>
    </main>
  );
};

export default Auth;
