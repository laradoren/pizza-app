import Colors from '@/constants/Colors';
import { defaultPizzaImage } from '@/constants/Images';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/types';
import products from '@assets/data/products';
import { Image, Text, View } from '@components/Themed';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

export default function ProductDetailsSreen() {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>(sizes[1]);

  const { onAddItem } = useCart();
  const router = useRouter();

  const product = products.find(p => p.id.toString() === id);

  if(!product) {
    return <Text>Product not found</Text>
  }

  const addToCart = () => {
    if(!product) return;
    onAddItem(product, selectedSize);
    router.push('/cart');
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product?.name}}/>
      <Image source={{uri: product?.image || defaultPizzaImage}} style={styles.image}/>

      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.price}>${product?.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.productItem,
    flex: 1,
    padding: 10,
  },
  image: {
    backgroundColor: Colors.light.productItem,
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
