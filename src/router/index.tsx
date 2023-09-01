import { createBrowserRouter } from 'react-router-dom';

import { SiteLayout } from '@/components/layouts/SiteLayout';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SiteLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);
