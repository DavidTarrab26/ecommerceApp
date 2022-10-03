import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 150,
        backgroundColor: '#7D8491',
    },
    item: {
        flex: 1,
        justifyContent: "space-around"
    },
    detailContainer: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    price: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    detail: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    }
})