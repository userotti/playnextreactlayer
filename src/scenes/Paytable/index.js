import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';
import { togglePaytableSceneVisibility } from '../../actions/uiStateActions';
import backButtonImg from '../../../assets/menu-icons/settingsBack.png' // relative path to image


const SceneBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background: #000;
`
const StyledHeading = styled.h3`
    padding: 20px;
    color: #ffffff;
`

const BackButton = styled.div`
    position: fixed;
    left: 0px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    background: url(${ backButtonImg }) no-repeat;
    background-size: contain;
`


@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class SettingsScene extends Component {

    closeScene() {
        this.props.dispatch(togglePaytableSceneVisibility(!this.props.uiState.paytableState.show));
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

            <Motion style={this.getTransitionPos(this.props.uiState.paytableState.show)}>
                {interpolatingStyle => {
                    return (


                                <SceneBackground style={{
                                    width: `${this.props.uiState.dimensions.width}px`,
                                    height: `${this.props.uiState.dimensions.height}px`,

                                    transform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                                    WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
                                    opacity: `${interpolatingStyle.alpha}`
                                }}>

                                    <Hammer
                                        onTap={() => {
                                            this.closeScene();
                                        }}>
                                        <BackButton>
                                        </BackButton>

                                    </Hammer>

                                    {/* <Paytables></Paytables> */}

                                </SceneBackground>


                        )
                }}
            </Motion>

        )

    }
}
