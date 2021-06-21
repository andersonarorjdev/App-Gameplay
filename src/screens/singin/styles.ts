import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LogoApp:{
        width: '100%',
        height: 360,
    },
    Content:{
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
})