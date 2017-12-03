import { combineReducers } from 'redux';
// Add a link to reducer for report reducer

const rootReducer = combineReducers({
    reports: SupportReports,
});

export default rootReducer;