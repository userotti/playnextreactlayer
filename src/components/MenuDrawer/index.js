import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { setMenuDrawerState } from '../../actions/uiStateActions'
import { setHomeButtonVisibility } from '../../actions/uiStateActions'


import Drawer from 'react-motion-drawer';


class CustomMenuDrawer extends Drawer {

    onOverlayTap = e => {
      e.preventDefault();
      this.props.onOverlayTap();
    };

}

@connect((store)=>{
    return {
        menuState: store.uiState.menuState
    };
})
class MenuDrawer extends Component {

    onOverlayTap = e => {
      e.preventDefault();
      this.props.onOverlayTap();
    };


    toggleMenu() {
        this.props.dispatch(setMenuDrawerState(!this.props.menuState.menuOpen))
    }

    setMenuState(open) {

        this.props.dispatch(setMenuDrawerState(open))
        this.props.dispatch(setHomeButtonVisibility(!open))

    }

    render() {

        console.log("this.props: ", this.props);
        const { menuState } = this.props;
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

            <CustomMenuDrawer
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
            </CustomMenuDrawer>

        )
    }
}

export default MenuDrawer;
