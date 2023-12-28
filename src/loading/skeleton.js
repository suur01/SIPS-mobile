// SkeletonLoading.js

import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SkeletonLoading = ({ shape, width, height }) => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        const pulseAnimation = Animated.loop(
        Animated.sequence([
            Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            }),
            Animated.timing(animation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            }),
        ])
        );

        pulseAnimation.start();

        return () => pulseAnimation.stop();
    }, [animation]);

    const interpolateColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#f0f0f0', '#e0e0e0'],
    });

    const animatedStyle = {
        backgroundColor: interpolateColor,
        width: width,
        height: height,
    };

    const containerStyle =
        shape === 'circle' ? styles.circleContainer : styles.rectangleContainer;

    const shapeStyle =
        shape === 'circle' ? styles.circle : styles.rectangle;

    return (
        <View style={containerStyle}>
        <Animated.View style={[shapeStyle, animatedStyle]}>
            <Text style={styles.skeletonText}>...</Text>
        </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    rectangleContainer: {
        marginBottom: 10,
    },
    circleContainer: {
        marginBottom: 10,
        alignItems: 'center', // Center circles in the container
    },
    rectangle: {
        borderRadius: 8,
        padding: 10,
    },
    circle: {
        borderRadius: 25,
        padding: 10,
    },
    skeletonText: {
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SkeletonLoading;
