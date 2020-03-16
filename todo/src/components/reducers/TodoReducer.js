export const initialState = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  
  export const TodoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'TOGGLE_ITEM':
        return {
          ...state,
          completed: true
        };
      default:
        return state;
    }
}