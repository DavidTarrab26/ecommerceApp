import { FlatList, Text, View } from "react-native";
import {styles} from "./styles"
import OrderItem from "../../components/order-item";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { deleteOrder, getOrders } from "../../store/actions/orders.action";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({navigation}) => {

    const orders = useSelector((state) => state.orders.list)
    const dispatch = useDispatch()
    useFocusEffect(
        useCallback(()=>{
            dispatch(getOrders())
        },[dispatch])
        )
        
    const onCancel = (id) => {
        dispatch(deleteOrder(id))
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