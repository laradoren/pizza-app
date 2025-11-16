import { Platform, StyleSheet } from 'react-native';

import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';
import { FlatList, View } from '@components/Themed';
import { StatusBar } from 'expo-status-bar';

export default function CartScreen() {
  const { items } = useCart();

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        contentContainerStyle={{padding: 10, gap: 10}}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
