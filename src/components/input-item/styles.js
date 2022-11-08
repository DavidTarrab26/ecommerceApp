import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        paddingVertical: 2,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Poppins-Regular',
        marginBottom: 10,
    },
    message: {
        marginVertical: 5,
    },
    helperText: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: '#ff0000',
    }
});