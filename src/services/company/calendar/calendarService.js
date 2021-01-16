import axios from 'axios';
import { authHeader, currentUserCompanyID, currentUserStaffID } from '../../auth-header';
import { FETCH_CALENDAR_EVENT_API, NEW_CALENDAR_EVENT_API, DELETE_CALENDAR_EVENT_API } from '../../root-endpoints';



const fetchCalendarEvent = async() =>{
    return await axios.get(FETCH_CALENDAR_EVENT_API + currentUserCompanyID, { headers: authHeader })
}


const postNewCalendarEvent = (newEvent) =>{
    return axios.post(NEW_CALENDAR_EVENT_API, newEvent, { headers: authHeader })
}

const deleteCalendarEvent = (eventID) =>{
    return axios.delete(DELETE_CALENDAR_EVENT_API + currentUserStaffID + "/" + eventID, { headers: authHeader } )
}



const CalendarService = {
    fetchCalendarEvent,
    postNewCalendarEvent,
    deleteCalendarEvent,
}

export default CalendarService;