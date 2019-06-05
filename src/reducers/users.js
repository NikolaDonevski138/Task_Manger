const usersReducerDefaultState = [] //usersReducerDefaultState

const usersReducer = (state = usersReducerDefaultState, action) => {
  //usersReducer
  switch (action.type) {
    case 'ADD_USER': //ADD_USER
      return [
        ...state,
        action.user //action.user
      ]
    case 'REMOVE_USER': //REMOVE_USER
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_USER': //EDIT_USER
      return state.map(user => {
        //user
        if (user.id === action.id) {
          //user.id === action.id
          return {
            ...user, //user
            ...action.updates //
          }
        } else {
          return user //user
        }
      })
    default:
      return state
  }
}

export default usersReducer //usersReducer
