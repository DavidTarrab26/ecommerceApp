import React, {useState} from "react";
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { useDispatch } from "react-redux";
import{ signUp} from "../../store/actions"
import { colors } from "../../constants/themes";
import { styles } from "./styles";

const Auth = ({ navigation }) => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No estas registrado?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';
    const onHandleSubmit = () => {
        dispatch(signUp(email, password));
    };


    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    value={email}
                    placeholder="ingrese su email"
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    value={password}
                    placeholderTextColor={colors.gray}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)}
                />
                <Button 
                    title={messageAction}
                    color={colors.primary}
                    onPress={onHandleSubmit}
                    disabled={!email || !password}
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