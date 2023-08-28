import { RouterProvider } from 'react-router-dom';

import { NavigationScroll } from './components/layouts/NavigationScroll';
import { router } from './router';

function App() {
    return (
        <>
            <NavigationScroll>
                <RouterProvider router={router} />
            </NavigationScroll>
        </>
    );
}

export default App;
