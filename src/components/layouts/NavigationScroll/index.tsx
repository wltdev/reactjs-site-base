import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};
export const NavigationScroll: React.FC<Props> = ({ children }) => {
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return children || null;
};
