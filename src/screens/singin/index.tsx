import React from 'react';
import {
View,
Text,
Image,
StatusBar,
} from 'react-native';
import { styles } from './styles'

//Assets
import IllustrationIMG from '../../../assets/illustration.png';

//Components
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){
    return(
        <View style={styles.container}>
            <StatusBar
             barStyle="light-content"
             backgroundColor="transparent"
             translucent
            />
            <Image 
            source={IllustrationIMG}
            style={styles.LogoApp}
            resizeMode="stretch"
            />

            <View style={styles.Content}>
                <Text style={styles.title}>
                   Organize {`\n`}
                   suas jogatinas {`\n`}
                   facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon title="Entrar com o Discord" activeOpacity={0.7}/>
            </View>
        </View>
    )
}
