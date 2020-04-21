import React from 'react';
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';

import AuthContextProvider from '../../contexts/AuthContext';

const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
    return (
        <Router basename={ basePath }>
            <AuthContextProvider>
                <AppLayout>
                    <RoutedContent />
                </AppLayout>
            </AuthContextProvider>
        </Router>
    );
}

export default hot(module)(AppClient);