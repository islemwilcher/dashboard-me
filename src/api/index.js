
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
export const fetchProjects = () => API.get('/projects')
export const fetchProject = (id) => API.get(`/projects/find/${id}`)

export const createProject = (project) => API.post('/projects', project)
export const updateProject = (id, project) => API.patch(`/projects/${id}`, project)
export const deleteProject = (id) => API.delete(`/projects/${id}`)