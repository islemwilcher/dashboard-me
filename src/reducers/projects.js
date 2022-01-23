
import { START_LOADING, FETCH_ALL, FETCH_PROJECT, FETCH_STATISTIC, CREATE, UPDATE, DELETE } from '../constant/actionTypes'

const projectsReducers = (state = { isLoading: true, projects: [], statistic: [] }, action) => {
    switch(action.type) {
        case START_LOADING:
            return { ...state, isLoading: false };
        case FETCH_STATISTIC:
            return { ...state, statistic: action.payload};
        default:
            return state;
    }
}

export default projectsReducers;