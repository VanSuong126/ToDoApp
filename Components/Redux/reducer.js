const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  todoList: [
    {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
    {id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
    {id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'},
  ],
  dataPriority :[
    {
      item: 'High',
      id: 'high',
      color: 'red',
    },
    {
      item: 'Medium',
      id: 'medium',
      color: 'yellow',
    },
    {
      item: 'Low',
      id: 'low',
      color: 'grey',
    },
  ],
};

const RootReducer = (state=initState, action) => {
  switch (action.type) {
      case 'todoList/addTodo':
          return{
              ...state,
              todoList:[
                  ...state.todoList,
                 action.payload
              ]
          }
          case 'ToDo/changeCompleted':
          return{
              ...state,
              todoList:state.todoList.map(e =>{
                if(e.id !==action.id) return e;
                return {...e,completed:!e.completed};
              })
          }
          case 'Search/searchFilterChange':
            return{
                ...state,
                filters: {...state.filters,search: action.payload}
            }
         case 'Filter/filterCheckChange':
            return{
                ...state,
                filters: {...state.filters,status: action.payload}
            }
            case 'Filter/ProritySelectChange':
              return{
                  ...state,
                  filters: {...state.filters,priority: action.payload}
              }
          default:
              return state;
  }
};

export default RootReducer;
