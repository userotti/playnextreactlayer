import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import { menuItemTapped } from '../../../actions/uiStateActions'

const StyledMenuList = styled.ul`
    list-style:none;
    padding-left: 20px;
`

const StyledMenuItem = styled.li`
    cursor: pointer;
    padding: 5px 5px;
    margin-bottom: 5px;

    font-size: 20px;
`

const StyledLogoImage = styled.img`
    vertical-align: middle;
`

const StyledLabel = styled.span`
    color: #1FA4E2;
`


@connect((store)=>{
    return {
        menuState: store.uiState.menuState
    };
})
export default class Menu extends Component {

    onItemClick(event, menuItem) {
        this.props.dispatch(menuItemTapped(menuItem.onTapActionType, menuItem.onTapActionPayload));
    }

    render(){

        const { menuItems } = this.props.menuState
        console.log("menuItem.gamesactive", menuItems)
        return (

            <StyledMenuList>
                {
                 menuItems.map((menuItem, index) => {
                     return <StyledMenuItem key={index} onClick={(e) => this.onItemClick(e, menuItem)}>
                         <StyledLogoImage src={ menuItem.activeIconURL }/> <StyledLabel>{ menuItem.label }</StyledLabel>
                     </StyledMenuItem>
                 })
                }
            </StyledMenuList>

        )

    }


}
