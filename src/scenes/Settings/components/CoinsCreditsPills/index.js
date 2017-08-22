import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Hammer from 'react-hammerjs';
import * as constants from '../../../../constants';
import { selectCoinsGame } from '../../../../actions/settingsActions' // relative path to image

const PillsContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center
`

const CoinsButton = styled.span`
  display: table-cell;
  font-family: ${constants.fonts.default};
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
  padding: 7px 30px;
  border: 1px solid ${constants.colors.lightBlue};
  border-right: 0px;
  border-radius: 5px 0px 0px 5px;
  box-sizing: border-box;
  color: ${(props) => {
    if (props.settings.coinsGame){
        return constants.colors.white
    } else {
        return constants.colors.lightBlue
    }
  }};
  background-color: ${(props) => {
    if (props.settings.coinsGame){
        return constants.colors.lightBlue
    } else {
        return constants.colors.black
    }
  }};

`

const CreditsButton = styled.span`
  display: table-cell;
  font-family: ${constants.fonts.default};
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
  padding: 7px 30px;
  border: 1px solid ${constants.colors.lightBlue};
  border-left: 0px;
  border-radius: 0px 5px 5px 0px;
  box-sizing: border-box;
  color: ${(props) => {
    if (props.settings.creditsGame){
        return constants.colors.white
    } else {
        return constants.colors.lightBlue
    }
  }};
  background-color: ${(props) => {
    if (props.settings.creditsGame){
        return constants.colors.lightBlue
    } else {
        return constants.colors.black
    }
  }};
`


@connect((store)=>{
    return {
        settings: store.settings
    };
})
export default class SettingsScene extends Component {

    selectCoinsGame(coinsGame) {
      this.props.dispatch(selectCoinsGame(coinsGame));
    }

    render() {

        return (

            <PillsContainer>
              <Hammer
                  onTap={() => {
                      this.selectCoinsGame(true);
                  }}>
                  <CoinsButton settings={ this.props.settings }>Coins</CoinsButton>
              </Hammer>
              <Hammer
                  onTap={() => {
                      this.selectCoinsGame(false);
                  }}>
                  <CreditsButton settings={ this.props.settings }>Credits</CreditsButton>
              </Hammer>
            </PillsContainer>

        )

    }
}
