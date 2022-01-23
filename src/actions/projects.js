
import { FETCH_STATISTIC } from '../constant/actionTypes'

import * as api from '../api/index.js'

export const getStatistic = (MONTHS, setProjectStates) => async (dispatch) => {
    try {
        const { data } = await api.projectsStats()
        
        dispatch({ type: FETCH_STATISTIC, payload: data })

        data.map(item => setProjectStates(prev => [ ...prev, {name: MONTHS[item._id - 1], "Projects": item.total} ])) 
    } catch (error) {
        
    }
}  