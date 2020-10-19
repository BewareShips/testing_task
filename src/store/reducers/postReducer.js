const ADD_POST = "ADD_POST";
const UPDATE_POST_TAG = "UPDATE_POST_TAG";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_STATUS = "SET_STATUS";
const SET_CATEGORY = "SET_CATEGORY";
const UPDATE_ACTIVE_TEXT = "UPDATE_ACTIVE_TEXT";
const UPDATE_ACTIVE_TAG = "UPDATE_ACTIVE_TAG";
const CANCEL_CHANGING = "CANCEL_CHANGING";


let initialState = {
  postData: [
    {
      heading: "Элемент #1",
      description: "Описание Элемента #1",
      id: 0,
      active: true,
    },
    {
      heading: "Элемент #2",
      description: "Описание Элемента #2",
      id: 1,
      active: false,
    },
    {
      heading: "Элемент #3",
      description: "Описание Элемента #3",
      id: 2,
      active: false,
    },
  ],
  activeItem: 0,
  activeItemTag: "Элемент #1",
  activeItemText: "Описание Элемента #1",
  visible: "true",
};

const postdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let lastId = state.postData[state.postData.length - 1].id;
      const newPost = {
        heading: state.newHeading,
        description: state.newDescription,
        id: lastId + 1,
        visible: state.visible,
      };
      return { ...state, postData: [...state.postData, newPost] };
    }
    case SET_CATEGORY:{
      return {...state,activeItemTag: action.heading,activeItemText: action.description,activeItem:action.id}
    }
    case UPDATE_ACTIVE_TAG:{
      return {...state,activeItemTag: action.payload}
    }
    case UPDATE_ACTIVE_TEXT:{
      return {...state,activeItemText: action.payload}
    }
    case UPDATE_POST_TEXT: {
      return { ...state, postData: state.postData.map(el=>{
        if(el.id === action.id){
          return{...el, heading: action.tag, description: action.body}
        }
        return el
      })};
    }
    case CANCEL_CHANGING: 
    return{...state,
      activeItemTag : state.postData.filter(el=>el.id === action.payload).heading
      // state.postData.map(el=>{
      //   if(el.id === action.payload){
      //     return  el.heading
      //   }})
    }
    console.log(state)
    case SET_STATUS: {
      return { ...state, visible: action.payload };
    }
    default:
      return state;
  }
};

export default postdataReducer;
