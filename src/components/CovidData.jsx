// CovidData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCovidData } from '../../redux/actions';

import StateTable from './StatesTable';

const CovidData = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  // Render your data or handle errors here
  // For example:
  if (error) {
    return (<div>Error fetching data: {error}</div>)
  }

  if (!data) {
    console.log("Loading")
    return (<div>Loading...</div>)
  }

  
  console.log(data)

  return (
    <div class="full mt-2 mb-2">
      <div class="container">
          <div class="jumbotron">
              <h1 class="display-4">COVID-19 Data for Nigeria</h1>
              <p class="lead">Stay informed about the latest statistics:</p>
              <ul class="list-unstyled">
                  <li>Total Tested: {data.totalSamplesTested}</li>
                  <li>Total Confirmed Cases: {data.totalConfirmedCases}</li>
                  <li>Total Active Cases: {data.totalActiveCases}</li>
                  <li>Total Deaths: {data.death}</li>
                  <li>Total Recoveries: {data.discharged}</li>
              </ul>
          </div>
      </div>

      <StateTable states = {data.states} />
    </div>
  );
};

export default CovidData;


