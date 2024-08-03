import React from 'react';
import { prettifyNumber } from '.';
import axios from 'axios';

const stateCodes = {"AL": "Alabama","AK": "Alaska","AZ": "Arizona","AR": "Arkansas","CA": "California",
    "CO": "Colorado","CT": "Connecticut","DE": "Delaware","FL": "Florida","GA": "Georgia",
    "HI": "Hawaii","ID": "Idaho","IL": "Illinois","IN": "Indiana","IA": "Iowa",
    "KS": "Kansas","KY": "Kentucky","LA": "Louisiana","ME": "Maine","MD": "Maryland",
    "MA": "Massachusetts","MI": "Michigan","MN": "Minnesota","MS": "Mississippi","MO": "Missouri",
    "MT": "Montana","NE": "Nebraska","NV": "Nevada","NH": "New Hampshire","NJ": "New Jersey",
    "NM": "New Mexico","NY": "New York","NC": "North Carolina","ND": "North Dakota","OH": "Ohio",
    "OK": "Oklahoma","OR": "Oregon","PA": "Pennsylvania","RI": "Rhode Island","SC": "South Carolina",
    "SD": "South Dakota","TN": "Tennessee","TX": "Texas","UT": "Utah","VT": "Vermont",
    "VA": "Virginia","WA": "Washington","WV": "West Virginia","WI": "Wisconsin","WY": "Wyoming",
    "DC": "District of Columbia","AS": "American Samoa","GU": "Guam","MP": "Northern Mariana Islands",
    "PR": "Puerto Rico","VI": "Virgin Islands"}

// console.log(stateCodes)

const StateTable = ({ states }) => {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-dark table-bordered mb-0">
                    <thead>
                        <tr>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed Cases</th>
                        <th scope="col">Cases on Admission</th>
                        <th scope="col">Discharged</th>
                        <th scope="col">Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.map((state) => (
                        <tr key={state._id}>
                            <th scope="row" key={state.state}>{stateCodes[state.state]}</th>
                            <td>{prettifyNumber(state.positive)}</td>
                            <td>{prettifyNumber(state.hospitalizedCurrently)}</td>
                            <td>{prettifyNumber(state.recovered)}</td>
                            <td>{prettifyNumber(state.death)}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};



export default StateTable;
