import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';
import { movePaytableIndex } from '../../../../actions/uiStateActions';

//Basic styled components on this scene

const PaytableMotionContainer = styled.div`
    width: 100%;
    background-color: #000;
    display: flex;
    align-items: center;
`

const PaytableSlide = styled.img`
    position: absolute;
    width: 100%;
    object-fit: contain;
`
//Connect to the redux store,
@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class PaytablesCarousel extends Component {


    //When swiping on the Hammer element
    handleSwipe(event, paytableState){

        let direction = 0;
        if (this.props.uiState.paytableState.interactable){
            if (event.deltaX > 0){
                if (this.props.uiState.paytableState.paytablePositonIndex > 0){
                    direction = -1;
                }
            } else {
                if (this.props.uiState.paytableState.paytablePositonIndex < this.props.uiState.paytableState.paytables.length-1){
                    direction = 1;
                }
            }
            this.props.dispatch(movePaytableIndex(this.props.uiState.paytableState.paytablePositonIndex+direction))
        }

    }

    //React Motion destination
    getTransitionPos(currentIndex) {

        if (this.props.uiState.paytableState.immediateTransition){
            return {
                x: currentIndex,
            }
        } else {
            return {
                x: spring(currentIndex),
            }
        }


    }

    //Placing slide at appropriate X position
    placeSlide(interpolatingStyle, paytableItem, index, screenWidth){
        let myXPos = screenWidth*(index - interpolatingStyle.x);
        return {
            transform: `translate3d(${myXPos}px, 0, 0)`,
            WebkitTransform: `translate3d(${myXPos}px, 0, 0)`,
        }

    }

    //Rerender this section of the dom when uiState section of the redux store change.
    render() {

        const { paytablePositonIndex, paytables } = this.props.uiState.paytableState;
        const { width } = this.props.uiState.dimensions;

        return (
            <Motion style={this.getTransitionPos(paytablePositonIndex)}>
                {interpolatingStyle => {
                    return (
                        <Hammer
                            onSwipe={(e) => {
                                this.handleSwipe(e);
                            }}>

                            <PaytableMotionContainer>
                                {
                                 paytables.map((paytableItem, index) => {
                                     if (paytableItem.renderSlide){
                                         return  <PaytableSlide src={ paytableItem.backgroundPath } key={index} style={this.placeSlide(interpolatingStyle, paytableItem, index, width)} />

                                     } else {
                                         return null;
                                     }

                                 })
                                }
                            </PaytableMotionContainer>

                        </Hammer>

                    )
                }}
            </Motion>
        )

    }
}
