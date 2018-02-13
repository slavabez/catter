import React from 'react';
import styled from 'styled-components';
import dictionary from '../dictionary';
import globalState from '../globalState';
import {store, view} from 'react-easy-state';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

class SettingsPanel extends React.Component {

    handleChangeTargetCalories(amount){
        globalState.calorieTarget+=amount;
    }

    render() {
        return (
            <Container>
                <h2>{dictionary.getWord('changeSettings')}</h2>

                <div>
                    <span>{dictionary.getWord('caloriesPerDayTarget')}</span>
                    <span>{globalState.calorieTarget}</span>
                    <div>
                        <button onClick={() => this.handleChangeTargetCalories(25)}>+25</button>
                        <button onClick={() => this.handleChangeTargetCalories(50)}>+50</button>
                        <button onClick={() => this.handleChangeTargetCalories(-25)}>-25</button>
                        <button onClick={() => this.handleChangeTargetCalories(-50)}>-50</button>
                    </div>
                </div>

                <div>
                    <span>{dictionary}</span>
                </div>

            </Container>
        );
    }

}

export default view(SettingsPanel);