import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabsText } from './style';


export default function Tabs({ translateY }) {
    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp',
                })
            }],
            opacity: translateY.interpolate({
                inputRange:[0, 380],
                outputRange:[1, 0.3],
                extrapolate: 'clamp',
            }),
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={24} color="#fff" />
                    <TabsText>
                        Indicar amigos
                    </TabsText>
                </TabItem>

                <TabItem>
                    <Icon name="chat-doubble-outline" size={24} color="#fff" />
                    <TabsText>
                        Cobrar
                    </TabsText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-downward" size={24} color="#fff" />
                    <TabsText>
                        Depositar
                    </TabsText>
                </TabItem>

                <TabItem>
                    <Icon name="arrow-upward" size={24} color="#fff" />
                    <TabsText>
                        Transferir
                    </TabsText>
                </TabItem>

                <TabItem>
                    <Icon name="lock" size={24} color="#fff" />
                    <TabsText>
                        Bloquear cartão
                    </TabsText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}