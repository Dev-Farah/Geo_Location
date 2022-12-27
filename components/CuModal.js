import React from 'react';
import { Modal, Text, View } from 'react-native';
import styles from '../styles/global';


function CuModal(props) {

    const { open, close, heading, message, openModal } = props;

    const closeModal = () => {
        close(false);
    }

    return(
        <Modal onRequestClose={closeModal} transparent={true} visible={open}>
            <View style={[styles.h100, styles.flexCenter, styles.bgTransparent]}>
        <View style={[styles.w75, styles.bgWhite, styles.p2, styles.rounded, styles.shadow1]}>
        <Text style={[styles.fs2, ]}>Abc</Text>
        <Text style={[styles.fs, ]}>sdkjf sd; fjk;</Text>
        <Text style={[styles.fs, ]}>sdkjf sd; fjk;</Text>
        <Text style={[styles.fs, ]}>sdkjf sd; fjk;</Text>
        <Text style={[styles.fs, ]}>sdkjf sd; fjk;</Text>
        </View>
            </View>
        </Modal>
    )
}

export default CuModal;