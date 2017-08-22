import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { menuItemTapped } from '../../../actions/uiStateActions';
import * as constants from '../../../constants';

const StyledMenuList = styled.ul`
    list-style:none;
    margin-top: 20px;
    padding-left: 30px;
`

const StyledMenuItem = styled.li`
    cursor: pointer;
    padding: 5px 0px;
    margin-bottom: 0px;
    font-size: 20px;
`

const StyledMenuIcon = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    margin-right: 20px;
    background: url(${(props)=>props.iconPath}) no-repeat;
    background-size: contain;
`
const StyledLabel = styled.span`
    color: ${constants.colors.lightBlue};
    font-family: ${constants.fonts.default};
    font-weight: ligher;

    font-size: 16px;
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
                         <StyledMenuIcon iconPath={ menuItem.activeIconURL }/> <StyledLabel>{ menuItem.label }</StyledLabel>
                     </StyledMenuItem>
                 })
                }
            </StyledMenuList>

        )

    }


}
