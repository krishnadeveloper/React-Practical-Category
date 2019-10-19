import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducer";
import reduxThunk from "redux-thunk";

export default createStore(
    reducers,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    //applyMiddleware(reduxThunk)
)

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()