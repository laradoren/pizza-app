import Colors from "@/constants/Colors";
import { defaultPizzaImage } from "@/constants/Images";
import { Text, View } from "@components/Themed";
import { Image, StyleSheet } from "react-native";
import { OrderItem } from "../types";

type OrderListItemProps = {
  item: OrderItem;
};

export const OrderListItem = ({ item }: OrderListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.products.name}</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.price}>${item.products.price}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "20%",
    aspectRatio: 1,
    marginRight: 10,
  },
  subTitleContainer: {
    flexDirection: "row",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginRight: 10,
  },
  quantitySelector: {},
  quantity: {},
  title: {
    fontWeight: "800",
    marginVertical: 5,
  },
});
