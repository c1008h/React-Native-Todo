import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text, TextInput } from 'react-native'
import { Stack, useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={{flex:1}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'red'},
                    headerShadowVisible: false,
                    // headerLeft: () => (
                    //     // <ScreenHeaderBtn dimension="60%" />
                    // ),
                    // headerRight: () => (
                    //     // <ScreenHeaderBtn dimension="60%" />
                    // ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1}}>
                    <Text>To Do List:</Text>
                    <TextInput keyboardType='default'/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;