import { FlatList, StyleSheet } from "react-native";

import { OrderList } from "@/components/OrderList";
import orders from "@assets/data/orders";
import { View } from "@components/Themed";
import { Stack } from "expo-router";

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Active" }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderList order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
