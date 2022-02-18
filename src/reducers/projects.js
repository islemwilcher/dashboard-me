
import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_PROJECT, FETCH_STATISTIC, CREATE, UPDATE, DELETE } from '../constant/actionTypes'

const projectsReducers = (state = { isLoading: true, projects: [], statistic: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_STATISTIC:
            return { ...state, statistic: action.payload};
        case FETCH_ALL:
            return { ...state, projects: action.payload };
        case FETCH_PROJECT:
            return { ...state, project: action.payload.project };
        case CREATE:
            return { ...state, projects: [ ...state.projects, action.payload ] };
        case UPDATE:
            return { ...state, projects:state.projects.map((project) => project._id === action.payload._id ? action.payload: project) };
        case DELETE:
            return { ...state, projects: state.projects.filter((project) => project._id !== action.payload) };
        default:
            return state;
    }
}

export default projectsReducers;