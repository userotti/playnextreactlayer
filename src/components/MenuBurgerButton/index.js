import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setMenuDrawerState  } from '../../actions/uiStateActions'

const StyledMenuButton = styled.div`
    font-size: 30px;
    background: #000;
    color: #eee;
    padding: 3px 5px;
    border-radius: 3px;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 45px;
    margin: 5px;
`

@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class MenuBurgerButton extends Component {


    toggleMenu() {
        this.props.dispatch(setMenuDrawerState(!this.props.uiState.menuState.menuOpen))
    }

    setMenuState(open) {
        this.props.dispatch(setMenuDrawerState(open))
    }

    render() {
        return (

            <StyledMenuButton
                onClick={() =>
                    this.toggleMenu()
                }
                >
                    <i class="fa fa-bars"></i>

            </StyledMenuButton>

        )
    }
}
