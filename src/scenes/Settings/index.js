import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';
import { toggleSettingsSceneVisibility } from '../../actions/uiStateActions';
import backButtonImg from '../../../assets/menu-icons/settingsBack.png' // relative path to image
import * as constants from '../../constants' // relative path to image
import CoinsCreditsPills from './components/CoinsCreditsPills' // relative path to image


const SceneBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    background: #000000;
`
const StyledHeading = styled.span`

    display:table;
    margin:0 auto;
    font-family: ${constants.fonts.default};
    padding: 20px;
    color: #ffffff;
`
const SettingsContainer = styled.div`
    padding: 40px 20px;
`
const BackButton = styled.div`
    z-index: 5;
    position: absolute;
    left: 0px;
    top: 50px;
    width: 50px;
    height: 50px;
    background: url(${ backButtonImg }) no-repeat;
    background-size: contain;
`

@connect((store)=>{
    return {
        settingsSceneState: store.uiState.settingsSceneState,
        dimensions: store.uiState.dimensions,
        settings: store.settings
    };
})
export default class SettingsScene extends Component {

    closeSettingsScene() {
        this.props.dispatch(toggleSettingsSceneVisibility(!this.props.settingsSceneState.show));
    }

    getTransitionPos(show) {

        if (show){
            return {
                x: spring(0),
                alpha: spring(1)
            }
        } else {
            return {
                x: spring(this.props.dimensions.width),
                alpha: spring(0)
            }
        }
    }

    render() {

        return (

            <Motion style={this.getTransitionPos(this.props.settingsSceneState.show)}>
                {interpolatingStyle => {
                    return (

                        <SceneBackground style={{
                            width: `${this.props.dimensions.width}px`,
                            height: `${this.props.dimensions.height}px`,

                            transform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                            WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                            opacity: `${interpolatingStyle.alpha}`
                        }}>
                            <SettingsContainer>
                                <Hammer
                                    onTap={() => {
                                        this.closeSettingsScene();
                                    }}>
                                    <BackButton>
                                    </BackButton>
                                </Hammer>

                                <StyledHeading> SETTINGS </StyledHeading>

                                <CoinsCreditsPills>
                                </CoinsCreditsPills>


                            </SettingsContainer>

                        </SceneBackground>
                    )
                }}
            </Motion>

        )

    }
}
