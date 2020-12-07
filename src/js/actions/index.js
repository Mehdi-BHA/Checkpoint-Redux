export const add = (payload) => {
    return {
      type: 'ADD_TODO',
      payload
    };
  };

export const done = (payload) => {
  return {
    type: 'TOGGLE_DONE',
    payload
  };
};

export const important = (payload) => {
  return {
    type: 'TOGGLE_IMPORTANT',
    payload
  };
};

export const flt = (payload) => {
  return {
    type: 'FILTER',
    payload
  };
};

export const search = (payload) => {
  return {
    type: 'SEARCH_VALUE',
    payload
  };
};

export const dlt = (payload) => {
  return {
    type: 'DELETE_TODO',
    payload
  };
};