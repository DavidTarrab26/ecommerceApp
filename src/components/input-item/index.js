import React from "react";
import { View, TextInput, Text} from "react-native";
import Label from "../label-item";
import { styles } from "./styles";

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <Label {...props}>
                <TextInput 
                    {...props}
                    style={styles.input}
                    editable={editable}
                    value={value}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </Label>
            {hasError && touched && (
                <View style={styles.message}>
                    <Text style={styles.helperText}>{error}</Text>
                </View>
            )}
        </View>
    )
}

export default Input;