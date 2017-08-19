import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onResize } from './actions/resizeActions'
import { setMenuDrawerState  } from './actions/uiStateActions'

import MenuBurgerButton from './components/MenuBurgerButton';
import MenuDrawer from './components/MenuDrawer';
import InfoBar from './components/InfoBar';
import HomeButton from './components/HomeButton';
import styled from 'styled-components';

import SettingsScene from './scenes/Settings';
import PaytableScene from './scenes/Paytable';

// import BetConsoleScene from './scenes/BetConsole';
// import AutoPlayConsoleScene from './scenes/AutoPlayConsole';

import bgImg from '../assets/scene-backgrounds/bgfruittile224x222.png' // relative path to image


const ContainerDiv = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${ bgImg })

`


@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
class App extends Component {

    handleResize(event) {
        this.props.dispatch(onResize(event))
    }

    componentDidMount() {
        window.addEventListener('resize', ::this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ::this.handleResize)
    }

    render() {
        return (
            <ContainerDiv>

                <SettingsScene></SettingsScene>
                <PaytableScene></PaytableScene>
                {/* <PaytableScene></PaytableScene>
                <BetConsoleScene></BetConsoleScene>
                <AutoPlayConsoleScene></AutoPlayConsoleScene> */}

                <MenuDrawer>
                </MenuDrawer>

                <MenuBurgerButton>
                </MenuBurgerButton>

                <HomeButton>
                </HomeButton>

                <InfoBar>
                </InfoBar>

            </ContainerDiv>
        );
    }
}

export default App;
