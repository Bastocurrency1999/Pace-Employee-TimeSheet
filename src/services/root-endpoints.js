//  This file contains all the root endpoint for Api in this application


// Contact us 
export const CONTACT_PACETEAM_API = 'https://pacetimesheet.herokuapp.com/api/contact-us/contact';

// Handles Authentication, /signUp, /login
export const AUTH_API_URL = 'https://pacetimesheet.herokuapp.com/api/users/';

// Update user personal profile (/:staffID)
export const USER_PROFILE_URL = 'https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/';
export const UPDATE_USER_PASSWORD = 'https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/changePassword/';

/* TODO API */ 
export const TODO_API_URL = 'https://pacetimesheet.herokuapp.com/api/todo/companyName/todolist/'

// TASK API
export const ASSIGN_TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/newTask/';
export const TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/';
export const ACCEPTED_TASK_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';
export const ASSIGNED_TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/assignedTasks/';
export const FETCH_COMPANY_TASK_SHEET_URL = 'https://pacetimesheet.herokuapp.com/api/taskSheet/companyName/departments/';
export const UPDATE_TASK_STATUS_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/editTaskStatus/';
export const DELETE_ASSIGNED_TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/deleteTask/';






// DEPARTMENT API
export const ADD_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/addDepartment/';
export const FETCH_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/department/';

// EMPLOYEE API
export const ADD_NEW_EMPLOYEE_API = 'https://pacetimesheet.herokuapp.com/api/users/signUp/companyName/addUser/';
export const FETCH_EMPLOYEES_LIST_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/employee/'

// COMPANY API
export const FETCH_COMPANY_PROFILE_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/';
export const UPDATE_COMPANY_PROFILE_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/updateProfile/';
export const UPDATE_EMPLOYEE_BILLING_AND_TIME_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/employee/timeAndBilling/'

// CALENDAR
// export const ADD_NEW_CALENDAR_EVENT = 'https://pacetimesheet.herokuapp.com/api/companyName/calendar/new/';
export const FETCH_CALENDAR_EVENT_API = 'https://pacetimesheet.herokuapp.com/api/calendar/companyName/';
export const NEW_CALENDAR_EVENT_API = 'https://pacetimesheet.herokuapp.com/api/calendar/companyName/new/';
export const EDIT_CALENDAR_EVENT_API = 'https://pacetimesheet.herokuapp.com/api/calendar/companyName/edit/';
export const DELETE_CALENDAR_EVENT_API = 'https://pacetimesheet.herokuapp.com/api/calendar/companyName/delete/';