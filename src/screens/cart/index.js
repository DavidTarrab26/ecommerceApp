import { FlatList, Text, View } from "react-native";
import {styles} from "./style"
import CartItem from "../../components"
import { cart } from "../../constants/data";


const Cart = ({navigation}) => {
    const onDelete = (id) => {
        console.warn(id)
    }
    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />
    return ( 
        <View style={styles.container}>
            {/* <FlatList
                data={cart}
                renderItem={renderItem}
            /> */}
            <Text>Carrito</Text>
        </View>
     );
}
 
export default Cart;