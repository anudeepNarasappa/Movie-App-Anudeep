import {getDataSource} from '../actions/actions';

import axios from 'axios';

let one = 'http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&Type=movie';
let two = 'http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&Type=series';
let three = 'http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&Type=game';

export const fetchDataSource = () => {
  return (dispatch) => {
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          const moviesDataRes = responses[0];
          const seriesDataRes = responses[1];
          const gameDataRes = responses[2];
          const data_new = getSingleDataSource(
            moviesDataRes,
            seriesDataRes,
            gameDataRes,
          );
          dispatch(getDataSource(data_new));
        }),
      )
      .catch((errors) => {
        //dispatch(getDataSource(res.data));
      });
  };
};

const getSingleDataSource = (res1, res2, res3) => {
  var newArray = [];
  newArray.movie = res1;
  newArray.series = res2;
  newArray.game = res3;
  return newArray;
};
