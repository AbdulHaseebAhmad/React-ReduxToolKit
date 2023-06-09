import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialCounterState = {counter:0, showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        incerement (state,action) {
            state.counter++
        },
        decrement (state, action) {
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state,action){
            state.showCounter = !state.showCounter;
        }
    }
})

const initialAuthState = {authentication:false};


const AuthenticatedSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        signin (state) {
            state.authentication = !state.authentication
        },
        signout (state) {
            state.authentication = !state.authentication   
        },
        
    }
   
})



 

const store = configureStore({
    reducer:{counter : counterSlice.reducer, auth:AuthenticatedSlice.reducer}
});

export const authenticateactions = AuthenticatedSlice.actions;
export const counterActions = counterSlice.actions;
export default store;


/**
 * the following is the origiginal methodwithout redux tool kit
 
import redux, {createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {counter:0, showCounter:true};



const counterReducer = (state = initialState, action) => {
    if(action.type === 'increment') {
        return{
            counter: state.counter + 1,
            showCounter:state.showCounter
        }
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter -1,
            showCounter:state.showCounter
        }
    }

    if(action.type === 'incrementByFive'){
        return {
            counter: state.counter + action.amount,
            showCounter:state.showCounter
        }
    }

    if(action.type === 'toggleCounter'){
        return{
            counter: state.counter,
            showCounter:!state.showCounter
        }
    }

    else {
        return state
    }
}



const store = createStore(counterReducer);

 
export default store;
*/