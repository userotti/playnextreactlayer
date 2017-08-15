import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { toggleMenuAndHideButtons } from '../../actions/uiStateActions'

import Menu from './Menu';
import Drawer from 'react-motion-drawer'


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

        this.props.dispatch(toggleMenuAndHideButtons(!this.props.menuState.menuOpen))

    }

    setMenuState(open) {

        this.props.dispatch(toggleMenuAndHideButtons(open))

    }

    render() {

        const { menuState } = this.props;
        const drawerProps = {
            overlayColor: "rgba(0,0,0,0.3)",
            handleWidth: 0,
            drawerStyle: {
                background: "rgba(0,0,0,0.8)",
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
