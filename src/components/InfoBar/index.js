import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';

const StyledInfoBar = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.5);
    color: #eee;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 20px;
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
