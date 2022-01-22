
import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {

    const user = JSON.parse(localStorage.getItem('dashboard-me'))

    return user ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoute