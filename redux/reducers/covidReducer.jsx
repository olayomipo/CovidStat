// covidReducer.js
const initialState = {
    data: null,
    error: null,
  };
  
  const covidReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COVID_DATA_SUCCESS':
        return { ...state, data: action.payload };
      case 'FETCH_COVID_DATA_FAILURE':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default covidReducer;
  