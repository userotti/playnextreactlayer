import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { gotoHome  } from '../../actions/uiStateActions'

const StyledHomeButton = styled.div`
    position: fixed;
    font-size: 30px;
    background: #000;
    color: #eee;
    border-radius: 3px;
    top: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin: 10px; 

`

@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class HomeButton extends Component {

    gotoHome() {
        // this.props.dispatch(setMenuDrawerState(!this.props.uiState.menuState.menuOpen))
    }

    render() {

        if (this.props.uiState.homeButtonState.show) {
            return (
                <StyledHomeButton
                    onClick={() =>
                        this.gotoHome()
                    }
                    >
                        <i class="fa fa-home"></i>

                </StyledHomeButton>
            )
        } else {
            return null;
        }

    }
}
