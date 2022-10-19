import { FlatList, Text, View } from "react-native";
import {styles} from "./styles"
import {orders} from "../../constants/data"
import OrderItem from "../../components/order-item";

const Orders = ({navigation}) => {

    const onCancel = (id) => {
        console.warn(id)
    }

    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel} />
    return ( 
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
     );
}
 
export default Orders;