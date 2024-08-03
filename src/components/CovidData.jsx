// CovidData.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../../redux/actions';
import StateTable from './StatesTable';
import { calculateSummation, prettifyNumber } from '.';


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

  //Calculate Summation of the data for the heading
  const summation = calculateSummation(data);

  return (
    <div className="full mt-2 mb-2">
      <div className="container">
          <div className="jumbotron">
              <h1 className="display-4">COVID-19 Data for Nigeria</h1>
              <p className="lead">Stay informed about the latest statistics:</p>
              <ul className="list-unstyled">
                  <li>Total Tested: {summation.totalSamplesTested}</li>
                  <li>Total Confirmed Cases: {summation.totalConfirmedCases}</li>
                  <li>Total Active Cases: {summation.totalActiveCases}</li>
                  <li>Total Deaths: {summation.totalDeaths}</li>
                  <li>Total Recoveries: {summation.totalRecoveries}</li>
              </ul>
          </div>
      </div>

      <StateTable states = {data} />
    </div>
  );
};

export default CovidData;


