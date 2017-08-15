import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'

const StyledMenuItem = styled.li`
    color: white;
    position:relative;
    float:left;
    margin:0;
    padding:0;
`


export default class MenuItem extends Component {

    render(){
        console.log("this.props: ", this.props);
        <StyledMenuItem>
             <span>{ this.props.item.label } </span>
        </StyledMenuItem>

    }


}
