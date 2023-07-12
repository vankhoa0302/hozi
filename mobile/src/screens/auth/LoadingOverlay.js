// LoadingOverlay.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, ActivityIndicator, View } from 'react-native';

const LoadingOverlay = () => {
    const loading = useSelector((state) => state.home.loading);

    return (
        <Modal transparent visible={loading} >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)', }}>
                <ActivityIndicator size="large" />
            </View>
        </Modal>
    );
};

export default LoadingOverlay;