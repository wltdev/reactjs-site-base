import React from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingComponent } from '@/components/LoadingComponent';

import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Container, Main } from './styles';

export const SiteLayout = () => {
    return (
        <>
            <Container>
                <Navbar />
                <React.Suspense fallback={<LoadingComponent />}>
                    <Main>
                        <Outlet />
                    </Main>
                </React.Suspense>
                <Footer />
            </Container>
        </>
    );
};
