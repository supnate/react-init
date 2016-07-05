import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import meta from './meta';
// import home from '../bos/home/reducer';
// import employee from '../bos/employee/reducer';
// import department from '../bos/department/reducer';
// import payroll from '../bos/payroll/reducer';
// import socialInsurance from '../bos/social-insurance/reducer';
// import monthlyInput from '../bos/monthly-input/reducer';
// import timesheet from '../bos/timesheet/reducer';
// import payrollScheme from '../bos/payroll-scheme/reducer';
// import socialInsuranceScheme from '../bos/social-insurance-scheme/reducer';

// import runPayroll from '../bos/run-payroll/reducer';
// import payrollReport from '../bos/payroll-report/reducer';
// import company from '../bos/company/reducer';
// import report from '../bos/report/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
