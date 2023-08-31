import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { LoadingComponent } from '@/components/LoadingComponent';

import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { SidebarMenu } from '../Navbar/components/SidebarMenu';
import { Container, Main } from './styles';

export const SiteLayout = () => {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <SidebarMenu visible={sidebar.toString()} close={() => setSidebar(false)} />
            <Container>
                <Navbar toggleSidebar={() => setSidebar(!sidebar)} />
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
