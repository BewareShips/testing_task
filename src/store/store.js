import rootReducer from "./reducers/rootReducer";
const { createStore } = require("redux");


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;