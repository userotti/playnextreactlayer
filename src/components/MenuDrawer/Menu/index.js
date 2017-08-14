import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'

const StyledMenuList = styled.ul`
    list-style:none;
    position:relative;
    float:left;
    margin:0;
    padding:0;
`

@connect((store)=>{
    return {
        uiState: store.uiState
    };
})
export default class Menu extends Component {

    render(){

        const { menuItems }

        <StyledMenuList>
            {
             this.props.menuItems.map((item, index) => (
                 <MenuItem item={item} onClick={(e) => this.onItemClick(e, item)} }/>
             ))
            }
        </StyledMenuList>

    }


}
