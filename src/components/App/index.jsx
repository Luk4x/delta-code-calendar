import {} from './styled';

import { Header } from '../Header';
import { NavigationPanel } from '../NavigationPanel';
import { MainContent } from '../MainContent';

export function App() {
    return (
        <>
            <Header />
            <NavigationPanel />
            <MainContent />
        </>
    );
}
