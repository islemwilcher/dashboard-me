
import * as actionTypes from '../constant/actionTypes'

const authReducer = ( state = { authData: null }, action ) => {
    switch (action.type) {
        case actionTypes.AUTH:
            localStorage.setItem('dashboard-me', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action.data }
        case actionTypes.LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state
    }
}

export default authReducer