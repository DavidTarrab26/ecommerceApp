import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginVertical: 20,
        color: colors.primary
    },
});