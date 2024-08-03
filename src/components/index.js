import StateTable from "./StatesTable";
import CovidData from "./CovidData";
import _ from 'lodash';


function prettifyNumber(number) {
    //This just turn number into comma seperated numner for instance 
    // 1234567 ---> 1,234,567

    if (number == null){
      return 0;
    }
    
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const calculateSummation = (data) => {
    const totalSamplesTested = prettifyNumber(_.sumBy(data, 'totalTestResults'));
    const totalConfirmedCases = prettifyNumber(_.sumBy(data, 'positive'));
    const totalActiveCases = prettifyNumber(_.sumBy(data, 'hospitalizedCurrently'));
    const totalDeaths = prettifyNumber(_.sumBy(data, 'death'));
    const totalRecoveries = prettifyNumber(_.sumBy(data, 'recovered'));
  
    return {
      totalSamplesTested,
      totalConfirmedCases,
      totalActiveCases,
      totalDeaths,
      totalRecoveries,
    };
  };

export {StateTable, CovidData, prettifyNumber, calculateSummation};