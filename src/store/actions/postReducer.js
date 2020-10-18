
export const addPostActionCreator = () => ({
  type: 'ADD_POST',
});

export const setCategory = (payload) =>({
  type:'SET_CATEGORY',
  payload,
})

// export const setTag = (body,id) => ({
//   type: 'UPDATE_POST_TAG',
//     body,
//     id
// });

export const setData = (tag,body,id) => ({
  type: 'UPDATE_POST_TEXT',
  tag,
  body,
  id
});

export const setStatus = (payload) => ({
  type: 'SET_STATUS',
  payload,
});
