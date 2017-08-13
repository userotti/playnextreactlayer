import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainMenu from './components/MainMenu'
import { onResize } from './actions/resizeActions'
import { setMenuState  } from './actions/uiStateActions'

import Drawer from 'react-motion-drawer';


class MyDrawer extends Drawer {

    onOverlayTap = e => {
      e.preventDefault();
      this.props.onOverlayTap();
    };

}

var menuButtonStyle = {
    'fontSize': '30px',
    'background': '#000',
    'color': '#eee',
    'padding': '3px 5px',
    'borderRadius': '3px',
    'width': '50px',
    'height': '50px',
    'textAlign': 'center',
    'lineHeight': '40px',
    'margin': '5px',
};

var infoBarStyle ={
    'position': 'fixed',
    'background': 'rgba(0,0,0,0.5)',
    'color': '#eee',
    'zIndex': '100',
    'bottom': 0,
    'left': 0,
    'width': '100%',
    'padding': '20px 20px',
    'textAlign': 'right',


}


@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
class App extends Component {

    handleResize(event) {
        this.props.dispatch(onResize(event))
    }

    toggleMenu() {
        this.props.dispatch(setMenuState(!this.props.uiState.menuState.menuOpen))
    }

    setMenuState(open) {
        this.props.dispatch(setMenuState(open))
    }

    componentDidMount() {
        window.addEventListener('resize', ::this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ::this.handleResize)
    }

    render() {

        const { menuState } = this.props.uiState;
        const drawerProps = {
            overlayColor: "rgba(123,123,123,0.6)",
            handleWidth: 0,
            drawerStyle: {
                background: "#000000",
                boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px",
                'paddingRight': '0px'
            }
        };

        return (
            <div>
                <MyDrawer
                    {...drawerProps}
                    width={menuState.openWidth}
                    fadeOut={false}
                    open={menuState.menuOpen}
                    noTouchOpen={true}
                    noTouchClose={true}
                    onOverlayTap={() => {
                        this.setMenuState(false)
                    }}
                    >

                        <div style={{ padding: "2em" }}>
                            <h3>Navigation</h3>
                        </div>
                </MyDrawer>

                <div
                    style={menuButtonStyle}
                    className="btn"
                    onClick={() =>
                        this.toggleMenu()
                    }
                    >
                        <i class="fa fa-bars"></i>
                </div>

                <div
                    style={infoBarStyle}
                    >

                    <span> bet amount: 300 </span>
                </div>

            </div>
        );
    }
}

export default App;
