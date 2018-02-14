import React from 'react';
import styled from 'styled-components';
import {store, view} from 'react-easy-state';
import globalState from '../globalState';
import RightPanelDiv from "../styled/RightPanelDiv";


const DateDiv = styled.div`
`;

class MainPanel extends React.Component{

    constructor(props) {
        super(props);

        this.localState = store({
            dayNow: this.getDayFromTime(Date.now())
        });

    }

    getDayFromTime(timestamp){
        const date = new Date(timestamp);
        console.log('Converting date', timestamp);
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    handleFullscreen = () => {
        document.requestFullscreen();
    };

    render(){

        return <RightPanelDiv>
            <DateDiv>
                {this.localState.dayNow}
            </DateDiv>


        </RightPanelDiv>
    }
}

export default view(MainPanel);