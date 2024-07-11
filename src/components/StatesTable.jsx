import React from 'react';

const StateTable = ({ states }) => {
  return (
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-dark table-bordered mb-0">
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
                            <th scope="row">{state.state}</th>
                            <td>{state.confirmedCases}</td>
                            <td>{state.casesOnAdmission}</td>
                            <td>{state.discharged}</td>
                            <td>{state.death}</td>
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
