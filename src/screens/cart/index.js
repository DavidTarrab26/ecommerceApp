import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./style"
import CartItem from "../../components/cart-item"
import {cart} from "../../constants/data/cart"
import { useSelector } from "react-redux";


const Cart = ({navigation}) => {
    const total = 200
    /* const total = useSelector((state)=> state.cart.total)
    const items = useSelector((state)=> state.cart.items) */

    const onDelete = (id) => {
        console.warn(id)
    }
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
    return ( 
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList 
                        data={cart}
                        renderItem={renderItem}
                        style={styles.containerList}
                        keyExtractor={item => item.id.toString()}
                    />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    onPress={()=> null}
                    style={styles.buttonConfirm}
                >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Cart;