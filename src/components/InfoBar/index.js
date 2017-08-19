import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const StyledInfoBar = styled.div`
    box-sizing: border-box;
    position: fixed;
    background: rgba(0,0,0,0.7);
    color: #eee;
    z-index: 3;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px 10px;
    text-align: right;
    display: flex;
    justify-content: space-between;
`
@connect((store)=>{
    return {
        uiState: store.uiState,
        betModel: store.betModel
    };
})
export default class InfoBar extends Component {

    render() {



        if (this.props.uiState.infoBarState.show) {
            return (


                <StyledInfoBar>
                    <span> Credits: { this.props.betModel.betAmount }</span>
                    <span> Bet: { this.props.betModel.betAmount }</span>
                </StyledInfoBar>

            )
        } else {
            return null;
        }

    }

}
