import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import LogoLayout from 'layout/LogoLayout';

const NotFound = Loadable(lazy(() => import('pages/extra-pages/NotFound')));

// ==============================|| AUTH ROUTING ||============================== //

const LogoHeaderRoutes = {
    path: '/',
    element: <LogoLayout />,
    children: [
        {
            path: '*',
            element: <NotFound />
        }
    ]
};

export default LogoHeaderRoutes;
