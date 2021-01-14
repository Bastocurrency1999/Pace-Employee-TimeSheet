//  This file contains all the root endpoint for Api in this application

// Contact us 
export const CONTACT_PACETEAM_API = 'https://pacetimesheet.herokuapp.com/api/contactUs/contact';


// Handles Authentication, /signUp, /login
const AUTH_API_URL = 'https://pacetimesheet.herokuapp.com/api/users/';


// Update user personal profile (/:staffID)
const USER_PROFILE_URL = 'https://pacetimesheet.herokuapp.com/api/users/companyName/userProfile/';


/* TODO API */ 
const TODO_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';
// export const FETCH_TODO = 'https://pacetimesheet.herokuapp.com/api/todo/todolist/'
export const ADD_NEW_TODO_API = 'https://pacetimesheet.herokuapp.com/api/todo/companyName/todolist/'
// const TODO_API_URL = 'https://pacetimesheet.herokuapp.com/api/todo/companyName/todolist/'

/* >>>>>>>>>>> MANAGE TASKS API <<<<<<<<<<<<< */

// ASSIGN TASK API
const ASSIGN_TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/newTask/';

// const TASK_API_URL = 'https://api.fake.rest/6c02d615-a40c-47ce-89c1-a4cf5a547ba0/task'
const TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/';

// ACCEPTED TASK API
const ACCEPTED_TASK_API_URL = 'http://fakerestapi.azurewebsites.net/api/v1/Activities';


// ASSIGNED TASK API
const ASSIGNED_TASK_API_URL = 'https://pacetimesheet.herokuapp.com/api/tasks/companyName/assignedTasks/';





/* >>>>>>>>>>> MANAGE DEPARTMENT API <<<<<<<<<<<<< */


// (POST/ADD NEW DEPARTMENT)
const ADD_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/addDepartment/';



// GET ALL DEPARTMENT
const FETCH_DEPARTMENT_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/department/';



/* >>>>>>>>>>> MANAGE EMPLOYEE API <<<<<<<<<<<<< */


// ADD EMPLOYEE
const ADD_NEW_EMPLOYEE_API = 'https://pacetimesheet.herokuapp.com/api/users/signUp/companyName/addUser/';


// GET ALL COMPANY EMPLOYEES
const FETCH_EMPLOYEES_LIST_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/employee/'




/* >>>>>>>>>>>>>>> COMPANY API <<<<<<<<<<<<<<<<<< */


// GET COMPANY PROFILE
export const FETCH_COMPANY_PROFILE_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/';

// UPDATE COMPANY PROFILE
export const UPDATE_COMPANY_PROFILE_API = 'https://pacetimesheet.herokuapp.com/api/users/companyName/companyProfile/updateProfile/';

export {
    AUTH_API_URL,
    USER_PROFILE_URL,


    ADD_DEPARTMENT_API,
    FETCH_DEPARTMENT_API,


    ADD_NEW_EMPLOYEE_API,
    FETCH_EMPLOYEES_LIST_API,

    // TODO_API_URL,

    ASSIGN_TASK_API_URL,
    TASK_API_URL,
    ACCEPTED_TASK_API_URL,
    ASSIGNED_TASK_API_URL
}