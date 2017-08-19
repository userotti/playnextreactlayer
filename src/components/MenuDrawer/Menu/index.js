import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import MenuItem from '../MenuItem';
import { menuItemTapped } from '../../../actions/uiStateActions'

const StyledMenuList = styled.ul`
    list-style:none;
    margin-top: 10px;
    padding-left: 20px;
`

const StyledMenuItem = styled.li`
    cursor: pointer;
    padding: 5px 5px;
    margin-bottom: 5px;
    font-size: 20px;
`

const StyledMenuIcon = styled.div`
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    background: url(${(props)=>props.iconPath}) no-repeat;
    background-size: contain;
`

// const BackButton = styled.div`
//     position: fixed;
//     left: 0px;
//     bottom: 100px;
//     width: 50px;
//     height: 50px;
//     background: url(${ backButtonImg }) no-repeat;
//     background-size: contain;
// `

const StyledLabel = styled.span`
    color: #1FA4E2;
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
