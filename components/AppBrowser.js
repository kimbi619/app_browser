import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'

export default function AppBrowser() {

    const handleOpenInApp = async() => {
        let result = await WebBrowser.openBrowserAsync('https://www.google.com')
        console.log(result)
    }

    const handleOpenInDefaultBrowser = (url) => {
        Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
                console.log("Can't handle url: " + url);
            } else {
                return Linking.openURL(url);
            }
        })
        .catch((err) => {
            console.warn("Error: ", err);
            
        })

    }
  return (
    <View style={{ flex: 1, width: '100%', paddingTop: 50}}>
        <Button title="Open In App Browser" onPress={handleOpenInApp} />
        <Button title="Open In Default Browser" onPress={() => handleOpenInDefaultBrowser('https://example.com')} />
    </View>
  )
}

const styles = StyleSheet.create({})