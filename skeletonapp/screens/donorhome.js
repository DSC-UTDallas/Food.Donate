import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>You have come to the home screen for Donors.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})