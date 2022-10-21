import React, {useState} from "react";
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { colors } from "../../constants/themes";
import { styles } from "./styles";

const Auth = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No estas registrado?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';
    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
            <View style={ styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="ingrese su email"
                    placeholderTextColor={colors.gray}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => console.log('text', text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholderTextColor={colors.gray}

                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => console.log('text', text)}
                />
                <Button 
                    title={messageAction}
                    color={colors.primary}
                    onPress={() => console.log('press')}
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