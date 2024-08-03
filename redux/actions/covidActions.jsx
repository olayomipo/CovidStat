// covidActions.js
import axios from 'axios';
// import data from '../../data/data.json';

const fetchCovidData = () => async (dispatch) => {
  try {

    // const api_url = 'https://covidnigeria.herokuapp.com/api';
    // const api_url = 'https://raw.githubusercontent.com/olayomipo/CovidStat/main/data/data.json';
    const api_url = 'https://api.covidtracking.com/v1/states/current.json';

    const response = await axios.get(api_url);
    
    // const response = await fetch('data.json')
    console.log(response)

    // var data = data
    
    dispatch({ type: 'FETCH_COVID_DATA_SUCCESS', payload: response.data});
  } catch (error) {
    dispatch({ type: 'FETCH_COVID_DATA_FAILURE', payload: error.message });
  }
};

export default fetchCovidData;
