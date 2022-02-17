
import { FETCH_STATISTIC, FETCH_ALL, FETCH_PROJECT, START_LOADING, END_LOADING, CREATE, UPDATE, DELETE } from '../constant/actionTypes'

import * as api from '../api/index.js'

export const getStatistic = (MONTHS, setProjectStates) => async (dispatch) => {
    try {
        const { data } = await api.projectsStats()
        
        dispatch({ type: FETCH_STATISTIC, payload: data })

        data.map(item => setProjectStates(prev => [ ...prev, {name: MONTHS[item._id - 1], "Projects": item.total} ])) 
    } catch (error) {
        
    }
}

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects()

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const getProject = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })

        const { data } = await api.fetchProject(id)

        dispatch({ type: FETCH_PROJECT, payload: { pyload: data } })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const addProject = (project) => async (dispatch) => {
    try {
        dispatch({ type:START_LOADING })

        const { data } = await api.createProject(project)

        dispatch({ type: CREATE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const updatedProject = (id, project) => async (dispatch) => {
    try {
        const { data } = await api.updateProject(id, project)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deletedProject = (id) => async (dispatch) => {
    try {
        await api.deleteProject(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}
