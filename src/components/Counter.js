import {useSelector, useDispatch} from "react-redux";
import classes from './Counter.module.css';
import { counterActions } from "../store/index";

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
     dispatch(counterActions.toggleCounter())
  };

  const incrementCounterHandle = () =>{
    dispatch(counterActions.incerement())
  }

  const decrementCounterHandler = () =>{
    dispatch(counterActions.decrement())
  }

  const incrementByFiveCounterHandle = () =>{
    dispatch(counterActions.increase(5))
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandle}>Increment</button>
        <button onClick={incrementByFiveCounterHandle}>Increment by Five</button>
        
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


/**
 * 
 * The following is the method use when we are using redux with rdux tool kit 
 import {useSelector, useDispatch} from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const toggleCounter = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type:'toggleCounter'})
  };

  const incrementCounterHandle = () =>{
    dispatch({type:'increment'})
  }

  const decrementCounterHandler = () =>{
    dispatch({type:'decrement'})
  }

  const incrementByFiveCounterHandle = () =>{
    dispatch({type:"incrementByFive", amount:5})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandle}>Increment</button>
        <button onClick={incrementByFiveCounterHandle}>Increment by Five</button>
        
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

 */