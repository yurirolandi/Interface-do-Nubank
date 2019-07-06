import React from 'react';

import { Conteiner, Top, Logo, Title } from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
    return(
        <Conteiner>
            <top>
                <Logo source={} />
                <title>Yuri</title>
            </top>
            <Icon name="keyboard-arrow-down" size={20} color="#fff" />
        </Conteiner>
    )
}