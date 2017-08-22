import styled from 'styled-components';
import { connect } from 'react-redux'
import React, { Component } from 'react'
import Hammer from 'react-hammerjs';
import * as constants from '../../../../constants';
import { selectCoinsGame } from '../../../../actions/settingsActions';
import { setSettingToggleValue } from '../../../../actions/settingsActions';

import MenuToggleButton from '../../../../components/MenuToggleButton';

const ToggleItemsContainer = styled.div`
    padding: 20px;
    padding-top: 40px;
`

const ToggleSettingsItem = styled.div`
    padding: 10px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ToggleSettingsItemLabel = styled.span`
    font-family: ${constants.fonts.default};
    font-size: 14px;
    color: #fff;
`

// const ToggleSettingsItemIcon = styled.div`
//   background:
// `

@connect((store)=>{
    return {
        toggleSettings: store.settings.toggleSettings
    };
})
export default class TickboxSettings extends Component {

    onItemClick(event, setting) {

    }

    toggleItem(setting, value) {
        this.props.dispatch(setSettingToggleValue({
            setting: setting,
            value: value 
        }))
    }

    render() {

        const toggleSettings = this.props.toggleSettings;

        return (

            <ToggleItemsContainer>
                {
                    toggleSettings.map((setting, index) => {
                        return <ToggleSettingsItem key={ index }>
                            <ToggleSettingsItemLabel> { setting.label } </ToggleSettingsItemLabel>
                            <MenuToggleButton value={ setting.value } disabled={ setting.disabled } onToggle={(activeValue)=>{
                                this.toggleItem(setting, activeValue);
                            }}>  </MenuToggleButton>
                        </ToggleSettingsItem>
                    })
                }
            </ToggleItemsContainer>

        )//render
    }


}
