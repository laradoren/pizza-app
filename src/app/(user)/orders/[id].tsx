import { OrderList } from "@/components/OrderList";
import { OrderListItem } from "@/components/OrderListItem";
import Colors from "@/constants/Colors";
import orders from "@assets/data/orders";
import { Text, View } from "@components/Themed";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function OrderDetailsSreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Order #" + order?.id }} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderListItem item={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        ListHeaderComponent={() => <OrderList order={order} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.productItem,
    flex: 1,
    padding: 10,
  },
});
