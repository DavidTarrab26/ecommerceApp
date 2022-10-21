import React, {useReducer, useState} from "react";
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import{ signUp} from "../../store/actions"
import { colors } from "../../constants/themes";
import { styles } from "./styles";
import Input from "../../components/input-item";
import { UPDATED_FORM } from "../../utils/form";

const initialState ={
    email: {value: "", error: "", touched: false, hasError: true},
    password: {value: "", error: "", touched: false, hasError: true},
    isFormValid: false
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM:
            const {name, value, error, touched, hasError, isFormValid} = action.data
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                error,
                touched
            },
            isFormValid
        }
        default:
            return state
    }
}

const Auth = ({ navigation }) => {
    const dispatch = useDispatch()
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No estas registrado?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';
    const onHandleSubmit = () => {
        dispatch(signUp(formState.email.value, formState.password.value));
    };
    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }


    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input 
                    style={styles.input}
                    label="Email"
                    value={formState.email.value}
                    placeholder="ingrese su email"
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <Input 
                    style={styles.input}
                    label="Contraseña"
                    value={password}
                    placeholderTextColor={colors.gray}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
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