import React from 'react';

import AppWrapper from './styled/AppWrapper';
import LeftPanel from "./components/LeftPanel";
import MainPanel from "./components/MainPanel";

export default class App extends React.Component {
    render(){
        return (
            <AppWrapper>
                <LeftPanel />
                <MainPanel />
            </AppWrapper>
        );
    }
}