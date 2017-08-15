import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setMenuDrawerState  } from '../../actions/uiStateActions';
import { setHomeButtonVisibility  } from '../../actions/uiStateActions';


const StyledMenuButton = styled.div`
    position: fixed;
    cursor: pointer;
    font-size: 30px;
    background: #000;
    color: #eee;
    top: 0px;
    left: 0px;
    border-radius: 3px;
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
export default class MenuBurgerButton extends Component {


    toggleMenu() {
        this.setMenuState(!this.props.uiState.menuState.menuOpen)
    }

    setMenuState(open) {

        this.props.dispatch(setMenuDrawerState(open))
        this.props.dispatch(setHomeButtonVisibility(!open))

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
