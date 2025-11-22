import { Platform, StyleSheet } from 'react-native';

import { Button } from '@/components/Button';
import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';
import { FlatList, Text, View } from '@components/Themed';
import { StatusBar } from 'expo-status-bar';

export default function CartScreen() {
  const { items, total } = useCart();

  return (
    <View style={styles.container}>
      <FlatList 
        data={items}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        contentContainerStyle={{gap: 10}}
      />

      <Text style={styles.total}>Total: ${total}</Text>
      
      <Button text='Checkout'></Button>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '500',
  }
});
