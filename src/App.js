import {Fragment} from "react";
import Header from "./components/Header";
import Counter from './components/Counter';
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile"
import { useSelector } from "react-redux";


function App() {

  const isAuthenticated = useSelector(state => state.auth.authentication);

  return (
    <Fragment>
      <Header/>
      {!isAuthenticated? <Auth/> : <><UserProfile/> <Counter/></> }
    </Fragment>
  );
}

export default App;
