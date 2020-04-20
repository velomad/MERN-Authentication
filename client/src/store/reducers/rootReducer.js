import {combineReducers} from 'redux';
import authReducer from './authReducer';
import dashboardReducer from './dashboardReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    dashboard: dashboardReducer
})