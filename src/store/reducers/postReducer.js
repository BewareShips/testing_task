const ADD_POST = "ADD_POST";
const UPDATE_POST_TAG = "UPDATE_POST_TAG";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_STATUS = "SET_STATUS";
const SET_CATEGORY = "SET_CATEGORY";
const UPDATE_ACTIVE_TEXT = "UPDATE_ACTIVE_TEXT";
const UPDATE_ACTIVE_TAG = "UPDATE_ACTIVE_TAG";
const CANCEL_CHANGING = "CANCEL_CHANGING";
const NOT_CHOSE_ROW = "NOT_CHOSE_ROW";
const DEL_POST = "DEL_POST";
const SET_CHECK = "SET_CHECK";
const ACTIVE__ISVISIBLE = "ACTIVE__ISVISIBLE";
const SET_MAIN_CHECK = "SET_MAIN_CHECK";
const SET_MAIN_EYE_CHECK = "SET_MAIN_EYE_CHECK";
const SET_VISIBLE = "SET_VISIBLE";
const SET_ALL_VISIBLE = "SET_ALL_VISIBLE";
const SET_ALL_NOT_VISIBLE = "SET_ALL_NOT_VISIBLE";




let initialState = {
  postData: [
    {
      heading: "Элемент #1",
      description: "Описание Элемента #1",
      id: 0,
      isVisible: true,
      isChecked: false,
    },
    {
      heading: "Элемент #2",
      description: "Описание Элемента #2",
      id: 1,
      isVisible: false,
      isChecked: false,
    },
    {
      heading: "Элемент #3",
      description: "Описание Элемента #3",
      id: 2,
      isVisible: true,
      isChecked: false,
    },
  ],
  mainCheck: false,
  mainEyeCheck: false,
  activeItem: 0,
  activeItemTag: "Элемент #1",
  activeItemText: "Описание Элемента #1",
  isVisible: true,
  mainCheckVisibleItems: 'ALL'
};

const postdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let lastId =  state.postData.length  == 0 ? 0 : state.postData[state.postData.length - 1].id  ;
      
      const newPost = {
        heading: "Без названия",
        description: "",
        id: lastId + 1,
        visible: state.visible,
      };
      return { ...state, postData: [...state.postData, newPost] };
    }
 
    case DEL_POST: {
      const newItems = state.postData.filter(
        (item) => !item.isChecked
      );
      return {
        ...state,
        postData: newItems,
      };
    }
    case SET_CATEGORY: {
      return {
        ...state,
        activeItemTag: action.heading,
        activeItemText: action.description,
        activeItem: action.id,
      };
    }
    case UPDATE_ACTIVE_TAG: {
      return { ...state, activeItemTag: action.payload };
    }
    case UPDATE_ACTIVE_TEXT: {
      return { ...state, activeItemText: action.payload };
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        postData: state.postData.map((el) => {
          if (el.id === action.id) {
            return { ...el, heading: action.tag, description: action.body,isVisible:action.isVisible };
          }
          return el;
        }),
      };
    }
    case CANCEL_CHANGING:
      return {
        ...state,
        activeItemTag: state.postData[state.activeItem].heading,
        activeItemText: state.postData[state.activeItem].description,
      };
    case NOT_CHOSE_ROW:
      return {
        ...state,
        activeItemTag: "",
        activeItemText: "",
        activeItem: "",
      };
    case SET_STATUS: {
      return { ...state, visible: action.payload };
    }
    case SET_CHECK: {
      return {
        ...state,
        postData: state.postData.map((el) => {
          if (el.id === action.id) {
            return { ...el, isChecked: action.payload };
          }
          return el;
        }),
      };
    }
    case ACTIVE__ISVISIBLE: {
      return { ...state, isVisible: action.payload };
    }
    case SET_MAIN_CHECK: {
      return {
        ...state,
        mainCheck: action.payload,
        postData: state.postData.map((el) => {
          return { ...el, isChecked: !state.mainCheck };
        }),
      };
    }
    case SET_MAIN_EYE_CHECK: {
      return {
        ...state,
        mainEyeCheck: action.payload,
        postData: state.postData.map((el) => {
          return { ...el, isVisible: !state.mainEyeCheck };
        }),
      };
    }
    case SET_VISIBLE: {
      return {
        ...state,
        postData: state.postData.map((el) => {
          if (el.id === action.id) {
            return { ...el, isVisible: action.payload };
          }
          return el;
        }),
      };
    }
    case SET_ALL_VISIBLE: {
      if(action.payload === true){
        return {...state,mainCheckVisibleItems: 'ALL'}
      }else{
        return{...state, mainCheckVisibleItems: 'SHOW'}
      }

    }
    case SET_ALL_NOT_VISIBLE: {

      if(action.payload === true){
        return {...state,mainCheckVisibleItems: 'ALL'}
      }else{
        return{...state, mainCheckVisibleItems: 'HIDE'}
      }
 
    }
    default:
      return state;
  }
};

export default postdataReducer;
