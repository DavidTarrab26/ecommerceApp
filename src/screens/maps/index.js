import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import IoniIcons from "@expo/vector-icons/Ionicons"
import MapView, {Marker}from "react-native-maps"
import { styles } from "./styles";
import { colors } from "../../constants/themes";

const Maps = ({navigation}) => {
    const [selectedLocation, setSelectedLocation] = useState(null)

    const initialRegion = {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
    }

    const onHandlerPickLoc = (event) => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    const onHandleSaveLoc = () => {
        if(selectedLocation) navigation.navigate("Cart", {MapLocation: selectedLocation})
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onHandleSaveLoc}>
                    <IoniIcons name="md-save-sharp" size={24} color={colors.black}/>
                </TouchableOpacity>
            )
        })
    },[navigation, onHandleSaveLoc])
    return ( 
        <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlerPickLoc}>
            {selectedLocation && (
                <Marker 
                    title="Ubicacion Seleccionada"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng
                    }}
                />
            )}
        </MapView>
     );
}
 
export default Maps;