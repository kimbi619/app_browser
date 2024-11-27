import { Button, Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as WebBrowser from 'expo-web-browser'
export default function AppBrowser() {

    const openDefaultBrowser = (url) => {
        try {
            Linking.canOpenURL(url)
            .then(supported => {
                if(supported) {
                    Linking.openURL(url)
                } else {
                    console.log("Don't know how to open URI: " + url)
                }
            })
        } catch (error) {
            console.warn('An error occurred', error);
        }
    }

    const openInInApp = async(url) => {
        let result = await WebBrowser.openBrowserAsync(url)
        console.log(result)
    }

  return (
    <View>
        <Button title="Open in Default Browser" onPress={() => openDefaultBrowser("http://google.com")} />
        <Button style={styles.btn} title="Open in App" onPress={() => openInInApp("http://google.com")} />
    </View>
  )
}

const styles = StyleSheet.create({})