
export const addPostActionCreator = () => ({
  type: 'ADD_POST',
});

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
export const setData = (tag,body,id) => ({
  type: 'UPDATE_POST_TEXT',
  tag,
  body,
  id
});

export const cancelChanging = (payload) => ({
  type: 'CANCEL_CHANGING',
  payload
})

// export const setStatus = (payload) => ({
//   type: 'SET_STATUS',
//   payload,
// });
