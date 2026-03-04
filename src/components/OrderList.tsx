import { Text, View } from "@components/Themed";
import Colors from "@constants/Colors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useSegments } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { Order } from "../types";

dayjs.extend(relativeTime);

type OrderListItemProps = {
  order: Order;
};

export const OrderList = ({ order }: OrderListItemProps) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.data}>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.productItem,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  data: {
    backgroundColor: Colors.light.productItem,
  },
  title: {
    fontWeight: "800",
    marginVertical: 5,
  },
  time: {
    color: "grey",
  },
  status: {
    fontWeight: 500,
  },
});
