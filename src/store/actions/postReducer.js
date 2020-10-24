
export const addPostActionCreator = () => ({
  type: 'ADD_POST',
});

export const delPostActionCreator = () => {
  return{type: 'DEL_POST',}
};

//First time setting to activeItem
export const setCategory = (heading,description,id) =>({
  type:'SET_CATEGORY',
  heading,
  description,
  id
})

export const setActiveTag = (payload) => ({
  type: 'UPDATE_ACTIVE_TAG',
    payload
});

export const setActiveText = (payload) => ({
  type: 'UPDATE_ACTIVE_TEXT',
    payload
});

// Setting finally data from activeItem
export const setData = (tag,body,id,isVisible) => ({
  type: 'UPDATE_POST_TEXT',
  tag,
  body,
  id,
  isVisible
});

export const cancelChanging = () => ({
  type: 'CANCEL_CHANGING',
 
})

export const setNone = () =>({
  type: 'NOT_CHOSE_ROW'
})

export const setCheck = (id,payload) => ({
  type: 'SET_CHECK',
  id,
  payload,
});

export const setMainCheck = (payload) => ({
  type: 'SET_MAIN_CHECK',
  payload
})

export const setVisible = (id,payload) => ({
  type: 'SET_VISIBLE',
  id,
  payload
});

export const setAllVisible = (payload) =>({
  type: 'SET_ALL_VISIBLE',
  payload
})

export const setAllNotVisible = (payload) =>({
  type: 'SET_ALL_NOT_VISIBLE',
  payload
})

export const setMainEyeCheck = (payload) => ({
  type: 'SET_MAIN_EYE_CHECK',
  payload
})

