import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const StyledInfoBar = styled.div`
    box-sizing: border-box;
    position: fixed;
    background: rgba(0,0,0,0.7);
    color: #eee;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    text-align: right;
`
@connect((store)=>{
    return {
        uiState: store.uiState,
        betModel: store.betModel
    };
})
export default class InfoBar extends Component {

    render() {

        console.log("this.props", this.props);
        var divStyle = {
          height: this.props.uiState.infoBarState.height + 'px' // 'ms' is the only lowercase vendor prefix
        };

        if (this.props.uiState.infoBarState.show) {
            return (


                <StyledInfoBar style={divStyle}>
                    <span> bet amount: { this.props.betModel.betAmount }</span>
                </StyledInfoBar>

            )
        } else {
            return null;
        }

    }

}
