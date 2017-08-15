import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { setMenuDrawerState } from '../../actions/uiStateActions'
import { setHomeButtonVisibility } from '../../actions/uiStateActions'
import Drawer from 'react-motion-drawer'

import Menu from './Menu';


const MenuHeading = styled.h2`
    color: white;
    padding-left: 20px;
`

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

        const { menuState } = this.props;
        const drawerProps = {
            overlayColor: "rgba(123,123,123,0.3)",
            handleWidth: 0,
            drawerStyle: {
                background: "rgba(0,0,0,0.7)",
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
                    <MenuHeading>
                        Welcome
                    </MenuHeading>
                    <Menu>
                    </Menu>
            </CustomMenuDrawer>

        )
    }
}

export default MenuDrawer;
