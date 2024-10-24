import * as React from 'react'
import { Component } from "react";
import { SafeAreaView, TouchableOpacity, Text } from "react-native";

export default class Button extends Component {
    constructor(ops) {
        super(ops)
    }
    render() {
        return (
            <SafeAreaView {...this.props} >
                <Text>SafeAreaView</Text>
            </SafeAreaView>
        )
    }
}
