import { createBrowserRouter } from 'react-router-dom';

import { SiteLayout } from '@/components/layouts/SiteLayout';
import { Home } from '@/pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SiteLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);
