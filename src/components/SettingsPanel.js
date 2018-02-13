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

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleSpan = styled.span`
  font-size: large;
  margin-top: 1rem;
`;

const ValueSpan = styled.span`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
`;

const Button = styled.button`
    font-size: 1.5rem;
    margin: 0.2rem;
    padding: 0.5rem;
`;

class SettingsPanel extends React.Component {

    handleChangeTargetCalories(amount){ globalState.calorieTarget+=amount; }
    handleChangeCaloriesPerCan(amount){ globalState.caloriesPerHalfCan+=amount }
    handleChangeCaloriesPerPack(amount){ globalState.caloriesPerHalfPack+=amount }
    handleChangeCaloriesPerSpoon(amount){ globalState.caloriesPerSpoon+=amount }

    render() {
        return (
            <Container>
                <h2>{dictionary.getWord('changeSettings')}</h2>

                <ControlGroup>
                    <TitleSpan>{dictionary.getWord('caloriesPerDayTarget')}</TitleSpan>
                    <ValueSpan>{globalState.calorieTarget}</ValueSpan>
                    <ButtonContainer>
                        <Button onClick={() => this.handleChangeTargetCalories(25)}>+25</Button>
                        <Button onClick={() => this.handleChangeTargetCalories(50)}>+50</Button>
                        <Button onClick={() => this.handleChangeTargetCalories(-25)}>-25</Button>
                        <Button onClick={() => this.handleChangeTargetCalories(-50)}>-50</Button>
                    </ButtonContainer>
                </ControlGroup>

                <ControlGroup>
                    <TitleSpan>{dictionary.getWord('caloriesPerCan')}</TitleSpan>
                    <ValueSpan>{globalState.caloriesPerHalfCan}</ValueSpan>
                    <ButtonContainer>
                        <Button onClick={() => {this.handleChangeCaloriesPerCan(5)}}>+5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerCan(25)}}>+25</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerCan(-5)}}>-5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerCan(-25)}}>-25</Button>
                    </ButtonContainer>
                </ControlGroup>

                <ControlGroup>
                    <TitleSpan>{dictionary.getWord('caloriesPerPack')}</TitleSpan>
                    <ValueSpan>{globalState.caloriesPerHalfPack}</ValueSpan>
                    <ButtonContainer>
                        <Button onClick={() => {this.handleChangeCaloriesPerPack(5)}}>+5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerPack(25)}}>+25</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerPack(-5)}}>-5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerPack(-25)}}>-25</Button>
                    </ButtonContainer>
                </ControlGroup>

                <ControlGroup>
                    <TitleSpan>{dictionary.getWord('caloriesPerSpoon')}</TitleSpan>
                    <ValueSpan>{globalState.caloriesPerSpoon}</ValueSpan>
                    <ButtonContainer>
                        <Button onClick={() => {this.handleChangeCaloriesPerSpoon(5)}}>+5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerSpoon(25)}}>+25</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerSpoon(-5)}}>-5</Button>
                        <Button onClick={() => {this.handleChangeCaloriesPerSpoon(-25)}}>-25</Button>
                    </ButtonContainer>
                </ControlGroup>

            </Container>
        );
    }

}

export default view(SettingsPanel);