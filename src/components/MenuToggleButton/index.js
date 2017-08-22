import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Hammer from 'react-hammerjs';
import * as constants from '../../constants';

import disabledBackgroundImg from '../../../assets/ui/menu-toggle-button/switchoff.png';
import enabledBackgroundImg from '../../../assets/ui/menu-toggle-button/switchon.png';
import whiteButtonImg from '../../../assets/ui/menu-toggle-button/settingshandle.png';

const BackgroundPill = styled.div`
    width: 52px;
    height: 30px;
    background: url(${(props)=>props.backgroundImage}) no-repeat;
    background-size: contain;
`

const ButtonCircle = styled.div`
    width: 30px;
    height: 30px;
    background: url(${(props)=> {return !props.disabled ? whiteButtonImg : whiteButtonImg}}) no-repeat;
    opacity: ${(props)=> {return !props.disabled ? 1 : 0.5}};

    background-size: contain;

    ${(props)=>{
        console.log("props.value:", props.value);
        return props.value ? 'float: left' : 'float: right'
    }};
`

export default class MenuToggleButton extends Component {

    onItemClick(event, setting) {

    }

    getBackground(value) {

        if (value) {
            return enabledBackgroundImg;
        } else {
            return disabledBackgroundImg;
        }

    }

    render() {

        const toggleSettings = this.props.toggleSettings;

        return (
            <BackgroundPill
                backgroundImage={ this.getBackground(this.props.value) }
                onClick={(e) => {
                        if (!this.props.disabled) {
                            this.props.onToggle(!this.props.value)
                        }
                    }}>
                <ButtonCircle value={ this.props.value } disabled={ this.props.disabled }></ButtonCircle>
            </BackgroundPill>

        )//render
    }

}
