import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Hammer from 'react-hammerjs';
import * as constants from '../../../../constants';
import { selectCoinsGame } from '../../../../actions/settingsActions' // relative path to image


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
