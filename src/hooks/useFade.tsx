
import React, { useRef } from 'react'
import { View, Text, Animated, Button } from 'react-native';

export const useFade = () => {

    const opacity = useRef(new Animated.Value(0.5)).current

    const fadeIn = () => {

        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }
        ).start()
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start()
    }

    return {
        fadeIn,
        fadeOut,
        opacity
    }
}



