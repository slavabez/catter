import React from 'react';
import styled from 'styled-components';
import {store, view} from 'react-easy-state';
import globalState from '../globalState';
import LeftPanelDiv from "../styled/LeftPanelDiv";

import dictionary from '../dictionary';

import cat from '../cat.png';
import SettingsPanel from "./SettingsPanel";

const Button = styled.button`
    
`;

const Avatar = styled.img`
  width: 100%;
  cursor: pointer
`;

class LeftPanel extends React.Component{

    handleMenuButtonClick = () => {
        globalState.isMenuOpen = !globalState.isMenuOpen;
    };

    render(){
        if (globalState.isMenuOpen) {
            return <LeftPanelDiv isOpen={globalState.isMenuOpen}>

                {(globalState.isMenuOpen) ? <SettingsPanel/> : <span onClick={this.handleMenuButtonClick}>
                {dictionary[globalState.currentLanguage].clickToExpand}
            </span>}



            </LeftPanelDiv>
        } else {
            return <LeftPanelDiv isOpen={false} onClick={this.handleMenuButtonClick} />
        }

    }
}

export default view(LeftPanel);