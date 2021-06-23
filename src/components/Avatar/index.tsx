import React from 'react';
import { View, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import { styles } from './style';

type Props = {
    UrlImage : string;
}

export function Avatar({UrlImage} : Props){
    const { secondary50, secondary70} = theme.colors;
    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
       >
           <Image 
                source={{uri: UrlImage}}
                style={styles.avatar}
           />
       </LinearGradient>
    );
}