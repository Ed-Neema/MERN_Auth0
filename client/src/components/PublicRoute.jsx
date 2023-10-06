import {useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const PublicRoute = () => {
    const {currentUser} = useSelector(state=> state.user)
  return currentUser ? <Navigate to="/"/> : <Outlet/>
}

export default PublicRoute