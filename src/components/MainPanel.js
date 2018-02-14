import React from 'react';
import styled from 'styled-components';
import {store, view} from 'react-easy-state';
import dictionary from '../dictionary';
import globalState from '../globalState';
import RightPanelDiv from "../styled/RightPanelDiv";


const DateDiv = styled.div``;
const TitleSpan = styled.h1``;
const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;
const MealItem = styled.div``;
const ItemCount = styled.div``;
const Totals = styled.div``;
const AddButton = styled.button`
    width: 90%;
    margin: 5px;
    padding: 5px;
    border: 1px solid lightblue;
    background-color: lightcoral;
    color: white;
    border-radius: 0.75rem;
    font-size: 1.2rem;
`;

const ClearButton = styled.button`
    margin: 5px;
    padding: 5px;
    border: 1px solid lightblue;
    background-color: lightred;
    color: white;
    border-radius: 0.75rem;
    font-size: 1.2rem;
`;

class MainPanel extends React.Component {

    constructor(props) {
        super(props);

        this.localState = store({
            dayNow: this.getDayFromTime(new Date()),
            counts: {
                breakfast: {
                    can: 0,
                    pack: 0,
                    dry: 0
                },
                lunch: {
                    can: 0,
                    pack: 0,
                    dry: 0
                },
                dinner: {
                    can: 0,
                    pack: 0,
                    dry: 0
                }
            },
            totalCalories() {
                const cans = this.counts.breakfast.can
                    + this.counts.lunch.can
                    + this.counts.dinner.can;
                const packs = this.counts.breakfast.pack
                    + this.counts.lunch.pack
                    + this.counts.dinner.pack;
                const dry = this.counts.breakfast.dry
                    + this.counts.lunch.dry
                    + this.counts.dinner.dry;

                return cans * globalState.caloriesPerHalfCan
                    + packs * globalState.caloriesPerHalfPack
                    + dry * globalState.caloriesPerSpoon

            },
            clearCounts(){
                this.counts = {
                    breakfast: {
                        can: 0,
                        pack: 0,
                        dry: 0
                    },
                    lunch: {
                        can: 0,
                        pack: 0,
                        dry: 0
                    },
                    dinner: {
                        can: 0,
                        pack: 0,
                        dry: 0
                    }
                }
            }
        });

    }

    getDayFromTime(date) {
        return date.toDateString();
    }

    addFood(type, meal) {
        let calories;
        this.localState.counts[meal][type]++;
    }

    render() {

        return <RightPanelDiv>
            <DateDiv>
                {this.localState.dayNow}
            </DateDiv>

            <TitleSpan>{dictionary.getWord('appName')}</TitleSpan>

            <Container>
                <MealItem>
                    <h2>{dictionary.getWord('breakfast')}</h2>
                    <AddButton onClick={() => {
                        this.addFood('dry', 'breakfast')
                    }}>
                        {dictionary.getWord('addDryFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('can', 'breakfast')
                    }}>
                        {dictionary.getWord('addCanFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('pack', 'breakfast')
                    }}>
                        {dictionary.getWord('addPackedFood')}
                    </AddButton>
                    <ItemCount>
                        {this.localState.counts.breakfast.can},
                        {this.localState.counts.breakfast.pack},
                        {this.localState.counts.breakfast.dry}
                    </ItemCount>
                </MealItem>

                <MealItem>
                    <h2>{dictionary.getWord('lunch')}</h2>
                    <AddButton onClick={() => {
                        this.addFood('dry', 'lunch')
                    }}>
                        {dictionary.getWord('addDryFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('can', 'lunch')
                    }}>
                        {dictionary.getWord('addCanFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('pack', 'lunch')
                    }}>
                        {dictionary.getWord('addPackedFood')}
                    </AddButton>
                    <ItemCount>
                        {this.localState.counts.lunch.can},
                        {this.localState.counts.lunch.pack},
                        {this.localState.counts.lunch.dry}
                    </ItemCount>
                </MealItem>

                <MealItem>
                    <h2>{dictionary.getWord('dinner')}</h2>
                    <AddButton onClick={() => {
                        this.addFood('dry', 'dinner')
                    }}>
                        {dictionary.getWord('addDryFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('can', 'dinner')
                    }}>
                        {dictionary.getWord('addCanFood')}
                    </AddButton>
                    <AddButton onClick={() => {
                        this.addFood('pack', 'dinner')
                    }}>
                        {dictionary.getWord('addPackedFood')}
                    </AddButton>
                    <ItemCount>
                        {this.localState.counts.dinner.can},
                        {this.localState.counts.dinner.pack},
                        {this.localState.counts.dinner.dry}
                    </ItemCount>
                </MealItem>
            </Container>
            <Totals>
                Totals: {this.localState.totalCalories()}
                <ClearButton onClick={this.localState.clearCounts}>
                    Clear all
                </ClearButton>
            </Totals>


        </RightPanelDiv>
    }
}

export default view(MainPanel);