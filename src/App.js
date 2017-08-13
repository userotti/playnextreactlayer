import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onResize } from './actions/resizeActions'
import { setMenuDrawerState  } from './actions/uiStateActions'

import MenuBurgerButton from './components/MenuBurgerButton';
import MenuDrawer from './components/MenuDrawer';
import InfoBar from './components/InfoBar';


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
            <div>
                <MenuDrawer>
                </MenuDrawer>

                <MenuBurgerButton>
                </MenuBurgerButton>

                <InfoBar>
                </InfoBar>
            </div>
        );
    }
}

export default App;
