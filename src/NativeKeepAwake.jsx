import { Component, createElement } from "react";
import KeepAwake from "@sayem314/react-native-keep-awake";
import { Text } from "react-native";

export class NativeKeepAwake extends Component {
    render() {
        return (
            <KeepAwake>
                <Text>Keep awake</Text>
            </KeepAwake>
        );
    }
}
