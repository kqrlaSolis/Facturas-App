import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = () => {


  const user = useSelector((state:any) => state.user);


    return (user.id > 0 ? <Outlet /> : <Navigate to="/login"/> 
    );
};