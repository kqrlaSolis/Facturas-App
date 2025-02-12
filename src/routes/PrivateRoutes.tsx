import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};