import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { Avatar } from '../Avatar';

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar UrlImage="https://github.com/andersonarorjdev.png" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>  
                        Olá, 
                    </Text>

                    <Text style={styles.username}>
                        Anderson
                    </Text>
                </View>

                <Text style={styles.message}>
                    hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}