export const GET_DATA = 'GET_DATA';

export const getDataSource = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
