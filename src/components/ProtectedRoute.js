import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    
    const isAuth = true

    return (
        <>
            {
                isAuth ? <Outlet /> : <Navigate to="/login" replace={true} />
            }
        </>
    )
}

export default ProtectedRoute
