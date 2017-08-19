import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion';
import Hammer from 'react-hammerjs';

const SceneBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    background: #000;
`

@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class PaytablesCarousel extends Component {

    swipeLeft() {

    }

    swipeRight() {

    }

    getTransitionPos(index, screenWidth) {
        return {
            x: spring(index*screenWidth),
        }
    }

    render() {

        return (

            <Motion style={this.getTransitionPos(this.props.uiState.paytableState.show,this.props.uiState.dimensions.width)}>
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

                        <Paytables></Paytables>

                    </SceneBackground>


                )
            }}
        </Motion>

    )

}
}
