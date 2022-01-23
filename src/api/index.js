
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001/api' })

API.interceptors.request.use((req) => {
    if(localStorage.getItem('dashboard-me')) {
        req.headers.token = `Bearer ${JSON.parse(localStorage.getItem('dashboard-me')).token}`
    }
    return req
})

//auth
export const signIn = (formData) => API.post('/auth/signin',  formData)

//projects
export const projectsStats = () => API.get('/projects/statistic')