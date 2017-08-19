import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import { setMenuDrawerState  } from '../../actions/uiStateActions';
import { setHomeButtonVisibility  } from '../../actions/uiStateActions';
import { toggleMenuAndHideButtons } from '../../actions/uiStateActions';


const StyledMenuButton = styled.div`
    position: absolute;
    cursor: pointer;
    font-size: 30px;
    background: #000;
    color: #eee;
    top: 0px;
    left: 0px;
    border-radius: 3px;
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin: 10px;
`

@connect((store)=>{
    return {
        menuState: store.uiState.menuState
    };
})
export default class MenuBurgerButton extends Component {


    toggleMenu() {
        this.setMenuState(!this.props.menuState.menuOpen)
    }

    setMenuState(open) {

        this.props.dispatch(toggleMenuAndHideButtons(open))

    }

    render() {
        if (this.props.menuState.showMenuButton) {
            return (
                <Hammer onTap={() =>{
                    this.toggleMenu()
                }}>
                    <StyledMenuButton>
                        <i class="fa fa-bars"></i>
                    </StyledMenuButton>
                </Hammer>

            )
        } else {
            return null;
        }


    }
}
