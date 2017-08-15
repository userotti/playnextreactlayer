import styled from 'styled-components';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import MenuItem from '../MenuItem';

const StyledMenuList = styled.ul`
    list-style:none;
`

const StyledMenuItem = styled.li`
    color: #1FA4E2;
    padding: 10px 10px;
    font-size: 20px;
`


@connect((store)=>{
    return {
        menuState: store.uiState.menuState
    };
})
export default class Menu extends Component {

    render(){

        const { menuItems } = this.props.menuState
        return (

            <StyledMenuList>
                {
                 menuItems.map((item, index) => {
                     return <StyledMenuItem key={index} onClick={(e) => this.onItemClick(e, item)}>
                         <img/> { item.label }
                     </StyledMenuItem>
                 })
                }
            </StyledMenuList>

        )

    }


}
