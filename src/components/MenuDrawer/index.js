import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { toggleMenuAndHideButtons } from '../../actions/uiStateActions'

import Menu from './Menu';
import Drawer from 'react-motion-drawer'

const MenuHeading = styled.h3`
    color: white;
    padding-left: 10px;
    margin: 5px;
`

class CustomMenuDrawer extends Drawer {

    onOverlayTap = e => {
      e.preventDefault();
      this.props.onOverlayTap();
    };

}

@connect((store)=>{
    return {

        uiState: store.uiState
    };
})
class MenuDrawer extends Component {

    onOverlayTap = e => {
      e.preventDefault();
      this.props.onOverlayTap();
    };


    toggleMenu() {

        this.props.dispatch(toggleMenuAndHideButtons(!this.props.uiState.menuState.menuOpen))

    }

    setMenuState(open) {

        this.props.dispatch(toggleMenuAndHideButtons(open))

    }

    render() {

        const { menuState } = this.props.uiState;
        const drawerProps = {
            overlayColor: "rgba(0,0,0,0.2)",
            handleWidth: 0,
            drawerStyle: {
                background: "rgba(0,0,0,0.85)",
                boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.188235)",
                'paddingRight': '0px',

            }
        };

        return (

            <CustomMenuDrawer
                {...drawerProps}
                height={this.props.uiState.dimensions.height + 'px'}
                zIndex={1}
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
