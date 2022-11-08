import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./style"
import CartItem from "../../components/cart-item"
import { useDispatch, useSelector } from "react-redux";
import { confirmCart, confirmOrder, removeFromCart } from "../../store/actions/cart.action";


const Cart = ({navigation}) => {

    const total = useSelector((state)=> state.cart.total)
    const items = useSelector((state)=> state.cart.items)
    const dispatch = useDispatch()

    const onConfirm = () => {
        dispatch(confirmCart(items, total));
    }
    const onDelete = (id) => {
        dispatch(removeFromCart(id))
    }
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
    return ( 
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList 
                        data={items}
                        renderItem={renderItem}
                        style={styles.containerList}
                    />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    onPress={null}
                    style={items.length === 0 ?  styles.disabledButtonConfirm : styles.buttonConfirm}
                    disabled={items.length === 0}
                >
                    <Text style={styles.textButtonConfirm}>Añadir Direccion</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onConfirm}
                    style={items.length === 0 ?  styles.disabledButtonConfirm : styles.buttonConfirm}
                    disabled={items.length === 0}
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