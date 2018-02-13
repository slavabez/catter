import React from 'react';
import {store, view} from 'react-easy-state';
import globalState from '../globalState';
import RightPanelDiv from "../styled/RightPanelDiv";

class MainPanel extends React.Component{
    render(){
        return <RightPanelDiv>
            Main panel
        </RightPanelDiv>
    }
}

export default view(MainPanel);