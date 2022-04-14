import {createSelector} from 'reselect';
export const todoListSelector = state => state.todoList;
export const dataPrioritySelector = state => state.dataPriority;
export const searchTextSelector = state => state.filters.search;
export const statusFilterSelector = state => state.filters.status;
export const priorityFilterSelector = state => state.filters.priority;
export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  priorityFilterSelector,
  (todoList, status, searchText,priority) => {
    return todoList.filter(todo => {
      if (status === 'All') {return priority.length ? (todo.name.includes(searchText) && priority.some(v=>todo.priority.includes(v))) :todo.name.includes(searchText);}
      else
        return (
          todo.name.includes(searchText) &&
          (status === 'Completed' ? todo.completed : !todo.completed)&&
          ( priority.length ? priority.some(v=>todo.priority.includes(v)) : true)
        );
    });
  },
);
