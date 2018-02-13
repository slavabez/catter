import React from 'react';
import styled from 'styled-components';
import dictionary from '../dictionary';
import globalState from '../globalState';
import {store, view} from 'react-easy-state';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

class SettingsPanel extends React.Component {

    render(){
        return (
            <Container>
                <h2>{dictionary[globalState.currentLanguage].changeSettings}</h2>
            </Container>
        );
    }

}

export default view(SettingsPanel);