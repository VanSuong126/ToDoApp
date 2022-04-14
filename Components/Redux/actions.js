export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const changeCompleted = (id_number) => {
  return {
    type: 'ToDo/changeCompleted',
    id: id_number,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'Search/searchFilterChange',
    payload: text,
  };
};

export const filterCheckChange = (status) => {
  return {
    type: 'Filter/filterCheckChange',
    payload: status,
  };
};

export const ProritySelectChange = (priority) => {
  return {
    type: 'Filter/ProritySelectChange',
    payload: priority,
  };
};