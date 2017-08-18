import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const StyledInfoBar = styled.div`
    box-sizing: border-box;
    position: fixed;
    background: rgba(255,0,0,0.7);
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
        betModel: store.betModel
    };
})
export default class InfoBar extends Component {

    render() {
        return (

            <StyledInfoBar>
                <span> bet amount: { this.props.betModel.betAmount }</span>
            </StyledInfoBar>

        )
    }

}
