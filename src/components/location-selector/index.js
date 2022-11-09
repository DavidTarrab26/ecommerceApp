import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { colors } from "../../constants/themes";
import MapPreview from "../map-preview";
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const navigation = useNavigation()
  const route = useRoute()
  const { MapLocation } = route.params || {}

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("you need to grant location permissions to use this app", [{ text: "Okay" }]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onHandlerPick = () => {
    const hasPermission = verifyPermissions()
    if (!hasPermission) return;
    navigation.navigate("Map")
  }

  useEffect(()=>{
    if(MapLocation) {
      setPickedLocation(MapLocation)
      onLocation(MapLocation)
    }
  },[MapLocation])

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>No location select yet.</Text>
      </MapPreview>
      <Button title="Agregar mi ubicacion" color={colors.secondary} onPress={onHandlerLocation} />
      <Button title="Agregar en el mapa" color={colors.secondary} onPress={onHandlerPick} />
    </View>
  );
};

export default LocationSelector;