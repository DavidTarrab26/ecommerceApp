import { FlatList, Text, TouchableOpacity, View } from "react-native";
import {styles} from "./style"
import CartItem from "../../components/cart-item"
import { useDispatch, useSelector } from "react-redux";
import { confirmCart, confirmOrder, removeFromCart } from "../../store/actions/cart.action";
import LocationSelector from "../../components/location-selector";
import { useState } from "react";


const Cart = ({navigation}) => {

    const [location, setLocation] = useState("")
    const total = useSelector((state)=> state.cart.total)
    const items = useSelector((state)=> state.cart.items)
    const dispatch = useDispatch()

    const onConfirm = () => {
        dispatch(confirmCart(items, total, location));
    }
    const onDelete = (id) => {
        dispatch(removeFromCart(id))
    }
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
    const onHandlerLocation = (location) =>{
        setLocation(location)
    }
    return ( 
        <View style={styles.container}>
            <View style={styles.containerList}>
                <FlatList 
                        data={items}
                        renderItem={renderItem}
                        style={styles.containerList}
                    />
            </View>
            <View>
                <LocationSelector onLocation={onHandlerLocation} />
            </View>
            <View style={styles.footer}>
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