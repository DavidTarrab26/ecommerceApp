import React, { useState, useReducer} from "react";
import { useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { Input } from "../../components";
import { colors } from "../../constants/themes";
import { styles } from "./styles";
import { signIn, signUp } from "../../store/actions/index";
import { onFocusOut, onInputChange, UPDATED_FORM } from "../../utils/form";

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}
const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM: 
        const { name, value, hasError, error, touched, isFormValid} = action.data;
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                error,
                touched,
            },
            isFormValid
        }
        default:
            return state;
    }
}
const Auth = ({ navigation }) => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';

    const onHandleSubmit = () => {
        const { password, email } = formState;
        dispatch(isLogin ? signIn(email.value ,password.value ) : signUp(email.value, password.value));
    };

    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }

    const onHandleBlur = (value, type) => {
        onFocusOut(type, value, dispatchFormState, formState)
    }
    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input 
                    style={styles.input}
                    label="Email"
                    placeholder="ingrese su email"
                    value={formState.email.value}
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'email')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <Input 
                    style={styles.input}
                    label="Contraseña"
                    placeholderTextColor={colors.gray}
                    value={formState.password.value}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onBlur={(e) => onHandleBlur(e.nativeEvent.text, 'password')}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                />
                <Button 
                    title={messageAction}
                    color={colors.primary}
                    onPress={onHandleSubmit}
                    disabled={!formState.isFormValid}
                />
                <View style={styles.prompt}>
                <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.promptMessage}>{message}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Auth;