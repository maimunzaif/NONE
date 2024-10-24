import * as React from 'react'
import { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default class Button extends Component {
    constructor(ops) {
        super(ops)
    }
    render() {
        return (
            <TouchableOpacity {...this.props} >
                <Text>AA</Text>
            </TouchableOpacity>
        )
    }
}
