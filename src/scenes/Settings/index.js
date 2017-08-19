import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';
import { toggleSettingsSceneVisibility } from '../../actions/uiStateActions';

const SceneBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background: #0000FF;
`
const StyledHeading = styled.h3`
    padding: 20px;
    color: #ffffff;

`


@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class SettingsScene extends Component {

    closeSettingsScene() {
        this.props.dispatch(toggleSettingsSceneVisibility(!this.props.uiState.settingsSceneState.show));
    }

    getTransitionPos(show) {

        if (show){
            return {
                x: spring(0),
                alpha: spring(1)
            }
        } else {
            return {
                x: spring(this.props.uiState.dimensions.width),
                alpha: spring(0)
            }
        }
    }

    render() {

        return (

            <Motion style={this.getTransitionPos(this.props.uiState.settingsSceneState.show)}>
                {interpolatingStyle => {
                    return (
                        <Hammer
                            onClick={() => {
                                this.closeSettingsScene();
                            }}>
                                <SceneBackground style={{
                                    width: `${this.props.uiState.dimensions.width}px`,
                                    height: `${this.props.uiState.dimensions.height}px`,

                                    transform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                                    WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                                    opacity: `${interpolatingStyle.alpha}`
                                }}>

                                    <StyledHeading> Settings Scene </StyledHeading>

                                </SceneBackground>
                        </Hammer>
                        )
                }}
            </Motion>

        )

    }
}
