export const GET_DATA = 'GET_DATA';
export const GET_POSTER_DATA = 'GET_POSTER_DATA';
export const getDataSource = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export const getPosterDetails = (id) => {
  return {
    type: GET_POSTER_DATA,
    payload: id,
  };
};
