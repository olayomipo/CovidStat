// covidActions.js
import axios from 'axios';
// import data from '../../data/data.json';

const fetchCovidData = () => async (dispatch) => {
  try {
    // const response = await axios.get('https://covidnigeria.herokuapp.com/api');
    // Supposed to use this but this api is not working

    // const response = await axios.get('../../data/data.json');
    const response = await axios.get('https://raw.githubusercontent.com/olayomipo/CovidStat/main/data/data.json');
    

    
    // const response = await fetch('data.json')
    console.log(response)

    // var data = data
    
    dispatch({ type: 'FETCH_COVID_DATA_SUCCESS', payload: response.data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COVID_DATA_FAILURE', payload: error.message });
  }
};

export default fetchCovidData;
