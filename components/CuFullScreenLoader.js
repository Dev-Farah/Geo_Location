import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles/global';

function FullScreenLoader() {


    return (
        <View style={[styles.h100, styles.flexCenter]}>
            <Image source={require('../assets/loader.gif')} style={{ width: 45, height: 45, resizeMode: 'contain' }} />
        </View>
    )
}

export default FullScreenLoader;